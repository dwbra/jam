import { returnJson, returnNewFile as createFile } from './lib/utils/export.js';

export default function builder() {
  return [returnJson, createFile];
}
