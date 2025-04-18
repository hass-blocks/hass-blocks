import { vi } from "vitest";
import { when } from "vitest-when";

import { Logger } from "../types/index.ts";

import { initialiseClient } from "./initialise-client.ts";
import { WebsocketClient } from "./websocket-client/index.ts";
import { mock } from "vitest-mock-extended";
import { Client } from "./client/index.ts";
import { getLogger } from "./get-logger.ts";
import { RestClient } from "./rest-client/index.ts";

vi.mock("./client/index.js");
vi.mock("./websocket-client/index.js");
vi.mock("./rest-client/index.js");
vi.mock("./get-logger.js");

describe("initialiseClient", () => {
  it("correctly initialises the websocket client, wires it into the client and returns the client", async () => {
    const host = "host";
    const port = 1234;
    const token = "token";
    const websocketPath = "/api/websocket";
    const httpPath = "/api";

    const mockWebsocketClient = mock<WebsocketClient>();
    const mockRestClient = mock<RestClient>();

    const logger = mock<Logger>();

    when(getLogger).calledWith(logger).thenReturn(logger);

    when(vi.mocked(WebsocketClient))
      .calledWith(host, port, websocketPath, token, logger)
      .thenReturn(mockWebsocketClient);

    when(vi.mocked(RestClient))
      .calledWith(host, port, httpPath, token, logger)
      .thenReturn(mockRestClient);

    const mockClient = mock<Client>();

    when(vi.mocked(Client))
      .calledWith(mockWebsocketClient, mockRestClient)
      .thenReturn(mockClient);

    const client = await initialiseClient({
      host,
      port,
      httpPath,
      websocketPath,
      token,
      logger,
    });

    expect(mockWebsocketClient.init).toHaveBeenCalled();
    expect(client).toBe(mockClient);
  });
});
