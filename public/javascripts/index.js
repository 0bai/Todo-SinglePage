$(document).ready(function () {
	$.getJSON('/api/todo')
		.then(addTasks)
		.catch(function (err) {
			alert(err);
		});
});

function addTasks(tasks) {
	tasks.forEach(function (task) {
		$('.list').append('<li class="task">' + task.name + '</li>');
	});
}