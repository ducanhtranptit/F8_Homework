const express = require("express");
const router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/AuthController");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
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
