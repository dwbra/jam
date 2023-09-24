import { randomIntFromInterval } from './export.js';

type argTypes = (sanitizedInput: {}[], sanitizedAdditions: [], options: { random: boolean }) => {}[];

const transformData: argTypes = function (sanitizedInput, sanitizedAdditions, options) {
  const { random } = options;
  // Map function to create your new data object
  const transformedData = sanitizedInput.map(dataObject => {
    // Create a clone obj
    const newObj = { ...dataObject };
    // Loop over each array and then assign new key/value pairs to the newObj
    // Destructure each array to access the name to set as the key in the new obj
    // Destructure data even further to directly access it
    sanitizedAdditions.forEach(([name, data]) => {
      if (random && Array.isArray(data)) {
        const randomNumber = randomIntFromInterval(0, data.length - 1);
        newObj[name] = data[randomNumber];
      } else {
        newObj[name] = data;
      }
    });
    return newObj;
  });

  return transformedData;
};

export default transformData;
