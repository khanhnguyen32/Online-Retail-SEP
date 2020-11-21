'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { message: "comment", rating: 5, userId: 1, productId: 1 },
            { message: "comment", rating: 4, userId: 2, productId: 1 },
            { message: "comment", rating: 3, userId: 3, productId: 2 },
            { message: "comment", rating: 5, userId: 4, productId: 4 },
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