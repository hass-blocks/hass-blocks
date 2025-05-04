import { serviceCall } from '@hass-blocks/core';

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
