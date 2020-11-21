'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { username: "1", password: "1", email: "1", phone: "1", avatarPath: 'img/home/item1.jpg', isAdmin: false },
            { username: "2", password: "2", email: "2", phone: "2", avatarPath: 'img/home/item1.jpg', isAdmin: false },
            { username: "3", password: "3", email: "3", phone: "3", avatarPath: 'img/home/item1.jpg', isAdmin: false },
            { username: "4", password: "4", email: "4", phone: "4", avatarPath: 'img/home/item1.jpg', isAdmin: false },
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
        });
        await queryInterface.bulkInsert('Users', data, {});
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