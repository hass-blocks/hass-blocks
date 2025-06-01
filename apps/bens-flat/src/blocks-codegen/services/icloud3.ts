import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ActionIcloud3 {
    /**
     * (Required) The operational command to send to iCloud3
     */
    command: never;
    /**
     * (Optional) Apply all devices or only apply to the selected device
     */
    device_name?: never;
  }

  /**
   * This service will send operational commands to iCloud3
   */
  var actionIcloud3: (
    params: ActionIcloud3,
  ) => Block<Partial<ServiceCallArgs<ActionIcloud3>> | undefined, void>;

  /**
   * The Update service has been replaced by the Action service
   */
  var updateIcloud3: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  /**
   * This service will restart iCloud3
   */
  var restartIcloud3: () => Block<
    Partial<ServiceCallArgs<unknown>> | undefined,
    void
  >;

  interface FindIphoneAlertIcloud3 {
    /**
     * Device the Find iPhone Alert and Message should be sent to
     */
    device_name: never;
  }

  /**
   * This service will send an alert tone to the device that you want to find
   */
  var findIphoneAlertIcloud3: (
    params: FindIphoneAlertIcloud3,
  ) => Block<
    Partial<ServiceCallArgs<FindIphoneAlertIcloud3>> | undefined,
    void
  >;

  interface LostDeviceAlertIcloud3 {
    /**
     * Device the Find iPhone Alert and Message should be sent to
     */
    device_name: never;
    /**
     * The phone number to send the message to
     */
    number: string;
    /**
     * The message to be sent
     */
    message: string;
  }

  /**
   * This service will send a Message and Phone number to the lost iPhone
   */
  var lostDeviceAlertIcloud3: (
    params: LostDeviceAlertIcloud3,
  ) => Block<
    Partial<ServiceCallArgs<LostDeviceAlertIcloud3>> | undefined,
    void
  >;

  interface DisplayMessageAlertIcloud3 {
    /**
     * Device the message should be displayed on
     */
    device_name: never;
    /**
     * The message to be sent
     */
    message: string;
    /**
     * If a sound is to be played along with message
     */
    sounds: string;
  }

  /**
   * This service will display a message on the device and can also play an alert tone
   */
  var displayMessageAlertIcloud3: (
    params: DisplayMessageAlertIcloud3,
  ) => Block<
    Partial<ServiceCallArgs<DisplayMessageAlertIcloud3>> | undefined,
    void
  >;
}

globalThis.actionIcloud3 = (params) =>
  serviceCall({
    name: `Call icloud3.action`,
    params: {
      domain: 'icloud3',
      service: 'action',
      service_data: params,
    },
  });

globalThis.updateIcloud3 = () =>
  serviceCall({
    name: `Call icloud3.update`,
    params: {
      domain: 'icloud3',
      service: 'update',
    },
  });

globalThis.restartIcloud3 = () =>
  serviceCall({
    name: `Call icloud3.restart`,
    params: {
      domain: 'icloud3',
      service: 'restart',
    },
  });

globalThis.findIphoneAlertIcloud3 = (params) =>
  serviceCall({
    name: `Call icloud3.find_iphone_alert`,
    params: {
      domain: 'icloud3',
      service: 'find_iphone_alert',
      service_data: params,
    },
  });

globalThis.lostDeviceAlertIcloud3 = (params) =>
  serviceCall({
    name: `Call icloud3.lost_device_alert`,
    params: {
      domain: 'icloud3',
      service: 'lost_device_alert',
      service_data: params,
    },
  });

globalThis.displayMessageAlertIcloud3 = (params) =>
  serviceCall({
    name: `Call icloud3.display_message_alert`,
    params: {
      domain: 'icloud3',
      service: 'display_message_alert',
      service_data: params,
    },
  });
