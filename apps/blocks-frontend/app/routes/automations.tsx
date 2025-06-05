import { IBlocksNode } from '@hass-blocks/core';
import { BlocksContext } from 'app/providers/blocks.tsx';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';

const Automations = () => {
  const client = useContext(BlocksContext);

  const [automations, setAutomations] = useState<IBlocksNode[]>([]);

  useEffect(() => {
    (async () => {
      setAutomations((await client?.getAutomations()) ?? []);
    })();
  }, [client]);

  return (
    <>
      <h1>Automations</h1>
      <ul>
        {automations.map((automation) => (
          <li key={automation.id}>
            <Link to={{ pathname: automation.id }}>{automation.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Automations;
