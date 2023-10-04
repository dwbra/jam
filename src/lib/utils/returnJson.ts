import { sanitizeInput, transformData } from './export.js';

const returnJson = (input: [], additions: {}, options: { random: boolean }) => {
  try {
    const sanitizedInput = sanitizeInput(input) as [];
    const sanitizedAdditions = sanitizeInput(additions) as [];
    const transformedData = transformData(sanitizedInput, sanitizedAdditions, options);
    return JSON.stringify(transformedData);
  } catch (error) {
    console.log(error);
  }
};

export default returnJson;
