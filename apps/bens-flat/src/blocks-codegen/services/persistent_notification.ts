import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface CreatePersistentNotification {
    /**
     * Message body of the notification
     */
    message: string;
    /**
     * Optional title of the notification
     */
    title?: string;
    /**
     * ID of the notification. This new notification will overwrite an existing notification with the same ID
     */
    notification_id?: string;
  }

  /**
   * Shows a notification on the notifications panel
   */
  var createPersistentNotification: (
    params: CreatePersistentNotification,
  ) => Block<Partial<CreatePersistentNotification> | undefined, void>;

  interface DismissPersistentNotification {
    /**
     * ID of the notification to be deleted
     */
    notification_id: string;
  }

  /**
   * Deletes a notification from the notifications panel
   */
  var dismissPersistentNotification: (
    params: DismissPersistentNotification,
  ) => Block<Partial<DismissPersistentNotification> | undefined, void>;

  /**
   * Deletes all notifications from the notifications panel
   */
  var dismissAllPersistentNotification: () => Block<
    Partial<unknown> | undefined,
    void
  >;
}

globalThis.createPersistentNotification = (params) =>
  serviceCall({
    name: `Call persistent_notification.create`,
    params: {
      domain: 'persistent_notification',
      service: 'create',
      service_data: params,
    },
  });

globalThis.dismissPersistentNotification = (params) =>
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
