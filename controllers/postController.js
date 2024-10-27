// controllers/postController.js
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Render the form to create a new post
router.get('/new', withAuth, (req, res) => {
  res.render('createPost', {
      logged_in: req.session.logged_in
  });
});


// Get all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['username'] }],
        });
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single post with comments
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User, attributes: ['username'] },
                { model: Comment, include: [User] }
            ]
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update(
            { title: req.body.title, content: req.body.content },
            { where: { id: req.params.id, user_id: req.session.user_id } }
        );
        if (!updatedPost) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: { id: req.params.id, user_id: req.session.user_id }
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
