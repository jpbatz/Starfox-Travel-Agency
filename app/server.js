/* INIT AND LIBRARIES */
var express = require('express');
var app = express();

/* MIDDLEWARE */
app.use(express.static('./'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'jade');


/* ROUTES */
app.get('/', function(req, res) {
  var locals = {
    myname: "jon"
  };

  locals.mypets = [
      "mochi",
      "boba",
      "cookie",
      "cat"
  ];

  res.render('./index', locals);

});


/* EXPORT THIS FILE AS A MODULE */
module.exports.app = app;