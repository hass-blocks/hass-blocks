import { Separator, Stack, Text } from '@chakra-ui/react';
import type { IBlocksNode } from '@hass-blocks/core';
import { BlocksContext } from '@providers';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';

export const AutomationList = () => {
  const { client } = useContext(BlocksContext);

  const [automations, setAutomations] = useState<IBlocksNode[]>([]);

  useEffect(() => {
    (async () => {
      setAutomations((await client?.getAutomations()) ?? []);
    })();
  }, [client]);

  return (
    <Stack paddingTop={'1rem'} width="100%">
      {automations.map((automation, index) => (
        <React.Fragment key={`sidebar-entry-${automation.id}`}>
          {index > 0 && <Separator />}
          <Text key={automation.id} textAlign={'center'} width="100%">
            <Link to={{ pathname: `automations/${automation.id}` }}>
              {automation.name}
            </Link>
          </Text>
        </React.Fragment>
      ))}
    </Stack>
  );
};
