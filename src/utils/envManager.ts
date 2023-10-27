import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

const GLOBAL_ENV_PATH = path.join(
  process.env.HOME || process.env.USERPROFILE || '.',
  '.global.env',
);

export function readEnvFile(): { [key: string]: string } {
  try {
    if (!fs.existsSync(GLOBAL_ENV_PATH)) {
      return {};
    }
    return dotenv.parse(fs.readFileSync(GLOBAL_ENV_PATH));
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
