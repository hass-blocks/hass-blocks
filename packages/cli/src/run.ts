import { genCode, load, create } from '@commands';
import { run } from '@drizzle-team/brocli';

run([load, genCode, create]);
