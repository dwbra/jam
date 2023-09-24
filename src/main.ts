import { returnJson, returnNewFile as createFile } from './lib/utils/export.js';

type argTypes = () => [() => string, () => void];

const builder: argTypes = () => {
  return [returnJson, createFile];
};

export default builder;
