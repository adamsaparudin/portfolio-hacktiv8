const crypto = require('crypto');

// crypto.randomBytes(64).toString('hex');

function hashPass(password, salt) {
  return crypto.createHmac('sha256', password).update(salt).digest('hex')
}


module.exports = hashPass
