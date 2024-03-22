const authMiddleware = (req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.isLoggedIn = req.session.userId;
  next();
};

module.exports = authMiddleware;
