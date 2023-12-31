"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Banned extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Banned.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Banned",
        }
    );
    return Banned;
};
