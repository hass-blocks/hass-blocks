import type { IGlobalName } from './i-global-name.ts';
import { toCamel } from './to-camel.ts';
import { splitId } from '../generate-entities/split-id.ts';
import { GlobalName } from './global-name.ts';
import type { GlobalNames } from './global-names.ts';

const hideDomainInNameIfInList = ['switch', 'media_player', 'person', 'zone'];

export class EntityName extends GlobalName implements IGlobalName {
  private entityId: string;

  public constructor(entityId: string, allNames: GlobalNames) {
    super(allNames);
    this.entityId = entityId;
  }

  public override generateName() {
    const { domain, id } = splitId(this.entityId);
    const domainString =
      domain && !hideDomainInNameIfInList.includes(domain) ? `_${domain}` : ``;
    return toCamel(`${id}${domainString}`);
  }
}
