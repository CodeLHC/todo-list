import { Project } from "./projectClass";
import { findProjectIndex } from "./findArrayIndex";
import { domControllers } from "./domControllers";

const projectsModule = (() => {
  let listOfProjects = [new Project("All my Tasks"), new Project("same")];
  let activeTab = "All my Tasks";

  const makeNewProject = (name) => {
    const project = new Project(name);
    listOfProjects.push(project);
  };

  const getProjects = () => [...listOfProjects];

  const getActiveTab = () => {
    return activeTab;
  };

  const setActiveTab = (tabName) => {
    activeTab = tabName;
  };

  const removeProject = (name) => {
    const project = listOfProjects.find((p) => p.name === name);
    listOfProjects = listOfProjects.filter((p) => project !== p);
  };

  return {
    makeNewProject,
    removeProject,
    getProjects,
    setActiveTab,
    getActiveTab,
  };
})();

export { projectsModule };
