import builderFunction from './dist/main.js';
const [returnJson, createFile] = builderFunction();

const modifyJsonArray = () => {
  return [returnJson, createFile];
};

export default modifyJsonArray;
