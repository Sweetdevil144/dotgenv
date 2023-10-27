"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeEnvFile = exports.readEnvFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const GLOBAL_ENV_PATH = path_1.default.join(process.env.HOME || process.env.USERPROFILE || '.', '.global.env');
function readEnvFile() {
    try {
        if (!fs_1.default.existsSync(GLOBAL_ENV_PATH)) {
            return {};
        }
        return dotenv_1.default.parse(fs_1.default.readFileSync(GLOBAL_ENV_PATH));
    }
    catch (error) {
        console.error('Error reading global env file: ', error);
        return {};
    }
}
exports.readEnvFile = readEnvFile;
function writeEnvFile(envVars, filePath = GLOBAL_ENV_PATH) {
    try {
        const envContent = Object.entries(envVars)
            .map(([key, value]) => `${key}=${value}`)
            .join('\n');
        fs_1.default.writeFileSync(filePath, envContent);
    }
    catch (error) {
        console.error(`Error writing to ${filePath}: `, error);
    }
}
exports.writeEnvFile = writeEnvFile;
