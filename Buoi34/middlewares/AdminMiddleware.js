const model = require("../models/index");
const User = model.User;
const Role = model.Role;

module.exports = async (req, res, next) => {
	const { id } = req.user;
	const user = await User.findOne({
		where: {
			id,
		},

		include: {
			model: Role,
		},
	});

	const roles = user.Roles;
	const roleNames = roles.map((role) => role.dataValues.name);
	if (roleNames.includes("super admin")) {
		next();
	} else {
		res.redirect("/");
	}
};
