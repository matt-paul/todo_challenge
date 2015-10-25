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
    var testItems = [
      { description: 'Yoga',
      completed: false
      }
    ]

    it('adds items to the main task array', function() {
      ctrl.taskDetail = 'Yoga';
      ctrl.addTask();
      expect(ctrl.allTasks).toEqual(testItems);
      expect(ctrl.allTasks.length).toEqual(1);
    });

    it('is marked as needing completion when created', function() {
      ctrl.taskDetail = 'Yoga';
      ctrl.addTask();
      expect(ctrl.allTasks[0].completed).toBe(false);
    });
  });

  describe('when completing tasks', function() {
    it('property changes to being completed when task done', function() {
      ctrl.taskDetail = 'Yoga';
      ctrl.addTask();
      expect(ctrl.allTasks[0].completed).toBe(false);
      ctrl.toggleComplete(ctrl.allTasks[0]);
      expect(ctrl.allTasks[0].completed).toBe(true);
    });
  });
});
