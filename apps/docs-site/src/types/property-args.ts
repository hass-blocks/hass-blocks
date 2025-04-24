import type { ExcerptToken } from './excerpt-token';
import type { ParsedTsdoc } from './parsed-tsdoc';

export interface PropertyArgs {
  name: string;
  tsDoc: ParsedTsdoc | undefined;
  type: ExcerptToken[];
}
