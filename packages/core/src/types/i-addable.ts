import type { IMutableNode } from './i-mutable-node.ts';

export interface IAddable {
  /**
   * Add a child to this node in the tree
   *
   * @param node - node to be added
   */
  addChild(...node: IMutableNode[]): void;

  /**
   * Add the next node in a sequence
   *
   * @param node - node to be added
   */
  addNext(...node: IMutableNode[]): void;
}
