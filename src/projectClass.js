class Project {
  constructor(name) {
    this.name = name;
    this.list = [];
  }

  //functions

  addTask(task) {
    this.list.push(task);
  }

  removeTask(title) {
    const taskToRemove = this.list.find((t) => t.title === title);
    this.list = this.list.filter((t) => t !== taskToRemove);
    console.log("hi", this.list, title);
  }
}

export { Project };
