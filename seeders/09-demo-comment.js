'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'Tạm ổn',
                userId: 1,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Cũng được',
                userId: 2,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Giá khá rẻ',
                userId: 1,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Cũng được',
                userId: 3,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Cũng được',
                userId: 2,
                productId: 1,
                parentCommentId: null
            }
        ];
        data.map(item => {
            item.createdAt = Sequelize.literal('NOW()');
            item.updatedAt = Sequelize.literal('NOW()');
            return item;
        });
        return queryInterface.bulkInsert('Comments', data, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});

    }
};