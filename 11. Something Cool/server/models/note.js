const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let nodeSchema = new Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: 'User'}
  slug: {type: String, unique: true}
}, {
  timestamps: true
})

module.exports = mongoose.model('Note', nodeSchema);
