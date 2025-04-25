import { vi } from 'vitest';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as hassTs from '@hass-blocks/hass-ts-local';

if (process.env.POST_RELEASE === 'true') {
  console.log('stubbing out local package');
  vi.doMock('./package-intercept.ts', () => hassTs);
}
