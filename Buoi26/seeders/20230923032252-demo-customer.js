"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "customers",
      [
        {
          name: `Hoang An`,
          email: `hoangan@gmail.com`,
          password: `1`,
          status: 1,
          province_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Dang Duong`,
          email: `duongdang@gmail.com`,
          password: `123456`,
          status: 0,
          province_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Anh Quan`,
          email: `anhquan@gmail.com`,
          password: `123456`,
          status: 1,
          province_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("customers", null, {});
  },
};
