import { readEnvFile, writeEnvFile } from './envManager';

export function setEnv(key: string, value: string) {
  const envVars = readEnvFile();
  envVars[key] = value;
  writeEnvFile(envVars);
  console.log(`Set ${key} = ${value}`);
}

export function getEnv(key: string) {
  const envVars = readEnvFile();
  console.log(`${key} = ${envVars[key]}`);
}

export function deleteEnv(key: string) {
  const envVars = readEnvFile();
  delete envVars[key];
  writeEnvFile(envVars);
  console.log(`Deleted ${key}`);
}
