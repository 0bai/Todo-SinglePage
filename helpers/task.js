var db = require('../models');

exports.getTasks = function (req, res) {
	db.Task.find()
		.then(function (tasks) {
			res.json(tasks);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.createTask = function (req, res) {
	req.body.name = req.sanitize(req.body.name);
	db.Task.create(req.body)
		.then(function (newTask) {
			res.status(201).json(newTask);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.getTask = function (req, res) {
	db.Task.findById(req.params.taskID)
		.then(function (foundTask) {
			res.json(foundTask);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.updateTask = function (req, res) {
	db.Task.findOneAndUpdate({_id: req.params.taskID}, req.body, {new: true})
		.then(function (updatedTask) {
			res.json(updatedTask);
		})
		.catch(function (err) {
			res.send(err);
		});
};

exports.deleteTask = function (req, res) {
	db.Task.remove({_id: req.params.taskID})
		.then(function () {
			res.json({message: 'Deleted Successfully'});
		})
		.catch(function (err) {
			res.send(err);
		});
};

module.exports = exports;