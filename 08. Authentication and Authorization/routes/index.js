var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

let User = require('../controllers/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', {msg: ''})
})

router.post('/register', User.create)

router.get('/login', function(req, res, next) {
  res.render('login', {msg: ''})
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login'}), function(req, res, next) {
  console.log(req);
  res.render('login', {msg: 'Login Succkkeess'})
})

module.exports = router;
