import { Item } from "./itemClass";
import { Project } from "./projectClass";

// const listOfProjects = []

console.log("hi Crawfs");

const testItem = new Item(
  "Test this",
  "test that its working desc",
  "5th OCT",
  "high"
);
console.log(testItem);

const testProject = new Project("testProject Name");

console.log(testProject);
testProject.addItem(testItem);

console.log(testProject.list);
