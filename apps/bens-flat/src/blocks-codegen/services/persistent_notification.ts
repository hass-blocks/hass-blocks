import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Shows a notification on the notifications panel.
   */
  var createPersistentNotification: (
    params: CreatePersistentNotificationProps,
  ) => Block;
  /**
   * Deletes a notification from the notifications panel.
   */
  var dismissPersistentNotification: (
    params: DismissPersistentNotificationProps,
  ) => Block;
  /**
   * Deletes all notifications from the notifications panel.
   */
  var dismissAllPersistentNotification: () => Block;
}

export interface CreatePersistentNotificationProps {
  /**
   * Message body of the notification.
   */
  message: string;
  /**
   * Optional title of the notification.
   */
  title?: string;
  /**
   * ID of the notification. This new notification will overwrite an existing notification with the same ID.
   */
  notification_id?: string;
}

globalThis.createPersistentNotification = (
  params: CreatePersistentNotificationProps,
) =>
  serviceCall({
    name: `Call persistent_notification.create`,
    params: {
      domain: 'persistent_notification',
      service: 'create',
      service_data: params,
    },
  });

export interface DismissPersistentNotificationProps {
  /**
   * ID of the notification to be deleted.
   */
  notification_id: string;
}

globalThis.dismissPersistentNotification = (
  params: DismissPersistentNotificationProps,
) =>
  serviceCall({
    name: `Call persistent_notification.dismiss`,
    params: {
      domain: 'persistent_notification',
      service: 'dismiss',
      service_data: params,
    },
  });

globalThis.dismissAllPersistentNotification = () =>
  serviceCall({
    name: `Call persistent_notification.dismiss_all`,
    params: {
      domain: 'persistent_notification',
      service: 'dismiss_all',
    },
  });
