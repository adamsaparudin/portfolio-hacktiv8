const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  salt: {type: String, required: true},
  name: String,
  write: {type: Schema.Types.ObjectId, ref: 'Note'}
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);
