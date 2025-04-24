import type { Code } from './code.ts';
import type { Link } from './link.ts';

export type RichText = (Link | Code | string)[] | string;
