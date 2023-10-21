const model = require("../models/index");
const User = model.User;
const hash = require("../utils/hash");

module.exports = {
	login: (req, res) => {
		res.render("auth/login", { layout: false });
	},

	register: async (req, res) => {
		res.render("auth/register", { layout: false });
	},

	handleRegister: async (req, res) => {
		const { name, email, password } = req.body;
		if (!name || !email || !password) {
			res.redirect("/auth/register");
		} else {
			const user = await User.findOne({
				where: {
					email,
				},
			});

			if (user) {
				res.redirect("/auth/login");
			} else {
				const hashPassword = hash.make(password);
				const newUser = await User.create({
					name: name,
					email: email,
					password: hashPassword,
				});
				res.redirect("/auth/login");
			}
		}
	},

	handleLogin: (req, res) => {
		res.redirect("/");
	},

	logout: (req, res, next) => {
		req.logout(function (err) {
			if (err) {
				next(err);
			} else {
				res.redirect("/auth/login");
			}
		});
	},
};
