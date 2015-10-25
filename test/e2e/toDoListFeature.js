describe('To do list', function() {

    it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do Challenge');
    });

//    it('should add multiple tasks into the array via the enter task box', function() {
//    element(by.model('tdlCtrl.taskDetail')).sendKeys('practice touch typing');
//    element(by.css(':btn')).click();
//    element(by.model('taskDetail')).sendKeys('swim');
//    element(by.css(':btn')).click();
 //   expect(element.all(by.repeater('task in allTasks')).count()).toEqual(2);
 //   });

//    it('should list tasks', function() {

//    var addToDo = element(by.model('tdlCtrl.taskDetail'));
//   var addTaskButton = element(by.css([value="add"]));
//  var toDoList = element.all(by.repeater('task in tdlCtrl.allTtasks'))
//    addToDo.sendKeys('Play the charango');
//    addTaskButton.click();

//    expect(toDoList.count()).toEqual(1);
//    expect(toDoList.get(1).getText()).toEqual('Play the charango');
//    });

//expect(element(by.css('.elementClass')).isPresent()).toBe(true);
//
  });
