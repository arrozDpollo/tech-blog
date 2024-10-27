// utils/auth.js
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.status(401).json({ message: 'Please log in to continue.' });
    } else {
        next();
    }
};

module.exports = withAuth;
