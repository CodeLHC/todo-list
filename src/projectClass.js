import { Task } from "./taskClass";

import { projectsModule } from "./projectListFunctions";

class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  addTask(title, desc, dueDate, priority) {
    const listOfProjects = projectsModule.getProjects();
    const isDefaultProject = this.name === listOfProjects[0].name;

    const task = new Task(title, desc, dueDate, priority, this.name);

    this.list.push(task);

    if (!isDefaultProject) {
      const defaultProject = projectsModule.getProjectByName(
        listOfProjects[0].name
      );
      defaultProject.addTask(title, desc, dueDate, priority);
    }
  }

  findTask(title) {
    return this.list.find((t) => t.title === title);
  }

  removeTask(title) {
    const taskToRemove = this.findTask(title);

    const listOfProjects = projectsModule.getProjects();
    const isDefaultProject = this.name === listOfProjects[0].name;
    this.list = this.list.filter((t) => t !== taskToRemove);
    if (!isDefaultProject) {
      const defaultProject = projectsModule.getProjectByName(
        listOfProjects[0].name
      );
      defaultProject.removeTask(title);
    }
  }
}

export { Project };
