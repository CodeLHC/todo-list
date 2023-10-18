import { Task } from "./taskClass";

function getPriorityCheckedValue() {
  const taskPriority = document.getElementsByName("taskPriority");
  const checkedValue = Array.from(taskPriority).find((radio) => radio.checked);
  return checkedValue.value;
}

function addTaskToProjectArray(title, desc, dueDate, priority, listArray) {
  const task = new Task(title, desc, dueDate, priority);
  listArray.push(task);
}

export { getPriorityCheckedValue, addTaskToProjectArray };
