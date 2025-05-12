import type { State } from '@hass-blocks/hass-ts';
import { join } from 'node:path';
import { generateDomainEntities } from '@lib/codegen/generate-entities/generate-domain-entities.ts';
import { generateBucketFile } from '@lib/codegen/utils/generate-barrel-file.ts';

import { splitId } from './split-id.ts';

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
