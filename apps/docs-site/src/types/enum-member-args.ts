import type { ParsedTsdoc } from './parsed-tsdoc';

export interface EnumMemberArgs {
  name: string;
  tsDoc: ParsedTsdoc | undefined;
}
