const User = require("../models/Customer");
const md5 = require("md5");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    res.render("auth/login", { msg });
  },

  handeLogin: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email, password: md5(password) },
    });

    if (user?.dataValues && user.status === 1) {
      req.session.userLogin = user.dataValues;
    } else if (user?.dataValues && user.status === 0) {
      req.flash("msg", "tài khoản chưa được kích hoạt");
    } else {
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
    }

    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },
};
