"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                name: "User1",
                email: "user1@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "User2",
                email: "user2@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "User3",
                email: "user3@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "User4",
                email: "user4@gmail.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "User5",
                email: "user5@gmail.com",
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
