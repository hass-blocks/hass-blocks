import {
  createContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { useBlocks } from '@hass-blocks/websocket-plugin/client';
import { ConnectionStatus } from '@hass-blocks/websocket-plugin/client';
import type { HassBlocksEvent } from '@hass-blocks/core';

type Client = ReturnType<typeof useBlocks>['client'];

interface BlocksContextProps {
  client: Client | undefined;
  connectionStatus: ConnectionStatus;
  onEvent: (callback: (event: HassBlocksEvent) => void) => void;
}

export const BlocksContext = createContext<BlocksContextProps>({
  client: undefined,
  connectionStatus: ConnectionStatus.NotConnected,
  onEvent: () => {
    // NOOP
  },
});

interface BlocksProviderProps {
  children: ReactNode;
}

export const BlocksProvider = ({ children }: BlocksProviderProps) => {
  const { client, connectionStatus } = useBlocks('localhost', 3001);

  const [callbacks, setCallbacks] = useState<
    ((event: HassBlocksEvent) => void)[]
  >([]);

  useEffect(() => {
    client?.hassBlocksEvent((event) => {
      callbacks.forEach((callback) => callback(event));
    });
  }, [client, callbacks]);

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

  const onEventCallback = useCallback(
    (callback: (event: HassBlocksEvent) => void) => {
      setCallbacks((callbacks) => [...callbacks, callback]);
    },
    [setCallbacks],
  );

  return (
    <BlocksContext
      value={{
        client,
        connectionStatus,
        onEvent: onEventCallback,
      }}
    >
      {children}
    </BlocksContext>
  );
};
