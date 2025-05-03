import { turnSwitch } from '@hass-blocks/blocks';
import { entities } from 'src/constants.ts';

const { homeMode } = entities.switch;

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
