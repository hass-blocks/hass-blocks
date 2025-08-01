import { describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import type { ITarget } from '@types';

import { sendRemoteCommands } from './send-remote-commands.ts';

describe('sendRemoteCommands', () => {
  it('should create service call with correct name', () => {
    const mockTarget = mock<ITarget>();
    const commands = ['power', 'volume_up', 'play'];

    const serviceCall = sendRemoteCommands(mockTarget, commands);

    expect(serviceCall.name).toBe('Send remote commands');
  });

  it('should create service call with correct type', () => {
    const mockTarget = mock<ITarget>();
    const commands = ['power', 'volume_up'];

    const serviceCall = sendRemoteCommands(mockTarget, commands);

    expect(serviceCall.type).toBe('service-call');
  });
});
