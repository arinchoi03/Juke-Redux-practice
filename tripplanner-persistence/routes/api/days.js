var Promise = require('bluebird');
var router = require('express').Router();

var db = require('../../models');
var Hotel = db.model('hotel');
var Restaurant = db.model('restaurant');
var Activity = db.model('activity');
var Place = db.model('place');
var Day = db.model('day');

module.exports = router;



router.get('/', function(req, res, next){
	res.json({hello: 'world'});
});

router.post('/', function(req, res, next){
	// Day.create({number: req.params.day})
	// .then(function(newDay) {
	// 	console.log('new day created!');
	// 	res.send(newDay.id);
	// })
	// .catch(next);
});

router.get('/:day', function(req, res, next){

});

router.delete('/:day', function(req, res, next){});

router.post('/:day/hotel', function(req, res, next) {});
router.delete('/:day/hotel', function(req, res, next) {});

router.post('/:day/restaurants', function(req, res, next) {});
router.delete('/:day/restaurants', function(req, res, next) {});

router.post('/:day/activities', function(req, res, next) {});
router.delete('/:day/activities', function(req, res, next) {});


	//find day, and find foreign key of restuarant
	//var dayId = req.params.day;
	// var theDay = Day.findById({
	// 	where: {
	// 		id: dayId
	// 	}
	// });
	// 'day_restaurant'.findAll({
	// 	where: {
	// 		dayId: req.params.day
	// 	}
	// }).
	// then(function(restaurants) {
	// 	restaurants.forEach(restaurant => console.log(restaurant.name))
	// })
	//.catch(next);
	//find restaurants associated with theDay
	// Restaurant.findAll({
	// 	where: {

	// 	}, 
	// 	{ include: [Day] }).then(function(restaurants) {
	// 	
	// })

