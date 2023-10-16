module.exports = {
	login: (req, res) => {
		res.render("auth/login", { layout: false });
	},

	handleLogin: (req, res) => {
		res.redirect("/");
	},

	logout: (req, res, next) => {
		req.logout(function (err) {
			if (err) {
				next(err);
			} else {
				res.redirect("/login");
			}
		});
	},
};
