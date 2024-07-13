import { readEnvFile, writeEnvFile } from '../src/commands/envManager';

describe('EnvManager', () => {
  const testKey = 'MANAGER_TEST_KEY';
  const testValue = 'MANAGER_TEST_VALUE';

  afterAll(() => {
    // Cleanup: Remove the test key from the global env file
    const envVars = readEnvFile();
    delete envVars[testKey];
    writeEnvFile(envVars);
  });

  test('writeEnvFile and readEnvFile work correctly', () => {
    // Write a test key-value pair to the global env file
    const envVars = readEnvFile();
    envVars[testKey] = testValue;
    writeEnvFile(envVars);

    // Read the global env file to check if the test key-value pair exists
    const updatedEnvVars = readEnvFile();
    expect(updatedEnvVars[testKey]).toBe(testValue);
  });
});
