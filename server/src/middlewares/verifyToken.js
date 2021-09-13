const { verify } = require('jsonwebtoken');

module.exports.verifyToken = (req, res, next) => {
  let token = '';

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = verify(token, 'secretkey');

      req.decoded = decoded;
      next();
    } catch (err) {
      res.status(401).json({
        error: true,
        message: 'Not authorized',
      });
      throw new Error('Not authorized, token failed');
    }
  }
  if (!token) {
    res.status(401).json({
      error: true,
      message: 'Not authorized hello',
    });
    throw new Error('Not authorized, token failed');
  }
};
