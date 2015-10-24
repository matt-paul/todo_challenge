app.controller('toDoListController', [function() {

  var self = this;

  self.allTasks = [];

  self.addTask = function() {
    self.allTasks.push(self.taskDetail);
    self.taskDetail = ""
    console.log(self.allTasks)
  };

  }]);
