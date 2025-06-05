import { createContext, useEffect, type ReactNode } from 'react';
import { useBlocks } from '@hass-blocks/websocket-plugin/client';

type Client = ReturnType<typeof useBlocks>['client'];

export const BlocksContext = createContext<Client | undefined>(undefined);

interface BlocksProviderProps {
  children: ReactNode;
}

export const BlocksProvider = ({ children }: BlocksProviderProps) => {
  const { client } = useBlocks('localhost', 8080);

  useEffect(() => {
    client?.hassBlocksEvent((event) => {
      if (event.eventType === 'log-event') {
        if (
          event.level === 'error' ||
          event.level === 'fatal' ||
          event.level === 'info' ||
          event.level === 'warn'
        ) {
          console.log(`[hass-blocks:${event.module}] ${event.message}`);
        }
      }
    });
  }, [client]);

  return <BlocksContext value={client}>{children}</BlocksContext>;
};
