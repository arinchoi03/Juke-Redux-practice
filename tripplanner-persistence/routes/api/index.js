var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');

module.exports = router;

router.get('/api', (req, res, next) =>
	Promise.props({
		hotels: Hotel.findAll({ include: [Place] }),
		restaurants: Restaurant.findAll({ include: [Place] }),
		activities: Activity.findAll({ include: [Place] })
	})
		.then(data => res.json(data))
		.catch(next)
)