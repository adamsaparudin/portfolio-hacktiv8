const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

let eventSchema = new Schema({
  name: {type: String, required: [true, 'Name is required']},
  title: {type: String, required: [true, 'Title is required'], unique: [true, 'Title must be fucking unique']},
  organizer: {type: String, required: [true, 'Organizer is required'], validate: [validateEmail, 'Field organizer must be valid email']}
}, {
  timestamps: true
})

let Events = mongoose.model('Event', eventSchema)

module.exports = Events
