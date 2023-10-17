"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Link extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Link.belongsTo(models.User, { foreignKey: "user_id" });
		}
	}
	Link.init(
		{
			user_id: DataTypes.INTEGER,
			url: DataTypes.STRING,
			shorturl: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Link",
		}
	);
	return Link;
};
