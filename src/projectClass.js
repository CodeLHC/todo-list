class Project {
  constructor(name) {
    this.name = name;
    this.list = ["hello " + name];
  }

  //functions

  addTask(item) {
    this.list.push(item);
  }

  removeTask() {}

  //   removeItem(itemToRemove) {
  //     const findItemIndex = this.list.findIndex(itemToRemove);
  //     const updatedShipArray = this.list.splice(findItemIndex, 1);
  //   }

  // removeProject(projectToRemove) {
  //   const projectIndex = findProjectIndex(projectToRemove, findProjectIndex);
  //   listOfProjects.splice(projectIndex, 1);
  //   // domControllers.removeAllChildNodes();
  // }
}

export { Project };

// 	- Name
// Empty project array to push items to?

// iife function to add project to list of projects to choose from on initialization?
