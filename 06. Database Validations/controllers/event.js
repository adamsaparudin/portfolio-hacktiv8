let Events = require('../models/event')

create = (req, res, next) => {
  let doc = new Events(req.body)
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
},

read = (req, res, next) => {
  Events.find({}).exec( (err, docs) => {
    if (err) res.send(err)
    else res.send(docs)
  })
}

update = (req, res, next) => {
  Events.findById(req.params.id, (err, doc) => {
    if (err) res.send(err)
    doc.update(req.body, (error, data) => {
      if(error) res.send(error)
      else res.send(data)
    })
  })
}

deleteEvent = (req, res, next) => {
  Events.remove({_id: req.params.id}, (err, doc) => {
    if(err) res.send(err)
    else res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  deleteEvent: deleteEvent
}
