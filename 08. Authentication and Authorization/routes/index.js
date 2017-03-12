var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register')
})

router.post('/register', function(req, res, next) {
  res.send('Register post')
})

router.get('/login', function(req, res, next) {
  res.send('Login shit')
})

router.post('/login', function(req, res, next) {
  res.send('Login authentication')
})

module.exports = router;
