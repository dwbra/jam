import { returnJson, writeFile } from './export.js';
const returnNewFile = (input, additions, options) => {
    const { fileName, filePath } = options;
    const transformedData = returnJson(input, additions, options);
    writeFile(fileName, transformedData, filePath);
};
export default returnNewFile;
