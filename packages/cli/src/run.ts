import GenCodeCommand from '@commands/gen-code.ts';
import { LoadBlocks } from '@commands/load.ts';
import { runExit } from 'clipanion';

runExit([GenCodeCommand, LoadBlocks]);
