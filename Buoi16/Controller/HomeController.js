const fs = require("fs");

const dataFilePath = "./data/Account.json";
const rawData = fs.readFileSync(dataFilePath);
const users = JSON.parse(rawData);

module.exports = {
  index: (req, res) => {
    const { email, password } = req.session;

    const user = users.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (user) {
      res.render("Home/index");
    } else {
      res.redirect("/login");
    }
  },

  logout: (req, res) => {
    delete req.session.email;
    delete req.session.password;
    res.redirect("/home");
  },
};
