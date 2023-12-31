import { projectsModule } from "./projectModuleFunctions";
import { taskModule } from "./taskModuleFunctions";
import {
  resetProjectView,
  resetNavTabView,
  getPriorityCheckedValue,
  resetFormAndDialog,
  setPriorityCheckedValue,
  clearAttributesForCreateForm,
  getTaskAttributesToEditForm,
} from "./helperFunctions";

const onProjectDelete = () => {
  const activeTab = projectsModule.getActiveTab();
  projectsModule.removeProject(activeTab);
  resetNavTabView();
  projectsModule.setActiveTab(projectsModule.getProjects()[0].name);
  const activeProject = projectsModule.getActiveProject();
  resetProjectView(activeProject.getTasks());
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
  const taskForm = document.getElementById("newTaskForm");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDate = document.getElementById("taskDate");
  const newTaskDialog = document.getElementById("newForm");
  const submitTask = document.getElementById("submitTaskButton");
  const activeProject = projectsModule.getActiveProject();
  e.preventDefault();
  if (submitTask.value === "Create") {
    activeProject.addTask(
      taskTitle.value,
      taskDescription.value,
      taskDate.value,
      getPriorityCheckedValue()
    );
  } else if (submitTask.value === "Edit") {
    const taskToUpdate = taskModule.getTask();
    taskToUpdate.editTask(
      taskTitle.value,
      taskDate.value,
      taskDescription.value,
      getPriorityCheckedValue()
    );
  }
  resetFormAndDialog(taskForm, newTaskDialog);
  resetProjectView(activeProject.getTasks());
  taskModule.setTask(undefined);
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
      const submitTaskButton = document.getElementById("submitTaskButton");
      submitTaskButton.setAttribute("value", "Create");
      e.preventDefault();
      clearAttributesForCreateForm();
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

  const activeProject = projectsModule.getActiveProject();
  activeProject.removeTask(taskTitle);

  resetProjectView(activeProject.getTasks());
};

const completeTaskHandler = (taskTitle) => {
  const checkbox = document.getElementById("checkBox");
  checkbox.addEventListener("click", () => completesTask(taskTitle));
};

const completesTask = (taskTitle) => {
  const activeProject = projectsModule.getActiveProject();
  const clickedOnTask = activeProject.findTask(taskTitle);
  clickedOnTask.completeOrUncompletesTask();
  resetProjectView(activeProject.getTasks());
};

const editTaskHandler = (task) => {
  const editTaskButtons = document.querySelectorAll(".editTaskButton");
  editTaskButtons.forEach((button) => {
    button.addEventListener("click", (e) => openEditTaskForm(task, e));
  });
};

const openEditTaskForm = (task, e) => {
  taskModule.setTask(task);
  const newTaskDialog = document.getElementById("newForm");
  const submitTaskButton = document.getElementById("submitTaskButton");

  submitTaskButton.setAttribute("value", "Edit");
  newTaskDialog.showModal();
  e.preventDefault();
  getTaskAttributesToEditForm(task);
  setPriorityCheckedValue(task.priority);
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
        resetProjectView(activeProject.getTasks());
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
  completeTaskHandler,
  editTaskHandler,
};
