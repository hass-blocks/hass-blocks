import type { FunctionArgs } from './function-args';
import type { PropertyArgs } from './property-args';

export interface InterfaceArgs {
  members: (PropertyArgs | FunctionArgs)[];
}
