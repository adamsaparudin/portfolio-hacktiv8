let passport = require('passport');
let Strategy = require('passport-local').Strategy;
let User = require('./models/user')
let hashPass = require('./helper/hash')

passport.use(new Strategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
function(req, username, password, cb) {
  User.findOne({email: username}, (err, doc) => {
    console.log("He come here ?");
    if(err) {return cb(err)}
    if(!doc) {return cb(null, false)}
    if(doc.password !== hashPass(password, doc.salt)) {return cb(null, false)}
    return cb(null, doc)
  });
}));

  passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
