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
  console.log(req.body);
  Memo.findOneAndUpdate({_id: req.params.id}, req.body, {}, (err, doc) => {
    if(err) res.send(err)
    else res.send(doc)
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
