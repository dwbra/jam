import { returnJson, createFile } from './lib/utils/export.js';

const builder = () => {
  return [returnJson, createFile];
};

export default builder;
