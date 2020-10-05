'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [{
            "name": "Crimson",
            "code": "#0e6d72",
            "imagepath": "http://dummyimage.com/30x30.jpg/ff4444/ffffff"
        }, {
            "name": "Indigo",
            "code": "#ca61d1",
            "imagepath": "http://dummyimage.com/30x30.bmp/cc0000/ffffff"
        }, {
            "name": "Purple",
            "code": "#2fe06d",
            "imagepath": "http://dummyimage.com/30x30.png/ff4444/ffffff"
        }, {
            "name": "Puce",
            "code": "#4fd064",
            "imagepath": "http://dummyimage.com/30x30.jpg/5fa2dd/ffffff"
        }, {
            "name": "Blue",
            "code": "#b6cbfd",
            "imagepath": "http://dummyimage.com/30x30.bmp/ff4444/ffffff"
        }, {
            "name": "Puce",
            "code": "#0059d4",
            "imagepath": "http://dummyimage.com/30x30.png/dddddd/000000"
        }, {
            "name": "Mamnem",
            "code": "#896465",
            "imagepath": "http://dummyimage.com/30x30.jpg/dddddd/000000"
        }];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Colors', data, {});
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