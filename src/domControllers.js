import { projectsModule } from "./projectListFunctions";
import { handlers } from "./handlers";

const domControllers = (() => {
  const content = document.getElementById("content");
  const projectTabContainer = document.getElementById("projectTabs");

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
      newTask.innerText = `${task.title}
      ${task.description}
      ${task.dueDate}
      ${task.priority}`;
      content.appendChild(newTask);
    });

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.classList.add("newTaskButton");
    addNewTaskButton.textContent = "Add a new task to this project";
    content.appendChild(addNewTaskButton);

    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.add("deleteProjectButton");
    deleteProjectButton.textContent = "Delete this project";
    content.appendChild(deleteProjectButton);
    handlers.stupidNameForEventListeners();
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  return {
    updateNavTabs,
    removeAllChildNodes,
    projectTabContainer,
    showProjectView,
    content,
  };
})();

export { domControllers };
