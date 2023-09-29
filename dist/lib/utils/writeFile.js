import * as fs from 'fs';
const writeFile = (fileName, fileData, filePath = './') => {
    try {
        fs.writeFileSync(`${filePath}/${fileName}.json`, fileData);
        console.log('-----------------------------------------------');
        console.log('File was successfully created.');
        console.log('-----------------------------------------------');
    }
    catch (error) {
        console.log(error);
    }
};
export default writeFile;
