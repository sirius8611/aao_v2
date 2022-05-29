class Task {
  static taskList = [];

  static printTaskList() {
    console.log(this.taskList);
  }

  static addTask(task) {
    console.log(this);
    this.taskList.push(task);
  }

  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
  }
}

const laundry = new Task("laundry");
// console.log(laundry);
// console.log(Task.taskList);
// console.log(Task.printTaskList());
// console.log(laundry.printTaskList());
console.log(laundry.taskList);
