import type { ServiceFields } from '@hass-blocks/hass-ts';
import type { INodeBuilder } from '../utils/i-node-builder.ts';
import { type Identifier, factory } from 'typescript';
import { buildPropsPropertyNode } from './build-props-property-node.ts';
import { uppercaseFirstLetter } from '../utils/uppercase-first-letter.ts';
import type { ServiceName } from '@codegen/utils';

export class PropsInterface implements INodeBuilder {
  private _identifier: Identifier | undefined;

  public constructor(
    private serviceName: ServiceName,
    private fields: ServiceFields,
  ) {}

  private generateName() {
    return factory.createIdentifier(
      uppercaseFirstLetter(this.serviceName.name),
    );
  }

  public get identifier(): Identifier {
    if (!this._identifier) {
      const name = this.generateName();
      this._identifier = name;
    }
    return this._identifier;
  }

  public allOptional() {
    return Object.values(this.fields).some(
      (field) =>
        field &&
        typeof field === 'object' &&
        'required' in field &&
        field.required,
    );
  }

  public buildNode() {
    return factory.createInterfaceDeclaration(
      [],
      this.identifier,
      undefined,
      undefined,
      Object.entries(this.fields).map(([name, details]) =>
        buildPropsPropertyNode(name, details),
      ),
    );
  }

  public hasProps() {
    return Object.entries(this.fields).length > 0;
  }
}
