#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { setEnv, getEnv, deleteEnv, importEnv } from './commands/commands';

yargs(hideBin(process.argv))
  .command('set <key> <value>', 'Set an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string' && typeof argv.value === 'string') {
      setEnv(argv.key, argv.value);
    }
  })
  .command('get <key>', 'Get an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string') {
      getEnv(argv.key);
    }
  })
  .command('delete <key>', 'Delete an environment variable', {}, (argv) => {
    if (typeof argv.key === 'string') {
      deleteEnv(argv.key);
    }
  })
  .command(
    'import <key>',
    'Import an environment variable to local .env file',
    {},
    (argv) => {
      if (typeof argv.key === 'string') {
        importEnv(argv.key);
      }
    },
  )
  .parse();
