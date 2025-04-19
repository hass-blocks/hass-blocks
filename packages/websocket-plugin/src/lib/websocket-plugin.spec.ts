import { websocketPlugin } from './websocket-plugin.js';

describe('websocketPlugin', () => {
  it('should work', () => {
    expect(websocketPlugin()).toEqual('websocket-plugin');
  });
});
