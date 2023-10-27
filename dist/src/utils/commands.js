"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importEnv = exports.deleteEnv = exports.getEnv = exports.setEnv = void 0;
const envManager_1 = require("./envManager");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
function setEnv(key, value) {
    const envVars = (0, envManager_1.readEnvFile)();
    envVars[key] = value;
    (0, envManager_1.writeEnvFile)(envVars);
    console.log(`Set ${key} = ${value}`);
}
exports.setEnv = setEnv;
function getEnv(key) {
    const envVars = (0, envManager_1.readEnvFile)();
    if (envVars[key]) {
        console.log(`${key} = ${envVars[key]}`);
    }
    else {
        console.log(`Key ${key} not found.`);
    }
}
exports.getEnv = getEnv;
function deleteEnv(key) {
    const envVars = (0, envManager_1.readEnvFile)();
    if (envVars[key]) {
        delete envVars[key];
        (0, envManager_1.writeEnvFile)(envVars);
        console.log(`Deleted ${key}`);
    }
    else {
        console.log(`Key ${key} not found.`);
    }
}
exports.deleteEnv = deleteEnv;
function importEnv(key) {
    const globalEnvVars = (0, envManager_1.readEnvFile)();
    const localEnvPath = path_1.default.join(process.cwd(), '.env');
    let localEnvVars = {};
    if (fs_1.default.existsSync(localEnvPath)) {
        localEnvVars = dotenv_1.default.parse(fs_1.default.readFileSync(localEnvPath));
    }
    if (globalEnvVars[key]) {
        localEnvVars[key] = globalEnvVars[key];
        (0, envManager_1.writeEnvFile)(localEnvVars, localEnvPath);
        console.log(`Imported ${key} to local .env file.`);
    }
    else {
        console.log(`Key ${key} not found in global environment variables.`);
    }
}
exports.importEnv = importEnv;
