const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1/testing_controllers'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB conn error'))

module.exports = db;
