const model = require("../models/index");
const User = model.User;
const Banned = model.Banned;

class CheckBannedUserMiddleware {
    async checkBannedUser(req, res, next) {
        const { id } = req.params;

        const user = await User.findOne({
            where: { id },
        });

        const bannedUsers = await Banned.findAll();

        const bannedUser = bannedUsers.find((banned) => banned.email === user.email);

        if (bannedUser) {
            return res.status(403).json({ message: "Bạn không có quyền truy cập API." });
        }

        console.log(bannedUsers);

        next();
    }
}

module.exports = new CheckBannedUserMiddleware();
