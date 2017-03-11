let express = require('express');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let users = require('./routes/users');
let skills = require('./routes/skills')


let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/users', users);
app.use('/skills', skills)

app.listen(3000)

module.exports = app;
