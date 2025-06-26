import { IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

export class ServiceName extends GlobalName implements IGlobalName {
  private domain: string;
  private thing: string;

  public constructor(domain: string, thing: string, allNames: GlobalNames) {
    super(allNames);
    this.domain = domain;
    this.thing = thing;
  }

  public override generateName() {
    const domainInId = this.thing.includes(this.domain);
    const domainString = domainInId ? `` : `_${this.domain}`;
    const snakeCaseId = `${this.thing}${domainString}`;

    return toCamel(snakeCaseId);
  }
}
