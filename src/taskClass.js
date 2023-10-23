class Task {
  constructor(title, description, dueDate, priority, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.projectTags = ["All my Tasks", projectName];
  }

  completeOrUncompletesTask() {
    this.completed = !this.completed;
  }

  changePriority(priority) {
    this.priority = priority;
  }

  editTask(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export { Task };
