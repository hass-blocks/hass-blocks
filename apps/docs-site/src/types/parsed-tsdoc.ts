import type { Block } from './block.ts';
import type { Param } from './params.ts';
import type { TsDocSection } from './tsdoc-section.ts';

export interface ParsedTsdoc {
  summary: TsDocSection[];
  remarks?: TsDocSection[];
  params?: Param[];
  example?: TsDocSection[];
  blocks: Block[];
}
