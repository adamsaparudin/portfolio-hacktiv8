const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let commentSchema = new Schema({
  answer: {type: Schema.Types.ObjectId, ref: 'Answer'},
  comment: {type: String, required: true},
  poster: {type: Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)
