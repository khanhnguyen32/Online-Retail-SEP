'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { productId: "1" },
            { productId: "2" },
            { productId: "3" },
            { productId: "4" },
            { productId: "5" },
            { productId: "6" },
            { productId: "7" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('ProductSpecifications', data, {});
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