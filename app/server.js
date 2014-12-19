/* INIT AND LIBRARIES */
var express = require('express');
var app = express();

/* MIDDLEWARE */
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);


/* ROUTES */
app.get('/', function(req, res) {

  var locals = {
    myname: "jon"
  };

  locals.mypets [
      "mochi",
      "boba",
      "cookie",
      "cat"
  ]

  res.render('./index.ejs', {
    myname: "so annoying",

  });
});


/* EXPORT THIS FILE AS A MODULE */
module.exports.app = app;