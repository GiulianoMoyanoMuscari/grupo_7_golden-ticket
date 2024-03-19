const authMiddleware = (req, res, next) => {
    res.locals.isLoggedIn = req.session.userId;
    next();
};

module.exports = authMiddleware;
