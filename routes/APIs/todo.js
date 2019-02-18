var express = require('express');
var router = express.Router();
var db = require('../../models');

//Retrieve all tasks
router.get('/', function (req, res) {
	db.Task.find()
		.then(function (tasks) {
			res.json(tasks);
		})
		.catch(function (err) {
			res.send(err);
		});
});

//Create a task
router.post('/', function (req, res) {
	console.log(req.body);
	db.Task.create(req.body)
		.then(function (newTask) {
			res.status(201).json(newTask);
		}).catch(function (err) {
		res.send(err);
	});
});

module.exports = router;