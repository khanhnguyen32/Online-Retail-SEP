let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    let controller = require('../controllers/reviewController');
    let review = {
        userId: 1,
        productId: req.body.productId,
        rating: req.body.rating,
        message: req.body.message
    };

    controller
        .add(review)
        .then(() => {
            res.redirect('/products/' + review.producId);
        })
        .catch(error => next(error));
});

module.exports = router;