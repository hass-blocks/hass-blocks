import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';

export { initialiseHass, getConfig } from '@hass-blocks/hass-ts';

const client = await initialiseHass(getConfig());

// const states = await client.getStates();

// console.log(JSON.stringify(states, null, 2));

const states = Object.entries(await client.getServices()).flatMap(
  ([domain, item]) =>
    Object.entries(item).map(([id, itemTwo]) => ({
      id: `${domain}.${id}`,
      target: itemTwo.target,
    })),
);

console.log(JSON.stringify(states, null, 2));

await client.close();
