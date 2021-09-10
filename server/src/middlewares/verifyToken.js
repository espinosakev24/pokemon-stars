const { verify } = require('jsonwebtoken');

module.exports.verifyToken = (req, res) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const [, token] = req.headers.authorization.split(' ');
      const decoded = verify(token, 'secretkey');

      req.decoded = decoded;
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({
        error: true,
        message: 'Not authorized',
      });
      throw new Error('Not authorized, token failed');
    }
  }
  res.status(401).json({
    error: true,
    message: 'Not authorized',
  });
  throw new Error('Not authorized, token failed');
};
