import { serviceCall } from '@hass-blocks/core';

/**
 * @public
 *
 * Turn off all schedulers
 */
export const turnOffAllSchedulers = serviceCall({
  name: 'Turn off all schedulers',
  params: {
    domain: 'scheduler',
    service: 'disable_all',
  },
});
