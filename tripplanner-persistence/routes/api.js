var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');

router.get('/hotels', function(req, res, next) {
  Hotel.findAll()
  .then((hotels) => res.json(hotels))
  .catch(next)
})


router.get('/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then((restaurants) => res.json(restaurants))
  .catch(next)
})


router.get('/activities', function(req, res, next) {
  Activity.findAll()
  .then((activities) => res.json(activities))
  .catch(next)
})


module.exports = router;

// To get all the restaurant names:
// $.get('/api/restaurants').
// then(function(restaurants) {
// restaurants.forEach(function(restaurant) {console.log(restaurant.name)} )}).catch(console.error.bind(console))
