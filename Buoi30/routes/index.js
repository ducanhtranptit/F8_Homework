var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title:
      "Khổ thế bấm vào đây làm gì, đã đăng nhập được rồi thì sao lại quên mật khẩu =))))",
  });
});

router.post("/", AuthController.logout);

module.exports = router;
