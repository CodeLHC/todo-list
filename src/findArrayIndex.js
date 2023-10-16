const findProjectIndex = (projectName, array) => {
  return array.findIndex((project) => {
    return project.name === projectName;
  });
};

export { findProjectIndex };
