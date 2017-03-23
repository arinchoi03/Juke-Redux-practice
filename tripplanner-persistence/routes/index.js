var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');

router.get('/', function(req, res, next) {
	Promise.all([
		Hotel.findAll({ include: [Place] }),
		Restaurant.findAll({ include: [Place] }),
		Activity.findAll({ include: [Place] })
	])
	.spread(function(hotels, restaurants, activities) {
		res.render('index')
	})
	.catch(next)
})



// Example:
//
// Use Fetch (built in browser API):
//
//   fetch('/api').then(res => json()).then(doSomethingWithIt)
//
// Use jQuery's $.get:
//
//   $.get('/api').then(doSomethingWithIt)
//
// Or:
//
//   $.ajax('/api', {method: 'get'}).then(doSomethingWithIt)
//


// Use Fetch (built in browser API):
//
//   IDK, look it up on MDN?
//
// Use jQuery's $.post:
//
//   $.post('/api/echo', {hello: 'world'}).then(doSomethingWithIt)
//router.post('/api/echo', (req, res) => res.json(req.body))

// router.post('/api/hotels',
// 	(req, res, next) =>
// 		Hotel.create(req.body)
// 			.then(hotel => res.json(hotel))
// 			.catch(next))

module.exports = router;

// get all restaurant names from the 'api page'
//$.get('/api').then(function(data){ data.restaurants.forEach(function(restaurant) { console.log(restaurant.name)})}).catch(console.error.bind(console))
