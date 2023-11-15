const express = require("express");
const router = express.Router();
const passport = require("passport");

const model = require("../models/index");
const Login_token = model.Login_token;

const AuthController = require("../controllers/AuthController");

const isLogin = (req, res, next) => {
	if (req.user) {
		return res.redirect("/");
	}

	next();
};

const checkToken = async (req, res, next) => {
	const token = req.cookies.token;
	const check = await Login_token.findOne({
		where: {
			token: token,
		},
	});

	if (!check) {
		return res.redirect("/auth/login");
	}

	next();
};

router.get("/", isLogin, AuthController.login);
router.post(
	"/",
	passport.authenticate("local", {
		failureRedirect: "/login",
		failureFlash: true,
	}),
	AuthController.handleLogin
);

router.get("/github/redirect", passport.authenticate("github"));
router.get(
	"/github/callback",
	passport.authenticate("github", {
		failureRedirect: "/login",
		failureMessage: true,
		successRedirect: "/",
	})
);

router.get("/logout", AuthController.logout);

module.exports = router;
