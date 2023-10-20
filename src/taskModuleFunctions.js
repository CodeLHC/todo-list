const taskModule = (() => {
  let tasks = [];

  const getTasks = () => [...tasks];

  const removeTasks = (title) => {
    const task = tasks.find((t) => t.title === title);
    tasks = tasks.filter((t) => task !== t);
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  return { getTasks, removeTasks, addTask };
})();

export { taskModule };
