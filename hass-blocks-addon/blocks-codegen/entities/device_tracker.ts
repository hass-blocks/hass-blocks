import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Mums phone
   */
  var mumsPhoneDeviceTracker: IEntity<`device_tracker.mums_phone`>;
  /**
   * Ben’s iMac Pro
   */
  var bensImacProDeviceTracker: IEntity<`device_tracker.bens_imac_pro`>;
  /**
   * Ben's iPhone (Companion App)
   */
  var bensIphoneCompanionAppDeviceTracker: IEntity<`device_tracker.bens_iphone_companion_app`>;
  /**
   * Ben’s iMac
   */
  var bensImacDeviceTracker: IEntity<`device_tracker.bens_imac`>;
  /**
   * Ryan’s iPhone
   */
  var ryansIphoneDeviceTracker: IEntity<`device_tracker.ryans_iphone`>;
  /**
   * Pixel 6 Pro
   */
  var dadSPhoneDeviceTracker: IEntity<`device_tracker.dad_s_phone`>;
  /**
   * Tom's Pixel 7
   */
  var tomSPixel_7DeviceTracker: IEntity<`device_tracker.tom_s_pixel_7`>;
  /**
   * Ben's iPhone
   */
  var bensIphoneDeviceTracker: IEntity<`device_tracker.bens_iphone`>;
}

globalThis.mumsPhoneDeviceTracker = entity(
  'device_tracker.mums_phone',
  'Mums phone',
);
globalThis.bensImacProDeviceTracker = entity(
  'device_tracker.bens_imac_pro',
  'Ben\u2019s iMac Pro',
);
globalThis.bensIphoneCompanionAppDeviceTracker = entity(
  'device_tracker.bens_iphone_companion_app',
  "Ben's iPhone (Companion App)",
);
globalThis.bensImacDeviceTracker = entity(
  'device_tracker.bens_imac',
  'Ben\u2019s iMac',
);
globalThis.ryansIphoneDeviceTracker = entity(
  'device_tracker.ryans_iphone',
  'Ryan\u2019s iPhone',
);
globalThis.dadSPhoneDeviceTracker = entity(
  'device_tracker.dad_s_phone',
  'Pixel 6 Pro',
);
globalThis.tomSPixel_7DeviceTracker = entity(
  'device_tracker.tom_s_pixel_7',
  "Tom's Pixel 7",
);
globalThis.bensIphoneDeviceTracker = entity(
  'device_tracker.bens_iphone',
  "Ben's iPhone",
);
