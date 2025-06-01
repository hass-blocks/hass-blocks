import { getConfig, initialiseHass } from '@initialise';

const client = await initialiseHass(getConfig());

const config = await client.getConfig();

console.log(JSON.stringify(config, null, 2));
