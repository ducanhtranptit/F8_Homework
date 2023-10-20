module.exports = {
	isRole: (roleData, roleId) => {
		return roleData.find((role) => {
			return +role.id === +roleId;
		});
	},

	checkPermission: (permissionList, permission) => {
		return permissionList.include(permission);
	},
};
