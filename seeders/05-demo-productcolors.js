'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { idProduct: "1", idColor: "1", imagepath: 'img/home/item1.jpg' },
            { idProduct: "2", idColor: "2", imagepath: 'img/home/item1.jpg' },
            { idProduct: "3", idColor: "3", imagepath: 'img/home/item1.jpg' },
            { idProduct: "4", idColor: "4", imagepath: 'img/home/item1.jpg' },
            { idProduct: "5", idColor: "5", imagepath: 'img/home/item1.jpg' },
            { idProduct: "6", idColor: "6", imagepath: 'img/home/item1.jpg' },
            { idProduct: "7", idColor: "7", imagepath: 'img/home/item1.jpg' },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Productcolors', data, {});
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