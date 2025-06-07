#!/usr/bin/env node -r tsconfig-paths/register --enable-source-maps

import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const currentDirectory = dirname(fileURLToPath(import.meta.url));
const runFile = join(currentDirectory, '..', 'dist', 'run.js');
await import(runFile);
