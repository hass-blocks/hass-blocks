import { stateTurns } from '@hass-blocks/blocks';
import { entities } from '../constants.ts';

const { homeMode } = entities;

export const homeModeTurnsOff = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  homeMode.targetIds?.entity_id?.[0]!,
  'off',
);
export const homeModeTurnsOn = stateTurns(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  homeMode.targetIds?.entity_id?.[0]!,
  'on',
);
