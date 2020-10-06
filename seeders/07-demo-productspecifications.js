'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { idProduct: "1", idSpecification: "1" },
            { idProduct: "2", idSpecification: "2" },
            { idProduct: "3", idSpecification: "3" },
            { idProduct: "4", idSpecification: "4" },
            { idProduct: "5", idSpecification: "5" },
            { idProduct: "6", idSpecification: "6" },
            { idProduct: "7", idSpecification: "7" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Productspecifications', data, {});
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