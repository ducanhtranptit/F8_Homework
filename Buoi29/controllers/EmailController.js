const nodemailer = require("nodemailer");
const moment = require("moment");
const model = require("../models/index");

class EmailController {
  async home(req, res) {
    res.render("email/home", { pageTitle: "Home page" });
  }

  async sendEmail(req, res) {
    const msg = req.flash("msg");
    res.render("email/sendMail", { pageTitle: "Sent email", msg });
  }

  async handleSendEmail(req, res) {
    const { email, title, content } = req.body;

    const userEmail = await model.Mail;

    userEmail.create(req.body);
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM}>`,
      to: email,
      subject: title,
      html: content,
    });

    console.log(info);

    req.flash("msg", "Đã gửi thành công email");
    res.redirect("./send-email");
  }

  async getEmailList(req, res) {
    const userEmail = await model.Mail;
    const userEmailList = await userEmail.findAll();
    res.render("email/emailList", {
      pageTitle: "Email list",
      userEmailList,
      userEmail,
      moment,
    });
  }

  async getContent(req, res) {
    const { id } = req.params;
    const userEmail = await model.Mail;
    const emailDetail = await userEmail.findByPk(id);
    const emailAddress = emailDetail.dataValues.email;
    const emailTitle = emailDetail.dataValues.title;
    const emailContent = emailDetail.dataValues.content;
    res.render("email/content", {
      pageTitle: "Email content",
      emailAddress,
      emailTitle,
      emailContent,
    });
  }
}

module.exports = new EmailController();
