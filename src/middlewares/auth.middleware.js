const authMiddleware = (req, res, next) => {
  res.locals.username = req.session.username;
  res.locals.isLoggedIn = req.session.userId;
  if (req.session.userId === 1) res.locals.isAdmin = true;
  next();
};

module.exports = authMiddleware;
