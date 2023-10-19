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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domControllers: () => (/* binding */ domControllers)\n/* harmony export */ });\n/* harmony import */ var _projectListFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectListFunctions */ \"./src/projectListFunctions.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n\n\n\nconst domControllers = (() => {\n  const content = document.getElementById(\"content\");\n  const projectTabContainer = document.getElementById(\"projectTabs\");\n\n  const updateNavTabs = () => {\n    const listOfProjects = _projectListFunctions__WEBPACK_IMPORTED_MODULE_0__.projectsModule.getProjects();\n    for (let i = 0; i < listOfProjects.length; i++) {\n      const projecti = document.createElement(\"li\");\n      projecti.classList.add(\"projectTab\");\n      projecti.innerText = listOfProjects[i].name;\n      projectTabs.appendChild(projecti);\n    }\n\n    _handlers__WEBPACK_IMPORTED_MODULE_1__.handlers.stupidNameForEventListeners();\n  };\n\n  const showProjectView = (array) => {\n    array.forEach((task) => {\n      const newTask = document.createElement(\"div\");\n      newTask.classList.add(\"newTask\");\n      newTask.innerText = `${task.title}\n      ${task.description}\n      ${task.dueDate}\n      ${task.priority}`;\n      content.appendChild(newTask);\n      (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.addTaskToProjectListHandlers)();\n\n      const deleteTaskButton = document.createElement(\"button\");\n      deleteTaskButton.classList.add(\"deleteTaskButton\");\n      deleteTaskButton.textContent = \"🗑️\";\n      newTask.appendChild(deleteTaskButton);\n      (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.deleteTaskHandler)(task.title);\n    });\n\n    const addNewTaskButton = document.createElement(\"button\");\n    addNewTaskButton.classList.add(\"newTaskButton\");\n    addNewTaskButton.textContent = \"Add a new task to this project\";\n    content.appendChild(addNewTaskButton);\n    (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.showNewTaskForm)();\n\n    const deleteProjectButton = document.createElement(\"button\");\n    deleteProjectButton.classList.add(\"deleteProjectButton\");\n    deleteProjectButton.textContent = \"Delete this project\";\n    content.appendChild(deleteProjectButton);\n    (0,_handlers__WEBPACK_IMPORTED_MODULE_1__.addDeleteProjectHandlers)();\n  };\n\n  const removeAllChildNodes = (parent) => {\n    while (parent.firstChild) {\n      parent.removeChild(parent.firstChild);\n    }\n  };\n\n  return {\n    updateNavTabs,\n    removeAllChildNodes,\n    projectTabContainer,\n    showProjectView,\n    content,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/domControllers.js?");

/***/ }),

