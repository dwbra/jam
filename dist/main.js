import { returnJson, createFile } from './lib/utils/export.js';
const builderFunction = () => {
    return [returnJson, createFile];
};
export default builderFunction;
