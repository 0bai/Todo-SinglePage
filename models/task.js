var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'Name Cannot be empty!'
	},
	completed: {
		type: Boolean,
		default: false
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

var Task = mongoose.model('Task', taskSchema);

module.exports = Task;