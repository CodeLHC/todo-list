const handlers = (() => {
  function clickEvents() {
    const newTaskButton = document.getElementById("newTask");
    newTaskButton.addEventListener("click", () => {
      dialog.showModal();
    });

    const newProjectButton = document.getElementById("newProject");
    newProjectButton.addEventListener("click", () => {
      dialog.showModal();
    });
  }
  return { clickEvents };
})();

export { handlers };
