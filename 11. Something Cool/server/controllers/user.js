const crypto = require('crypto');
let User = require('../models/user')
let hashPass = require('../helper/hash')

create = (req, res, next) => {
  let salt = crypto.randomBytes(64).toString('hex');
  let passHash = hashPass(req.body.password, salt)
  let doc = new User({
    email: req.body.email,
    name: req.body.name,
    salt: salt,
    password: passHash
  })
  doc.save().then( (data) => {
    res.render('register', {msg: 'Register Success'})
  }).catch( (err) => {
    res.render('register', {msg: 'Register Error'})
  })
}

module.exports = {
  create: create
}
