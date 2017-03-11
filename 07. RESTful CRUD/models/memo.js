const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let memoModel = new Schema({
  title: {type: String, required: true},
  details: {type: String},
  done: {type: Boolean, default: false},
  dueDate: Date
}, {
  timestamps: true
})

let Memo = mongoose.model('Memo', memoModel)

module.exports = Memo;
