const multer = require("multer");
const path = require("path");

const model = require("../../models/index");
const VideoLink = model.VideoLink;

class UploadFile {
	async index(req, res) {
		const { userId } = req.body;
		try {
			const linksOfUser = await VideoLink.findAll({
				where: {
					userId,
				},
			});
			if (linksOfUser) {
				return res.status(200).json({
					linksOfUser,
				});
			} else {
				return res.status(400).json({
					status: "Error",
					message: "Invalid User",
				});
			}
		} catch (error) {
			return res.status(500).json({
				status: "Error",
				error,
			});
		}
	}

	async upload(req, res) {
		const { userId } = req.body;
		const storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, "public/uploads");
			},
			filename: function (req, file, cb) {
				cb(null, Date.now() + path.extname(file.originalname));
			},
		});

		const upload = multer({ storage: storage });

		upload.single("file")(req, res, async (err) => {
			if (err) {
				console.log(req.file);
				res.status(400).json({ error: err });
			} else {
				if (req.file) {
					const fileLink = `http://localhost:3000/upload/${req.file.filename}`;
					const updateVideoLink = await VideoLink.create({
						link: fileLink,
						userId: userId,
					});
					res.json({
						status: "success",
						data: updateVideoLink,
					});
				} else {
					res.status(400).json({ error: "No file uploaded" });
				}
			}
		});
	}

	sendFIle(req, res) {
		const { fileName } = req.params;
		console.log(fileName);
		res.sendFile(`public/uploads/${fileName}`);
	}
}
module.exports = new UploadFile();
