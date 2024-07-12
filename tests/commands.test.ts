import { setEnv, getEnv, deleteEnv } from '../src/commands/commands.mjs';
import { readEnvFile } from '../src/commands/envManager.mjs';

describe('Commands', () => {
  const testKey = 'TEST_KEY';
  const testValue = 'TEST_VALUE';

  afterAll(() => {
    // Cleanup
    deleteEnv(testKey);
  });

  test('setEnv sets an environment variable', () => {
    setEnv(testKey, testValue);
    const envVars = readEnvFile();
    expect(envVars[testKey]).toBe(testValue);
  });

  test('getEnv retrieves an environment variable', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    getEnv(testKey);
    expect(consoleSpy).toHaveBeenCalledWith(`${testKey} = ${testValue}`);
    consoleSpy.mockRestore();
  });

  test('deleteEnv deletes an environment variable', () => {
    deleteEnv(testKey);
    const envVars = readEnvFile();
    expect(envVars[testKey]).toBeUndefined();
  });
});
