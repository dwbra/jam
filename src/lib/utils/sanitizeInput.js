import { isJson } from './main.js';

/**
 * A function to ensure that the JSON data being passed is valid JSON.
 * @param {Array|Object} input An array or object containing JSON data.
 * @returns {Array}
 */
export default function sanitizeInput(input) {
  try {
    if (isJson(input)) {
      if (Array.isArray(input)) {
        return input;
      }
      return Object.entries(input);
    } else {
      console.log('your input is not valid JSON.');
      return {};
    }
  } catch (error) {
    console.log(error);
  }
}
