app.controller('toDoListController', [function() {

  var self = this;

  self.allTasks = [];

  self.addTask = function() {
    self.allTasks.push({ task: self.taskDetail, completed: false} );
    self.taskDetail = ""
    console.log(self.allTasks)
  };

  }]);
