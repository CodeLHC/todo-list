import { Task } from "./taskClass";
import { Project } from "./projectClass";
import { domControllers } from "./domControllers";
import { handlers } from "./handlers";
import { projectsModule } from "./projectListFunctions";
//default

console.log("hi Crawfs");

const testTask = new Task(
  "Test this",
  "test that its working desc",
  "5th OCT",
  "high"
);
console.log(testTask);

console.log(projectsModule.getProjects());

projectsModule.makeNewProject("1");

console.log(projectsModule.getProjects());

projectsModule.removeProject("1");

console.log(projectsModule.getProjects());

//function that creates new project
domControllers.updateNavTabs();
handlers.clickEvents();
