import {
  type IAddable,
  type IBlocksNode,
  type IInitialisable,
  type ISerialisable,
  type ITriggerable,
} from '@hass-blocks/core';

export const isAutomation = (
  item: unknown,
): item is IBlocksNode &
  ISerialisable &
  IInitialisable &
  IAddable &
  ITriggerable => {
  return Boolean(
    item &&
      typeof item === 'object' &&
      'type' in item &&
      item.type === 'automation',
  );
};
