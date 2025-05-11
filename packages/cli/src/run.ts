import GenCodeCommand from '@commands/gen-code.ts';
import PrintTreeCommand from '@commands/print-tree.ts';
import { runExit } from 'clipanion';

runExit([GenCodeCommand, PrintTreeCommand]);
