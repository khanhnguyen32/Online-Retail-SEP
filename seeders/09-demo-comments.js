'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { message: "comment", userId: "1", productId: "1", parentCommentId: "null", createAt: "time" },
            { message: "comment", userId: "2", productId: "2", parentCommentId: "null", createAt: "time" },
            { message: "comment", userId: "3", productId: "3", parentCommentId: "null", createAt: "time" },
            { message: "comment", userId: "4", productId: "4", parentCommentId: "null", createAt: "time" },
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