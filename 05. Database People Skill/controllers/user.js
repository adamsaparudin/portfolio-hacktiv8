let User = require('../models/user')

create = (req, res, next) => {
  let doc = new User({
    name: req.body.name,
    email: req.body.email,
    skill: {skillId: req.body.skillId, score: req.body.score}
  })
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}

read = (req, res, next) => {
  User.find({}).populate('skill.skillId').exec( (err, docs) => {
    if (err) res.send(err)
    else res.send(docs)
  })
}

addSkill = (req, res, next) => {
  User.findById(req.params.id, (err, doc) => {
    if (err) res.send(err)
    let skill = doc.skill
    let skillObj = {
      skillId: req.body.skillId,
      score: req.body.score
    }
    skill.push(skillObj)
    doc.update({
      skill: skill
    }, (err, data) => {
      if (err) res.send(err)
      res.send(data)
    })
  })
}

update = (req, res, next) => {
  User.findById(req.params.id, (err, doc) => {
    if(err) res.send(err)
    doc.update({
      name: req.body.name,
      email: req.body.email
    }, (err, data) => {
      if (err) res.send(err)
      res.send(data)
    })
  })
}

deleteUser = (req, res, next) => {
  User.remove({_id: req.params.id}, (err, doc) => {
    if (err) res.send(err)
    else res.send(doc)
  })
}

module.exports = {
  create: create,
  read: read,
  addSkill: addSkill,
  update: update,
  deleteUser: deleteUser
}
