var express = require("express");
var router = express.Router();

const login = require("../Controller/LoginController");
const home = require("../Controller/HomeController");
/* GET home page. */
router.get("/", (req, res) => {
  res.redirect("/home");
});
router.get("/login", login.index);
router.post("/login", login.handleLogin);
router.get("/home", home.index);
router.post("/home", home.logout);
module.exports = router;
