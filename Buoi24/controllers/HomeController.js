const User = require("../models/Customer");

module.exports = {
  index: (req, res) => {
    const { userLogin } = req.session;

    res.render("index", { userLogin });
  },
};
