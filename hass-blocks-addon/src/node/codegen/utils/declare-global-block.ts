import {
  factory,
  type Node,
  NodeFlags,
  type Statement,
  SyntaxKind,
} from 'typescript';

import type { INodeBuilder } from './i-node-builder.ts';
import { newLine } from '../generate-service-calls/new-line.ts';

export class DeclareGlobalBlock implements INodeBuilder {
  private statements: Statement[];

  public constructor(statements: Statement[]) {
    this.statements = statements;
  }

  buildNode(): Node {
    return factory.createModuleDeclaration(
      [factory.createToken(SyntaxKind.DeclareKeyword)],
      factory.createIdentifier('global'),
      factory.createModuleBlock([newLine(), ...this.statements]),
      NodeFlags.GlobalAugmentation | NodeFlags.ContextFlags,
    );
  }
}
