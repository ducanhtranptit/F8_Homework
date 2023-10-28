const multer = require("multer");
const path = require("path");

const model = require("../../models/index");
const VideoLink = model.VideoLink;

class UploadFile {
	async index(req, res) {
		const { userId } = req.body;
		const linksOfUser = await VideoLink.findAll({
			where: {
				userId,
			},
		});
		res.status(200).json({
			linksOfUser,
		});
	}

	async upload(req, res) {
		const { userId } = req.body;
		const storage = multer.diskStorage({
			destination: function (req, file, cb) {
				cb(null, "uploads/");
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
		res.sendFile(`uploads/${fileName}`);
	}
}
module.exports = new UploadFile();
