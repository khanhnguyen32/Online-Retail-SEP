'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [{
                name: "white happy sunday shirt",
                price: 15000000,
                imagepath: "../img/products/hm-shirt-1.jpg",
                thumbnailpath: '../img/products/hm-shirt-1.jpg',
                categoryId: 1,
                brandId: 1,
                availability: true,
                sumary: "Inspired by the French concept of Bon Ton, a sophisticated design is infused in this shirt, crafted from ivory silk crêpe de Chine and decorated by a ruffled jabot, an ornamental detail first used in the 17th and 18th centuries. Self-covered buttons and puff sleeves enhance the item's vintage feel. Pieces with versatile ways to wear and style embrace each person who is part of the House’s individual spirit.",
                description: `
                -Ivory silk crêpe de Chine
                -Double G metal buttons
                -This product contains organic silk where the sericulture and manufacturing process restrict the use of chemicals, 
                eliminate pesticides or artificial fertilizers and incorporate methods that respect biodiversity, improve soil quality, 
                and reduce water consumption.
                -High neck
                -Ruffled jabot
                -Long puff sleeves
                -Length: 20.5" based on a size 40 (IT)
                -100% silk
                -Made in Italy
                -The product shown in this image is a size 40 (IT)`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "Super Luxurious & Elegant shirt",
                price: 20000000,
                imagepath: '../img/products/uni-shirt-1.jpg',
                thumbnailpath: '../img/products/uni-shirt-1.jpg',
                categoryId: 1,
                brandId: 2,
                availability: false,
                sumary: "A shirt for lazy day but you still want to be elegant and luxurious.",
                description: `
                -Material: Cotton
                -Cổ trụ
                -This product contains organic silk where the sericulture and manufacturing process restrict the use of chemicals, 
                eliminate pesticides or artificial fertilizers and incorporate methods that respect biodiversity, improve soil quality, 
                and reduce water consumption.
                -High neck
                -Long puff sleeves
                -Length: 20.5" based on a size 40
                -Made in Japan`,
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "fÈN Dress for Sleepy people",
                price: 10000000,
                imagepath: '../img/products/adidas-dress-1.jpg',
                thumbnailpath: '../img/products/adidas-dress-1.jpg',
                categoryId: 4,
                brandId: 3,
                availability: true,
                sumary: "When you are luxurious and fancy but you want to be fèn one day, wear this dress to be fèn 💄",
                description: `
                -Material: Cotton
                -1 piece dress
                -This product contains organic where the sericulture and manufacturing process restrict the use of chemicals, 
                eliminate pesticides or artificial fertilizers and incorporate methods that respect biodiversity, improve soil quality, 
                and reduce water consumption.
                -Short length
                -Long puff sleeves
                -Length: 20.5" based on a size 40
                -Made in US`,
                overallReview: 4.5,
                reviewCount: 2
            },
            {
                name: "Brown vintage wind jacket",
                price: 17000000,
                imagepath: '../img/categories/item1.jpg',
                thumbnailpath: '../img/categories/item2.jpg',
                categoryId: 4,
                brandId: 4,
                availability: true,
                sumary: "hello",
                description: "goodbye",
                overallReview: 4.3,
                reviewCount: 2
            },
            {
                name: "Pink turtleneck sweater",
                price: 22000000,
                imagepath: '../img/categories/item2.jpg',
                thumbnailpath: '../img/categories/item2.jpg',
                categoryId: 5,
                brandId: 5,
                availability: true,
                sumary: "hello",
                description: "goodbye",
                overallReview: 3,
                reviewCount: 2
            },
            {
                name: "black felt hoodie",
                price: 18000000,
                imagepath: '../img/categories/item3.jpg',
                thumbnailpath: '../img/categories/item2.jpg',
                categoryId: 6,
                brandId: 6,
                availability: true,
                sumary: "hello",
                description: "goodbye",
                overallReview: 4,
                reviewCount: 2
            },
            {
                name: "Floral Pattern Yellow T-shirt",
                price: 20000000,
                imagepath: '../img/categories/item1.jpg',
                thumbnailpath: '../img/categories/item2.jpg',
                categoryId: 7,
                brandId: 7,
                availability: true,
                sumary: "hello",
                description: "goodbye",
                overallReview: 5,
                reviewCount: 2
            },
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