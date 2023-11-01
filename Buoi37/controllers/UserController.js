const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");
class UserController {
	verif(req, res) {
		res.render("users/verify");
	}

	async handleVerify(req, res) {
		const { email, name } = req.body;
		new Event(
			new SendMail({
				name,
				email,
			})
		);

		res.send("Hello");
	}
}
module.exports = new UserController();
