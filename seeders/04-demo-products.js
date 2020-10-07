'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "white plaid shirt", price: "15000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "1", brandId: "1", availability: "true" },
            { name: "Doremon blue collar t-shirt", price: "20000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "2", brandId: "2", availability: "true" },
            { name: "Gray sport sleeve shirt", price: "10000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "3", brandId: "3", availability: "true" },
            { name: "Brown vintage wind jacket", price: "17000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "4", brandId: "4", availability: "true" },
            { name: "Pink turtleneck sweater", price: "22000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "5", brandId: "5", availability: "true" },
            { name: "black felt hoodie", price: "18000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "6", brandId: "6", availability: "true" },
            { name: "Floral Pattern Yellow T-shirt", price: "20000000", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', categoryId: "7", brandId: "7", availability: "true" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Products', data, {});
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