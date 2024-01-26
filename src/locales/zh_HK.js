const hkModulesFiles = import.meta.glob('./zh_HK/*.js', { eager: true });

const hkModules = {};

const getPathName = (path) => {
  const lastSlashIndex = path.lastIndexOf('/');
  const lastPointIndex = path.lastIndexOf('.');
  return path.slice(lastSlashIndex+1, lastPointIndex);
}

Object.keys(hkModulesFiles).forEach((path) => {
  const pathName = getPathName(path);
  const value = hkModulesFiles[path].default;
  hkModules[pathName] = value;
});

export default hkModules;