const neededTask = (() => {
  let task;

  const getTask = () => {
    return task;
  };

  const setTask = (newTask) => {
    task = newTask;
  };

  return { getTask, setTask };
})();

export { neededTask };
