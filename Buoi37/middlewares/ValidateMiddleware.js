const validator = require("validator");

class UserValidateMiddleware {
	UserValidate(name = null, email = null, password = null) {
		let nameValidate = false,
			emailValidate = false,
			passwordValidate = false;

		if (name) {
			nameValidate = true;
		}

		if (email) {
			emailValidate = validator.isEmail(email);
		}

		if (password) {
			passwordValidate = validator.isStrongPassword(password);
		}

		return { nameValidate, emailValidate, passwordValidate };
	}

	TokenValidate(token = null) {
		let tokenValidate = false;
		if (token) {
			tokenValidate = validator.isJWT(token);
		}
		return { tokenValidate };
	}
}

module.exports = new UserValidateMiddleware();
