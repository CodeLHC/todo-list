import { listOfProjects } from "./listOfProjects";

const domControllers = (() => {
  const content = document.getElementById("content");
  const projectTabContainer = document.getElementById("projectTabs");
  const addNewTask = () => {};

  const updateNavTabs = () => {
    for (let i = 0; i < listOfProjects.length; i++) {
      const projecti = document.createElement("li");
      projecti.classList.add("projectTab");
      projecti.innerText = listOfProjects[i].name;
      projectTabs.appendChild(projecti);
    }
  };

  const showProjectList = (array) => {
    array.forEach((task) => {
      const newTask = document.createElement("div");
      newTask.innerText = task;
      content.appendChild(newTask);
    });
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  return {
    addNewTask,
    updateNavTabs,
    removeAllChildNodes,
    projectTabContainer,
    showProjectList,
    content,
  };
})();

export { domControllers };
