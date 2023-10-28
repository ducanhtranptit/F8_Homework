const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserValidate = require("../../middlewares/UserValidateMiddleware");
const model = require("../../models/index");
const User = model.User;

const saltRounds = 10;
const jwtSecretKey = "asdfasdf@!$2sdG";
const jwtAvaliableTime = 1000;

class AuthController {
	async register(req, res) {
		const { name, email, password } = req.body;
		const checkValidate = UserValidate.UserValidate(name, email, password);
		if (
			!checkValidate.nameValidator ||
			!checkValidate.emailValidator ||
			!checkValidate.passwordValidator
		) {
			return res.status(400).json({
				status: "Error",
				message: "Missing or invalid information",
			});
		}
		try {
			const user = await User.findOne({
				where: {
					email,
				},
			});

			if (user) {
				return res.status(409).json({
					status: "Error",
					message: "Email is available",
				});
			}

			const hashPassword = bcrypt.hashSync(password, saltRounds);

			const newUser = await User.create({
				name: name,
				email: email,
				password: hashPassword,
			});

			res.status(201).json({
				stautus: "Success",
				data: newUser,
			});
		} catch (error) {
			return res.status(500).json({
				status: "Error",
				error,
			});
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
				where: {
					email,
				},
			});
			if (!user) {
				return res.status(401).json({
					status: "Error",
					message: "Authentication Failed",
				});
			} else {
				const token = jwt.sign(
					{
						data: {
							userId: user.id,
						},
					},
					jwtSecretKey,
					{ expiresIn: jwtAvaliableTime * 60 }
				);
				res.json({
					status: "success",
					accessToken: token,
				});
			}
		}
	}
}

module.exports = new AuthController();
