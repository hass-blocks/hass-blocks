import { factory, type Identifier } from 'typescript';

export class ImportedIdentifier {
  private inUseType = false;
  private inUseValue = false;

  private identifier: Identifier;

  public constructor(
    name: string,
    private type?: boolean,
  ) {
    this.identifier = factory.createIdentifier(name);
  }

  public getIdentifier(typeOnly?: boolean) {
    this.inUseType = true;
    this.inUseValue = !this.type && (this.inUseValue || !typeOnly);
    return this.identifier;
  }

  public get usedAsValue() {
    return this.inUseValue;
  }

  public get usedAsType() {
    return this.inUseType;
  }
}
