import fs from 'fs';
import path from 'path';

const GLOBAL_ENV_PATH = path.join(
  process.env.HOME || process.env.USERPROFILE || '.',
  '.global.env',
);

export function parseEnvFile(filePath: string): { [key: string]: string } {
  let envValue: string = '';
  const env: { [key: string]: string } = {};
  const fileContent = fs.readFileSync(filePath, 'utf8');
  fileContent.split('\n').forEach((line) => {
    let [key, ...value] = line.split('=');
    key = key.trim();
    envValue = value.join('=').trim();
    if (key != null && envValue != null) {
      env[key]= envValue;
    }
  });
  return env;
}

export function readEnvFile(): { [key: string]: string } {
  try {
    if (!fs.existsSync(GLOBAL_ENV_PATH)) {
      return {};
    }
    return parseEnvFile(GLOBAL_ENV_PATH);
  } catch (error) {
    console.error('Error reading global env file: ', error);
    return {};
  }
}

export function writeEnvFile(
  envVars: { [key: string]: string },
  filePath: string = GLOBAL_ENV_PATH,
) {
  try {
    const envContent = Object.entries(envVars)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');
    fs.writeFileSync(filePath, envContent);
  } catch (error) {
    console.error(`Error writing to ${filePath}: `, error);
  }
}
