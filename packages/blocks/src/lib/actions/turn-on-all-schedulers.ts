import { serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Turn on all schedulers
 */
export const turnOnAllSchedulers = serviceCall({
  name: 'Turn on all schedulers',
  params: {
    domain: 'scheduler',
    service: 'enable_all',
  },
});
