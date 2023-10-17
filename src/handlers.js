import { domControllers } from "./domControllers";
import { projectsModule } from "./projectListFunctions";
import { findProjectIndex } from "./findArrayIndex";

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
    // const newTaskButton = document.getElementById("newTask");
    // newTaskButton.addEventListener("click", () => {
    //   dialog.showModal();
    // });

    const projectTabs = document.querySelectorAll(".projectTab");
    projectTabs.forEach((tab) => {
      const listOfProjects = projectsModule.getProjects();
      tab.addEventListener("click", (e) => {
        domControllers.removeAllChildNodes(domControllers.content);
        const index = findProjectIndex(e.target.innerText, listOfProjects);
        domControllers.showProjectView(listOfProjects[index].list);
        projectsModule.setActiveTab(listOfProjects[index].name);
        // console.log(projectsModule.getActiveTab());
      });
    });

    const deleteProjectButtons = document.querySelectorAll(
      ".deleteProjectButton"
    );
    deleteProjectButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        console.log(e);
        // console.log(projectsModule.getProjects());
        // const activeTab = projectsModule.getActiveTab();
        // console.log(projectsModule.getActiveTab());
        // // domControllers.removeAllChildNodes(domControllers.content);
        // projectsModule.removeProject(activeTab);
        // console.log(projectsModule.getProjects());
      });
    });
  }
  return { clickEvents };
})();

export { handlers };
