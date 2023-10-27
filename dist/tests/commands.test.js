"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("../src/utils/commands");
const envManager_1 = require("../src/utils/envManager");
describe('Commands', () => {
    const testKey = 'TEST_KEY';
    const testValue = 'TEST_VALUE';
    afterAll(() => {
        // Cleanup
        (0, commands_1.deleteEnv)(testKey);
    });
    test('setEnv sets an environment variable', () => {
        (0, commands_1.setEnv)(testKey, testValue);
        const envVars = (0, envManager_1.readEnvFile)();
        expect(envVars[testKey]).toBe(testValue);
    });
    test('getEnv retrieves an environment variable', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        (0, commands_1.getEnv)(testKey);
        expect(consoleSpy).toHaveBeenCalledWith(`${testKey} = ${testValue}`);
        consoleSpy.mockRestore();
    });
    test('deleteEnv deletes an environment variable', () => {
        (0, commands_1.deleteEnv)(testKey);
        const envVars = (0, envManager_1.readEnvFile)();
        expect(envVars[testKey]).toBeUndefined();
    });
});
