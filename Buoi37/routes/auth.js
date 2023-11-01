var express = require("express");
var router = express.Router();

const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/get-token", AuthController.getRefreshToken);
router.post("/logout", AuthController.logout);
router.post("/home", AuthMiddleware.verifyToken, (req, res) => {
	res.json({
		status: "hello world",
	});
});

module.exports = router;
