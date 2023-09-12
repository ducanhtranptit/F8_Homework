const Customer = require("../models/Customer");

module.exports = {
  adminHome: (req, res) => {
    const { email, password } = req.session;
    if (email && password) {
      res.render("admin/AdminHome");
    } else {
      res.redirect("/login");
    }
  },

  getCustomerList: (req, res) => {
    const { email, password } = req.session;
    if (email && password) {
      res.redirect("/admin/customer");
    } else {
      res.redirect("/login");
    }
  },

  showCustomerList: async function (req, res) {
    const { email, password } = req.session;
    if (email && password) {
      const customer = await Customer;
      const customerList = await customer.findAll({
        attributes: ["id", "name", "email"],
      });
      res.render("admin/CustomerList", { customerList });
    } else {
      res.redirect("/login");
    }
  },

  logout: (req, res) => {
    delete req.session.email;
    delete req.session.password;
    res.redirect("/login");
  },
};
