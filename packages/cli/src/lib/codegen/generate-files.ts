import { join } from 'path';
import { buildServiceCallFile } from './generate-service-calls/build-service-call-file.ts';
import { generateDomainServiceCalls } from './generate-service-calls/generate-domain-service-calls.ts';
import { generateBucketFile } from './utils/generate-barrel-file.ts';
import { GlobalNames } from './utils/global-names.ts';
import type { Service, State } from '@hass-blocks/hass-ts';
import { generateDomainEntities } from './generate-entities/generate-domain-entities.ts';
import { splitId } from './generate-entities/split-id.ts';
import { buildEntityFile } from './generate-entities/build-entity-file.ts';
import { generateOutputBarrel } from './utils/generate-output-barrel.ts';

export const generateFiles = async (
  folder: string,
  services: Record<string, Record<string, Service>>,
  states: State[],
) => {
  const names = new GlobalNames();

  const serviceCallGenerators = Object.entries(services).map(
    ([domain, services]) =>
      generateDomainServiceCalls(folder, domain, services, names),
  );

  const domainEntities = states.reduce<Record<string, State[]>>(
    (accum, state) => {
      const { domain } = splitId(state.entity_id);
      accum[domain] = [...(accum[domain] ?? []), state];
      return accum;
    },
    {},
  );

  const entityGenerators = Object.entries(domainEntities).map(
    ([domain, states]) => generateDomainEntities(folder, domain, states, names),
  );

  const serviceCallsPromise = Promise.all(
    serviceCallGenerators.map(
      async (call) =>
        await buildServiceCallFile(
          folder,
          call.domain,
          call.declareGlobalBlock,
          call.coreImport,
          call.generateServiceNodes,
        ),
    ),
  );

  const entitiesPromise = await Promise.all(
    entityGenerators.map(
      async (entity) =>
        await buildEntityFile(
          folder,
          entity.domain,
          entity.generateDeclareGlobalBlock,
          entity.generateEntities,
          entity.coreImport,
        ),
    ),
  );

  const serviceBucketPromise = generateBucketFile(
    join(folder, `services`),
    Object.keys(services),
  );

  const entitiesBucketPromise = generateBucketFile(
    join(folder, `entities`),
    Object.keys(domainEntities),
  );

  const outputBarrelPromise = generateOutputBarrel(folder);

  await Promise.all([
    serviceCallsPromise,
    entitiesPromise,
    serviceBucketPromise,
    entitiesBucketPromise,
    outputBarrelPromise,
  ]);
};
