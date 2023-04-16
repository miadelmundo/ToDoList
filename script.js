$.ajax({
  type: 'GET',
  url: 'https://fewd-todolist-api.onrender.com/tasks?api_key=1',
  dataType: 'json',
  success: function (response, textStatus) {
    response.tasks.forEach(function(task){
      $('#todo-wrap').append('<div>' + task.content + '</div>');
    });    
  },
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  }
});