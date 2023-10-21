const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const Permission = model.Permission;
const getRoleNames = require("../utils/role");

module.exports = {
	getUserPermission: async (req, res) => {
		if (req.user) {
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

			let permissions = await Promise.all(
				roles.map(async ({ id }) => {
					const role = await Role.findOne({
						where: { id },
						include: {
							model: Permission,
						},
					});
					return role.Permissions;
				})
			);

			permissions = permissions.map((items) => {
				return items.map(({ value }) => value);
			});

			permissions = [...new Set(permissions.flat(Infinity))];
			req.user.permissions = permissions;
			const permissionList = req.user.permissions;
			const roleNames = await getRoleNames(req, res);
			console.log(roleNames);
			res.render("index", {
				title: "Express",
				permissionList,
				roleNames,
			});
		}
	},
};
