const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let answerSchema = new Schema({
  question: {type: Schema.Types.ObjectId, ref: 'Question'},
  answer: {type: String, required: true},
  score: {type: Number, default: 0},
  poster: {type: Schema.Types.ObjectId, ref: 'User'},
  listGiveScore: [{
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    tipe: String
  }],
  listComment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {
  timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema)
