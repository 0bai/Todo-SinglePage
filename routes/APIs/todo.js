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

//Show a task
router.get('/:taskID', function (req, res) {
	db.Task.findById(req.params.taskID)
		.then(function (foundTask) {
			res.json(foundTask);
		}).catch(function (err) {
		res.send(err);
	});
});

//Update a task
router.put('/:taskID', function (req, res) {
	db.Task.findOneAndUpdate({_id: req.params.taskID}, req.body, {new: true})
		.then(function (updatedTask) {
			res.json(updatedTask);
		}).catch(function (err) {
		res.send(err);
	});
});

//Delete Task
router.delete('/:taskID', function (req, res) {
	db.Task.remove({_id: req.params.taskID})
		.then(function () {
			res.json({message: 'Deleted Successfully'});
		}).catch(function (err) {
		res.send(err);
	});
});


module.exports = router;