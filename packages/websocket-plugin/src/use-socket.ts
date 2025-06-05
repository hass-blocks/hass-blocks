import { useEffect, useState } from 'react';
import { io, type Socket } from 'socket.io-client';

export enum ConnectionStatus {
  Connected = 'Connected',
  NotConnected = 'NotConnected',
}

export const useSocket = (
  url: string,
  port = 80,
): {
  connectionStatus: ConnectionStatus;
  errors: Error[];
  socket: Socket | undefined;
} => {
  const [socket, setSocket] = useState<Socket | undefined>();
  const [errors, setErrors] = useState<Error[]>([]);

  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>(
    ConnectionStatus.NotConnected,
  );

  useEffect(() => {
    if (!socket) {
      setSocket(io(`ws://${url}:${port}`));
      return;
    }

    socket.onAny(() => {
      setConnectionStatus(
        socket?.connected
          ? ConnectionStatus.Connected
          : ConnectionStatus.NotConnected,
      );
    });

    socket.on('error', (error: Error) =>
      setErrors((oldErrors) => [...oldErrors, error]),
    );
    socket.on('connect_error', (error: Error) => {
      setErrors((oldErrors) => [...oldErrors, error]);
    });

    socket.on('disconnect', (message) => console.log(message));
    return () => {
      socket?.off();
    };
  }, [socket]);

  return { connectionStatus, errors, socket };
};
