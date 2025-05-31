import { factory, type Identifier } from 'typescript';
import { IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

export class ServiceName extends GlobalName implements IGlobalName {
  private _identifier: Identifier | undefined;

  public constructor(
    private domain: string,
    private thing: string,
    allNames: GlobalNames,
  ) {
    super(allNames);
  }

  public override generateName() {
    return toCamel(`${this.thing}_${this.domain}`);
  }

  public get identifier(): Identifier {
    if (!this._identifier) {
      this._identifier = factory.createIdentifier(this.name);
    }
    return this._identifier;
  }
}
