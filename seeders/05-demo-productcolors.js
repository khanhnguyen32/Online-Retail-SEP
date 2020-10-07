'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { productId: "1", colorId: "1", imagepath: 'img/home/item1.jpg' },
            { productId: "2", colorId: "2", imagepath: 'img/home/item1.jpg' },
            { productId: "3", colorId: "3", imagepath: 'img/home/item1.jpg' },
            { productId: "4", colorId: "4", imagepath: 'img/home/item1.jpg' },
            { productId: "5", colorId: "5", imagepath: 'img/home/item1.jpg' },
            { productId: "6", colorId: "6", imagepath: 'img/home/item1.jpg' },
            { productId: "7", colorId: "7", imagepath: 'img/home/item1.jpg' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('ProductColors', data, {});
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