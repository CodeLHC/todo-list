const findProjectIndex = (projectName, array) => {
  return array.findIndex((project) => {
    console.log(project);
    return project.name === projectName;
  });
};

export { findProjectIndex };
