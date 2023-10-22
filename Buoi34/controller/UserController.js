const model = require("../models/index");
const User = model.User;
const Role = model.Role;
const { isRole } = require("../utils/permission");
const getRoleNames = require("../utils/role");
const hash = require("../utils/hash");

module.exports = {
    index: async (req, res) => {
        const permissionList = req.user.permissions;
        const users = await User.findAll();
        const roleNames = await getRoleNames(req, res);
        res.render("users/index", { users, permissionList, roleNames });
    },

    permission: async (req, res) => {
        const { id } = req.params;
        const roles = await Role.findAll();
        const user = await User.findOne({
            where: {
                id,
            },

            include: {
                model: Role,
            },
        });
        const roleNames = await getRoleNames(req, res);
        const permissionList = req.user.permissions;
        res.render("users/permission", {
            roles,
            user,
            isRole,
            roleNames,
            permissionList,
        }); //enhanced literal object
    },

    handlePermission: async (req, res) => {
        let { roles } = req.body;
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id,
            },
        });
        if (!user) {
            res.redirect("/users");
            return;
        }

        if (roles) {
            roles = typeof roles === "string" ? [roles] : roles;

            const roleUpdate = await Promise.all(
                roles.map((roleId) =>
                    Role.findOne({
                        where: {
                            id: roleId,
                        },
                    })
                )
            );
            await user.setRoles(roleUpdate);
        }
        res.redirect("/users");
    },

    add: async (req, res) => {
        const roleNames = await getRoleNames(req, res);
        res.render("users/add", { roleNames });
    },

    handleAdd: async (req, res) => {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.redirect("/user/add");
        } else {
            const user = await User.findOne({
                where: {
                    email,
                },
            });

            if (user) {
                res.redirect("/user/add");
            } else {
                const hashPassword = hash.make(password);
                const newUser = await User.create({
                    name: name,
                    email: email,
                    password: hashPassword,
                });
                res.redirect("/users");
            }
        }
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id,
            },
        });
        const userName = user.dataValues.name;
        const userEmail = user.dataValues.email;
        const roleNames = await getRoleNames(req, res);
        res.render("users/edit", { roleNames, userName, userEmail });
    },

    handleEdit: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            if ((name, email, password)) {
                const hashPassword = hash.make(password);
                await User.update(
                    { name: name, email: email, password: hashPassword },
                    { where: { id } }
                );
            }
            res.redirect("/users");
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await User.findOne({
                where: { id },
            });

            await user.removeRoles(await Role.findAll());

            await User.destroy({
                where: {
                    id,
                },
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }

        res.redirect("/users");
    },
};
