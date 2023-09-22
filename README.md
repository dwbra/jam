# jam - JSON Array Modifier

**A package to add additional properties to every object in a JSON array and return a new JSON file or string.**

---

This started out as a single script and I saw the potential to flesh it out and break it apart to use as my first NPM package.

There are zero dependencies here, it is just a series of JS files that take in your original data, alongside an object containing the desired keys and values you want to add to each object in your initial array.

There are examples of the JSON data that the function expects under the `/src/lib/mocks` dir.

## Documentation

### Syntax

#### CLI

```json
Usage
$ jam -s <source> -d <data> -o <outputType> -r <random> -fn <fileName> -fp <filePath>

    Options
    --source, -s  Original source of data.
    --data, -s Data you want to add.
    --outputType -o Do you want json returned or a new .json file created? Accepts "json" & "file".
    --random, -r Do you want to randomise what data is added?
    --fileName, -fn, If you're creating a new file, choose a name.
    --filePath, -fp, Enter a filepath where you'd like to create your file. Default is './'.

    Examples
      $ jam -s "../src/lib/mocks/input.json" -d "../src/lib/mocks/additions.json" -o "json"
      $ jam -s "https://jsonplaceholder.typicode.com/posts" -d "https://jsonplaceholder.typicode.com/photos/1" -o "json"
      $ jam -s "https://jsonplaceholder.typicode.com/posts" -d "../src/lib/mocks/additions.json" -o "file" -r true --fn "testFile"
```

#### On Client

```ts
const [returnJson, createFile] = modifyJsonArray();
const newJsonArray = returnJson(input, additions, options);
```

#### On Server (NodeJs)

```ts
createFile(input, additions, options);
```

### Parameters

`input`

This defines the resource of which you wish to modify. This can either be

- A string path to a JSON file
- An [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of objects

`additions`

An object containing the keys and values what you wish added to each object.

`options` (_optional_)

An object containing the following options:

`random` (_optional_)

A [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) flag that lets you decide if you want to randomise what value is added to each object per property. Default is set to `false`.

`filename` (_optional_)

The name of the file you'd like to create.

`fileSaveLocation` (_optional_)

If you wish to create a file, where would you want the file to be created. Default is `./`.

### Return value

The return value is dependent on which function you invoke.

- `returnJson` - String of json data.
- `createFile` - void. A new file will be created.

### Example

This package is only built for use with ESM compatiable projects. Therefore use ESM syntax:

```js
import jam from '@dworkman/jam';
import input from './mocks/mockInput.json' assert { type: 'json' };
import additions from './mocks/mockAdditions.json' assert { type: 'json' };

const [returnJson] = modifyJsonArray();

const options = {
  random: true,
  fileName: 'newJsonData',
  fileSaveLocation: '../../tmp',
};

const newJSON = returnJson(input, additions, options);

console.log(newJSON);
```
