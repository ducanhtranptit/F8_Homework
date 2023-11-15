const cookie = require("cookie");
const Redis = require("ioredis");

const model = require("../models/index");
const User = model.User;

const redis = new Redis();

class UserController {
	async getUserById(req, res) {
		const { id } = req.params;
		const cookies = req.headers.cookie;

		if (cookies) {
			const parsedCookies = cookie.parse(cookies);

			if (parsedCookies && parsedCookies.id === id) {
				const userKey = `user:${id}`;
				redis.hgetall(userKey, (err, result) => {
					if (err) {
						return res.status(500).json({
							status: "Error",
							message: "Internal Server Error",
						});
					} else {
						return res.status(200).json({
							status: "Success",
							data: result,
						});
					}
				});
			} else {
				//lưu id vào cookie
				const newCookie = cookie.serialize("id", id, {
					maxAge: 3600,
					httpOnly: true,
					path: "/users",
				});

				res.setHeader("Set-Cookie", newCookie);

				//Tìm xem user có tồn tại không
				const user = await User.findByPk(id);
				if (user) {
					//Tồn tại thì thêm user đó vào cache
					try {
						const userKey = `user:${id}`;
						const redisUser = await redis.hmset(userKey, user);
						return res.status(200).json({
							status: "Success",
							userKey: typeof userKey,
							redisUser,
							data: user,
						});
					} catch (error) {
						return res.status(500).json({
							status: "Error",
							message: "Internal Server Error",
						});
					}
				} else {
					return res.status(400).json({
						status: "Error",
						message: "User Invalid",
					});
				}
			}
		} else {
			return res.status(401).json({
				status: "Error",
				message: "Unauthorized",
			});
		}
	}
}
module.exports = new UserController();
