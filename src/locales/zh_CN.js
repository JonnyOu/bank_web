const cnModulesFiles = import.meta.glob('./zh_CN/*.js', { eager: true });

const cnModules = {};

const getPathName = (path) => {
  const lastSlashIndex = path.lastIndexOf('/');
  const lastPointIndex = path.lastIndexOf('.');
  return path.slice(lastSlashIndex+1, lastPointIndex);
};

Object.keys(cnModulesFiles).forEach((path) => {
  const pathName = getPathName(path);
  const value = cnModulesFiles[path].default;
  cnModules[pathName] = value;
});

export default cnModules;