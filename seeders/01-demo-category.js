'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "Shirt", imagepath: '../img/categories/item3.jpg' },
            { name: "T-Shirt & Top", imagepath: '../img/categories/item1.jpg' },
            { name: "Jacket", imagepath: '../img/categories/item2.jpg' },
            { name: "Dress & Skirt", imagepath: '../img/categories/dress.jpg' },
            { name: "Trouser & Jean", imagepath: '../img/categories/trouser.jpg' },
            { name: "Shoes", imagepath: '../img/categories/shoes.jpg' },
            { name: "Bag & Accessories", imagepath: '../img/categories/bag.jpg' }
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