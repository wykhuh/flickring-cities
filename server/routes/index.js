var express = require('express');
var http = require('http');
var places = require('../controllers/places.js');
var flickr = require('../controllers/flickr.js');

var router = express.Router();


router.get('/', function(req, res) {
  var results = [];
  // get the name of a random city
  var place = places.randomPlace();

  // get photos for a random city
  // search flickr for city name;
  // send city and country to index page
  flickr.fetchFlickr(place.city, function(results){
    res.render('index', { urls: results, place: place.place });
  });

});


module.exports = router;
