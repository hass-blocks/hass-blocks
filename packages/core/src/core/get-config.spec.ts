import { afterEach, describe, expect, it, vi } from 'vitest';

import { getConfig } from './get-config.ts';

afterEach(() => {
  vi.resetAllMocks();
  vi.unstubAllEnvs();
});

describe('getConfig', () => {
  it('should use supervisor paths when SUPERVISOR_TOKEN is present', () => {
    vi.stubEnv('SUPERVISOR_TOKEN', 'test-supervisor-token');

    const config = getConfig();

    expect(config.websocketPath).toBe('/core/websocket');
    expect(config.httpPath).toBe('/core/api');
    expect(config.host).toBe('supervisor');
    expect(config.port).toBe(80);
    expect(config.token).toBe('test-supervisor-token');
  });

  it('should throw error when no port is provided', () => {
    vi.stubEnv('HASS_HOST', 'localhost');
    vi.stubEnv('HASS_TOKEN', 'test-token');
    vi.stubEnv('HASS_PORT', '');

    expect(() => getConfig()).toThrow('Please supply a port!');
  });
});
