import { AreaName } from './area-name.ts';
import { EntityName } from './entity.ts';
import type { IGlobalName } from './i-global-name.ts';
import { ServiceName } from './service.ts';

export class GlobalNames {
  private names: Map<string, IGlobalName> = new Map();

  public addEntity(entityId: string) {
    const theName = new EntityName(entityId, this);
    this.names.set(theName.name, theName);
    return theName;
  }

  public addService(domain: string, thing: string) {
    const theName = new ServiceName(domain, thing, this);
    this.names.set(theName.name, theName);
    return theName;
  }

  public addArea(id: string) {
    const theName = new AreaName(id, this);
    this.names.set(theName.name, theName);
    return theName;
  }

  public getByName(name: string) {
    return this.names.get(name);
  }
}
