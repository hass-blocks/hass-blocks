import { genCode, load, create } from '@commands';
import packageJson from '../package.json' with { type: 'json' };
import { run } from '@drizzle-team/brocli';

run([load, genCode, create], { version: packageJson.version });
