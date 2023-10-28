const validator = require("validator");

class UserValidateMiddleware {
	UserValidate(name = null, email = null, password = null) {
		let nameValidator = false,
			emailValidator = false,
			passwordValidator = false;
		if (name) {
			nameValidator = true;
		}
		if (email) {
			emailValidator = validator.isEmail(email);
		}
		if (password) {
			passwordValidator = validator.isStrongPassword(password);
		}

		return {
			nameValidator,
			emailValidator,
			passwordValidator,
		};
	}
}

module.exports = new UserValidateMiddleware();
