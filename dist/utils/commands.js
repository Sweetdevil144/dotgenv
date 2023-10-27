/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.deleteEnv = exports.getEnv = exports.setEnv = void 0;
const envManager_1 = require('./envManager');
function setEnv(key, value) {
  let envVars = (0, envManager_1.readEnvFile)();
  envVars[key] = value;
  (0, envManager_1.writeEnvFile)(envVars);
  console.log(`Set ${key} = ${value}`);
}
exports.setEnv = setEnv;
function getEnv(key) {
  let envVars = (0, envManager_1.readEnvFile)();
  console.log(`${key} = ${envVars[key]}`);
}
exports.getEnv = getEnv;
function deleteEnv(key) {
  let envVars = (0, envManager_1.readEnvFile)();
  delete envVars[key];
  (0, envManager_1.writeEnvFile)(envVars);
  console.log(`Deleted ${key}`);
}
exports.deleteEnv = deleteEnv;
