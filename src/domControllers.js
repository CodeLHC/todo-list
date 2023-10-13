const contentBox = document.getElementById("content");
import { listOfProjects } from "./listOfProjects";

const domControllers = (() => {
  const projectTabs = document.getElementById("projectTabs");
  const addNewTask = () => {};

  const updateNavTabs = () => {
    for (let i = 0; i < listOfProjects.length; i++) {
      const projecti = document.createElement("li");
      projecti.classList.add("projectTab");
      projecti.innerText = listOfProjects[i].name;
      projectTabs.appendChild(projecti);
    }
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  return { addNewTask, updateNavTabs, removeAllChildNodes, projectTabs };
})();

export { domControllers };
