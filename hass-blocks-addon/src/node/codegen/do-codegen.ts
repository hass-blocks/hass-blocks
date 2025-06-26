import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { generateFiles } from './generate-files.ts';
import { generateOutputBarrel } from './utils/generate-output-barrel.ts';

export const doCodegen = async (client: IHomeAssistant, folder: string) => {
  console.log(`Generating new blocks helpers`);
  const states = await client.getStates();
  const services = await client.getServices();
  const areas = await client.getAreas();
  await generateFiles(folder, services, states, areas);
  await generateOutputBarrel(folder);
};
