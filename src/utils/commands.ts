import { readEnvFile, writeEnvFile } from "./envManager";

export function setEnv(key: string, value: string) {
  let envVars = readEnvFile();
  envVars[key] = value;
  writeEnvFile(envVars);
  console.log(`Set ${key} = ${value}`);
}

export function getEnv(key: string) {
  let envVars = readEnvFile();
  console.log(`${key} = ${envVars[key]}`);
}

export function deleteEnv(key: string) {
  let envVars = readEnvFile();
  delete envVars[key];
  writeEnvFile(envVars);
  console.log(`Deleted ${key}`);
}
