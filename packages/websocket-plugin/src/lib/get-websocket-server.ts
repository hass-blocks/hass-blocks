// import type { IEventBus, CorsOptions, IBlock } from '../../../blocks/src/types/index.ts';

// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import { EVENT_NAMES } from 'src/core/constants.ts';

// interface ServerProps {
//   cors: CorsOptions;
//   client: { getAutomations(): IBlock<unknown, unknown>[] };
//   bus: IEventBus;
// }

// /**
//  * Generate a Socket.io connection that forwards events published
//  * on the provided event bus to the socket
//  */
// export const getWebsocketServer = ({ cors, client, bus }: ServerProps) => {
//   const server = createServer((_request, response) => {
//     response.writeHead(200, { 'content-type': 'text/plain' });
//     response.end('Websocket server is running!');
//   });

//   const io = new Server(server, {
//     cors: {
//       origin: cors.origin,
//       methods: cors.methods,
//     },
//   });

//   const stringifyCircularJSON = (obj: unknown) => {
//     const seen = new WeakSet();
//     return JSON.stringify(obj, (_key, value) => {
//       if (value !== null && typeof value === 'object') {
//         if (seen.has(value)) return;

//         seen.add(value);
//       }

//       return value;
//     });
//   };

//   io.on('connection', (socket) => {
//     socket.on('request-automations', () => {
//       const automations = client.getAutomations();

//       const serialisedAutomations = automations.map((automation) =>
//         automation.toJson(),
//       );
//       socket.emit('automations', serialisedAutomations);
//     });

//     bus.subscribe((event) => {
//       socket.emit(
//         EVENT_NAMES.HASS_BLOCKS_EVENT,
//         JSON.parse(stringifyCircularJSON(event)),
//       );
//     });
//   });

//   return server;
// };
