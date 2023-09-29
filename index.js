import builder from './dist/main';

const [returnJson, createFile] = builder();

const modifyJsonArray = () => {
  return [returnJson, createFile];
};

export default modifyJsonArray;
