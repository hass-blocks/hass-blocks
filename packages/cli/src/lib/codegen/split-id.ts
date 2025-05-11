export const splitId = (entityId: string) => {
  const [domain, id] = entityId.split('.');
  const theDomain = id ? (domain ?? '') : 'no-domain';

  return {
    id: id ?? domain,
    domain: theDomain,
  };
};
