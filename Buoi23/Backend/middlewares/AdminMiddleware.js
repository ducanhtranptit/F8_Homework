module.exports = (req, res, next) => {
  //Logic lọc request
  let isAdmin = false;
  if (email === "admin@gmail.com") {
    isAdmin = true;
  }

  isAdmin = false;
  if (!isAdmin) {
    return res.redirect("/admin");
  }

  next();
};
