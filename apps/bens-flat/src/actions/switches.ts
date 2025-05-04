import { turnSwitch } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { homeMode, tv } = entities.switch;

export const turnHomeModeOff = turnSwitch(
  {
    entity_id: homeMode.id,
  },
  'off',
);

export const turnHomeModeOn = turnSwitch(
  {
    entity_id: homeMode.id,
  },
  'on',
);

export const turnOffTv = turnSwitch({ entity_id: tv.id }, 'off');
