import { Project } from "./projectClass";

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

  const getActiveProject = () => {
    return getProjectByName(activeTab);
  };

  const setActiveTab = (tabName) => {
    activeTab = tabName;
  };

  const removeProject = (name) => {
    const project = listOfProjects.find((p) => p.name === name);
    listOfProjects = listOfProjects.filter((p) => project !== p);
  };

  const getProjectByName = (name) => {
    return listOfProjects.find((p) => p.name === name);
  };

  return {
    makeNewProject,
    removeProject,
    getProjects,
    setActiveTab,
    getActiveTab,
    getProjectByName,
    getActiveProject,
  };
})();

export { projectsModule };
