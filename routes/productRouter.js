let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    //req.query
    let categoryController = require('../controllers/categoryController');
    categoryController
        .getAll()
        .then(data => {
            res.locals.categories = data;
            let brandController = require('../controllers/brandController');
            return brandController.getAll(req.query);
        })
        .then(data => {
            res.locals.brands = data;
            let colorController = require('../controllers/colorController');
            return colorController.getAll(req.query);

        })
        .then(data => {
            res.locals.colors = data;
            let productController = require('../controllers/productController');
            return productController.getAll(req.query);
        })
        .then(data => {
            res.locals.products = data;
            res.render('category');
        })
        .catch(error => next(error));

});

router.get('/:id', (req, res, next) => {
    let productController = require('../controllers/productController');
    productController
        .getById(req.params.id)
        .then(product => {
            res.locals.product = product;
            res.render('singleproduct');
        })
        .catch(error => next(error));

});

module.exports = router;