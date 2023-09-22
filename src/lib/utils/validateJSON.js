/**
 * A function for validating if a piece of data is valid JSON.
 * @param {Object|Array|String} data A piece of data
 * @returns {Boolean}
 */
export default function isJson(item) {
  let value = typeof item !== 'string' ? JSON.stringify(item) : item;
  try {
    value = JSON.parse(value);
  } catch (e) {
    return false;
  }

  return typeof value === 'object' && value !== null;
}
