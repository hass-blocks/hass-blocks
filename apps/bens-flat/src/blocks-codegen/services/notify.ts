import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SendMessageNotifyProps {
    /**
     * Your notification message.
     */
    message: string;
    /**
     * Title for your notification message.
     */
    title?: string;
  }

  /**
   * Sends a notification message.
   */
  var sendMessageNotify: (
    target: IEntity<`notify.${string}`> | IArea,
    params?: SendMessageNotifyProps,
  ) => Block;

  interface PersistentNotificationNotifyProps {
    /**
     * Message body of the notification.
     */
    message: string;
    /**
     * Title of the notification.
     */
    title?: string;
    /**
     * Some integrations provide extended functionality via this field. For more information, refer to the integration documentation.
     */
    data?: never;
  }

  /**
   * Sends a notification that is visible in the notifications panel.
   */
  var persistentNotificationNotify: (
    params?: PersistentNotificationNotifyProps,
  ) => Block;

  interface EmailNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the email service.
   */
  var emailNotify: (params?: EmailNotifyProps) => Block;

  interface MobileAppMumsPhoneNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_mums_phone integration.
   */
  var mobileAppMumsPhoneNotify: (
    params?: MobileAppMumsPhoneNotifyProps,
  ) => Block;

  interface MobileAppBensImacProNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_bens_imac_pro integration.
   */
  var mobileAppBensImacProNotify: (
    params?: MobileAppBensImacProNotifyProps,
  ) => Block;

  interface MobileAppBensIphoneNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_bens_iphone integration.
   */
  var mobileAppBensIphoneNotify: (
    params?: MobileAppBensIphoneNotifyProps,
  ) => Block;

  interface MobileAppBensImacNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_bens_imac integration.
   */
  var mobileAppBensImacNotify: (params?: MobileAppBensImacNotifyProps) => Block;

  interface MobileAppRyansIphoneNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_ryans_iphone integration.
   */
  var mobileAppRyansIphoneNotify: (
    params?: MobileAppRyansIphoneNotifyProps,
  ) => Block;

  interface MobileAppPixel_6ProNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_pixel_6_pro integration.
   */
  var mobileAppPixel_6ProNotify: (
    params?: MobileAppPixel_6ProNotifyProps,
  ) => Block;

  interface MobileAppTomSPixel_7NotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the mobile_app_tom_s_pixel_7 integration.
   */
  var mobileAppTomSPixel_7Notify: (
    params?: MobileAppTomSPixel_7NotifyProps,
  ) => Block;

  interface NotifyNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the notify service.
   */
  var notifyNotify: (params?: NotifyNotifyProps) => Block;

  interface LgWebosTvOled55c8plaNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the lg_webos_tv_oled55c8pla service.
   */
  var lgWebosTvOled55c8plaNotify: (
    params?: LgWebosTvOled55c8plaNotifyProps,
  ) => Block;

  interface PlaystationNetworkNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the playstation_network service.
   */
  var playstationNetworkNotify: (
    params?: PlaystationNetworkNotifyProps,
  ) => Block;

  interface AlexaMediaBedroomSonosOneNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_bedroom_sonos_one integration.
   */
  var alexaMediaBedroomSonosOneNotify: (
    params?: AlexaMediaBedroomSonosOneNotifyProps,
  ) => Block;

  interface AlexaMediaBedroomSpeaker_2NotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_bedroom_speaker_2 integration.
   */
  var alexaMediaBedroomSpeaker_2Notify: (
    params?: AlexaMediaBedroomSpeaker_2NotifyProps,
  ) => Block;

  interface AlexaMediaOffice_2NotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_office_2 integration.
   */
  var alexaMediaOffice_2Notify: (
    params?: AlexaMediaOffice_2NotifyProps,
  ) => Block;

  interface AlexaMediaBenS_2ndSonosOneSecondEditionNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_ben_s_2nd_sonos_one_second_edition integration.
   */
  var alexaMediaBenS_2ndSonosOneSecondEditionNotify: (
    params?: AlexaMediaBenS_2ndSonosOneSecondEditionNotifyProps,
  ) => Block;

  interface AlexaMediaLivingRoomSonosOneNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_living_room_sonos_one integration.
   */
  var alexaMediaLivingRoomSonosOneNotify: (
    params?: AlexaMediaLivingRoomSonosOneNotifyProps,
  ) => Block;

  interface AlexaMediaLivingRoomNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_living_room integration.
   */
  var alexaMediaLivingRoomNotify: (
    params?: AlexaMediaLivingRoomNotifyProps,
  ) => Block;

  interface AlexaMediaSonosArcUltra_2NotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_sonos_arc_ultra_2 integration.
   */
  var alexaMediaSonosArcUltra_2Notify: (
    params?: AlexaMediaSonosArcUltra_2NotifyProps,
  ) => Block;

  interface AlexaMediaLivingRoomSonosNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_living_room_sonos integration.
   */
  var alexaMediaLivingRoomSonosNotify: (
    params?: AlexaMediaLivingRoomSonosNotifyProps,
  ) => Block;

  interface AlexaMediaThisDevice_2NotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_this_device_2 integration.
   */
  var alexaMediaThisDevice_2Notify: (
    params?: AlexaMediaThisDevice_2NotifyProps,
  ) => Block;

  interface AlexaMediaNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media service.
   */
  var alexaMediaNotify: (params?: AlexaMediaNotifyProps) => Block;

  interface AlexaMediaLastCalledBwainwright28GmailComNotifyProps {
    message: string;
    title?: string;
    target?: never;
    data?: never;
  }

  /**
   * Sends a notification message using the alexa_media_last_called_bwainwright28_gmail_com integration.
   */
  var alexaMediaLastCalledBwainwright28GmailComNotify: (
    params?: AlexaMediaLastCalledBwainwright28GmailComNotifyProps,
  ) => Block;
}

