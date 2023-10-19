import { projectsModule } from "./projectListFunctions";
import {
  resetProjectView,
  resetNavTabView,
  getPriorityCheckedValue,
  resetFormAndDialog,
} from "./helperFunctions";

const onProjectDelete = () => {
  const activeTab = projectsModule.getActiveTab();
  projectsModule.removeProject(activeTab);
  resetNavTabView();
  projectsModule.setActiveTab(projectsModule.getProjects()[0].name);
  resetProjectView(projectsModule.getActiveProject().list);
};

const addDeleteProjectHandlers = () => {
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
  const activeProject = projectsModule.getActiveProject();
  e.preventDefault();
  activeProject.addTask(
    taskTitle.value,
    taskDate.value,
    taskDescription.value,
    getPriorityCheckedValue()
  );
  if (activeTab !== listOfProjects[0].name) {
    listOfProjects[0].addTask(
      taskTitle.value,
      taskDate.value,
      taskDescription.value,
      getPriorityCheckedValue()
    );
  }
  resetFormAndDialog(taskForm, newTaskDialog);
  resetProjectView(activeProject.list);
};

const addTaskToProjectListHandlers = () => {
  const submitTask = document.getElementById("submitTaskButton");
  submitTask.addEventListener("click", onTaskSubmit);
};

const showNewTaskForm = () => {
  const newTaskButtons = document.querySelectorAll(".newTaskButton");
  const newTaskDialog = document.getElementById("newForm");

  newTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      newTaskDialog.showModal();
    });
  });
};

const deleteTaskHandler = (taskTitle) => {
  const deleteTaskButtons = document.querySelectorAll(".deleteTaskButton");
  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => onTaskDelete(taskTitle, e));
  });
};

const onTaskDelete = (taskTitle, e) => {
  e.preventDefault();
  const defaultProject = projectsModule.getProjects()[0];
  const activeTab = projectsModule.getActiveTab();
  const activeProject = projectsModule.getActiveProject();
  activeProject.removeTask(taskTitle);
  if (activeTab !== defaultProject.name) {
    defaultProject.removeTask(taskTitle);
  }
  resetProjectView(activeProject.list);
};

const handlers = (() => {
  function addNewProjectButtonHandlers() {
    const projectDialog = document.getElementById("projectDialog");
    const newProjectForm = document.getElementById("newProjectForm");
    const newProjectButton = document.getElementById("newProject");
    newProjectButton.addEventListener("click", () => {
      projectDialog.showModal();
    });
    const projectSubmitButton = document.getElementById("projectSubmit");
    const projectName = document.getElementById("projectName");
    projectSubmitButton.addEventListener("click", (e) => {
      e.preventDefault();
      projectsModule.makeNewProject(projectName.value);
      resetNavTabView();
      resetFormAndDialog(newProjectForm, projectDialog);
    });
  }

  const eventListenersForProjectViewChange = () => {
    const projectTabs = document.querySelectorAll(".projectTab");
    projectTabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const activeProject = projectsModule.getProjectByName(
          e.target.innerText
        );
        resetProjectView(activeProject.list);
        projectsModule.setActiveTab(activeProject.name);
        addDeleteProjectHandlers();
        addTaskToProjectListHandlers();
      });
    });
  };
  return { addNewProjectButtonHandlers, eventListenersForProjectViewChange };
})();

export {
  handlers,
  deleteTaskHandler,
  showNewTaskForm,
  addTaskToProjectListHandlers,
  addDeleteProjectHandlers,
};
