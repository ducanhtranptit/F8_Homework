"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Login_token extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Login_token.belongsTo(models.User, { foreignKey: "user_id" });
		}
	}
	Login_token.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			user_id: DataTypes.INTEGER,
			token: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Login_token",
		}
	);
	return Login_token;
};
