import type { ServiceFields } from '@hass-blocks/hass-ts';
import type { INodeBuilder } from '../utils/i-node-builder.ts';
import { type Identifier, factory } from 'typescript';
import { buildPropsPropertyNode } from './build-props-property-node.ts';
import { uppercaseFirstLetter } from '../utils/uppercase-first-letter.ts';

export class PropsInterface implements INodeBuilder {
  private _identifier: Identifier;

  public constructor(
    serviceName: string,
    private fields: ServiceFields,
  ) {
    this._identifier = factory.createIdentifier(
      uppercaseFirstLetter(`${serviceName}Props`),
    );
  }

  public get identifier() {
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
      this._identifier,
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
