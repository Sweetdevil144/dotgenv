#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const yargs_1 = __importDefault(require('yargs'));
const helpers_1 = require('yargs/helpers');
const commands_1 = require('./utils/commands');
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
  .command('set <key> <value>', 'Set an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string' && typeof argv.value === 'string') {
      (0, commands_1.setEnv)(argv.key, argv.value);
    }
  })
  .command('get <key>', 'Get an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string') {
      (0, commands_1.getEnv)(argv.key);
    }
  })
  .command('delete <key>', 'Delete an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string') {
      (0, commands_1.deleteEnv)(argv.key);
    }
  })
  .parse();
