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

  let task;

  const getTask = () => {
    return task;
  };

  const setTask = (newTask) => {
    task = newTask;
  };

  return { getTasks, removeTasks, addTask, getTask, setTask };
})();

export { taskModule };
