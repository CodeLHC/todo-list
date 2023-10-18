import { domControllers } from "./domControllers";
import { projectsModule } from "./projectListFunctions";
import { findArrayIndex } from "./findArrayIndex";
import {
  getPriorityCheckedValue,
  addTaskToProjectArray,
} from "./taskFunctions";

const addDeleteProjectButtonHandlers = (project, array) => {
  const deleteProjectButtons = document.querySelectorAll(
    ".deleteProjectButton"
  );
  const activeTab = projectsModule.getActiveTab();

  deleteProjectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      domControllers.removeAllChildNodes(domControllers.content);
      projectsModule.removeProject(activeTab);
      domControllers.removeAllChildNodes(domControllers.projectTabContainer);
      domControllers.updateNavTabs();
      projectsModule.setActiveTab(array[0].name);
      domControllers.showProjectView(project.list);
    });
  });
};

const addNewTaskEventHandlers = (array) => {
  const newTaskButtons = document.querySelectorAll(".newTaskButton");
  const newTaskDialog = document.getElementById("newForm");
  const taskForm = document.getElementById("newTaskForm");
  newTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      newTaskDialog.showModal();
    });
  });

  const submitTask = document.getElementById("submitTaskButton");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDate = document.getElementById("taskDate");

  submitTask.addEventListener("click", (e) => {
    e.preventDefault();
    const iOfActiveTab = findArrayIndex(projectsModule.getActiveTab(), array);
    addTaskToProjectArray(
      taskTitle.value,
      taskDate.value,
      taskDescription.value,
      getPriorityCheckedValue(),
      array[iOfActiveTab].list
    );

    taskForm.reset();
    newTaskDialog.close();
    domControllers.removeAllChildNodes(domControllers.content);
    domControllers.showProjectView(array[iOfActiveTab].list);
  });
};

const handlers = (() => {
  function addNewProjectButtonHandlers() {
    const projectDialog = document.getElementById("projectDialog");

    const newProjectButton = document.getElementById("newProject");
    newProjectButton.addEventListener("click", () => {
      projectDialog.showModal();
    });

    const projectSubmitButton = document.getElementById("projectSubmit");
    const projectName = document.getElementById("projectName");
    projectSubmitButton.addEventListener("click", (e) => {
      const newProjectForm = document.getElementById("newProjectForm");
      projectsModule.makeNewProject(projectName.value);
      domControllers.removeAllChildNodes(domControllers.projectTabContainer);
      domControllers.updateNavTabs();
      newProjectForm.reset();
      projectDialog.close();
      e.preventDefault();
    });
  }

  const stupidNameForEventListeners = () => {
    const projectTabs = document.querySelectorAll(".projectTab");

    projectTabs.forEach((tab) => {
      const listOfProjects = projectsModule.getProjects();
      tab.addEventListener("click", (e) => {
        domControllers.removeAllChildNodes(domControllers.content);
        const project = projectsModule.getProjectByName(e.target.innerText);
        domControllers.showProjectView(project.list);
        projectsModule.setActiveTab(project.name);

        addDeleteProjectButtonHandlers(project, listOfProjects);
        addNewTaskEventHandlers(listOfProjects);
      });
    });
  };
  return { addNewProjectButtonHandlers, stupidNameForEventListeners };
})();

export { handlers };
