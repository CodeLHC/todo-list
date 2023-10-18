import { Task } from "./taskClass";
import { Project } from "./projectClass";
import { domControllers } from "./domControllers";
import { handlers } from "./handlers";
import { projectsModule } from "./projectListFunctions";

const testTask = new Task(
  "Test this",
  "test that its working desc",
  "5th OCT",
  "high"
);
// console.log(testTask);

// testTask.changePriority("low");

// console.log(testTask);

// console.log(new Date().toLocaleDateString("en-UK"));

// const project = new Project("test");

// console.log(project);

// project.addTask("2");

// project.addTask("3");

// console.log(project);

// project.removeTask("2");

// console.log(project);

//function that creates new project
domControllers.updateNavTabs();
const activeTab = projectsModule.getActiveTab();
const activeProject = projectsModule.getProjectByName(activeTab);
domControllers.showProjectView(activeProject.list);

handlers.addNewProjectButtonHandlers();
