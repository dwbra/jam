import builder from './src/main.js';

const [returnJson, createFile] = builder();

const modifyJsonArray = () => {
  return [returnJson, createFile];
};

export default modifyJsonArray;
