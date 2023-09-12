const Customer = require("../models/Customer");
const flash = require("connect-flash");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.session;
    const customer = await Customer;
    const customerList = await customer.findAll();
    const emails = [];
    const passwords = [];

    customerList.forEach((customer) => {
      const { email: customerEmail, password: customerPassword } = customer.dataValues;
      emails.push(customerEmail);
      passwords.push(customerPassword);
    });

    if (email && password) {
      const index = emails.findIndex((e) => e === email);
      if (index !== -1 && passwords[index] === password) {
        if (email === "admin@gmail.com") {
          res.redirect("/admin");
        } else {
          res.redirect("/");
        }
      } else if (index === -1 && passwords[index] === password) {
        delete req.session.email;
        delete req.session.password;
        req.flash("error", "Bạn đã nhập sai email");
        res.render("auth/index", { error: req.flash("error") });
      } else if (index !== -1 && passwords[index] !== password) {
        delete req.session.email;
        delete req.session.password;
        req.flash("error", "Bạn đã nhập sai mật khẩu");
        res.render("auth/index", { error: req.flash("error") });
      } else {
        req.flash("error", "Bạn đã nhập sai cả email và mật khẩu");
        res.render("auth/index", { error: req.flash("error") });
      }
    } else {
      res.render("auth/index", { error: null });
    }
  },

  handleLogin: (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      req.flash("error", "Vui lòng nhập email và mật khẩu");
      return res.render("auth/index", { error: req.flash("error") });
    } else {
      req.session.email = email;
      req.session.password = password;
      return res.redirect("/login");
    }
  },
};
