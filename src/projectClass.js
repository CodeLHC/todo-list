import { Task } from "./taskClass";
import { taskModule } from "./taskModuleFunctions";

class Project {
  constructor(name) {
    this.name = name;
  }

  addTask(title, desc, dueDate, priority) {
    const task = new Task(title, desc, dueDate, priority, this.name);
    taskModule.addTask(task);
  }

  getTasks() {
    const listOfTasks = taskModule.getTasks();
    return listOfTasks.filter((task) => {
      return task.projectTags.includes(this.name);
    });
  }

  findTask(title) {
    return this.getTasks().find((t) => t.title === title);
  }

  removeTask(title) {
    taskModule.removeTasks(title);
  }
}

export { Project };
