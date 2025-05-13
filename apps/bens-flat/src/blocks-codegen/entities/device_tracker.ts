import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var mumsPhoneDeviceTracker: IEntity<`device_tracker.mums_phone`>;
  var bensImacProDeviceTracker: IEntity<`device_tracker.bens_imac_pro`>;
  var bensIphoneCompanionAppDeviceTracker: IEntity<`device_tracker.bens_iphone_companion_app`>;
  var bensImacDeviceTracker: IEntity<`device_tracker.bens_imac`>;
  var ryansIphoneDeviceTracker: IEntity<`device_tracker.ryans_iphone`>;
  var dadSPhoneDeviceTracker: IEntity<`device_tracker.dad_s_phone`>;
  var tomSPixel_7DeviceTracker: IEntity<`device_tracker.tom_s_pixel_7`>;
  var bensIphoneDeviceTracker: IEntity<`device_tracker.bens_iphone`>;
}

globalThis.mumsPhoneDeviceTracker = entity('device_tracker.mums_phone');
globalThis.bensImacProDeviceTracker = entity('device_tracker.bens_imac_pro');
globalThis.bensIphoneCompanionAppDeviceTracker = entity(
  'device_tracker.bens_iphone_companion_app',
);
globalThis.bensImacDeviceTracker = entity('device_tracker.bens_imac');
globalThis.ryansIphoneDeviceTracker = entity('device_tracker.ryans_iphone');
globalThis.dadSPhoneDeviceTracker = entity('device_tracker.dad_s_phone');
globalThis.tomSPixel_7DeviceTracker = entity('device_tracker.tom_s_pixel_7');
globalThis.bensIphoneDeviceTracker = entity('device_tracker.bens_iphone');
