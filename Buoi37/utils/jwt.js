const jwt = require("jsonwebtoken");
const { Model } = require("sequelize");
const jwtSecretKey = "Ac22#$dASdf26%$^7";
const accessTokenAviliableTime = 60;
const refreshTokenAviliableTime = 10080;

class JwtToken {
	createAccessToken(data) {
		const token = jwt.sign({ data }, jwtSecretKey, {
			expiresIn: accessTokenAviliableTime * 60,
		});

		return token;
	}

	createRefreshToken() {
		const token = jwt.sign(
			{
				data: {
					number: Math.random() + new Date().getTime(),
				},
			},
			jwtSecretKey,
			{ expiresIn: refreshTokenAviliableTime * 60 }
		);
		return token;
	}

	decode(token) {
		try {
			const decode = jwt.verify(token, jwtSecretKey);
			return decode.data;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = new JwtToken();
