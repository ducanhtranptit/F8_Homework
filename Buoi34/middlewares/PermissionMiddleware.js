module.exports = (req, res, next) => {
    const permissionList = req.user.permissions;
    if (permissionList.includes("read")) {
        next();
    } else {
        res.redirect("/");
    }
};
