import { Project } from "./projectClass";
const listOfProjects = [new Project("All my Tasks"), new Project("same")];

const addProjectToList = (name) => {
  const project = new Project(name);
  listOfProjects.push(project);
};

export { listOfProjects, addProjectToList };
