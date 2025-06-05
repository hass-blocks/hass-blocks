import { createContext, type ReactNode } from 'react';
import { useBlocks } from '@hass-blocks/websocket-plugin/client';

type Client = ReturnType<typeof useBlocks>['client'];

export const BlocksContext = createContext<Client | undefined>(undefined);

interface BlocksProviderProps {
  children: ReactNode;
}

export const BlocksProvider = ({ children }: BlocksProviderProps) => {
  const { client } = useBlocks('localhost', 8080);

  return <BlocksContext value={client}>{children}</BlocksContext>;
};
