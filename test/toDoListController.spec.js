describe('toDoListController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
  ctrl = $controller('toDoListController');
  }));
});
