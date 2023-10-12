class Item {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  isComplete() {
    console.log("complete function ran");
  }

  changePriority() {
    console.log("priority function ran");
  }

  //functions
}

export { Item };

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
