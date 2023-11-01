var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/get-token", AuthController.getRefreshToken);
router.post("/logout", AuthController.logout);

module.exports = router;
