import type { Code } from './code.ts';
import type { LineBreak } from './line-break.ts';
import type { Link } from './link.ts';

export type RichText = (LineBreak | Link | Code | string)[] | string;
