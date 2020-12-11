let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    let email = req.body.username;
    let password = req.body.password;
    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                if (userController.comparePassword(password, user.password)) {
                    req.session.user = user;
                    res.redirect('/');
                } else {
                    res.render('login', {
                        message: "Incorrect Password!",
                        type: 'alert-danger'
                    });
                }
            } else {
                res.render('login', {
                    message: 'Email does not exist!',
                    type: 'alert-danger'
                });
            }
        })
});
router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', (req, res, next) => {
    let fullname = req.body.fullname;
    let email = req.body.username;
    let password = req.body.password

    let confirmPassword = req.body.confirmPassword;
    let keepLoggedIn = (req.body.keepLoggedI != undefined);

    if (password != confirmPassword) {
        return res.render('register', {
            message: 'Confirm password does not match!',
            type: 'alert-danger'
        });
    }

    userController
        .getUserByEmail(email)
        .then(user => {
            if (user) {
                return res.render('register', {
                    message: `Email ${email} existed! Enter another email.`,
                    type: 'alert-danger'

                });
            }
            user = {
                fullname,
                username: email,
                password
            };
            return userController
                .createUser(user)
                .then(user => {
                    if (keepLoggedIn) {
                        req.session.user = user;
                        res.redirect('/');
                    } else {
                        return res.render('login', {
                            message: 'Register Done! You can login now',
                            type: 'alert-primary'
                        });
                    }
                });

        })
        .catch(error => next(error));
});
router.get('/logout', (req, res, next) => {
    req.session.destroy(error => {
        if (error) {
            return next(error)
        };
        return res.redirect('/users/login');
    })
})

module.exports = router;