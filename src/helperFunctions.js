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

function resetFormAndDialog(form, dialog) {
  form.reset();
  dialog.close();
}

function findTaskDiv(taskTitle) {
  const taskDivs = document.querySelectorAll(".newTask");
  const searchTerm = taskTitle;
  const neededTaskDiv = [...taskDivs].find((taskDiv) =>
    taskDiv.textContent.includes(searchTerm)
  );
  return neededTaskDiv;
}

export {
  resetFormAndDialog,
  resetProjectView,
  resetNavTabView,
  getPriorityCheckedValue,
  findTaskDiv,
};
