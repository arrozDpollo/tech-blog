// controllers/userController.js
const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const withAuth = require('../utils/auth'); // Middleware to protect routes

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            // Redirect to home page after successful registration
            res.redirect('/');
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
            // Optionally, handle incorrect login attempts by redirecting with a message
            return res.redirect('/login?error=Incorrect email or password');
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            return res.redirect('/login?error=Incorrect email or password');
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            // Redirect to home page after successful login
            res.redirect('/');
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// Logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            // Redirect to home page after logout
            res.redirect('/');
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
