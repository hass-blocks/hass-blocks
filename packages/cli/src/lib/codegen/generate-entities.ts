import { State } from '@hass-blocks/hass-ts';
import { generateDomainEntities } from './generate-domain-entities.ts';
import { splitId } from './split-id.ts';
import { generateBucketFile } from './generate-bucket-file.ts';
import { join } from 'path';

export const generateEntities = async (folder: string, states: State[]) => {
  const domainEntities = states.reduce<Record<string, State[]>>(
    (accum, state) => {
      const { domain } = splitId(state.entity_id);
      accum[domain] = [...(accum[domain] ?? []), state];
      return accum;
    },
    {},
  );

  await Promise.all(
    Object.entries(domainEntities).map(async ([domain, states]) => {
      await generateDomainEntities(folder, domain, states);
    }),
  );

  await generateBucketFile(
    join(folder, `entities`),
    Object.keys(domainEntities),
  );
};
