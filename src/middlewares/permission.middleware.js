const permissionMiddleware = (req, res, next) => {
  if (req.session.userId !== 1) return res.send(401);
  next();
};

module.exports = permissionMiddleware;
