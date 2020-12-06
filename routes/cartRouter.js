let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    var cart = req.session.cart;
    res.locals.cart = cart.getCart();
    res.render('cart');
});

router.post('/', (req, res, next) => {
    var productId = req.body.id;
    var quantity = isNaN(req.body.quantity) ? 1 : req.body.quantity;
    var productController = require('../controllers/productController');
    productController
        .getById(productId)
        .then(product => {
            var cartitem = req.session.cart.add(product, productId, quantity);
            res.json(cartitem);
        })
        .catch(error => next(error));
})

module.exports = router;