"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Trần Đức Anh",
        email: "tda.ducanh@gmail.com",
        password: "$2b$10$4jbgnWZ/tJ5L9NYS3gMQCO.31qCSP4UEBhXnjJxWsUHPHMzSbZiq.",
        status: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
