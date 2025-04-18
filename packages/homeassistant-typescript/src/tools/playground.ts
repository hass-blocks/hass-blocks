import { getConfig, initialiseClient } from "../lib/core/index.ts";

const client = await initialiseClient(getConfig());

const devices = await client.getAreas();

console.log(JSON.stringify(devices, null, 2));
