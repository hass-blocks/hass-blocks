import { stateIs } from '@hass-blocks/blocks';
import { concurrently, when } from '@hass-blocks/core';

export const notifyAllMyDevices = ({
  message,
  title,
}: {
  message: string;
  title: string;
}) =>
  concurrently(
    mobileAppBensImacNotify({
      message,
      title,
    }),
    mobileAppBensIphoneNotify({
      message,
      title,
    }),
    when(stateIs(wearingClapper2Ps5Console, 'on'), {
      then: playstationNetworkNotify({ message, title }),
      else: lgWebosTvOled55c8plaNotify({ message, title }),
    }),
  );
