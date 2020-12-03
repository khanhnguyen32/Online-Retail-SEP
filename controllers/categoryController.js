let controller = {};
let models = require('../models')
let Category = models.Category;

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        Category
            .findAll({
                attributes: ['id', 'name', 'imagepath', 'summary'],
                include: [{ model: models.Product }]
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};
module.exports = controller;