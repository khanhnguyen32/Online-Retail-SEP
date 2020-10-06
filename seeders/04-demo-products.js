'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { name: "white plaid shirt", price: "15$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "1", idBrand: "1", avallabllity: "In stock" },
            { name: "Doremon blue collar t-shirt", price: "20$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "2", idBrand: "2", avallabllity: "In stock" },
            { name: "Gray sport sleeve shirt", price: "10$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "3", idBrand: "3", avallabllity: "In stock" },
            { name: "Brown vintage wind jacket", price: "17$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "4", idBrand: "4", avallabllity: "In stock" },
            { name: "Pink turtleneck sweater", price: "22$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "5", idBrand: "5", avallabllity: "In stock" },
            { name: "black felt hoodie", price: "18$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "6", idBrand: "6", avallabllity: "In stock" },
            { name: "Floral Pattern Yellow T-shirt", price: "20$", imagepath: 'img/home/item1.jpg', thumbnailpath: 'img/home/item2.jpg', idCatogory: "7", idBrand: "7", avallabllity: "In stock" },
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