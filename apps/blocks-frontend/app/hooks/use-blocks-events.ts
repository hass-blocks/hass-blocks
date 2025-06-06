import type { HassBlocksEvent } from '@hass-blocks/core';
import { BlocksContext } from 'app/providers/blocks';
import { useContext, useEffect } from 'react';

export const useBlocksEvents = (callback: (event: HassBlocksEvent) => void) => {
  const { client } = useContext(BlocksContext);
  useEffect(() => {
    client?.hassBlocksEvent(callback);
  }, [client, callback]);
};
