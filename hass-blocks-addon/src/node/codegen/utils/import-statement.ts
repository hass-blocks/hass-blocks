import { factory } from 'typescript';
import { ImportedIdentifier } from './imported-identifier.ts';
import type { INodeBuilder } from './i-node-builder.ts';

export class ImportStatement implements INodeBuilder {
  private identifiers: ImportedIdentifier[] = [];
  private specifier: string;

  public constructor(specifier: string) {
    this.specifier = specifier;
  }

  public newIdentifier(name: string, isType?: boolean) {
    const newIdentifier = new ImportedIdentifier(name, isType);
    this.identifiers.push(newIdentifier);
    return newIdentifier;
  }

  public buildNode() {
    const usedIdentifiers = this.identifiers
      .filter((item) => item.usedAsType || item.usedAsValue)
      .map((item) =>
        factory.createImportSpecifier(
          !item.usedAsValue,
          undefined,
          item.getIdentifier(),
        ),
      );

    return factory.createImportDeclaration(
      undefined,
      factory.createImportClause(
        false,
        undefined,
        factory.createNamedImports(usedIdentifiers),
      ),
      factory.createStringLiteral(this.specifier),
    );
  }
}
