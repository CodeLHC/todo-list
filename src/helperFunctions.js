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
  form.close();
  dialog.close();
}

export {
  resetFormAndDialog,
  resetProjectView,
  resetNavTabView,
  getPriorityCheckedValue,
};
