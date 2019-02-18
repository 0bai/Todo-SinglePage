var express = require('express');
var router = express.Router();
var helper = require('../../helpers/task');

//Retrieve all tasks
router.get('/', helper.getTasks);

//Create a task
router.post('/', helper.createTask);

//Show a task
router.get('/:taskID', helper.getTask);

//Update a task
router.put('/:taskID', helper.updateTask);

//Delete Task
router.delete('/:taskID', helper.deleteTask);

module.exports = router;