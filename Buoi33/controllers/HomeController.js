const model = require("../models/index");
const User = model.User;
const Link = model.Link;
const shortUrl = require("node-url-shortener");

module.exports = {
	index: async (req, res) => {
		const links = await Link.findAll({
			where: {
				user_id: req.user.id,
			},
		});
		res.render("index", { links });
	},
	handleShortLink: async (req, res) => {
		const { fullUrl } = req.body;
		const user_id = req.user.id;
		shortUrl.short(fullUrl, async (err, url) => {
			const shortLink = await Link.findOne({
				where: {
					url: fullUrl,
				},
			});

			if (!shortLink) {
				const userLinkData = await Link.create({
					user_id: user_id,
					url: fullUrl,
					shorturl: url,
				});
				console.log(userLinkData);
				res.redirect("/");
			} else {
				res.redirect("/");
			}
		});
	},
};
