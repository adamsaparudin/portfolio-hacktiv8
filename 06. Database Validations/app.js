let  express = require('express');
let  bodyParser = require('body-parser');
let path = require('path')

let  index = require('./routes/index');
let  users = require('./routes/users');
let  events = require('./routes/events')


let  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/events', events)

app.listen(3000)

module.exports = app;
