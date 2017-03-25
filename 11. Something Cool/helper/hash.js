const crypto = require('crypto');

function hashPass(password, salt) {
  return crypto.createHmac('sha256', password).update(salt).digest('hex')
}

module.exports = hashPass
