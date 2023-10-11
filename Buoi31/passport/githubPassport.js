const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
const GithubStrategy = require("passport-github");

module.exports = new GithubStrategy(
  {
    clientID: "205e5341a962ad3fa184",
    clientSecret: "49ed2e663a9ef22bfb79e4fbd93ab8f9a425db8f",
    callbackURL: "http://localhost:3000/login/github/callback",
    scope: ["email", "username", "_raw"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { displayName, username, _raw } = profile;
    const provider = "github";
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;

    let user = await User.findOne({
      where: {
        provider_id: providerId,
      },
    });
    if (!user) {
      user = await User.create({
        name: username,
        provider_id: providerId,
      });
    }
    return cb(null, user);
  }
);