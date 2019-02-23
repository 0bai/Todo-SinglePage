$(document).ready(function () {
	$.getJSON('/api/todo')
		.then(addTasks)
		.catch(function (err) {
			alert(err);
		});
	
	$('#todoInput').keypress(function (event) {
		if (event.which === 13) {
			createTask();
		}
	});
});

function addTasks(tasks) {
	tasks.forEach(addTask);
}

function addTask(task) {
	var newTask = $('<li class="task">' + task.name + '</li>');
	if (task.completed) newTask.addClass('done');
	$('.list').append(newTask);
}

function createTask() {
	var name = $('#todoInput').val();
	$.post('api/todo', {'name': name})
		.then(addTask);
	$('#todoInput').val('');
}