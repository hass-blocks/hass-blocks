import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var mumsPhoneDeviceTracker: ITarget;
  var bensImacProDeviceTracker: ITarget;
  var bensIphoneCompanionAppDeviceTracker: ITarget;
  var bensImacDeviceTracker: ITarget;
  var ryansIphoneDeviceTracker: ITarget;
  var dadSPhoneDeviceTracker: ITarget;
  var tomSPixel_7DeviceTracker: ITarget;
  var bensIphoneDeviceTracker: ITarget;
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
