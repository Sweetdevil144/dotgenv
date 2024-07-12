import { readEnvFile, writeEnvFile } from './envManager.mjs';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

export function setEnv(key: string, value: string) {
  const envVars = readEnvFile();
  envVars[key] = value;
  writeEnvFile(envVars);
  console.log(`Set ${key} = ${value}`);
}

export function getEnv(key: string) {
  const envVars = readEnvFile();
  if (envVars[key]) {
    console.log(`${key} = ${envVars[key]}`);
  } else {
    console.log(`Key ${key} not found.`);
  }
}

export function deleteEnv(key: string) {
  const envVars = readEnvFile();
  if (envVars[key]) {
    delete envVars[key];
    writeEnvFile(envVars);
    console.log(`Deleted ${key}`);
  } else {
    console.log(`Key ${key} not found.`);
  }
}

export function importEnv(key: string) {
  const globalEnvVars = readEnvFile();
  const localEnvPath = path.join(process.cwd(), '.env');
  let localEnvVars: { [key: string]: string } = {};

  if (fs.existsSync(localEnvPath)) {
    localEnvVars = dotenv.parse(fs.readFileSync(localEnvPath));
  }

  if (globalEnvVars[key]) {
    localEnvVars[key] = globalEnvVars[key];
    writeEnvFile(localEnvVars, localEnvPath);
    console.log(`Imported ${key} to local .env file.`);
  } else {
    console.log(`Key ${key} not found in global environment variables.`);
  }
}
