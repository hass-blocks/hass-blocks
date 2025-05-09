import { automation, concurrently } from '@hass-blocks/core';
import { imLessThen20kmAway, imMoreThan20KmAway } from '../triggers/zone.ts';
import {
  stateTurns,
  switchClimate,
  turnOffAllSchedulers,
  turnOnAllSchedulers,
  turnSwitch,
} from '@hass-blocks/blocks';
import { allRooms } from '../areas.ts';
import { notifyMyPhone } from '../actions/notify.ts';
import { allHeatingAndBoilerSwitches, homeMode } from '../entities.ts';

export const holidayModeOn = automation({
  name: 'Holiday Mode On',
  when: imMoreThan20KmAway,
  then: [turnSwitch(homeMode, 'on')],
});

export const holidayModeOff = automation({
  name: 'Holiday Mode Off',
  when: imLessThen20kmAway,
  then: [turnSwitch(homeMode, 'off')],
});

export const holidayModeTurnsOn = automation({
  name: 'Holiday Mode Turns on',
  when: stateTurns(homeMode, 'on'),
  then: [
    concurrently(
      notifyMyPhone({
        message: 'Holiday mode turned on. Enjoy your time away!',
        title: 'Holiday mode',
      }),
      switchClimate(allRooms, 'off'),
      turnSwitch(allHeatingAndBoilerSwitches, 'off'),
      turnOnAllSchedulers,
    ),
  ],
});

export const holidayModeTurnsOff = automation({
  name: 'Holiday Mode Turns Off',
  when: stateTurns(homeMode, 'off'),
  then: [
    concurrently(
      notifyMyPhone({
        message: 'Holiday mode turned off… welcome home!',
        title: 'Holiday mode',
      }),
      switchClimate(allRooms, 'on'),
      turnOffAllSchedulers,
    ),
  ],
});
