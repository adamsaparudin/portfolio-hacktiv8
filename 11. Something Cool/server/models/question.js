const mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
let db = require('../db')

let Schema = mongoose.Schema

let questionSchema = new Schema({
    title: {type: String, required: true},
    details: {type:String, required: true},
    score: {type: Number, default: 0},
    poster: {type: Schema.Types.ObjectId, ref: 'User'},
    listGiveScore: [{
      user: String,
      tipe: String
    }],
    listAnswer: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    viewCount: {type: Number, default: 0}
}, {
  timestamps: true
})

module.exports = mongoose.model('Question', questionSchema)
