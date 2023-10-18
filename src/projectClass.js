class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  //functions

  addTask(task) {
    this.list.push(task);
  }

  // removeTask(task) {
  //   const taskToRemove = list.find((t) => t.name === task);
  //   this.list = this.list.filter((t) => t !== taskToRemove);
  // }

  //    const removeProject = (name) => {
  //     const project = listOfProjects.find((p) => p.name === name);
  //     listOfProjects = listOfProjects.filter((p) => project !== p);
  //   };
}

export { Project };

// 	- Name
// Empty project array to push items to?

// iife function to add project to list of projects to choose from on initialization?
