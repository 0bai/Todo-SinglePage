$(document).ready(function () {
	$.getJSON('/api/todo')
		.then(addTasks)
		.catch(function (err) {
			alert(err);
		});
});

function addTasks(tasks) {
	tasks.forEach(function (task) {
		var newTask = $('<li class="task">' + task.name + '</li>');
		if (task.completed) newTask.addClass('done');
		$('.list').append(newTask);
	});
}