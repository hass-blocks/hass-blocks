import type { ExcerptToken } from './excerpt-token';
import type { ParamArgs } from './param-args';
import type { ParsedTsdoc } from './parsed-tsdoc';

export interface FunctionArgs {
  name: string;
  signature: string;
  tsDoc: ParsedTsdoc | undefined;
  returnValue: ExcerptToken[];
  params: ParamArgs[];
}
