declare const builderFunction: () => ((input: [], additions: {}, options: {
    random: boolean;
    fileName: string;
    filePath: string;
}) => void)[];
export default builderFunction;
