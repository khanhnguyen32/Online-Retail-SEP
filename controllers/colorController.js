let controller = {};
let models = require('../models');
const color = require('../models/color');
let Color = models.Color;

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let options = {
            attributes: ['id', 'name', 'imagepath', 'code'],
            include: [{
                model: models.ProductColor,
                include: [{
                    model: models.Product,
                    attributes: [],
                    where: {}
                }]
            }]
        };

        if (query.category) {
            options.include[0].include[0].where.categoryId =
                query.category;
        }
        if (query.brand) {
            options.include[0].include[0].where.brandId =
                query.brand;
        }

        Color
            .findAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;