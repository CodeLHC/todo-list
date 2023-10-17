class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  completesTask() {
    console.log("complete function ran");
  }

  changePriority(priority) {
    this.priority = priority;
  }

  addToProject() {}

  changeDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  //functions
}

export { Task };

// 	- Title
// 	- Description
// 	- dueDate
// 	- Priority
// 	- Notes
// 	- Checklist?
// What project?

//make new todo
// set as complete
//change priority
