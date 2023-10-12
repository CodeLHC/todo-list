class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  //functions

  addItem(item) {
    this.list.push(item);
  }

  //   removeItem(itemToRemove) {
  //     const findItemIndex = this.list.findIndex(itemToRemove);
  //     const updatedShipArray = this.list.splice(findItemIndex, 1);
  //   }
}

export { Project };

// 	- Name
// Empty project array to push items to?

// iife function to add project to list of projects to choose from on initialization?
