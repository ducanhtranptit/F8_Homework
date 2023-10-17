const express = require("express");
const router = express.Router();
const passport = require("passport");

const LoginController = require("../controllers/AuthController");

const isLogin = (req, res, next) => {
	if (req.user) {
		res.redirect("/");
	}

	next();
};

/* GET users listing. */
router.get("/register", isLogin, LoginController.register);
router.post("/register", LoginController.handleRegister);
router.get("/login", isLogin, LoginController.login);
router.post(
	"/login",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/auth/login",
	})
);

router.get("/logout", LoginController.logout);

module.exports = router;
