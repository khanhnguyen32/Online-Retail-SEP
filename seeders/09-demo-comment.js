'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        let data = [{
                message: 'Tạm ổn hiuhiu',
                userId: 1,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Cũng được. How about the size S?',
                userId: 2,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Còn hàng không vậy?',
                userId: 1,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 3,
                productId: 1,
                parentCommentId: null
            },
            {
                message: 'Áo xấu dị, có áo nào đẹp hơn không',
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