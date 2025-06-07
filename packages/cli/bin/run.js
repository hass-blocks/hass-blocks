#!/usr/bin/env node --enable-source-maps

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const currentDirectory = dirname(fileURLToPath(import.meta.url));
const runFile = join(currentDirectory, '..', 'dist', 'src', 'run.js');
await import(runFile);
