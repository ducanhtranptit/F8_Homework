const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
const hash = require("../utils/hash");
const bcrypt = require("bcrypt");

module.exports = new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password",
	},

	async function (email, password, done) {
		const user = await model.User.findOne({
			where: {
				email,
			},
		});

		if (!user) {
			done(null, false, { message: "email hoặc mật khẩu không chính xác" });
			return;
		} else {
			bcrypt.compare(password, user?.password, function (err, result) {
				if (result) {
					done(null, user);
					return;
				} else {
					done(null, false, { message: "email hoặc mật khẩu không chính xác" });
					return;
				}
			});
		}
	}
);
