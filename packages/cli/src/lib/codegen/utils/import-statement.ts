import { factory } from 'typescript';
import { ImportedIdentifier } from './imported-identifier.ts';

export class ImportStatement {
  private identifiers: ImportedIdentifier[] = [];

  public constructor(private specifier: string) {}

  public newIdentifier(name: string) {
    const newIdentifier = new ImportedIdentifier(name);
    this.identifiers.push(newIdentifier);
    return newIdentifier;
  }

  public buildNode() {
    const usedIdentifiers = this.identifiers
      .filter((item) => item.used)
      .map((item) =>
        factory.createImportSpecifier(false, undefined, item.getIdentifier()),
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
