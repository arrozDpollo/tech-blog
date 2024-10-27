// controllers/homeRoutes.js
const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Route to render the homepage with existing posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }]
        });

        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


// Render signup page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        return res.redirect('/');
    }
    res.render('signup');
});

// Render login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        return res.redirect('/');
    }
    res.render('login');
});


module.exports = router;
