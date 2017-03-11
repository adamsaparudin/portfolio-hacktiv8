let Skill = require('../models/skill')

create = (req, res, next) => {
  let doc = new Skill(req.body)
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
},

read = (req, res, next) => {
  Skill.find({}).exec( (err, docs) => {
    if (err) res.send(err)
    else res.send(docs)
  })
}

update = (req, res, next) => {
  Skill.findById(req.params.id, (err, doc) => {
    if (err) res.send(err)
    doc.update(req.body, (error, data) => {
      if(error) res.send(error)
      else res.send(data)
    })
  })
}

deleteSkill = (req, res, next) => {
  Skill.remove({_id: req.params.id}, (err, doc) => {
    if(err) res.send(err)
    else res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  deleteSkill: deleteSkill
}
