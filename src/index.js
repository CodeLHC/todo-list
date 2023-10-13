import { Task } from "./taskClass";
import { Project } from "./projectClass";
import { domControllers } from "./domControllers";
import { handlers } from "./handlers";
//default

console.log("hi Crawfs");

const testTask = new Task(
  "Test this",
  "test that its working desc",
  "5th OCT",
  "high"
);
console.log(testTask);

//function that creates new project
domControllers.updateNavTabs();
handlers.clickEvents();
