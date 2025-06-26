import { IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

export class AreaName extends GlobalName implements IGlobalName {
  public constructor(
    private id: string,
    allNames: GlobalNames,
  ) {
    super(allNames);
  }

  public override generateName() {
    return toCamel(this.id);
  }
}
