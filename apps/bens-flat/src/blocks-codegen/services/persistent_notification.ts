import { serviceCall } from '@hass-blocks/core';

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

/**
 * Shows a notification on the notifications panel.
 */
export const createPersistentNotification = (
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

/**
 * Deletes a notification from the notifications panel.
 */
export const dismissPersistentNotification = (
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

/**
 * Deletes all notifications from the notifications panel.
 */
export const dismissAllPersistentNotification = () =>
  serviceCall({
    name: `Call persistent_notification.dismiss_all`,
    params: {
      domain: 'persistent_notification',
      service: 'dismiss_all',
    },
  });
