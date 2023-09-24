import builder from './src/main.js';

const [returnJson, createFile] = builder();

export default function modifyJsonArray() {
  return [returnJson, createFile];
}
