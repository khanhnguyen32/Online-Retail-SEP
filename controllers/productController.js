let controller = {};
let models = require('../models')
let Product = models.Product;

controller.getTrendingProducts = () => {
    return new Promise((resolve, reject) => {
        Product
            .findAll({
                order: [
                    ['overallReview', 'DESC']
                ],
                limit: 8,
                include: [{ model: models.Category }],
                attributes: ['id', 'name', 'imagepath', 'price']
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            include: [{ model: models.Category }],
            attributes: ['id', 'name', 'imagepath','price'],
            where: {}
        };
        if (query.category){
            options.where.categoryId = query.category;
        }
        if(query.brand){
            options.where.brandId = query.brand;
        }
        if(query.color){
            options.include.push({
            model: models.ProductColor,
            attributes: [],
            where: { colorId: query.color }
        });
    }
        Product
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        let product;
        Product
            .findOne({
                where: { id: id },
                include: [{ model: models.Category }],
            })
            .then(result => {
                product = result;
                return models.Comment.findAll({
                    where: { productId: id, parentCommentId: null },
                    include: [
                        { model: models.User },
                        {
                            model: models.Comment,
                            as: 'SubComments',
                            include: [{ model: models.User }]
                        }
                    ]
                });
            })
            .then(comments => {
                product.Comments = comments;
                return models.Review.findAll({
                    where: { productId: id },
                    include: [{ model: models.User }]
                });
            })
            .then(reviews => {
                product.Reviews = reviews;
                let stars = [];
                for (let i = 1; i <= 5; i++) {
                    stars.push(reviews.filter(item => (item.rating == i)).length);
                }
                product.stars = stars;
                resolve(product);
            })
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;