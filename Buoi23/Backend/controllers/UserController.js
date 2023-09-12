module.exports = {
  home: (req, res) => {
    const { email, password } = req.session;
    if (email && password) {
      res.render("user/home");
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
