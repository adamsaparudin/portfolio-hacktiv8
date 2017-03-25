let Answer = require('../models/answer')
let Question = require('../models/question')
let User = require('../models/user')

module.exports = {

  create: (req, res, next) => {
    let doc = new Answer(req.body)
    doc.save().then( (data) => {

      User.findByIdAndUpdate(data.poster,
      {$push: {"listAnswer": data._id}},
      function(err, user) {
        if(err) console.log(err);
        else console.log(user);
      })

      Question.findByIdAndUpdate(data.question,
      {$push: {"listAnswer": data._id}},
      function(err, question) {
        if(err) console.log(err);
        else console.log(question)
      })

      res.send(data)
    }).catch( (err) =>{
      res.send(err)
    })
  },

  upvote: (req, res, next) => {
    Answer.findById(req.params.id, (err, doc) => {
      let score = doc.score
      let index = doc.listGiveScore.findIndex( x => x.user == req.params.user);
      if(index == -1) {
        doc.update({
          score: doc.score + 1,
          $push: {"listGiveScore": {user: req.params.user, tipe: 'upvote'}},
        },
        {new: true, upsert: true},
        (err, data) => {
          if(err) res.send(err)
          else res.send({_id: doc._id ,score : doc.score + 1})
        })
      } else if (doc.listGiveScore[index].tipe == "downvote" && index != -1) {
        let key = 'listGiveScore.' + index + '.tipe'
        let obj = {}
        obj[key] = 'upvote'
        doc.update({
          score: doc.score + 2,
          $set: obj,
        }, {new: true, upsert: true}, (err, data) => {
          if(err) res.send(err)
          else res.send({_id: doc._id ,score : doc.score + 2})
        })
      }
      else {
        res.send("you already upvote that shit")
      }
    })
  },

  downvote: (req, res, next) => {
    Answer.findById(req.params.id, (err, doc) => {
      let score = doc.score
      let index = doc.listGiveScore.findIndex( x => x.user == req.params.user);
      if(index == -1) {
        doc.update({
          score: doc.score - 1,
          $push: {"listGiveScore": {user: req.params.user, tipe: 'downvote'}},
        }, {'new': true, upsert: true}, (err, data) => {
          if(err) res.send(err)
          else res.send({_id: doc._id ,score : doc.score - 1})
        })
      } else if (doc.listGiveScore[index].tipe == "upvote" && index != -1) {
        let key = 'listGiveScore.' + index + '.tipe'
        let obj = {}
        obj[key] = 'downvote'
        doc.update({
          score: doc.score - 2,
          $set: obj,
        }, {'new': true, upsert: true}, (err, data) => {
          if(err) res.send(err)
          else res.send({_id: doc._id ,score : doc.score - 2})
        })
      }
      else {
        res.send("you already downvote that shit")
      }
    })
  },

  read: (req, res, next) => {
    Answer.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    Answer.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteAnswer: (req, res, next) => {
    Answer.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
