import { type IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

export class AreaName extends GlobalName implements IGlobalName {
  private _id: string;
  public constructor(id: string, allNames: GlobalNames) {
    super(allNames);
    this._id = id;
  }

  public override generateName() {
    return toCamel(this._id);
  }
}
