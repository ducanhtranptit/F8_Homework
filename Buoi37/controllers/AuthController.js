const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");

const model = require("../models/index");
const User = model.User;
const BlackList = model.BlackList;

const saltRound = 10;

const ValidateMiddleware = require("../middlewares/ValidateMiddleware");

class AuthController {
	async register(req, res) {
		const { name, email, password } = req.body;
		const userValidate = ValidateMiddleware.UserValidate(name, email, password);
		if (
			!userValidate.nameValidate ||
			!userValidate.emailValidate ||
			!userValidate.passwordValidate
		) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			const user = await User.findOne({
				where: {
					email: email,
				},
			});

			if (user) {
				return res.status(409).json({
					status: "Error",
					message: "Email is avaliable",
				});
			} else {
				const hashPassword = bcrypt.hashSync(password, saltRound);

				const newUser = await User.create({
					name: name,
					email: email,
					password: hashPassword,
				});

				return res.status(200).json({
					status: "success",
					data: newUser,
				});
			}
		}
	}

	async login(req, res) {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		} else {
			const user = await User.findOne({
				where: { email },
			});

			if (!user) {
				return res.status(401).json({
					status: "Error",
					message: "Authentication Failed",
				});
			} else {
				// nếu tìm thấy user thì lấy password của user đó để verify
				const hashPassword = user.password;
				const checkPassword = bcrypt.compareSync(password, hashPassword);

				//nếu như xác thực đúng password thì tiến hành tạo ra accesstoken và refreshtoken
				if (checkPassword) {
					const accessToken = jwt.createAccessToken({ userId: user.id });
					const refreshToken = jwt.createRefreshToken();

					//update refresh token vào bảng user
					try {
						await User.update(
							{ refreshToken: refreshToken },
							{ where: { id: user.id } }
						);
					} catch (error) {
						return res.status(500).json({
							status: "Error",
							error,
						});
					}

					//thành công thì trả về refresh token và access token
					return res.status(200).json({
						status: "Success",
						accessToken,
						refreshToken,
					});
				} else {
					return res.status(401).json({
						status: "Error",
						message: "Authentication Failed",
					});
				}
			}
		}
	}

	async logout(req, res) {
		const { token } = req.body;

		const tokenValidate = ValidateMiddleware.TokenValidate(token);

		if (!tokenValidate) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid token",
			});
		} else {
			try {
				const data = jwt.decode(token);
				const { userId } = data;
				const user = await User.findByPk(userId);
				if (user) {
					try {
						await User.update({ refreshToken: null }, { where: { id: userId } });
						await BlackList.create({
							token: token,
						});

						res.status(200).json({
							status: "Success",
							message: "Logout successfully",
						});
					} catch (error) {
						return res.status(500).json({
							status: "Error",
							message: "Server Internal",
						});
					}
				}
			} catch (error) {
				return res.status(400).json({
					status: "Error",
					message: "Invalid Token",
				});
			}
		}
	}

	async getRefreshToken(req, res) {
		const { refreshToken } = req.body;
		if (!refreshToken) {
			return res.status(400).json({
				status: "Error",
				message: "Missing refresh token",
			});
		} else {
			try {
				jwt.decode(refreshToken);
				const user = await User.findOne({
					where: { refreshToken: refreshToken },
				});
				if (!user) {
					return res.status(401).json({
						status: "Error",
						message: "Authentication Failed",
					});
				} else {
					const accessToken = jwt.createAccessToken({ userId: user.id });
					const refreshToken = jwt.createRefreshToken();

					//update refresh token vào bảng user
					try {
						await User.update(
							{ refreshToken: refreshToken },
							{ where: { id: user.id } }
						);
					} catch (error) {
						return res.status(500).json({
							status: "Error",
							error,
						});
					}

					//thành công thì trả về refresh token và access token
					return res.status(200).json({
						status: "Success",
						accessToken,
						refreshToken,
					});
				}
			} catch (error) {
				return res.status(401).json({
					status: "Error",
					error: "Authorization Failed",
				});
			}
		}
	}
}

module.exports = new AuthController();
