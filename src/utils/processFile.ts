import * as fs from 'fs';

export const processFile = (filePath: string, callback?: (content: string) => any) => {
    const fileContent: string = fs.readFileSync(filePath, 'utf-8');
    return callback ? callback(fileContent) : fileContent;
};