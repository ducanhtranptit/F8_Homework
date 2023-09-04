const fs = require("fs");

module.exports = {
  index: (req, res) => {
    const { email, password } = req.session;

    const dataFilePath = "./data/Account.json";
    const rawData = fs.readFileSync(dataFilePath);
    const users = JSON.parse(rawData);

    const user = users.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      return res.redirect("/home");
    } else {
      return res.render("Login/index");
    }
  },

  handleLogin: (req, res) => {
    const { email, password } = req.body;

    if (email === "" || password === "") {
      return res.render("Login/index");
    } else {
      req.session.email = email;
      req.session.password = password;
      return res.redirect("/login");
    }
  },
};
