import { sanitizeInput, transformData } from './main.js';

/**
 * A helper function to sanitize and return the formatted Json.
 * @param {String|Object} input The original data source that you want to transform.
 * @param {Object} additions The data you'd like to add to the original data.
 * @param {Object} options An object containing additional options for the user.
 * @param {Boolean} options.random A boolean value that if true will set the data on each array to only be one random piece of data from the array.
 * If the boolean value is false, the entire array will be returned.
 * @returns {string}
 */
export default function returnJson(input, additions, options) {
  const { random } = options;
  try {
    const sanitizedInput = sanitizeInput(input);
    const sanitizedAdditions = sanitizeInput(additions);
    const transformedData = transformData(sanitizedInput, sanitizedAdditions, random);
    return JSON.stringify(transformedData);
  } catch (error) {
    console.log(error);
  }
}
