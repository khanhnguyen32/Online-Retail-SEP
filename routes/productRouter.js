let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('category');
})

router.get('/:id', (req, res) => {
    res.render('singleproduct');
})

module.exports = router;