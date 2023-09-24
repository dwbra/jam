import { sanitizeInput, transformData } from './export.js';

interface optionParams {
  random: boolean;
}

const returnJson = (input: [], additions: {}, options: optionParams): string => {
  try {
    const sanitizedInput = sanitizeInput(input);
    const sanitizedAdditions = sanitizeInput(additions);
    const transformedData = transformData(sanitizedInput, sanitizedAdditions, options);
    return JSON.stringify(transformedData);
  } catch (error) {
    console.log(error);
  }
};

export default returnJson;
