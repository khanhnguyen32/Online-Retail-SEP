'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Must have", imagepath: 'img/home/item1.jpg' },
            { name: "Shirt", imagepath: 'img/home/item1.jpg' },
            { name: "T-Shirt & Top", imagepath: 'img/home/item1.jpg' },
            { name: "Jacket", imagepath: 'img/home/item1.jpg' },
            { name: "Blazer", imagepath: 'img/home/item1.jpg' },
            { name: "Dress & Skirt", imagepath: 'img/home/item1.jpg' },
            { name: "Trouser & Jean", imagepath: 'img/home/item1.jpg' },
            { name: "Shoes", imagepath: 'img/home/item1.jpg' },
            { name: "Bag", imagepath: 'img/home/item1.jpg' }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Categories', data, {});
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