import { returnJson, writeFile } from './main.js';

/**
 A helper function to create a new json file.
 * @param {String|Object} input The original data source that you want to transform.
 * @param {Object} additions The data you'd like to add to the original data. An example of the accepted structute is above.
 * The names that are used as keys will also be used as the new properties being added to the object.
 * @param {Object} options An object containing additional options for the user.
 * @param {Boolean} options.random A boolean value that if true will set the data on each array to only be one random piece of data from the array.
 * If the boolean value is false, the entire array will be returned.
 * @param {String} options.fileName The file name for your newly generated file.
 * @param {String} options.fileSaveLocation The location where the user would like the file to be saved.
 */
export default function returnNewFile(input, additions, options) {
  const { fileName, fileSaveLocation } = options;
  const transformedData = returnJson(input, additions, options);
  writeFile(fileName, transformedData, fileSaveLocation);
}
