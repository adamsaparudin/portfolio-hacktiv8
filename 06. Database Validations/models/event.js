const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let eventSchema = new Schema({
  name: {type: String, required: true},
  title: {type: String, required: true, unique: true},
  organizer: {type: String, required: true}
}, {
  timestamps: true
})

let Events = mongoose.model('Event', eventSchema)

module.exports = Events
