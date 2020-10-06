'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { username: "1", password: "1", email: "1", phone: "1", avatarpath: 'img/home/item1.jpg', isadmin: "no" },
            { username: "2", password: "2", email: "2", phone: "2", avatarpath: 'img/home/item1.jpg', isadmin: "no" },
            { username: "3", password: "3", email: "3", phone: "3", avatarpath: 'img/home/item1.jpg', isadmin: "no" },
            { username: "4", password: "4", email: "4", phone: "4", avatarpath: 'img/home/item1.jpg', isadmin: "no" },
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