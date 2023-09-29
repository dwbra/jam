import { isJson } from './export.js';

const sanitizeInput = (input: any) => {
  try {
    if (isJson(input)) {
      if (Array.isArray(input)) {
        return input;
      }
      return Object.entries(input);
    } else {
      console.log('your input is not valid JSON.');
      return [];
    }
  } catch (error) {
    console.log(error);
  }
};

export default sanitizeInput;
