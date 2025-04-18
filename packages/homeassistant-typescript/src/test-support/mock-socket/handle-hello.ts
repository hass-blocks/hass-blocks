import { HelloCommand } from "../../lib/core/index.ts";
import { send } from "./send.ts";
import { Socket } from "./socket.ts";

export const handleHello = (socket: Socket, message: HelloCommand) => {
  send(socket, {
    id: message.id,
    type: "result",
    success: true,
    result: {
      message: "hey!",
    },
  });
};
