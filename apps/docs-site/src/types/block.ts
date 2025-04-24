import type { TsDocSection } from './tsdoc-section';

export interface Block {
  type: string;
  text: TsDocSection[];
}
