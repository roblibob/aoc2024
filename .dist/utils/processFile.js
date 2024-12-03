"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processFile = void 0;
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const processFile = (filePath, callback) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return callback(fileContent);
};
exports.processFile = processFile;
//# sourceMappingURL=processFile.js.map