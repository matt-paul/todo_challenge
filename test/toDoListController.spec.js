describe('toDoListController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
  ctrl = $controller('toDoListController');
  }));

  it('initialises with an empty add task box', function() {
    expect(ctrl.addTask).toBeUndefined();
  });

  it('initialises with an empty to do list', function() {
    expect(ctrl.toDo).toBeUndefined();
  });

  describe('when adding items', function() {

    var items = ['Improve touch typing', 'Do yoga', 'Learn Angular'];

    it('diplays listed items', function() {
      expect(ctrl.toDo.items).toEqual(items);
    });
  });
});
