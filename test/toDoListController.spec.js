describe('toDoListController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
  ctrl = $controller('toDoListController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.allTasks.length).toBe(0);
  });

  describe('when adding tasks', function() {
    var items = ['Yoga']

    it('adds items to the main task array', function() {
      ctrl.taskDetail = 'Yoga';
      ctrl.addTask();
      expect(ctrl.allTasks).toEqual(items);
    });

  });
});
