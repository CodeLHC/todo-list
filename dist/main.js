/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domControllers.js":
/*!*******************************!*\
  !*** ./src/domControllers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domControllers: () => (/* binding */ domControllers)\n/* harmony export */ });\n/* harmony import */ var _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModuleFunctions */ \"./src/projectModuleFunctions.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\nconst domControllers = (() => {\n  const content = document.getElementById(\"content\");\n  const projectTabContainer = document.getElementById(\"projectTabs\");\n\n  const updateNavTabs = () => {\n    const listOfProjects = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getProjects();\n    for (let i = 0; i < listOfProjects.length; i++) {\n      const projecti = document.createElement(\"li\");\n      projecti.classList.add(\"projectTab\");\n      projecti.innerText = listOfProjects[i].name;\n      projectTabs.appendChild(projecti);\n    }\n    _handlers__WEBPACK_IMPORTED_MODULE_1__.handlers.eventListenersForProjectViewChange();\n  };\n\n  const showProjectView = (array) => {\n    const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveProject();\n    const defaultProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getProjects()[0];\n\n    generateProjectTasks(array);\n    generateNewTaskButton();\n    if (activeProject !== defaultProject) {\n      generateDeleteProjectButton();\n    }\n  };\n\n  const removeAllChildNodes = (parent) => {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  };\n\n  return {\n    updateNavTabs,\n    removeAllChildNodes,\n    projectTabContainer,\n    showProjectView,\n    content,\n  };\n})();\n\nfunction generateProjectTasks(array) {\n  array.forEach((task) => {\n    const newTask = document.createElement(\"div\");\n    newTask.classList.add(\"newTask\");\n\n    newTask.innerText = `${task.title}\n    ${task.description}\n    ${task.dueDate}\n    ${task.priority}`;\n    content.appendChild(newTask);\n    (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectListHandlers)();\n\n    const checkBox = document.createElement(\"input\");\n    checkBox.type = \"checkbox\";\n    checkBox.name = \"checkBox\";\n    checkBox.value = \"value\";\n    checkBox.id = \"checkBox\";\n    const checkBoxLabel = document.createElement(\"label\");\n    checkBoxLabel.htmlFor = \"checkBox\";\n    newTask.appendChild(checkBox);\n    newTask.appendChild(checkBoxLabel);\n    (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.completeTaskHandler)(task.title);\n\n    newTask.style.textDecorationLine = task.completed ? \"line-through\" : \"none\";\n    checkBox.checked = task.completed;\n\n    const deleteTaskButton = document.createElement(\"button\");\n    deleteTaskButton.classList.add(\"deleteTaskButton\");\n    deleteTaskButton.textContent = \"🗑️\";\n    newTask.appendChild(deleteTaskButton);\n    (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.deleteTaskHandler)(task.title);\n  });\n}\n\nfunction generateNewTaskButton() {\n  const addNewTaskButton = document.createElement(\"button\");\n  addNewTaskButton.classList.add(\"newTaskButton\");\n  addNewTaskButton.textContent = \"Add a new task to this project\";\n  content.appendChild(addNewTaskButton);\n  (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.showNewTaskForm)();\n}\n\nfunction generateDeleteProjectButton() {\n  const deleteProjectButton = document.createElement(\"button\");\n  deleteProjectButton.classList.add(\"deleteProjectButton\");\n  deleteProjectButton.textContent = \"Delete this project\";\n  content.appendChild(deleteProjectButton);\n  (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.addDeleteProjectHandlers)();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domControllers.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDeleteProjectHandlers: () => (/* binding */ addDeleteProjectHandlers),\n/* harmony export */   addTaskToProjectListHandlers: () => (/* binding */ addTaskToProjectListHandlers),\n/* harmony export */   completeTaskHandler: () => (/* binding */ completeTaskHandler),\n/* harmony export */   deleteTaskHandler: () => (/* binding */ deleteTaskHandler),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   showNewTaskForm: () => (/* binding */ showNewTaskForm)\n/* harmony export */ });\n/* harmony import */ var _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectModuleFunctions */ \"./src/projectModuleFunctions.js\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.js\");\n\n\n\nconst onProjectDelete = () => {\n  const activeTab = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveTab();\n  _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.removeProject(activeTab);\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetNavTabView)();\n  _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.setActiveTab(_projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getProjects()[0].name);\n  const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveProject();\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetProjectView)(activeProject.getTasks());\n};\n\nconst addDeleteProjectHandlers = () => {\n  const deleteProjectButtons = document.querySelectorAll(\n    \".deleteProjectButton\"\n  );\n  deleteProjectButtons.forEach((button) => {\n    button.addEventListener(\"click\", onProjectDelete);\n  });\n};\n\nconst onTaskSubmit = (e) => {\n  const taskForm = document.getElementById(\"newTaskForm\");\n  const taskTitle = document.getElementById(\"taskTitle\");\n  const taskDescription = document.getElementById(\"taskDescription\");\n  const taskDate = document.getElementById(\"taskDate\");\n  const newTaskDialog = document.getElementById(\"newForm\");\n  const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveProject();\n  e.preventDefault();\n  activeProject.addTask(\n    taskTitle.value,\n    taskDate.value,\n    taskDescription.value,\n    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.getPriorityCheckedValue)()\n  );\n\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetFormAndDialog)(taskForm, newTaskDialog);\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetProjectView)(activeProject.getTasks());\n};\n\nconst addTaskToProjectListHandlers = () => {\n  const submitTask = document.getElementById(\"submitTaskButton\");\n  submitTask.addEventListener(\"click\", onTaskSubmit);\n};\n\nconst showNewTaskForm = () => {\n  const newTaskButtons = document.querySelectorAll(\".newTaskButton\");\n  const newTaskDialog = document.getElementById(\"newForm\");\n\n  newTaskButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      newTaskDialog.showModal();\n    });\n  });\n};\n\nconst deleteTaskHandler = (taskTitle) => {\n  const deleteTaskButtons = document.querySelectorAll(\".deleteTaskButton\");\n  deleteTaskButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => onTaskDelete(taskTitle, e));\n  });\n};\n\nconst onTaskDelete = (taskTitle, e) => {\n  e.preventDefault();\n\n  const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveProject();\n  activeProject.removeTask(taskTitle);\n\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetProjectView)(activeProject.getTasks());\n};\n\nconst completeTaskHandler = (taskTitle) => {\n  const checkbox = document.getElementById(\"checkBox\");\n  checkbox.addEventListener(\"click\", () => completesTask(taskTitle));\n};\n\nconst completesTask = (taskTitle) => {\n  const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getActiveProject();\n  const clickedOnTask = activeProject.findTask(taskTitle);\n  clickedOnTask.completeOrUncompletesTask();\n  (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetProjectView)(activeProject.getTasks());\n};\n\nconst handlers = (() => {\n  function addNewProjectButtonHandlers() {\n    const projectDialog = document.getElementById(\"projectDialog\");\n    const newProjectForm = document.getElementById(\"newProjectForm\");\n    const newProjectButton = document.getElementById(\"newProject\");\n    newProjectButton.addEventListener(\"click\", () => {\n      projectDialog.showModal();\n    });\n    const projectSubmitButton = document.getElementById(\"projectSubmit\");\n    const projectName = document.getElementById(\"projectName\");\n    projectSubmitButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.makeNewProject(projectName.value);\n      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetNavTabView)();\n      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetFormAndDialog)(newProjectForm, projectDialog);\n    });\n  }\n\n  const eventListenersForProjectViewChange = () => {\n    const projectTabs = document.querySelectorAll(\".projectTab\");\n    projectTabs.forEach((tab) => {\n      tab.addEventListener(\"click\", (e) => {\n        const activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getProjectByName(\n          e.target.innerText\n        );\n        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.resetProjectView)(activeProject.getTasks());\n        _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.setActiveTab(activeProject.name);\n        addDeleteProjectHandlers();\n        addTaskToProjectListHandlers();\n      });\n    });\n  };\n  return { addNewProjectButtonHandlers, eventListenersForProjectViewChange };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPriorityCheckedValue: () => (/* binding */ getPriorityCheckedValue),\n/* harmony export */   resetFormAndDialog: () => (/* binding */ resetFormAndDialog),\n/* harmony export */   resetNavTabView: () => (/* binding */ resetNavTabView),\n/* harmony export */   resetProjectView: () => (/* binding */ resetProjectView)\n/* harmony export */ });\n/* harmony import */ var _domControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domControllers */ \"./src/domControllers.js\");\n\n\nfunction resetProjectView(projectListArray) {\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.content);\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(projectListArray);\n}\n\nfunction resetNavTabView() {\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.projectTabContainer);\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.updateNavTabs();\n}\n\nfunction getPriorityCheckedValue() {\n  const taskPriority = document.getElementsByName(\"taskPriority\");\n  const checkedValue = Array.from(taskPriority).find((radio) => radio.checked);\n  return checkedValue.value;\n}\n\nfunction resetFormAndDialog(form, dialog) {\n  form.reset();\n  dialog.close();\n}\n\n// function findTaskDiv(taskTitle) {\n//   const taskDivs = document.querySelectorAll(\".newTask\");\n//   const searchTerm = taskTitle;\n//   const neededTaskDiv = [...taskDivs].find((taskDiv) =>\n//     taskDiv.textContent.includes(searchTerm)\n//   );\n//   return neededTaskDiv;\n// }\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/helperFunctions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domControllers */ \"./src/domControllers.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n/* harmony import */ var _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectModuleFunctions */ \"./src/projectModuleFunctions.js\");\n\n\n\n\n_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.updateNavTabs();\nconst activeProject = _projectModuleFunctions__WEBPACK_IMPORTED_MODULE_2__.projectsModule.getActiveProject();\n_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(activeProject.getTasks());\n\n_handlers__WEBPACK_IMPORTED_MODULE_1__.handlers.addNewProjectButtonHandlers();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClass */ \"./src/taskClass.js\");\n/* harmony import */ var _taskModuleFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskModuleFunctions */ \"./src/taskModuleFunctions.js\");\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n  }\n\n  addTask(title, desc, dueDate, priority) {\n    const task = new _taskClass__WEBPACK_IMPORTED_MODULE_0__.Task(title, desc, dueDate, priority, this.name);\n    _taskModuleFunctions__WEBPACK_IMPORTED_MODULE_1__.taskModule.addTask(task);\n  }\n\n  getTasks() {\n    const listOfTasks = _taskModuleFunctions__WEBPACK_IMPORTED_MODULE_1__.taskModule.getTasks();\n    return listOfTasks.filter((task) => {\n      return task.projectTags.includes(this.name);\n    });\n  }\n\n  findTask(title) {\n    return this.getTasks().find((t) => t.title === title);\n  }\n\n  removeTask(title) {\n    _taskModuleFunctions__WEBPACK_IMPORTED_MODULE_1__.taskModule.removeTasks(title);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectClass.js?");

