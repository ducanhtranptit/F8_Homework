const express = require("express");
const router = express.Router();
const passport = require("passport");

const LoginController = require("../controller/LoginController");

const isLogin = (req, res, next) => {
	if (req.user) {
		res.redirect("/");
	}

	next();
};

/* GET users listing. */
router.get("/", isLogin, LoginController.login);
router.post(
	"/",
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
	})
);

router.get("/logout", LoginController.logout);

module.exports = router;
