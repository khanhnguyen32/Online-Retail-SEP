'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        let data = [
            { username: "maioanh_cute@lazy.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Nguyen Ngoc Mai Oanh", avatarPath: '../img/user/maioanhcute.jpg', isAdmin: false },
            { username: "khanh_cute@lazy.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Nguyen Quoc Khanh", avatarPath: '../img/user/hellokatun.jpg', isAdmin: false },
            { username: "thinhtran_cute@lazy.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Tran Quoc Thinh", avatarPath: '../img/user/thinhtran.jpg', isAdmin: false },
            { username: "coloan_cute@notlazy.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Cô Loan", avatarPath: '../img/user/coloan.jpg', isAdmin: false },
            { username: "richkid@lazy.com", password: "$2a$10$T1BNcd9fiOA6mhHaWXBNrO8FhtnKGndMqznlcLsjPkYwGtFbJCujK", fullname: "Nguyen Rich Kid", avatarPath: '../img/user/hellokatun.jpg', isAdmin: false }
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