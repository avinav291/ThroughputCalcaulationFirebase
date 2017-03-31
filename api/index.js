var express = require("express");
var api = express.Router();

var updateCounter = require('./updateCounter');
var updateFlight = require('./updateFlight');

api.post('/updateCounter', function(req, res){
   console.log("updateCounter");
   updateCounter(req, res);
});

api.post('/updateFlight', function(req, res){
   console.log("updateFlight");
   updateFlight(req, res);
});

module.exports = api;