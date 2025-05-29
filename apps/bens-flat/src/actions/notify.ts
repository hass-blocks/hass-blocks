import { stateIs } from '@hass-blocks/blocks';
import { concurrently, serviceCall, when } from '@hass-blocks/core';

export const notifyMyPhone = ({
  message,
  title,
}: {
  message: string;
  title: string;
}) =>
  serviceCall({
    name: `Send a notification to my phone`,
    params: {
      domain: `notify`,
      service: `mobile_app_bens_iphone`,
      service_data: {
        message,
        title,
      },
    },
  });

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
    when(stateIs(wearingClapper2Ps5ConsoleMediaPlayer, 'on'), {
      then: playstationNetworkNotify({ message, title }),
      else: lgWebosTvOled55c8plaNotify({ message, title }),
    }),
  );
