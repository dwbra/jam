import { returnJson, returnNewFile as createFile } from './lib/utils/main.js';

export default function builder() {
  return [returnJson, createFile];
}
