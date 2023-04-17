var getTasks = function () {
  $.ajax({
    type: 'GET',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=153',
    dataType: 'json',
    success: function (response, textStatus) {
      $('#todo-wrap').empty();
      response.tasks.forEach(function(task){
        $('#todo-wrap').append('<div class="todo-item"><input type="checkbox"><span>' + task.content + '</span><button class="delete-task" data-id="' + task.id + '">X</button></div>');
      });    
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

getTasks();

var addTask = function() {
  $.ajax({
    type: 'POST',
    url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=153',
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      task: {
        content: $('#task-input').val()
      }
    }),
    success: function (response, textStatus) {
      getTasks();
      $('#task-input').val('')
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}

$('#add-task').on('submit', function (e) {
  e.preventDefault();
  addTask();
});

var deleteTask = function (id) {
  $.ajax({
    type: 'DELETE',
    url: 'https://fewd-todolist-api.onrender.com/tasks/' + id + '?api_key=153',
    success: function (response, textStatus) {
      getTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  });
}


$(document).on('click', '.delete-task', function () {
  deleteTask($(this).data('id'))
});
