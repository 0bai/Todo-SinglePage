var mongoose = require("mongoose");
mongoose.set("debug", true);
// mongoose.connect("mongodb://localhost/todo-api");
mongoose.connect("mongodb://35.185.97.76:80/todo-api");
mongoose.Promise = Promise;

module.exports.Task = require('./task');