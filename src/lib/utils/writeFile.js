import * as fs from 'fs';

/**
 * A function that uses Nodes FS library to write data to a file.
 * @param {String} fileName Name of the file.
 * @param {[]Object} fileData The data to write to the file.
 * @param {String} filePath The dir path to save the file.
 */
export default function writeFile(fileName, fileData, filePath = './') {
  try {
    fs.writeFileSync(`${filePath}/${fileName}.json`, fileData);
    console.log('-----------------------------------------------');
    console.log('File was successfully created.');
    console.log('-----------------------------------------------');
  } catch (error) {
    console.log(error);
  }
}
