import { domControllers } from "./domControllers";
import { projectsModule } from "./projectListFunctions";
import { findArrayIndex } from "./findArrayIndex";
import {
  getPriorityCheckedValue,
  addTaskToProjectArray,
} from "./taskFunctions";

const handlers = (() => {
  function clickEvents() {
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
        const index = findArrayIndex(e.target.innerText, listOfProjects);
        domControllers.showProjectView(listOfProjects[index].list);
        projectsModule.setActiveTab(listOfProjects[index].name);
        console.log("hi on tab click", projectsModule.getActiveTab());

        const deleteProjectButtons = document.querySelectorAll(
          ".deleteProjectButton"
        );
        const activeTab = projectsModule.getActiveTab();

        deleteProjectButtons.forEach((button) => {
          button.addEventListener("click", () => {
            domControllers.removeAllChildNodes(domControllers.content);
            projectsModule.removeProject(activeTab);
            domControllers.removeAllChildNodes(
              domControllers.projectTabContainer
            );
            domControllers.updateNavTabs();
            projectsModule.setActiveTab(listOfProjects[0].name);
            console.log("active tab on delete:", projectsModule.getActiveTab());
            domControllers.showProjectView(listOfProjects[index].list);
          });
        });

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
          const iOfActiveTab = findArrayIndex(
            projectsModule.getActiveTab(),
            listOfProjects
          );
          console.log(listOfProjects[iOfActiveTab].list);
          addTaskToProjectArray(
            taskTitle.value,
            taskDate.value,
            taskDescription.value,
            getPriorityCheckedValue(),
            listOfProjects[iOfActiveTab].list
          );

          taskForm.reset();
          newTaskDialog.close();
          domControllers.removeAllChildNodes(domControllers.content);
          domControllers.showProjectView(listOfProjects[iOfActiveTab].list);
        });
      });
    });
  };
  return { clickEvents, stupidNameForEventListeners };
})();

export { handlers };
