import { factory, type Identifier } from 'typescript';
import type { IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { splitId } from '../generate-entities/split-id.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

export class EntityName extends GlobalName implements IGlobalName {
  private _identifier: Identifier | undefined;

  public constructor(
    private entityId: string,
    allNames: GlobalNames,
  ) {
    super(allNames);
  }

  public override generateName() {
    const { domain, id } = splitId(this.entityId);
    const domainString = domain ? `_${domain}` : ``;
    return toCamel(`${id}${domainString}`);
  }

  public get identifier(): Identifier {
    if (!this._identifier) {
      this._identifier = factory.createIdentifier(this.name);
    }
    return this._identifier;
  }
}
