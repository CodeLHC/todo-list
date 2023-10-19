import { domControllers } from "./domControllers";
import { projectsModule } from "./projectListFunctions";
import { findArrayIndex } from "./findArrayIndex";
import {
  getPriorityCheckedValue,
  addTaskToProjectArray,
} from "./taskFunctions";

const onProjectDelete = () => {
  domControllers.removeAllChildNodes(domControllers.content);

  const activeTab = projectsModule.getActiveTab();
  projectsModule.removeProject(activeTab);

  domControllers.removeAllChildNodes(domControllers.projectTabContainer);

  domControllers.updateNavTabs();

  projectsModule.setActiveTab(projectsModule.getProjects()[0].name);
  domControllers.showProjectView(projectsModule.getProjects()[0].list);
};

export const addDeleteProjectHandlers = () => {
  const deleteProjectButtons = document.querySelectorAll(
    ".deleteProjectButton"
  );
  deleteProjectButtons.forEach((button) => {
    button.addEventListener("click", onProjectDelete);
  });
};

const onTaskSubmit = (e) => {
  const listOfProjects = projectsModule.getProjects();
  const activeTab = projectsModule.getActiveTab();
  const taskForm = document.getElementById("newTaskForm");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDate = document.getElementById("taskDate");
  const newTaskDialog = document.getElementById("newForm");
  e.preventDefault();
  const activeProject = projectsModule.getProjectByName(activeTab);
  addTaskToProjectArray(
    taskTitle.value,
    taskDate.value,
    taskDescription.value,
    getPriorityCheckedValue(),
    activeProject.list
  );
  if (activeTab !== listOfProjects[0].name) {
    addTaskToProjectArray(
      taskTitle.value,
      taskDate.value,
      taskDescription.value,
      getPriorityCheckedValue(),
      listOfProjects[0].list
    );
  }
  taskForm.reset();
  newTaskDialog.close();
  domControllers.removeAllChildNodes(domControllers.content);
  domControllers.showProjectView(activeProject.list);
};

export const addTaskToProjectListHandlers = () => {
  const submitTask = document.getElementById("submitTaskButton");
  submitTask.addEventListener("click", onTaskSubmit);
};

export const showNewTaskForm = () => {
  const newTaskButtons = document.querySelectorAll(".newTaskButton");
  const newTaskDialog = document.getElementById("newForm");

  newTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      newTaskDialog.showModal();
    });
  });
};

export const deleteTaskHandler = (taskTitle) => {
  const deleteTaskButtons = document.querySelectorAll(".deleteTaskButton");
  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => onTaskDelete(taskTitle, e));
  });
};

const onTaskDelete = (taskTitle, e) => {
  e.preventDefault();
  const listOfProjects = projectsModule.getProjects();
  const activeTab = projectsModule.getActiveTab();
  const activeProject = projectsModule.getProjectByName(activeTab);
  activeProject.removeTask(taskTitle);
  if (activeTab !== listOfProjects[0].name) {
    listOfProjects[0].removeTask(taskTitle);
  }
  domControllers.removeAllChildNodes(domControllers.content);
  domControllers.showProjectView(activeProject.list);
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
      e.preventDefault();

      const newProjectForm = document.getElementById("newProjectForm");
      projectsModule.makeNewProject(projectName.value);
      domControllers.removeAllChildNodes(domControllers.projectTabContainer);
      domControllers.updateNavTabs();
      newProjectForm.reset();
      projectDialog.close();
    });
  }

  const stupidNameForEventListeners = () => {
    const projectTabs = document.querySelectorAll(".projectTab");

    projectTabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        domControllers.removeAllChildNodes(domControllers.content);
        const project = projectsModule.getProjectByName(e.target.innerText);
        domControllers.showProjectView(project.list);
        projectsModule.setActiveTab(project.name);

        addDeleteProjectHandlers();
        addTaskToProjectListHandlers();
        // deleteTaskHandler(task.title);
      });
    });
  };
  return { addNewProjectButtonHandlers, stupidNameForEventListeners };
})();

export { handlers };
