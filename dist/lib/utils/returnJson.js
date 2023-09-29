import { sanitizeInput, transformData } from './export.js';
const returnJson = (input, additions, options) => {
    try {
        const sanitizedInput = sanitizeInput(input);
        const sanitizedAdditions = sanitizeInput(additions);
        const transformedData = transformData(sanitizedInput, sanitizedAdditions, options);
        return JSON.stringify(transformedData);
    }
    catch (error) {
        console.log(error);
    }
};
export default returnJson;
