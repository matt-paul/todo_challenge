app.controller('toDoListController', [function() {

  var self = this;

  self.allTasks = [];

  self.addTask = function() {
    self.allTasks.push({ description: self.taskDetail, completed: false} );
    self.taskDetail = ""
    console.log(self.allTasks)
  };

  self.toggleComplete = function(task) {
    return task.completed ? task.completed = false : task.completed = true;
  };

}]);
