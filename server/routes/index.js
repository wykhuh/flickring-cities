var express = require('express');
var http = require('http');
var places = require('../controllers/places.js');
var flickr = require('../controllers/flickr.js');

var router = express.Router();


router.get('/', function(req, res) {
  var results = [];
  // get the name of a random city
  var city = places.randomPlace();

  // get photos for a random city
  flickr.fetchFlickr(city, function(results){
    res.render('index', { urls: results, place: city });
  });

});


module.exports = router;
