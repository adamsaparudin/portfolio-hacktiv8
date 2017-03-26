let User = require('../models/user')
let jwt = require('jsonwebtoken')

module.exports = {

  login: (req, res, next) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    })
    .then( (data) => {
      if (!data)
        res.send("User not found")
      else {
        data.password = null
        let token = jwt.sign(data, 'INISECRETTOKEN')
        res.send(token)
      }
    })
    .catch( (err) => {
      res.send(err)
    })
  },

  create: (req, res, next) => {
    let doc = new User(req.body)
    doc.save().then( (data) => {
      res.send(data)
    }).catch( (err) =>{
      res.send(err)
    })
  },

  read: (req, res, next) => {
    User.find({}).exec((err, docs) => {
        if(err) res.send(err)
        res.json(docs)
    })
  },

  update: (req, res, next) => {
    User.findById(req.params.id, (err, doc) => {
      if (err) res.send(err)
      else {
        doc.update(req.body, (error, data) => {
          if(error) res.send(error)
          else res.send(data)
        })
      }
    })
  },

  deleteUser: (req, res, next) => {
    User.remove({_id : req.params.id}, (err, doc) => {
      if (err) res.send(err)
      else res.send(doc)
    })
  }

}
