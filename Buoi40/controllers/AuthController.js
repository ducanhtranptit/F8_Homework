const md5 = require("md5");

const model = require("../models/index");
const { log } = require("console");
const User = model.User;
const Login_token = model.Login_token;

class AuthController {
	async login(req, res) {
		res.render("auth/login");
	}

	async handleLogin(req, res) {
		const { name, password } = req.body;

		const user = await User.findOne({
			where: {
				name,
			},
		});

		const token = md5(md5(Date.now()));

		const login_token = await Login_token.findOne({
			where: {
				token,
			},
		});

		if (login_token) {
			login_token.update({ token: token });
		}

		res.cookie("token", token, {
			expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Thời gian hết hạn sau 30 ngày
			httpOnly: true, // Chỉ cho phép truy cập qua HTTP
			secure: true, // Yêu cầu kết nối an toàn qua HTTPS
			sameSite: "strict", // Giới hạn cookie chỉ được gửi trong cùng một trang web
		});

		res.redirect("/login");
	}

	async logout(req, res, next) {
		req.logout(function (err) {
			if (err) {
				return next(err);
			}
			res.redirect("/login");
		});
	}
}

module.exports = new AuthController();
