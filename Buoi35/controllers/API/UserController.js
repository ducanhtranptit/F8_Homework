const model = require("../../models/index");
const Banned = model.Banned;
const User = model.User;

class UserController {
	async index(req, res) {
		const { rows: users, count } = await User.findAndCountAll();
		const response = {
			status: "success",
			data: users,
			count,
		};
		res.json(response);
	}

	async create(req, res) {
		const { name, email } = req.body;
		const newUser = await User.create({
			name: name,
			email: email,
		});

		res.json({
			status: "success",
			data: newUser,
		});
	}

	async edit(req, res) {
		const { id } = req.params;
		const { name = null, email = null } = req.body;

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({ message: "User không tồn tại." });
		}

		await User.update(
			{ name: name, email: email },
			{
				where: { id },
			}
		);
		const userEdited = await User.findOne({
			where: { id },
		});
		res.json({
			status: "success",
			data: userEdited,
		});
	}

	async update(req, res) {
		const { id } = req.params;
		const { name, email } = req.body;

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({ message: "User không tồn tại." });
		}

		if (name) {
			await User.update(
				{ name },
				{
					where: { id },
				}
			);
		}

		if (email) {
			await User.update(
				{ email },
				{
					where: { id },
				}
			);
		}

		const userUpdated = await User.findOne({
			where: { id },
		});

		res.json({
			status: "success",
			data: userUpdated,
		});
	}

	async delete(req, res) {
		const { id } = req.params;

		const user = await User.findOne({
			where: { id },
		});

		if (!user) {
			return res.status(404).json({ message: "User không tồn tại." });
		}

		await User.destroy({
			where: { id },
		});
		res.json({
			status: "success",
		});
	}

	async revoke(req, res) {
		const { id } = req.params;

		const bannedUsers = await Banned.findAll();

		const user = await User.findOne({
			where: { id },
		});
		if (!user) {
			return res.status(404).json({ message: "User không tồn tại." });
		}

		const bannedUser = bannedUsers.filter(
			(banned) => banned.email === user.email
		);

		if (bannedUser.length === 0) {
			await Banned.create({
				name: user.name,
				email: user.email,
			});
		}

		res.json({ message: "Đã thu hồi quyền truy cập API của User." });
	}
}

module.exports = new UserController();
