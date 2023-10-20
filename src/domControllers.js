import { projectsModule } from "./projectModuleFunctions";
import {
  handlers,
  addDeleteProjectHandlers,
  addTaskToProjectListHandlers,
  showNewTaskForm,
  deleteTaskHandler,
  completeTaskHandler,
} from "./handlers";

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
    handlers.eventListenersForProjectViewChange();
  };

  const showProjectView = (array) => {
    const activeProject = projectsModule.getActiveProject();
    const defaultProject = projectsModule.getProjects()[0];

    generateProjectTasks(array);
    generateNewTaskButton();
    if (activeProject !== defaultProject) {
      generateDeleteProjectButton();
    }
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

function generateProjectTasks(array) {
  array.forEach((task) => {
    const newTask = document.createElement("div");
    newTask.classList.add("newTask");

    newTask.innerText = `${task.title}
    ${task.description}
    ${task.dueDate}
    ${task.priority}`;
    content.appendChild(newTask);
    addTaskToProjectListHandlers();

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.name = "checkBox";
    checkBox.value = "value";
    checkBox.id = "checkBox";
    const checkBoxLabel = document.createElement("label");
    checkBoxLabel.htmlFor = "checkBox";
    newTask.appendChild(checkBox);
    newTask.appendChild(checkBoxLabel);
    completeTaskHandler(task.title);

    newTask.style.textDecorationLine = task.completed ? "line-through" : "none";
    checkBox.checked = task.completed;

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.classList.add("deleteTaskButton");
    deleteTaskButton.textContent = "🗑️";
    newTask.appendChild(deleteTaskButton);
    deleteTaskHandler(task.title);
  });
}

function generateNewTaskButton() {
  const addNewTaskButton = document.createElement("button");
  addNewTaskButton.classList.add("newTaskButton");
  addNewTaskButton.textContent = "Add a new task to this project";
  content.appendChild(addNewTaskButton);
  showNewTaskForm();
}

function generateDeleteProjectButton() {
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.classList.add("deleteProjectButton");
  deleteProjectButton.textContent = "Delete this project";
  content.appendChild(deleteProjectButton);
  addDeleteProjectHandlers();
}

export { domControllers };
