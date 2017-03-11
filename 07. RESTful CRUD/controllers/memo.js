let Memo = require('../models/memo')

create = (req, res, next) => {
  let doc = new Memo(req.body)
  doc.save().then( (data) => {
    res.send(data)
  }).catch( (err) => {
    res.send(err)
  })
}

read = (req, res, next) => {
  Memo.find({}).then( (memos) => {
    res.send(memos)
  }).catch( (err) => {
    res.send(err)
  })
}

update = (req, res, next) => {
  Memo.findById(req.params.id).then( (memo) => {
    data.update(req.body, (error, data) => {
      if (error)
        res.send(error)
      else
        res.send(data)
    })
  })
}

deleteMemo = (req, res, next) => {
  Memo.remove({_id: req.params.id}, (err, memo) => {
    if (err)
      res.send(err)
    else
      res.send(memo)
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  deleteMemo: deleteMemo
}
