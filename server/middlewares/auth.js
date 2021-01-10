const authMiddleware = (req, res, next) => {
  if (!req.session.user) {
    return res.sendStatus(418);
  }
  return next();
};

module.exports = authMiddleware
