import { domControllers } from "./domControllers";

function resetProjectView(projectListArray) {
  domControllers.removeAllChildNodes(domControllers.content);
  domControllers.showProjectView(projectListArray);
}

function resetNavTabView() {
  domControllers.removeAllChildNodes(domControllers.projectTabContainer);
  domControllers.updateNavTabs();
}

function getPriorityCheckedValue() {
  const taskPriority = document.getElementsByName("taskPriority");
  const checkedValue = Array.from(taskPriority).find((radio) => radio.checked);
  return checkedValue.value;
}

function setPriorityCheckedValue(priority) {
  const taskPriority = document.getElementsByName("taskPriority");
  const priorityButton = Array.from(taskPriority).find(
    (radio) => priority === radio.value
  );
  priorityButton.setAttribute("checked", true);
}

function resetFormAndDialog(form, dialog) {
  form.reset();
  dialog.close();
}

function clearAttributesForCreateForm() {
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDate = document.getElementById("taskDate");
  taskTitle.setAttribute("value", "");
  taskDescription.setAttribute("value", "");
  taskDate.setAttribute("value", "");
}

function getTaskAttributesToEditForm(task) {
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskDate = document.getElementById("taskDate");
  taskTitle.setAttribute("value", task.title);
  taskDescription.setAttribute("value", task.description);
  taskDate.setAttribute("value", task.dueDate);
}

export {
  resetFormAndDialog,
  resetProjectView,
  resetNavTabView,
  getPriorityCheckedValue,
  setPriorityCheckedValue,
  clearAttributesForCreateForm,
  getTaskAttributesToEditForm,
};
