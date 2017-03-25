let Comment = require('../models/comment')
let Answer = require('../models/answer')

module.exports = {

  create: (req, res, next) => {
    let doc = new Comment(req.body)
    doc.save().then( (data) => {
      Answer.findByIdAndUpdate(data.answer,
      {$push: {"listComment": data._id}},
      function(err, answer) {
        if(err) console.log(err);
        else console.log(answer);
      })
      res.send(data)
    }).catch( (err) =>{
      res.send(err)
    })
  },

  read: (req, res, next) => {
    Comment.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    Comment.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteComment: (req, res, next) => {
    Comment.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
