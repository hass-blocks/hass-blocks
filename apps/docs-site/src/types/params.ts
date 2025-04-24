import type { TsDocSection } from './tsdoc-section';

export interface Param {
  name: string;
  description: TsDocSection[];
}
