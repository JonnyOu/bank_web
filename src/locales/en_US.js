const usModulesFiles = import.meta.glob('./en_US/*.js', { eager: true });

const usModules = {};

const getPathName = (path) => {
  const lastSlashIndex = path.lastIndexOf('/');
  const lastPointIndex = path.lastIndexOf('.');
  return path.slice(lastSlashIndex+1, lastPointIndex);
};

Object.keys(usModulesFiles).forEach((path) => {
  const pathName = getPathName(path);
  const value = usModulesFiles[path].default;
  usModules[pathName] = value;
});


export default usModules;