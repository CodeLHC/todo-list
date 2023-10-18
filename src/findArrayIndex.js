const findArrayIndex = (projectName, array) => {
  return array.findIndex((project) => {
    return project.name === projectName;
  });
};

export { findArrayIndex };
