import { getConfig, initialiseHass } from '@initialise';

await using client = await initialiseHass(getConfig());

const calendar = await client.getCalendars();

console.log(JSON.stringify(calendar, null, 2));
