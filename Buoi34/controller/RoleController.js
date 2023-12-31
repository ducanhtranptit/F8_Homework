const model = require("../models/index");
const Role = model.Role;
const Permission = model.Permission;
const User = model.User;
const getRoleNames = require("../utils/role");

module.exports = {
    index: async (req, res) => {
        const roles = await Role.findAll();
        const roleNames = await getRoleNames(req, res);
        const permissionList = req.user.permissions;
        res.render("roles/index", { roles, roleNames, permissionList });
    },

    add: async (req, res) => {
        const roleNames = await getRoleNames(req, res);
        const permissionList = req.user.permissions;
        res.render("roles/addRole", { roleNames, permissionList });
    },

    handleAdd: async (req, res) => {
        const { name, permissions } = req.body;
        if (name && permissions) {
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
            const permissionData = data.find(
                ({ value }) => value === permission
            );
            if (permissionData) {
                return permissionData.value;
            }
        };

        const roleNames = await getRoleNames(req, res);
        const permissionList = req.user.permissions;

        res.render("roles/editRole", {
            role,
            roles,
            permissions,
            permissionUtil,
            roleNames,
            permissionList,
        });
    },

    handleEdit: async (req, res) => {
        const { id } = req.params;
        const { permission, name } = req.body;

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

            dataPermission.forEach(async (item) => {
                const permissonIntance = await Permission.findOne({
                    where: item,
                });
                if (!permissonIntance) {
                    await role.createPermission(item);
                }
            });

            const permissonsUpdate = await Promise.all(
                dataPermission.map((item) =>
                    Permission.findOne({ where: item })
                )
            );

            role.setPermissions(permissonsUpdate);
        }

        res.redirect("/role");
    },

    delete: async (req, res) => {
        //lay role can xoa
        const { id } = req.params;
        const role = await Role.findOne({
            where: {
                id,
            },
        });

        //xoa tat ca cac permission lien quan den role can xoa
        await role.removePermissions(await Permission.findAll());
        await role.removeUsers(await User.findAll());

        //xoa Role
        await Role.destroy({
            where: {
                id,
            },
        });

        res.redirect("/role");
    },
};