/***/ "./src/findArrayIndex.js":
/*!*******************************!*\
  !*** ./src/findArrayIndex.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findArrayIndex: () => (/* binding */ findArrayIndex)\n/* harmony export */ });\nconst findArrayIndex = (projectName, array) => {\n  return array.findIndex((project) => {\n    return project.name === projectName;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/findArrayIndex.js?");

/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDeleteProjectHandlers: () => (/* binding */ addDeleteProjectHandlers),\n/* harmony export */   addTaskToProjectListHandlers: () => (/* binding */ addTaskToProjectListHandlers),\n/* harmony export */   deleteTaskHandler: () => (/* binding */ deleteTaskHandler),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   showNewTaskForm: () => (/* binding */ showNewTaskForm)\n/* harmony export */ });\n/* harmony import */ var _domControllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domControllers */ \"./src/domControllers.js\");\n/* harmony import */ var _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectListFunctions */ \"./src/projectListFunctions.js\");\n/* harmony import */ var _findArrayIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findArrayIndex */ \"./src/findArrayIndex.js\");\n/* harmony import */ var _taskFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskFunctions */ \"./src/taskFunctions.js\");\n\n\n\n\n\nconst onProjectDelete = () => {\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.content);\n\n  const activeTab = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getActiveTab();\n  _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.removeProject(activeTab);\n\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.projectTabContainer);\n\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.updateNavTabs();\n\n  _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.setActiveTab(_projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjects()[0].name);\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(_projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjects()[0].list);\n};\n\nconst addDeleteProjectHandlers = () => {\n  const deleteProjectButtons = document.querySelectorAll(\n    \".deleteProjectButton\"\n  );\n  deleteProjectButtons.forEach((button) => {\n    button.addEventListener(\"click\", onProjectDelete);\n  });\n};\n\nconst onTaskSubmit = (e) => {\n  const listOfProjects = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjects();\n  const activeTab = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getActiveTab();\n  const taskForm = document.getElementById(\"newTaskForm\");\n  const taskTitle = document.getElementById(\"taskTitle\");\n  const taskDescription = document.getElementById(\"taskDescription\");\n  const taskDate = document.getElementById(\"taskDate\");\n  const newTaskDialog = document.getElementById(\"newForm\");\n  e.preventDefault();\n  const activeProject = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjectByName(activeTab);\n  (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_3__.addTaskToProjectArray)(\n    taskTitle.value,\n    taskDate.value,\n    taskDescription.value,\n    (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_3__.getPriorityCheckedValue)(),\n    activeProject.list\n  );\n  if (activeTab !== listOfProjects[0].name) {\n    (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_3__.addTaskToProjectArray)(\n      taskTitle.value,\n      taskDate.value,\n      taskDescription.value,\n      (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_3__.getPriorityCheckedValue)(),\n      listOfProjects[0].list\n    );\n  }\n  taskForm.reset();\n  newTaskDialog.close();\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.content);\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(activeProject.list);\n};\n\nconst addTaskToProjectListHandlers = () => {\n  const submitTask = document.getElementById(\"submitTaskButton\");\n  submitTask.addEventListener(\"click\", onTaskSubmit);\n};\n\nconst showNewTaskForm = () => {\n  const newTaskButtons = document.querySelectorAll(\".newTaskButton\");\n  const newTaskDialog = document.getElementById(\"newForm\");\n\n  newTaskButtons.forEach((button) => {\n    button.addEventListener(\"click\", () => {\n      newTaskDialog.showModal();\n    });\n  });\n};\n\nconst deleteTaskHandler = (taskTitle) => {\n  const deleteTaskButtons = document.querySelectorAll(\".deleteTaskButton\");\n  deleteTaskButtons.forEach((button) => {\n    button.addEventListener(\"click\", (e) => onTaskDelete(taskTitle, e));\n  });\n};\n\nconst onTaskDelete = (taskTitle, e) => {\n  e.preventDefault();\n  const listOfProjects = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjects();\n  const activeTab = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getActiveTab();\n  const activeProject = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjectByName(activeTab);\n  activeProject.removeTask(taskTitle);\n  if (activeTab !== listOfProjects[0].name) {\n    listOfProjects[0].removeTask(taskTitle);\n  }\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.content);\n  _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(activeProject.list);\n};\n\nconst handlers = (() => {\n  function addNewProjectButtonHandlers() {\n    const projectDialog = document.getElementById(\"projectDialog\");\n\n    const newProjectButton = document.getElementById(\"newProject\");\n    newProjectButton.addEventListener(\"click\", () => {\n      projectDialog.showModal();\n    });\n\n    const projectSubmitButton = document.getElementById(\"projectSubmit\");\n    const projectName = document.getElementById(\"projectName\");\n    projectSubmitButton.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      const newProjectForm = document.getElementById(\"newProjectForm\");\n      _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.makeNewProject(projectName.value);\n      _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.projectTabContainer);\n      _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.updateNavTabs();\n      newProjectForm.reset();\n      projectDialog.close();\n    });\n  }\n\n  const stupidNameForEventListeners = () => {\n    const projectTabs = document.querySelectorAll(\".projectTab\");\n\n    projectTabs.forEach((tab) => {\n      tab.addEventListener(\"click\", (e) => {\n        _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.removeAllChildNodes(_domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.content);\n        const project = _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.getProjectByName(e.target.innerText);\n        _domControllers__WEBPACK_IMPORTED_MODULE_0__.domControllers.showProjectView(project.list);\n        _projectListFunctions__WEBPACK_IMPORTED_MODULE_1__.projectsModule.setActiveTab(project.name);\n\n        addDeleteProjectHandlers();\n        addTaskToProjectListHandlers();\n      });\n    });\n  };\n  return { addNewProjectButtonHandlers, stupidNameForEventListeners };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/handlers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClass */ \"./src/taskClass.js\");\n/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectClass */ \"./src/projectClass.js\");\n/* harmony import */ var _domControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domControllers */ \"./src/domControllers.js\");\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers */ \"./src/handlers.js\");\n/* harmony import */ var _projectListFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectListFunctions */ \"./src/projectListFunctions.js\");\n\n\n\n\n\n\nconst testTask = new _taskClass__WEBPACK_IMPORTED_MODULE_0__.Task(\n  \"Test this\",\n  \"test that its working desc\",\n  \"5th OCT\",\n  \"high\"\n);\n// console.log(testTask);\n\n// testTask.changePriority(\"low\");\n\n// console.log(testTask);\n\n// console.log(new Date().toLocaleDateString(\"en-UK\"));\n\n// const project = new Project(\"test\");\n\n// console.log(project);\n\n// project.addTask(\"2\");\n\n// project.addTask(\"3\");\n\n// console.log(project);\n\n// project.removeTask(\"2\");\n\n// console.log(project);\n\n//function that creates new project\n_domControllers__WEBPACK_IMPORTED_MODULE_2__.domControllers.updateNavTabs();\nconst activeTab = _projectListFunctions__WEBPACK_IMPORTED_MODULE_4__.projectsModule.getActiveTab();\nconst activeProject = _projectListFunctions__WEBPACK_IMPORTED_MODULE_4__.projectsModule.getProjectByName(activeTab);\n_domControllers__WEBPACK_IMPORTED_MODULE_2__.domControllers.showProjectView(activeProject.list);\n\n_handlers__WEBPACK_IMPORTED_MODULE_3__.handlers.addNewProjectButtonHandlers();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/projectClass.js":
/*!*****************************!*\
  !*** ./src/projectClass.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.list = [];\n  }\n\n  //functions\n\n  addTask(task) {\n    this.list.push(task);\n  }\n\n  removeTask(title) {\n    const taskToRemove = this.list.find((t) => t.title === title);\n    this.list = this.list.filter((t) => t !== taskToRemove);\n    console.log(\"hi\", this.list, title);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectClass.js?");

/***/ }),

