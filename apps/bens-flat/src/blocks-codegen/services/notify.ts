import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface SendMessageNotify {
    /**
     * Your notification message
     */
    message: string;
    /**
     * Title for your notification message
     */
    title?: string;
  }

  /**
   * Sends a notification message
   */
  var sendMessageNotify: (
    target: IEntity<`notify.${string}`> | IArea<string>,
    params: SendMessageNotify,
  ) => Block<Partial<SendMessageNotify> | undefined, void>;

  interface PersistentNotificationNotify {
    /**
     * Message body of the notification
     */
    message: string;
    /**
     * Title of the notification
     */
    title?: string;
    /**
     * Some integrations provide extended functionality via this field. For more information, refer to the integration documentation
     */
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification that is visible in the notifications panel
   */
  var persistentNotificationNotify: (
    params: PersistentNotificationNotify,
  ) => Block<Partial<PersistentNotificationNotify> | undefined, void>;

  interface EmailNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the email service
   */
  var emailNotify: (
    params: EmailNotify,
  ) => Block<Partial<EmailNotify> | undefined, void>;

  interface MobileAppMumsPhoneNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_mums_phone integration
   */
  var mobileAppMumsPhoneNotify: (
    params: MobileAppMumsPhoneNotify,
  ) => Block<Partial<MobileAppMumsPhoneNotify> | undefined, void>;

  interface MobileAppBensImacProNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_bens_imac_pro integration
   */
  var mobileAppBensImacProNotify: (
    params: MobileAppBensImacProNotify,
  ) => Block<Partial<MobileAppBensImacProNotify> | undefined, void>;

  interface MobileAppBensIphoneNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_bens_iphone integration
   */
  var mobileAppBensIphoneNotify: (
    params: MobileAppBensIphoneNotify,
  ) => Block<Partial<MobileAppBensIphoneNotify> | undefined, void>;

  interface MobileAppBensImacNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_bens_imac integration
   */
  var mobileAppBensImacNotify: (
    params: MobileAppBensImacNotify,
  ) => Block<Partial<MobileAppBensImacNotify> | undefined, void>;

  interface MobileAppRyansIphoneNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_ryans_iphone integration
   */
  var mobileAppRyansIphoneNotify: (
    params: MobileAppRyansIphoneNotify,
  ) => Block<Partial<MobileAppRyansIphoneNotify> | undefined, void>;

  interface MobileAppPixel_6ProNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_pixel_6_pro integration
   */
  var mobileAppPixel_6ProNotify: (
    params: MobileAppPixel_6ProNotify,
  ) => Block<Partial<MobileAppPixel_6ProNotify> | undefined, void>;

  interface MobileAppTomSPixel_7Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the mobile_app_tom_s_pixel_7 integration
   */
  var mobileAppTomSPixel_7Notify: (
    params: MobileAppTomSPixel_7Notify,
  ) => Block<Partial<MobileAppTomSPixel_7Notify> | undefined, void>;

  interface Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the notify service
   */
  var notify: (params: Notify) => Block<Partial<Notify> | undefined, void>;

  interface LgWebosTvOled55c8plaNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the lg_webos_tv_oled55c8pla service
   */
  var lgWebosTvOled55c8plaNotify: (
    params: LgWebosTvOled55c8plaNotify,
  ) => Block<Partial<LgWebosTvOled55c8plaNotify> | undefined, void>;

  interface PlaystationNetworkNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the playstation_network service
   */
  var playstationNetworkNotify: (
    params: PlaystationNetworkNotify,
  ) => Block<Partial<PlaystationNetworkNotify> | undefined, void>;

  interface AlexaMediaBedroomSonosOneNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_bedroom_sonos_one integration
   */
  var alexaMediaBedroomSonosOneNotify: (
    params: AlexaMediaBedroomSonosOneNotify,
  ) => Block<Partial<AlexaMediaBedroomSonosOneNotify> | undefined, void>;

  interface AlexaMediaBedroomSpeaker_2Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_bedroom_speaker_2 integration
   */
  var alexaMediaBedroomSpeaker_2Notify: (
    params: AlexaMediaBedroomSpeaker_2Notify,
  ) => Block<Partial<AlexaMediaBedroomSpeaker_2Notify> | undefined, void>;

  interface AlexaMediaOffice_2Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_office_2 integration
   */
  var alexaMediaOffice_2Notify: (
    params: AlexaMediaOffice_2Notify,
  ) => Block<Partial<AlexaMediaOffice_2Notify> | undefined, void>;

  interface AlexaMediaBenS_2ndSonosOneSecondEditionNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_ben_s_2nd_sonos_one_second_edition integration
   */
  var alexaMediaBenS_2ndSonosOneSecondEditionNotify: (
    params: AlexaMediaBenS_2ndSonosOneSecondEditionNotify,
  ) => Block<
    Partial<AlexaMediaBenS_2ndSonosOneSecondEditionNotify> | undefined,
    void
  >;

  interface AlexaMediaLivingRoomSonosOneNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_living_room_sonos_one integration
   */
  var alexaMediaLivingRoomSonosOneNotify: (
    params: AlexaMediaLivingRoomSonosOneNotify,
  ) => Block<Partial<AlexaMediaLivingRoomSonosOneNotify> | undefined, void>;

  interface AlexaMediaLivingRoomNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_living_room integration
   */
  var alexaMediaLivingRoomNotify: (
    params: AlexaMediaLivingRoomNotify,
  ) => Block<Partial<AlexaMediaLivingRoomNotify> | undefined, void>;

  interface AlexaMediaSonosArcUltra_2Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_sonos_arc_ultra_2 integration
   */
  var alexaMediaSonosArcUltra_2Notify: (
    params: AlexaMediaSonosArcUltra_2Notify,
  ) => Block<Partial<AlexaMediaSonosArcUltra_2Notify> | undefined, void>;

  interface AlexaMediaLivingRoomSonosNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_living_room_sonos integration
   */
  var alexaMediaLivingRoomSonosNotify: (
    params: AlexaMediaLivingRoomSonosNotify,
  ) => Block<Partial<AlexaMediaLivingRoomSonosNotify> | undefined, void>;

  interface AlexaMediaThisDevice_2Notify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_this_device_2 integration
   */
  var alexaMediaThisDevice_2Notify: (
    params: AlexaMediaThisDevice_2Notify,
  ) => Block<Partial<AlexaMediaThisDevice_2Notify> | undefined, void>;

  interface AlexaMediaNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media service
   */
  var alexaMediaNotify: (
    params: AlexaMediaNotify,
  ) => Block<Partial<AlexaMediaNotify> | undefined, void>;

  interface AlexaMediaLastCalledNotify {
    message: string;
    title?: string;
    target?: Record<string, unknown>;
    data?: Record<string, unknown>;
  }

  /**
   * Sends a notification message using the alexa_media_last_called integration
   */
  var alexaMediaLastCalledNotify: (
    params: AlexaMediaLastCalledNotify,
  ) => Block<Partial<AlexaMediaLastCalledNotify> | undefined, void>;
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

globalThis.notify = (params) =>
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

globalThis.alexaMediaLastCalledNotify = (params) =>
  serviceCall({
    name: `Call notify.alexa_media_last_called`,
    params: {
      domain: 'notify',
      service: 'alexa_media_last_called',
      service_data: params,
    },
  });
