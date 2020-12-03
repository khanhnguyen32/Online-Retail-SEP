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
                name: "Double armour jacket",
                price: 17000000,
                imagepath: '../img/products/hm-jacket-1.jpg',
                thumbnailpath: '../img/products/hm-jacket-1.jpg',
                categoryId: 3,
                brandId: 1,
                availability: false,
                sumary: "Oversized, double-breasted jacket in a soft wool blend with notch lapels and diagonal front pockets. Lined. The wool content of the jacket is recycled.",
                description: `
                Sleeve Length :Long sleeve
                Fit: Oversized
                Style: Blazer
                Composition
                    Lining: Polyester 100%
                    Shell: Polyester 60%, Wool 30%, Other fibres 10%
                Care instructions
                    Dry clean
                Description
                    Grey marl
                    Solid colour`,
                overallReview: 4,
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
                name: "Bad luck shirt",
                price: 22000000,
                imagepath: '../img/products/zara-shirt-1.jpg',
                thumbnailpath: '../img/products/zara-shirt-1.jpg',
                categoryId: 1,
                brandId: 4,
                availability: true,
                sumary: "Short dress featuring a slot collar with buttons, long semi-sheer sleeves, asymmetric hem and lining.",
                description: `
                COMPOSITION
                OUTER SHELL

                    100% polyester

                LINING

                    100% polyester`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Game on CONTRAST STRIPE Shirt",
                price: 18000000,
                imagepath: '../img/products/lv-shirt-1.jpg',
                thumbnailpath: '../img/products/lv-shirt-1.jpg',
                categoryId: 1,
                brandId: 5,
                availability: true,
                sumary: "A classic jacquard knit polo top re-energized with the season’s eye-catching Game On pattern, which shakes up the iconic Monogram motif with a vibrant palette and heart details that nod to playing cards. Striped ribbed hems strike a graphic contrast and add to the sporty feel. The top button is engraved with a Louis Vuitton signature.",
                description: `
                Main Material : 79% Viscose 13% Polyester 8% Polyamide
                Other Material : 84% Silk 14% Polyamide 2% Polyurethane
                Black
                Regular fit
                Model wears size S
                Model measurements : Bust 31'' / 79 cm, Height 5' 10" / 176 cm, Waist 22''4 / 57 cm, Hips 33''5 / 85 cm
                Made in Italy
                Do not wash
                Do not bleach
                Do not tumble dry
                Iron at a maximum sole-plate temperature of 110°C
                Mild professional dry cleaning in hydrocarbons`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Optical cheep tweed jacket",
                price: 23000000,
                imagepath: '../img/products/gucci-jacket-1.jpg',
                thumbnailpath: '../img/products/gucci-jacket-1.jpg',
                categoryId: 3,
                brandId: 6,
                availability: false,
                sumary: "New takes on suiting continue to define the Gucci narrative in unexpected silhouettes that push the standards in tailoring. Textured tweed is reimagined in a black and ivory optical version that adds a new way of layering to this jacket.",
                description: `
                Main Material : 79% Viscose 13% Polyester 8% Polyamide
                Other Material : 84% Silk 14% Polyamide 2% Polyurethane
                Black
                Regular fit
                Model wears size S
                Model measurements : Bust 31'' / 79 cm, Height 5' 10" / 176 cm, Waist 22''4 / 57 cm, Hips 33''5 / 85 cm
                Made in Italy
                Do not wash
                Do not bleach
                Do not tumble dry
                Iron at a maximum sole-plate temperature of 110°C
                Mild professional dry cleaning in hydrocarbons`,
                overallReview: 0,
                reviewCount: 0
            },
            {
                name: "Confident spy girt dress",
                price: 20000000,
                imagepath: '../img/products/chanel-dress-1.jpg',
                thumbnailpath: '../img/products/chanel-dress-1.jpg',
                categoryId: 4,
                brandId: 7,
                availability: true,
                sumary: "Go to school too boring. Wear this dress and become a fancy spy. Save the class",
                description: `
                Main Material : 79% Viscose 13% Polyester 8% Polyamide
                Other Material : 84% Silk 14% Polyamide 2% Polyurethane
                Black
                Regular fit
                Model wears size S
                Model measurements : Bust 31'' / 79 cm, Height 5' 10" / 176 cm, Waist 22''4 / 57 cm, Hips 33''5 / 85 cm
                Made in Italy
                Do not wash
                Do not bleach
                Do not tumble dry
                Iron at a maximum sole-plate temperature of 110°C
                Mild professional dry cleaning in hydrocarbons`,
                overallReview: 0,
                reviewCount: 0
            }
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