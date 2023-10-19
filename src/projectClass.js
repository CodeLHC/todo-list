import { Task } from "./taskClass";
class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addTask(title, desc, dueDate, priority) {
    const task = new Task(title, desc, dueDate, priority);
    this.list.push(task);
  }

  removeTask(title) {
    const taskToRemove = this.list.find((t) => t.title === title);
    this.list = this.list.filter((t) => t !== taskToRemove);
  }
}

export { Project };
