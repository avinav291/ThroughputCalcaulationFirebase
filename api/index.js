var express = require("express");
var api = express.Router();

var updateCounter = require('./updateCounter');

api.post('/updateCounter', function(req, res){
   console.log("updateCounter");
   updateCounter(req, res);
});

module.exports = api;