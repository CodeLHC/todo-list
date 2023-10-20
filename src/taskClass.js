import { projectsModule } from "./projectListFunctions";
class Task {
  constructor(title, description, dueDate, priority, projectName) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.project = projectName;
  }

  completeOrUncompletesTask() {
    const listOfProjects = projectsModule.getProjects();
    const isDefaultProject = this.project === listOfProjects[0].name;
    if (this.completed === false) {
      this.completed = true;
    } else if (this.completed === true) {
      this.completed = false;
    }
    if (!isDefaultProject) {
      const defaultProject = projectsModule.getProjectByName(
        listOfProjects[0].name
      );
      console.log(defaultProject);
      const taskToRemoveOnDefault = defaultProject.findTask(this.title);
      taskToRemoveOnDefault.completeOrUncompletesTask();
    }
  }

  changePriority(priority) {
    this.priority = priority;
  }

  editTask() {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export { Task };
