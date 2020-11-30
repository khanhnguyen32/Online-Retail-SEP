'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { message: "Good item. I love it", rating: 5, userId: 1, productId: 1 },
            { message: "Fine. The material is so cool", rating: 4, userId: 2, productId: 1 },
            { message: "Hmmm I think it's quite expensive", rating: 4, userId: 3, productId: 2 },
            { message: "Good item. I love it", rating: 4, userId: 4, productId: 2 },
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