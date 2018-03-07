const jwt = require('jsonwebtoken');

const secret = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'secret';

module.exports = {
  issue: (payload) => jwt.sign(payload, secret),
  verify: (token, cb) => jwt.verify(token, secret, {}, cb),
};
