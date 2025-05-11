import { serviceCall, ITarget } from '@hass-blocks/core';

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

/**
 * Sends a notification message.
 */
export const sendMessageNotify = (
  target: ITarget,
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

/**
 * Sends a notification that is visible in the notifications panel.
 */
export const persistentNotificationNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the email service.
 */
export const emailNotify = (target: ITarget, params: EmailNotifyProps) =>
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

/**
 * Sends a notification message using the mobile_app_mums_phone integration.
 */
export const mobileAppMumsPhoneNotify = (
  target: ITarget,
  params: MobileAppMumsPhoneNotifyProps,
) =>
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

/**
 * Sends a notification message using the mobile_app_bens_imac_pro integration.
 */
export const mobileAppBensImacProNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the mobile_app_bens_iphone integration.
 */
export const mobileAppBensIphoneNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the mobile_app_bens_imac integration.
 */
export const mobileAppBensImacNotify = (
  target: ITarget,
  params: MobileAppBensImacNotifyProps,
) =>
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

/**
 * Sends a notification message using the mobile_app_ryans_iphone integration.
 */
export const mobileAppRyansIphoneNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the mobile_app_pixel_6_pro integration.
 */
export const mobileAppPixel_6ProNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the mobile_app_tom_s_pixel_7 integration.
 */
export const mobileAppTomSPixel_7Notify = (
  target: ITarget,
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

/**
 * Sends a notification message using the notify service.
 */
export const notifyNotify = (target: ITarget, params: NotifyNotifyProps) =>
  serviceCall({
    name: `Call notify.notify`,
    params: {
      domain: 'notify',
      service: 'notify',
      service_data: params,
    },
  });

export interface PlaystationNetworkNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

/**
 * Sends a notification message using the playstation_network service.
 */
export const playstationNetworkNotify = (
  target: ITarget,
  params: PlaystationNetworkNotifyProps,
) =>
  serviceCall({
    name: `Call notify.playstation_network`,
    params: {
      domain: 'notify',
      service: 'playstation_network',
      service_data: params,
    },
  });

export interface LgWebosTvOled55c8plaNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

/**
 * Sends a notification message using the lg_webos_tv_oled55c8pla service.
 */
export const lgWebosTvOled55c8plaNotify = (
  target: ITarget,
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

export interface AlexaMediaBedroomSonosOneNotifyProps {
  message: string;
  title?: string;
  target?: never;
  data?: never;
}

/**
 * Sends a notification message using the alexa_media_bedroom_sonos_one integration.
 */
export const alexaMediaBedroomSonosOneNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_bedroom_speaker_2 integration.
 */
export const alexaMediaBedroomSpeaker_2Notify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_office_2 integration.
 */
export const alexaMediaOffice_2Notify = (
  target: ITarget,
  params: AlexaMediaOffice_2NotifyProps,
) =>
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

/**
 * Sends a notification message using the alexa_media_ben_s_2nd_sonos_one_second_edition integration.
 */
export const alexaMediaBenS_2ndSonosOneSecondEditionNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_living_room_sonos_one integration.
 */
export const alexaMediaLivingRoomSonosOneNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_living_room integration.
 */
export const alexaMediaLivingRoomNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_sonos_arc_ultra_2 integration.
 */
export const alexaMediaSonosArcUltra_2Notify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_living_room_sonos integration.
 */
export const alexaMediaLivingRoomSonosNotify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media_this_device_2 integration.
 */
export const alexaMediaThisDevice_2Notify = (
  target: ITarget,
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

/**
 * Sends a notification message using the alexa_media service.
 */
export const alexaMediaNotify = (
  target: ITarget,
  params: AlexaMediaNotifyProps,
) =>
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

/**
 * Sends a notification message using the alexa_media_last_called_bwainwright28_gmail_com integration.
 */
export const alexaMediaLastCalledBwainwright28GmailComNotify = (
  target: ITarget,
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
