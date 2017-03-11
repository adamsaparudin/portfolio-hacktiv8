const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let skillSchema = new Schema({
  name: {type: String, require: true, unique: true}
}, {
  timestamps: true
})

let Skill = mongoose.model('Skill', skillSchema)

module.exports = Skill
