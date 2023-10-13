import { domControllers } from "./domControllers";
import { listOfProjects, addProjectToList } from "./listOfProjects";
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
      addProjectToList(projectName.value);
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
      tab.addEventListener("click", (e) => {
        domControllers.removeAllChildNodes(domControllers.content);
        const index = findProjectIndex(e.target.innerText, listOfProjects);
        domControllers.showProjectList(listOfProjects[index].list);
      });
    });
  }
  return { clickEvents };
})();

export { handlers };
