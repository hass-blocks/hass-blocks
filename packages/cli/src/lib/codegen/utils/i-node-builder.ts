import type { Node } from 'typescript';

export interface INodeBuilder {
  buildNode(): Node;
}
