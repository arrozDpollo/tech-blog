// controllers/index.js
const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const userRoutes = require('./userController');
const postRoutes = require('./postController');
const commentRoutes = require('./commentController');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
