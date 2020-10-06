'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { message: "comment", idUser: "1", idProduct: "1", parentCommentId: "null", createAt: "time" },
            { message: "comment", idUser: "2", idProduct: "2", parentCommentId: "null", createAt: "time" },
            { message: "comment", idUser: "3", idProduct: "3", parentCommentId: "null", createAt: "time" },
            { message: "comment", idUser: "4", idProduct: "4", parentCommentId: "null", createAt: "time" },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Comments', data, {});
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