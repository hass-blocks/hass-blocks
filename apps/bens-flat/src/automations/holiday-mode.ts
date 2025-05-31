import { automation, concurrently } from '@hass-blocks/core';

import { imLessThen20kmAway, imMoreThan20KmAway } from '../triggers/zone.ts';
import { allRooms } from '../areas.ts';
import { notifyMyPhone } from '../actions/notify.ts';
import { allHeatingAndBoilerSwitches } from '../entities.ts';

import '@blocks-codegen';
import { stateTurnsOff, stateTurnsOn } from '@hass-blocks/triggers';

export const holidayModeOn = automation({
  name: 'Holiday Mode On',
  when: imMoreThan20KmAway,
  then: [turnOnSwitch(homeModeSwitch)],
});

export const holidayModeOff = automation({
  name: 'Holiday Mode Off',
  when: imLessThen20kmAway,
  then: turnOffSwitch(homeModeSwitch),
});

export const holidayModeTurnsOn = automation({
  name: 'Holiday Mode Turns on',
  when: stateTurnsOn(homeModeSwitch),
  then: concurrently(
    notifyMyPhone({
      message: 'Holiday mode turned on. Enjoy your time away!',
      title: 'Holiday mode',
    }),
    turnOffClimate(allRooms),
    turnOffSwitch(allHeatingAndBoilerSwitches),
    enableAllScheduler(),
  ),
});

export const holidayModeTurnsOff = automation({
  name: 'Holiday Mode Turns Off',
  when: stateTurnsOff(homeModeSwitch),
  then: [
    concurrently(
      notifyMyPhone({
        message: 'Holiday mode turned off… welcome home!',
        title: 'Holiday mode',
      }),
      turnOnClimate(allRooms),
      turnOffSwitch(allHeatingAndBoilerSwitches),
    ),
  ],
});
