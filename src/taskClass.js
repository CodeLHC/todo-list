class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  completesTask() {
    console.log("complete function ran");
  }

  changePriority(priority) {
    this.priority = priority;
  }

  changeDueDate(dueDate) {
    this.dueDate = dueDate;
  }
}

export { Task };
