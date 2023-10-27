import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const GLOBAL_ENV_PATH = path.join(process.env.HOME || process.env.USERPROFILE || '.', '.global.env');

export function readEnvFile(): { [key: string]: string } {
  if (!fs.existsSync(GLOBAL_ENV_PATH)) {
    return {};
  }

  return dotenv.parse(fs.readFileSync(GLOBAL_ENV_PATH));
}

export function writeEnvFile(envVars: { [key: string]: string }) {
  const envContent = Object.entries(envVars).map(([key, value]) => `${key}=${value}`).join('\n');
  fs.writeFileSync(GLOBAL_ENV_PATH, envContent);
}
