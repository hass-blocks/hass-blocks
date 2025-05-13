import { factory, Identifier } from 'typescript';

export class ImportedIdentifier {
  private inUse: boolean = false;

  private identifier: Identifier;

  public constructor(name: string) {
    this.identifier = factory.createIdentifier(name);
  }

  public getIdentifier() {
    this.inUse = true;
    return this.identifier;
  }

  public get used() {
    return this.inUse;
  }
}
