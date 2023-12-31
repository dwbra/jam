import { returnJson, writeFile } from './export.js';

type optionParams = {
  random: boolean;
  fileName: string;
  filePath: string;
};

const returnNewFile = (input: [], additions: {}, options: optionParams): void => {
  const { fileName, filePath } = options;
  const transformedData = returnJson(input, additions, options) as string;
  writeFile(fileName, transformedData, filePath);
};

export default returnNewFile;
