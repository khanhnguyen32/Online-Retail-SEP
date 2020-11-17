'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Hát&eM", imagepath: 'img/home/item1.jpg' },
            { name: "Uniqlô", imagepath: 'img/home/item1.jpg' },
            { name: "Adidasphật", imagepath: 'img/home/item1.jpg' },
            { name: "Zara", imagepath: 'img/home/item1.jpg' },
            { name: "Luôn Vuituoi", imagepath: 'img/home/item1.jpg' },
            { name: "Củcchi", imagepath: 'img/home/item1.jpg' },
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