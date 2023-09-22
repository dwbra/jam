#!/usr/bin/env node
import meow from 'meow';
import * as fs from 'fs';
import modifyJsonArrayImport from '../index.js';
const [modifyJsonAndReturnJson, modifyJsonAndCreateFile] = modifyJsonArrayImport();

const cli = meow(
  `
	Usage
	  $ jamm -s <source> -d <data> -o <outputType> -r <random> -fn <fileName> -fp <filePath> 

	Options
	  --source, -s  Original source of data.
    --data, -s Data you want to add.
    --outputType -o Do you want json returned or a new .json file created? Accepts "json" & "file".
    --random, -r Do you want to randomise what data is added?
    --fileName, -fn, If you're creating a new file, choose a name. 
    --filePath, -fp, Enter a filepath where you'd like to create your file. Default is './'. 

	Examples
	  $ jamm -s "../src/lib/mocks/input.json" -d "../src/lib/mocks/additions.json" -o "json"

	  JSON ARRAY EXAMPLE HERE
`,
  {
    importMeta: import.meta,
    flags: {
      source: {
        type: 'string',
        shortFlag: 's',
        isRequired: flags => !!flags.otherFlag,
      },
      data: {
        type: 'string',
        shortFlag: 'd',
        isRequired: flags => !!flags.otherFlag,
      },
      outputType: {
        type: 'string',
        shortFlag: 'o',
        isRequired: flags => !!flags.otherFlag,
      },
      random: {
        type: 'boolean',
        default: false,
        shortFlag: 'r',
      },
      fileName: {
        type: 'string',
        shortFlag: 'fn',
      },
      filePath: {
        type: 'string',
        shortFlag: 'fp',
      },
    },
  }
);

const source = cli.unnormalizedFlags.source || cli.unnormalizedFlags.s;
const data = cli.unnormalizedFlags.data || cli.unnormalizedFlags.d;
const outputType = cli.unnormalizedFlags.outputType || cli.unnormalizedFlags.o;
const random = cli.unnormalizedFlags.random || cli.unnormalizedFlags.r;
const fileName = cli.unnormalizedFlags.fileName || cli.unnormalizedFlags.fn;
const filePath = cli.unnormalizedFlags.filePath || cli.unnormalizedFlags.fp;

// Determine what the source type is (file or url).
const grabData = async target => {
  if (target.startsWith('http')) {
    try {
      const response = await fetch(target);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      // readFileSync returns buffer if no encoding param passed.
      const data = fs.readFileSync(target, 'utf-8');
      // convert from utf-8 to javascript
      return JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }
};

// await our new data
const sourceData = await grabData(source);
const additionalData = await grabData(data);

if (outputType === 'json') {
  const options = { random };
  const newJson = modifyJsonAndReturnJson(sourceData, additionalData, options);
  console.log('-----------------------------------------------');
  console.log('New JSON array created.');
  console.log('-----------------------------------------------');
  console.log(newJson);
}

if (outputType === 'file') {
  const options = {
    random,
    fileName,
    filePath,
  };
  modifyJsonAndCreateFile(sourceData, additionalData, options);
}
