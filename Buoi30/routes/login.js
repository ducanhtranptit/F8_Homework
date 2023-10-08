var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");

router.get("/", AuthController.login);
router.post("/", AuthController.handleLogin);
router.get("/forgot-password", AuthController.forgotPassword);
router.post("/forgot-password", AuthController.handleSendMail);
router.get("/create-newpassword/:token", AuthController.getNewPassword);
router.post("/create-newpassword/:token", AuthController.handleGetNewPassword);

module.exports = router;
