const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");

module.exports = new LocalStrategy(
  {
    usernameField: "name",
    passwordField: "password",
  },
  async function (name, password, done) {
    const user = await model.User.findOne({
          where: {
        name,
      },
    })

    if (!user) {
      done(null, false, { message: "Tên không tồn tại" });
      return;
    }

    if (password === "1") {
      done(null, user);
      return;
    } else {
      done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    }
  }
);
