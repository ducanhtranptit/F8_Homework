"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const hash = bcrypt.hashSync("1", saltRounds);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert("Users", [
			{
				name: "user1",
				email: "user1@gmail.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "user2",
				email: "user2@gmail.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "user3",
				email: "user3@gmail.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "user4",
				email: "user4@gmail.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				name: "user5",
				email: "user5@gmail.com",
				password: hash,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
