module.exports = (req, res, next) => {
	const permissionList = req.user.permissions;
	console.log(permissionList);

	if (permissionList.includes("read")) {
		next();
	} else {
		res.redirect("/");
	}
};
