const model = require("../models/index");
const User = model.User;
const Link = model.Link;
const shorturl = require("shorturl");

module.exports = {
	index: (req, res, next) => {
		res.render("index");
	},
	handleShortLink: async (req, res) => {
		const { fullUrl } = req.body;
		shorturl(fullUrl, (result) => {
			console.log(result);
		});
		res.redirect("/");
	},
};
