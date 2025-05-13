import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Sends a notification message.
   */
  var sendMessageNotify: (
    target: IEntity<`notify.${string}`> | IArea,
    params: SendMessageNotifyProps,
  ) => Block;
  /**
   * Sends a notification that is visible in the notifications panel.
   */
  var persistentNotificationNotify: (
    params: PersistentNotificationNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the email service.
   */
  var emailNotify: (params: EmailNotifyProps) => Block;
  /**
   * Sends a notification message using the mobile_app_mums_phone integration.
   */
  var mobileAppMumsPhoneNotify: (
    params: MobileAppMumsPhoneNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the mobile_app_bens_imac_pro integration.
   */
  var mobileAppBensImacProNotify: (
    params: MobileAppBensImacProNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the mobile_app_bens_iphone integration.
   */
  var mobileAppBensIphoneNotify: (
    params: MobileAppBensIphoneNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the mobile_app_bens_imac integration.
   */
  var mobileAppBensImacNotify: (params: MobileAppBensImacNotifyProps) => Block;
  /**
   * Sends a notification message using the mobile_app_ryans_iphone integration.
   */
  var mobileAppRyansIphoneNotify: (
    params: MobileAppRyansIphoneNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the mobile_app_pixel_6_pro integration.
   */
  var mobileAppPixel_6ProNotify: (
    params: MobileAppPixel_6ProNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the mobile_app_tom_s_pixel_7 integration.
   */
  var mobileAppTomSPixel_7Notify: (
    params: MobileAppTomSPixel_7NotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the notify service.
   */
  var notifyNotify: (params: NotifyNotifyProps) => Block;
  /**
   * Sends a notification message using the lg_webos_tv_oled55c8pla service.
   */
  var lgWebosTvOled55c8plaNotify: (
    params: LgWebosTvOled55c8plaNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the playstation_network service.
   */
  var playstationNetworkNotify: (
    params: PlaystationNetworkNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_bedroom_sonos_one integration.
   */
  var alexaMediaBedroomSonosOneNotify: (
    params: AlexaMediaBedroomSonosOneNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_bedroom_speaker_2 integration.
   */
  var alexaMediaBedroomSpeaker_2Notify: (
    params: AlexaMediaBedroomSpeaker_2NotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_office_2 integration.
   */
  var alexaMediaOffice_2Notify: (
    params: AlexaMediaOffice_2NotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_ben_s_2nd_sonos_one_second_edition integration.
   */
  var alexaMediaBenS_2ndSonosOneSecondEditionNotify: (
    params: AlexaMediaBenS_2ndSonosOneSecondEditionNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_living_room_sonos_one integration.
   */
  var alexaMediaLivingRoomSonosOneNotify: (
    params: AlexaMediaLivingRoomSonosOneNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_living_room integration.
   */
  var alexaMediaLivingRoomNotify: (
    params: AlexaMediaLivingRoomNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_sonos_arc_ultra_2 integration.
   */
  var alexaMediaSonosArcUltra_2Notify: (
    params: AlexaMediaSonosArcUltra_2NotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_living_room_sonos integration.
   */
  var alexaMediaLivingRoomSonosNotify: (
    params: AlexaMediaLivingRoomSonosNotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media_this_device_2 integration.
   */
  var alexaMediaThisDevice_2Notify: (
    params: AlexaMediaThisDevice_2NotifyProps,
  ) => Block;
  /**
   * Sends a notification message using the alexa_media service.
   */
  var alexaMediaNotify: (params: AlexaMediaNotifyProps) => Block;
  /**
   * Sends a notification message using the alexa_media_last_called_bwainwright28_gmail_com integration.
   */
  var alexaMediaLastCalledBwainwright28GmailComNotify: (
    params: AlexaMediaLastCalledBwainwright28GmailComNotifyProps,
  ) => Block;
}

export interface SendMessageNotifyProps {
  /**
   * Your notification message.
   */
  message: string;
  /**
   * Title for your notification message.
   */
  title?: string;
}

globalThis.sendMessageNotify = (
  target: IEntity<`notify.${string}`> | IArea,
  params: SendMessageNotifyProps,
) =>
  serviceCall({
    name: `Call notify.send_message`,
    params: {
      domain: 'notify',
      service: 'send_message',
      service_data: params,
    },
    target,
  });

export interface PersistentNotificationNotifyProps {
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

globalThis.persistentNotificationNotify = (
  params: PersistentNotificationNotifyProps,
) =>
  serviceCall({
    name: `Call notify.persistent_notification`,
    params: {
      domain: 'notify',
      service: 'persistent_notification',
      service_data: params,
    },
  });

export interface EmailNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.emailNotify = (params: EmailNotifyProps) =>
  serviceCall({
    name: `Call notify.email`,
    params: {
      domain: 'notify',
      service: 'email',
      service_data: params,
    },
  });

export interface MobileAppMumsPhoneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppMumsPhoneNotify = (params: MobileAppMumsPhoneNotifyProps) =>
  serviceCall({
    name: `Call notify.mobile_app_mums_phone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_mums_phone',
      service_data: params,
    },
  });

export interface MobileAppBensImacProNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppBensImacProNotify = (
  params: MobileAppBensImacProNotifyProps,
) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_imac_pro`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_imac_pro',
      service_data: params,
    },
  });

export interface MobileAppBensIphoneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppBensIphoneNotify = (
  params: MobileAppBensIphoneNotifyProps,
) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_iphone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_iphone',
      service_data: params,
    },
  });

export interface MobileAppBensImacNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppBensImacNotify = (params: MobileAppBensImacNotifyProps) =>
  serviceCall({
    name: `Call notify.mobile_app_bens_imac`,
    params: {
      domain: 'notify',
      service: 'mobile_app_bens_imac',
      service_data: params,
    },
  });

export interface MobileAppRyansIphoneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppRyansIphoneNotify = (
  params: MobileAppRyansIphoneNotifyProps,
) =>
  serviceCall({
    name: `Call notify.mobile_app_ryans_iphone`,
    params: {
      domain: 'notify',
      service: 'mobile_app_ryans_iphone',
      service_data: params,
    },
  });

export interface MobileAppPixel_6ProNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppPixel_6ProNotify = (
  params: MobileAppPixel_6ProNotifyProps,
) =>
  serviceCall({
    name: `Call notify.mobile_app_pixel_6_pro`,
    params: {
      domain: 'notify',
      service: 'mobile_app_pixel_6_pro',
      service_data: params,
    },
  });

export interface MobileAppTomSPixel_7NotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.mobileAppTomSPixel_7Notify = (
  params: MobileAppTomSPixel_7NotifyProps,
) =>
  serviceCall({
    name: `Call notify.mobile_app_tom_s_pixel_7`,
    params: {
      domain: 'notify',
      service: 'mobile_app_tom_s_pixel_7',
      service_data: params,
    },
  });

export interface NotifyNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.notifyNotify = (params: NotifyNotifyProps) =>
  serviceCall({
    name: `Call notify.notify`,
    params: {
      domain: 'notify',
      service: 'notify',
      service_data: params,
    },
  });

export interface LgWebosTvOled55c8plaNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.lgWebosTvOled55c8plaNotify = (
  params: LgWebosTvOled55c8plaNotifyProps,
) =>
  serviceCall({
    name: `Call notify.lg_webos_tv_oled55c8pla`,
    params: {
      domain: 'notify',
      service: 'lg_webos_tv_oled55c8pla',
      service_data: params,
    },
  });

export interface PlaystationNetworkNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.playstationNetworkNotify = (params: PlaystationNetworkNotifyProps) =>
  serviceCall({
    name: `Call notify.playstation_network`,
    params: {
      domain: 'notify',
      service: 'playstation_network',
      service_data: params,
    },
  });

export interface AlexaMediaBedroomSonosOneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaBedroomSonosOneNotify = (
  params: AlexaMediaBedroomSonosOneNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_bedroom_sonos_one`,
    params: {
      domain: 'notify',
      service: 'alexa_media_bedroom_sonos_one',
      service_data: params,
    },
  });

export interface AlexaMediaBedroomSpeaker_2NotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaBedroomSpeaker_2Notify = (
  params: AlexaMediaBedroomSpeaker_2NotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_bedroom_speaker_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_bedroom_speaker_2',
      service_data: params,
    },
  });

export interface AlexaMediaOffice_2NotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaOffice_2Notify = (params: AlexaMediaOffice_2NotifyProps) =>
  serviceCall({
    name: `Call notify.alexa_media_office_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_office_2',
      service_data: params,
    },
  });

export interface AlexaMediaBenS_2ndSonosOneSecondEditionNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaBenS_2ndSonosOneSecondEditionNotify = (
  params: AlexaMediaBenS_2ndSonosOneSecondEditionNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_ben_s_2nd_sonos_one_second_edition`,
    params: {
      domain: 'notify',
      service: 'alexa_media_ben_s_2nd_sonos_one_second_edition',
      service_data: params,
    },
  });

export interface AlexaMediaLivingRoomSonosOneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaLivingRoomSonosOneNotify = (
  params: AlexaMediaLivingRoomSonosOneNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room_sonos_one`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room_sonos_one',
      service_data: params,
    },
  });

export interface AlexaMediaLivingRoomNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaLivingRoomNotify = (
  params: AlexaMediaLivingRoomNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room',
      service_data: params,
    },
  });

export interface AlexaMediaSonosArcUltra_2NotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaSonosArcUltra_2Notify = (
  params: AlexaMediaSonosArcUltra_2NotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_sonos_arc_ultra_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_sonos_arc_ultra_2',
      service_data: params,
    },
  });

export interface AlexaMediaLivingRoomSonosNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaLivingRoomSonosNotify = (
  params: AlexaMediaLivingRoomSonosNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_living_room_sonos`,
    params: {
      domain: 'notify',
      service: 'alexa_media_living_room_sonos',
      service_data: params,
    },
  });

export interface AlexaMediaThisDevice_2NotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaThisDevice_2Notify = (
  params: AlexaMediaThisDevice_2NotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_this_device_2`,
    params: {
      domain: 'notify',
      service: 'alexa_media_this_device_2',
      service_data: params,
    },
  });

export interface AlexaMediaNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaNotify = (params: AlexaMediaNotifyProps) =>
  serviceCall({
    name: `Call notify.alexa_media`,
    params: {
      domain: 'notify',
      service: 'alexa_media',
      service_data: params,
    },
  });

export interface AlexaMediaLastCalledBwainwright28GmailComNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

globalThis.alexaMediaLastCalledBwainwright28GmailComNotify = (
  params: AlexaMediaLastCalledBwainwright28GmailComNotifyProps,
) =>
  serviceCall({
    name: `Call notify.alexa_media_last_called_bwainwright28_gmail_com`,
    params: {
      domain: 'notify',
      service: 'alexa_media_last_called_bwainwright28_gmail_com',
      service_data: params,
    },
  });
