declare const transformData: <T extends {
    [key: string]: unknown;
}>(sanitizedInput: T[], sanitizedAdditions: Array<[string, [] | string | {} | number]>, options: {
    random: boolean;
}) => T[];
export default transformData;