globalThis.sendMessageNotify = (target, params) =>
  serviceCall({
    name: `Call notify.send_message`,
    params: {
      domain: 'notify',
      service: 'send_message',
      service_data: params,
    },
    target,
  });

globalThis.persistentNotificationNotify = (params) =>
  serviceCall({
    name: `Call notify.persistent_notification`,
    params: {
      domain: 'notify',
      service: 'persistent_notification',
      service_data: params,
    },
  });

globalThis.emailNotify = (params) =>
  serviceCall({
    name: `Call notify.email`,
    params: {
      domain: 'notify',
      service: 'email',
      service_data: params,
    },
  });

globalThis.mobileAppMumsPhoneNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_mums_phone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_mums_phone',
      service_data: params,
    },
  });

globalThis.mobileAppBensImacProNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_imac_pro`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_imac_pro',
      service_data: params,
    },
  });

globalThis.mobileAppBensIphoneNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_iphone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_iphone',
      service_data: params,
    },
  });

globalThis.mobileAppBensImacNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_imac`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_imac',
      service_data: params,
    },
  });

globalThis.mobileAppRyansIphoneNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_ryans_iphone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_ryans_iphone',
      service_data: params,
    },
  });

globalThis.mobileAppPixel_6ProNotify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_pixel_6_pro`,
    params: {
      domain: 'notify',
      service: 'mobile_app_pixel_6_pro',
      service_data: params,
    },
  });

globalThis.mobileAppTomSPixel_7Notify = (params) =>
  serviceCall({
    name: `Call notify.mobile_app_tom_s_pixel_7`,
    params: {
      domain: 'notify',
      service: 'mobile_app_tom_s_pixel_7',
      service_data: params,
    },
  });

globalThis.notifyNotify = (params) =>
  serviceCall({
    name: `Call notify.notify`,
    params: {
      domain: 'notify',
      service: 'notify',
      service_data: params,
    },
  });

globalThis.lgWebosTvOled55c8plaNotify = (params) =>
  serviceCall({
    name: `Call notify.lg_webos_tv_oled55c8pla`,
    params: {
      domain: 'notify',
      service: 'lg_webos_tv_oled55c8pla',
      service_data: params,
    },
  });

globalThis.playstationNetworkNotify = (params) =>
  serviceCall({
    name: `Call notify.playstation_network`,
    params: {
      domain: 'notify',
      service: 'playstation_network',
      service_data: params,
    },
  });

globalThis.alexaMediaBedroomSonosOneNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_bedroom_sonos_one`,
    params: {
      domain: 'notify',
      service: 'alexa_media_bedroom_sonos_one',
      service_data: params,
    },
  });

globalThis.alexaMediaBedroomSpeaker_2Notify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_bedroom_speaker_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_bedroom_speaker_2',
      service_data: params,
    },
  });

globalThis.alexaMediaOffice_2Notify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_office_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_office_2',
      service_data: params,
    },
  });

globalThis.alexaMediaBenS_2ndSonosOneSecondEditionNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_ben_s_2nd_sonos_one_second_edition`,
    params: {
      domain: 'notify',
      service: 'alexa_media_ben_s_2nd_sonos_one_second_edition',
      service_data: params,
    },
  });

globalThis.alexaMediaLivingRoomSonosOneNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room_sonos_one`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room_sonos_one',
      service_data: params,
    },
  });

globalThis.alexaMediaLivingRoomNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room',
      service_data: params,
    },
  });

globalThis.alexaMediaSonosArcUltra_2Notify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_sonos_arc_ultra_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_sonos_arc_ultra_2',
      service_data: params,
    },
  });

globalThis.alexaMediaLivingRoomSonosNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room_sonos`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room_sonos',
      service_data: params,
    },
  });

globalThis.alexaMediaThisDevice_2Notify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_this_device_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_this_device_2',
      service_data: params,
    },
  });

globalThis.alexaMediaNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media`,
    params: {
      domain: 'notify',
      service: 'alexa_media',
      service_data: params,
    },
  });

globalThis.alexaMediaLastCalledBwainwright28GmailComNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_last_called_bwainwright28_gmail_com`,
    params: {
      domain: 'notify',
      service: 'alexa_media_last_called_bwainwright28_gmail_com',
      service_data: params,
    },
  });
