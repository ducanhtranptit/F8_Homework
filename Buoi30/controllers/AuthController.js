const model = require("../models/index");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = "token_lu_vailin";
const User = model.User;

class AuthController {
  async login(req, res) {
    const msg = req.flash("msg");
    const forgetPassword = req.flash("forgetPassword");
    const updatePassword = req.flash("updatePassword");
    res.render("login/login", { msg, forgetPassword, updatePassword });
  }

  async handleLogin(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const hash = user.password;
      console.log(hash);
      bcrypt.compare(password, hash, function (err, result) {
        if (result) {
          req.session.userLogin = user.dataValues;
          res.redirect("/login");
        } else {
          req.flash("msg", "Email hoặc mật khẩu không chính xác");
          req.flash("forgetPassword", "Quên mật khẩu");
          res.redirect("/login");
        }
      });
    } else {
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
      req.flash("forgetPassword", "Quên mật khẩu");
      res.redirect("/login");
    }
  }

  async forgotPassword(req, res) {
    const msg = req.flash("msg");
    const warning = req.flash("warning");
    res.render("login/forgotPassword", { msg, warning });
  }

  async handleSendMail(req, res) {
    const { email } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      const token = jwt.sign({ email: email }, secretKey, {
        expiresIn: 15 * 60,
      });

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
        subject: "Forgot password",
        html: `Link lấy lại mật khẩu: http://localhost:3000/login/create-newpassword/${token}`,
      });

      req.flash("msg", "Đã gửi thành công email");
      res.redirect("/login/forgot-password");
    } else {
      req.flash("warning", "Email không chính xác");
      res.redirect("/login/forgot-password");
    }
  }

  async getNewPassword(req, res) {
    const token = req.params.token;
    jwt.verify(token, secretKey, async (err, decoded) => {
      if (err) {
        return res.send("Liên kết hết hạn hoặc không hợp lệ!");
      } else {
        const msg = req.flash("msg");
        res.render("login/updatePassword", { msg });
      }
    });
    const msg = req.flash("msg");
    res.render("login/updatePassword", { msg });
  }

  async handleGetNewPassword(req, res) {
    const { email, newPassword } = req.body;

    if (email && newPassword) {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        await User.update(
          { password: newPassword },
          {
            where: {
              email: email,
            },
          }
        );

        req.flash(
          "updatePassword",
          "Cập nhật mật khẩu thành công, vui lòng tiến hành đăng nhập"
        );
        res.redirect("/login");
      } else {
        req.flash("msg", "Email không chính xác");
        res.redirect("/login/create-newpassword");
      }
    } else {
      req.flash("msg", "Nhập đầy đủ thông tin");
      res.redirect("/login/create-newpassword");
    }
  }

  async logout(req, res) {
    req.session.destroy();
    res.redirect("/login");
  }
}

module.exports = new AuthController();
