'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "H&M", imagepath: 'img/home/item1.jpg' },
            { name: "Unique", imagepath: 'img/home/item1.jpg' },
            { name: "Adidas", imagepath: 'img/home/item1.jpg' },
            { name: "Zara", imagepath: 'img/home/item1.jpg' },
            { name: "Louis Vuitton", imagepath: 'img/home/item1.jpg' },
            { name: "Gucci", imagepath: 'img/home/item1.jpg' },
            { name: "Chanel", imagepath: 'img/home/item1.jpg' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Brands', data, {});
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