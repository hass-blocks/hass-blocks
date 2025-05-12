import { join } from 'node:path';

import type { Service } from '@hass-blocks/hass-ts';

import { generateBucketFile } from '@lib/codegen/utils/generate-barrel-file.ts';

import { generateDomainServiceCalls } from './generate-domain-service-calls.ts';

export const generateServiceCalls = async (
  folder: string,
  services: Record<string, Record<string, Service>>,
) => {
  await Promise.all(
    Object.entries(services).map(
      async ([domain, services]) =>
        await generateDomainServiceCalls(folder, domain, services),
    ),
  );

  await generateBucketFile(join(folder, `services`), Object.keys(services));
};
