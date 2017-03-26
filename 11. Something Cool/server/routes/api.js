var express = require('express');
var router = express.Router();

// Models list
// QUESTION: It's necessary to add Category and link ?
let User = require('../controllers/user')
let Question = require('../controllers/question')
let Answer = require('../controllers/answer')
let Comment = require('../controllers/comment')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// Routing only for api

router.post('/login', User.login)

/* Users */
router.get('/users', User.read)
router.post('/users', User.create)
router.put('/users/:id', User.update)
router.delete('/users/:id', User.deleteUser)

// TODO: after create questions, update field user with list post question
/* Question */
router.get('/questions', Question.read)
router.get('/questions/:id', Question.readOne)
router.post('/questions', Question.create)
router.put('/questions/:id', Question.update)
router.delete('/questions/:id', Question.deleteQuestion)
router.put('/questions/:id/:user/upvote', Question.upvote)
router.put('/questions/:id/:user/downvote', Question.downvote)
router.put('/questions/:id/:user/undovote', Question.undoVote)

// TODO: after create answer, update field answer with list answer
/* Answer */
router.get('/answer', Answer.read)
router.post('/answer', Answer.create)
router.put('/answer/:id', Answer.update)
router.delete('/answer/:id', Answer.deleteAnswer)
router.put('/answer/:id/:user/upvote', Answer.upvote)
router.put('/answer/:id/:user/downvote', Answer.downvote)

// TODO: Afttter create comment, update field answer with list comment
/* Comment */
router.get('/comment', Comment.read)
router.post('/comment', Comment.create)
router.put('/comment/:id', Comment.update)
router.delete('/comment/:id', Comment.deleteComment)



module.exports = router;
