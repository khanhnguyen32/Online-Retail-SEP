'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { message: "comment", rating: "rate star", idUser: "1", idProduct: "1", createAt: "time" },
            { message: "comment", rating: "rate star", idUser: "2", idProduct: "2", createAt: "time" },
            { message: "comment", rating: "rate star", idUser: "3", idProduct: "3", createAt: "time" },
            { message: "comment", rating: "rate star", idUser: "4", idProduct: "4", createAt: "time" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Reviews', data, {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};