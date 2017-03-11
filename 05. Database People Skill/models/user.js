const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, require: true},
  email: String,
  skill: [{
    skillId: {type: Schema.Types.ObjectId, ref: 'Skill'},
    score: Number
  }]
}, {
  timestamps: true
})

let User = mongoose.model('User', userSchema)

module.exports = User
