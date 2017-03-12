const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  salt: {type: String, required: true},
  name: String
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema);

module.exports = User;
