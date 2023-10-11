const model = require("../models/index");
const User = model.User;

class AuthController {
  async login(req, res) {
    res.render("auth/login");
  }

  async handleLogin(req, res) {
    const { name, password } = req.body;

    const user = await User.findOne({
      where: {
        name,
      },
    });

    console.log(user);
    res.redirect("/login");
  }

  async logout(req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/login");
    });
  }
}

module.exports = new AuthController();
