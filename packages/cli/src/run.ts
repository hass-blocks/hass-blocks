import { genCode, load } from '@commands';
import { run } from '@drizzle-team/brocli';

run([load, genCode]);