/***/ "./src/projectListFunctions.js":
/*!*************************************!*\
  !*** ./src/projectListFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectsModule: () => (/* binding */ projectsModule)\n/* harmony export */ });\n/* harmony import */ var _projectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectClass */ \"./src/projectClass.js\");\n/* harmony import */ var _findArrayIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findArrayIndex */ \"./src/findArrayIndex.js\");\n/* harmony import */ var _domControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domControllers */ \"./src/domControllers.js\");\n\n\n\n\nconst projectsModule = (() => {\n  let listOfProjects = [new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(\"All my Tasks\"), new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(\"same\")];\n  let activeTab = \"All my Tasks\";\n\n  const makeNewProject = (name) => {\n    const project = new _projectClass__WEBPACK_IMPORTED_MODULE_0__.Project(name);\n    listOfProjects.push(project);\n  };\n\n  const getProjects = () => [...listOfProjects];\n\n  const getActiveTab = () => {\n    return activeTab;\n  };\n\n  const setActiveTab = (tabName) => {\n    activeTab = tabName;\n  };\n\n  const removeProject = (name) => {\n    const project = listOfProjects.find((p) => p.name === name);\n    listOfProjects = listOfProjects.filter((p) => project !== p);\n  };\n\n  const getProjectByName = (name) => {\n    return listOfProjects.find((p) => p.name === name);\n  };\n\n  return {\n    makeNewProject,\n    removeProject,\n    getProjects,\n    setActiveTab,\n    getActiveTab,\n    getProjectByName,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/projectListFunctions.js?");

/***/ }),

/***/ "./src/taskClass.js":
/*!**************************!*\
  !*** ./src/taskClass.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.completed = false;\n  }\n\n  completesTask() {\n    console.log(\"complete function ran\");\n  }\n\n  changePriority(priority) {\n    this.priority = priority;\n  }\n\n  changeDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskClass.js?");

/***/ }),

/***/ "./src/taskFunctions.js":
/*!******************************!*\
  !*** ./src/taskFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTaskToProjectArray: () => (/* binding */ addTaskToProjectArray),\n/* harmony export */   getPriorityCheckedValue: () => (/* binding */ getPriorityCheckedValue)\n/* harmony export */ });\n/* harmony import */ var _taskClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskClass */ \"./src/taskClass.js\");\n\n\nfunction getPriorityCheckedValue() {\n  const taskPriority = document.getElementsByName(\"taskPriority\");\n  const checkedValue = Array.from(taskPriority).find((radio) => radio.checked);\n  return checkedValue.value;\n}\n\nfunction addTaskToProjectArray(title, desc, dueDate, priority, listArray) {\n  const task = new _taskClass__WEBPACK_IMPORTED_MODULE_0__.Task(title, desc, dueDate, priority);\n  listArray.push(task);\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/taskFunctions.js?");

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