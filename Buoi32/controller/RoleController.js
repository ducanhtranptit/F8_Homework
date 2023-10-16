const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;

module.exports = {
	index: async (req, res) => {
		const roles = await Role.findAll();
		res.render("roles/index", { roles });
	},

	add: async (req, res) => {
		res.render("roles/addRole");
	},

	handleAdd: async (req, res) => {
		const { name, permissions } = req.body;
		if (name && permissions) {
			console.log(name, permissions);
			const role = await Role.create({
				name,
			});

			let dataPermission = [];

			if (typeof permissions === "string") {
				dataPermission.push({
					value: permissions,
				});
			} else {
				dataPermission = permissions.map((item) => ({
					value: item,
				}));
			}

			dataPermission.forEach(async (item) => {
				const permissionIntance = await Permission.findOne({
					where: item,
				});

				if (!permissionIntance) {
					await role.createPermission(item);
				} else {
					await role.addPermission(permissionIntance);
				}
			});

			res.redirect("/role");
		} else {
			res.redirect("/role/add");
		}
	},

	edit: async (req, res) => {
		const { id } = req.params;
		const role = await Role.findOne({
			where: {
				id,
			},
			include: {
				model: Permission,
			},
		});

		const roles = await Role.findAll();
		const { Permissions: permissions } = role;
		const permissionUtil = (data, permission) => {
			const permissionData = data.find(({ value }) => value === permission);
			if (permissionData) {
				return permissionData.value;
			}
		};

		res.render("roles/editRole", { role, roles, permissions, permissionUtil });
	},

	handleEdit: async (req, res) => {
		const { id } = req.params;
		const { permission, name } = req.body;
		console.log(id, permission, name);

		await Role.update(
			{
				name,
			},
			{
				where: {
					id,
				},
			}
		);

		const role = await Role.findOne({
			where: {
				id,
			},
		});

		if (permission) {
			let dataPermission = [];
			if (typeof permission === "string") {
				dataPermission.push({
					value: permission,
				});
			} else {
				dataPermission = permission.map((item) => ({ value: item }));
			}
			console.log(dataPermission);

			dataPermission.forEach(async (item) => {
				const permissonIntance = await Permission.findOne({
					where: item,
				});
				if (!permissonIntance) {
					await role.createPermission(item);
				}
			});

			const permissonsUpdate = await Promise.all(
				dataPermission.map((item) => Permission.findOne({ where: item }))
			);

			role.setPermissions(permissonsUpdate);
		}

		res.redirect("/role");
	},
};
