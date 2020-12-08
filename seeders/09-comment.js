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
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 3,
                productId: 2,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 3,
                productId: 3,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 1,
                productId: 4,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 2,
                productId: 5,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 3,
                productId: 6,
                parentCommentId: null
            },
            {
                message: 'Áo này tui sợ mặc mùa hè bị nóng đó',
                userId: 4,
                productId: 7,
                parentCommentId: null
            },
            {
                message: 'Áo này có dễ bị dơ không dị?',
                userId: 2,
                productId: 2,
                parentCommentId: null
            },
            {
                message: 'Áo xấu dị, có áo nào đẹp hơn không?',
                userId: 4,
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