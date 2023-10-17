import { projectsModule } from "./projectListFunctions";
import { handlers } from "./handlers";

const domControllers = (() => {
  const content = document.getElementById("content");
  const projectTabContainer = document.getElementById("projectTabs");

  const addNewTask = () => {};

  const updateNavTabs = () => {
    const listOfProjects = projectsModule.getProjects();
    for (let i = 0; i < listOfProjects.length; i++) {
      const projecti = document.createElement("li");
      projecti.classList.add("projectTab");
      projecti.innerText = listOfProjects[i].name;
      projectTabs.appendChild(projecti);
    }
    handlers.stupidNameForEventListeners();
  };

  const showProjectView = (array) => {
    array.forEach((task) => {
      const newTask = document.createElement("div");
      newTask.innerText = task;
      content.appendChild(newTask);
    });

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProjectButton");
    deleteProjectButton.textContent = "Delete this project";
    content.appendChild(deleteProjectButton);
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
    showProjectView,
    content,
  };
})();

export { domControllers };
