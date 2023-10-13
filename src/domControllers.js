const contentBox = document.getElementById("content");
import { listOfProjects } from "./listOfProjects";

//add project to the dom per project in array
// show

const domControllers = (() => {
  const addNewTask = () => {};
  const updateNavTabs = () => {
    const projectTabs = document.getElementById("projectTabs");

    for (let i = 0; i < listOfProjects.length; i++) {
      const projecti = document.createElement("li");
      projecti.innerText = listOfProjects[i].name;
      projectTabs.appendChild(projecti);
    }

    // listOfProjects.forEach((project) => {
    //   projectTabs.appendChild(
    //     (document.createElement("li").innerText = project)
    //   );
    // });

    //for each item on the list of projects array
    // make a new li item and populate with the string
  };

  return { addNewTask, updateNavTabs };
})();

export { domControllers };
