var express = require('express')
var firebase = require('firebase')
var morgan = require('morgan')
var bodyParser  =require('bodyParser')
var cookieParser = require('cookie-parser');


var app = express()

var server = require("http").createServer(app);
console.log('Server Started');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(3000);

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