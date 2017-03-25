let Question = require('../models/question')
let User = require('../models/user')

module.exports = {

  create: (req, res, next) => {
    let doc = new Question(req.body)
    doc.save().then( (data) => {
      User.findByIdAndUpdate(data.poster,
      {$push: {"listQuestion": data._id}},
      function(err, user) {
        if(err) console.log(err);
        else console.log(user);
      })
      res.send(data)
    }).catch( (err) =>{
      res.send(err)
    })
  },

  readOne: (req, res, next) => {
    Question.findOne({_id: req.params.id}).populate([
    {
      path: 'poster',
      model: 'User',
      select: 'username'
    },
    {
      path: 'listAnswer',
      model: 'Answer',
      populate:
      [
        {
          path: 'listComment',
          model: 'Comment',
          select: 'comment, poster',
          populate:
          {
            path: 'poster',
            model: 'User',
            select: 'username',
          }
        },
        {
          path: 'poster',
          populate: 'User',
          select: 'username'
        }
      ]
    }
    ]).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  upvote: (req, res, next) => {
    Question.findById(req.params.id, (err, doc) => {
      let score = doc.score
      if(req.params.id == undefined || req.params.id == null) {
        let index = doc.listGiveScore.findIndex( x => x.user == req.params.user);
        if(index == -1) {
          doc.update({
            score: doc.score + 1,
            $push: {"listGiveScore": {user: req.params.user, tipe: 'upvote'}},
          },
          {new: true, upsert: true},
          (err, data) => {
            if(err) res.send(err)
            else res.send({score : doc.score + 1})
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
            else res.send({score : doc.score + 2})
          })
        }
        else {
          res.send("you already upvote that shit")
        }
      }
      else res.send("Stupid nigga")
    })
  },

  downvote: (req, res, next) => {
    Question.findById(req.params.id, (err, doc) => {
      let score = doc.score
      if(req.params.id == undefined || req.params.id == null) {
        let index = doc.listGiveScore.findIndex( x => x.user == req.params.user);
        if(index == -1) {
          doc.update({
            score: doc.score - 1,
            $push: {"listGiveScore": {user: req.params.user, tipe: 'downvote'}},
          }, {'new': true, upsert: true}, (err, data) => {
            if(err) res.send(err)
            else res.send({score : doc.score - 1})
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
            else res.send({score : doc.score - 2})
          })
        }
        else {
          res.send("you already downvote that shit")
        }
      } else {
        res.send("Supid nigga")
      }
    })
  },

  undoVote: (req, res, next) => {
    Question.findById(req.params.id, (err, doc) => {
      let newScore = doc.score - 1
      doc.update({score: newScore, $pull: {listGiveScore : req.params.user}},
      (err, data) => {
        if(err) res.send(err)
        else res.send(data)
      })
    })
  },

  read: (req, res, next) => {
    Question.find({}).populate({
      path: 'poster',
      model: 'User'
    }).exec((err, docs) => {
        if(err) res.send(err)
        else res.json(docs)
    })
  },

  update: (req, res, next) => {
    Question.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteQuestion: (req, res, next) => {
    Question.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
