var express = require('express')
var firebase = require('firebase')
var logger = require('morgan')
var bodyParser  =require('body-parser')
var cookieParser = require('cookie-parser');


var app = express()

// /* Get the port and set in express */
// var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

var server = require("http").createServer(app);
console.log('Server Started');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var port =process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/homePage.html')
});

var config = {
  apiKey: "AIzaSyCb63mivmhrLKbppO-C4_Y1l2hpBKor5vU",
  authDomain: "throughputcalc.firebaseapp.com",
  databaseURL: "https://throughputcalc.firebaseio.com",
  storageBucket: "throughputcalc.appspot.com",
  messagingSenderId: "262341843633"
};
firebase.initializeApp(config);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}