import type { ISwitchable } from '@types';

export const turn = (switchable: ISwitchable, onOrOff: 'on' | 'off') =>
  onOrOff === 'on' ? switchable.switchOn() : switchable.switchOff();
