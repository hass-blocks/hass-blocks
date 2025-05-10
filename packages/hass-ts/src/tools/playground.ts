import { getConfig, initialiseHass } from '@initialise';

const client = await initialiseHass(getConfig());

const devices = await client.getAreas();

console.log(JSON.stringify(devices, null, 2));
