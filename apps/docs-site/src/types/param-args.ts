import type { ExcerptToken } from './excerpt-token';
import type { ParsedTsdoc } from './parsed-tsdoc';

export interface ParamArgs {
  name: string;
  excerptTokens: ExcerptToken[];
  tsDoc: ParsedTsdoc | undefined;
}
