import type { IBlocksNode } from '@hass-blocks/core';
import { BlocksContext } from 'app/providers/blocks';
import { useContext, useEffect, useState } from 'react';

export const useAutomation = (id?: string) => {
  const { client } = useContext(BlocksContext);
  const [automation, setAutomation] = useState<IBlocksNode | undefined>();

  useEffect(() => {
    (async () => {
      if (id) {
        const theAutomation = await client?.getAutomationById(id);
        setAutomation(theAutomation);
      }
    })();
  }, [id, client]);

  return automation;
};
