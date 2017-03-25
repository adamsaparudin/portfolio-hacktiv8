const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1/stackoverflow'
mongoose.Promise = global.Promise
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection Error'))

module.exports = db
