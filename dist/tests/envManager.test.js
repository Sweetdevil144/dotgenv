/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envManager_1 = require("../src/utils/envManager");
describe('EnvManager', () => {
    const testKey = 'MANAGER_TEST_KEY';
    const testValue = 'MANAGER_TEST_VALUE';
    afterAll(() => {
        // Cleanup: Remove the test key from the global env file
        const envVars = (0, envManager_1.readEnvFile)();
        delete envVars[testKey];
        (0, envManager_1.writeEnvFile)(envVars);
    });
    test('writeEnvFile and readEnvFile work correctly', () => {
        // Write a test key-value pair to the global env file
        const envVars = (0, envManager_1.readEnvFile)();
        envVars[testKey] = testValue;
        (0, envManager_1.writeEnvFile)(envVars);
        // Read the global env file to check if the test key-value pair exists
        const updatedEnvVars = (0, envManager_1.readEnvFile)();
        expect(updatedEnvVars[testKey]).toBe(testValue);
    });
});