/***/ }),

/***/ "./src/projectModuleFunctions.js":
/*!***************************************!*\
  !*** ./src/projectModuleFunctions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsModule: () => (/* binding */ projectsModule)\n/* harmony export */ });\n/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass */ \"./src/projectClass.js\");\n\n\nconst projectsModule = (() => {\n  let listOfProjects = [new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(\"All my Tasks\"), new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(\"same\")];\n  let activeTab = \"All my Tasks\";\n\n  const makeNewProject = (name) => {\n    const project = new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n    listOfProjects.push(project);\n  };\n\n  const getProjects = () => [...listOfProjects];\n\n  const getActiveTab = () => {\n    return activeTab;\n  };\n\n  const getActiveProject = () => {\n    return getProjectByName(activeTab);\n  };\n\n  const setActiveTab = (tabName) => {\n    activeTab = tabName;\n  };\n\n  const removeProject = (name) => {\n    const project = listOfProjects.find((p) => p.name === name);\n    listOfProjects = listOfProjects.filter((p) => project !== p);\n  };\n\n  const getProjectByName = (name) => {\n    return listOfProjects.find((p) => p.name === name);\n  };\n\n  return {\n    makeNewProject,\n    removeProject,\n    getProjects,\n    setActiveTab,\n    getActiveTab,\n    getProjectByName,\n    getActiveProject,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectModuleFunctions.js?");

/***/ }),

/***/ "./src/taskClass.js":
/*!**************************!*\
  !*** ./src/taskClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority, projectName) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n    this.projectTags = [\"All my Tasks\", projectName];\n  }\n\n  completeOrUncompletesTask() {\n    this.completed = !this.completed;\n  }\n\n  changePriority(priority) {\n    this.priority = priority;\n  }\n\n  editTask() {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskClass.js?");

/***/ }),

/***/ "./src/taskModuleFunctions.js":
/*!************************************!*\
  !*** ./src/taskModuleFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   taskModule: () => (/* binding */ taskModule)\n/* harmony export */ });\nconst taskModule = (() => {\n  let tasks = [];\n\n  const getTasks = () => [...tasks];\n\n  const removeTasks = (title) => {\n    const task = tasks.find((t) => t.title === title);\n    tasks = tasks.filter((t) => task !== t);\n  };\n\n  const addTask = (task) => {\n    tasks.push(task);\n  };\n\n  return { getTasks, removeTasks, addTask };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskModuleFunctions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;