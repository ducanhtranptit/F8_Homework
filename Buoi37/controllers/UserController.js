const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");
class UserController {
	async handleSendMail(req, res) {
		const { email, name } = req.body;
		new Event(
			new SendMail({
				name,
				email,
			})
		);

		res.status(200).json({
			status: "success",
			message: "Email send",
		});
	}
}
module.exports = new UserController();
