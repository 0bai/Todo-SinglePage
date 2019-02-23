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
	
	$('.list').on('click', 'span', function (e) {
		e.stopPropagation();
		removeTask($(this).parent());
	});
	
	$('.list').on('click', 'li', function () {
		updateTask($(this));
	});
});


function addTasks(tasks) {
	tasks.forEach(addTask);
}

function addTask(task) {
	var newTask = $('<li class="task">' + task.name + '<span>X</span></li>');
	newTask.data('id', task._id);
	newTask.data('completed', task.completed);
	if (task.completed) newTask.addClass('done');
	$('.list').append(newTask);
}

function createTask() {
	var name = $('#todoInput').val();
	$.post('api/todo', {'name': name})
		.then(addTask);
	$('#todoInput').val('');
}

function removeTask(task) {
	var id = task.data('id');
	$.ajax({
			method: 'DELETE',
			url: 'api/todo/' + id
		})
		.then(function (data) {
			task.remove();
		});
}

function updateTask(task) {
	$.ajax('/api/todo/'+task.data('id'),{
		method: 'PUT',
		data:{'completed': !task.data('completed')}
	})
		.then(function (data) {
			task.toggleClass('done');
			task.data('completed', !task.data('completed'));
		})
		.catch(function (err) {
			console.log(err);
		})
}