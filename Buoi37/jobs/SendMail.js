const { USER_MAIL, MAIL_PASS } = process.env;
const nodemailer = require("nodemailer");
class SendMail {
	constructor(job) {
		this.job = job;
	}

	handle = async () => {
		//Logic gửi email
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: USER_MAIL,
				pass: MAIL_PASS,
			},
		});
		const info = await transporter.sendMail({
			from: `Hoàng An F8 <hoangan@fullstack.edu.vn>`, // sender address
			to: this.job.email, // list of receivers
			subject: `Xin chào: ${this.job.name}`, // Subject line
			html: `Xin chào bạn ${this.job.name}, tôi đang test email`,
		});
	};
}

module.exports = SendMail;
