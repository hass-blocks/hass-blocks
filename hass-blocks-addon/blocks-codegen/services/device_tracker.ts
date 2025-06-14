import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface SeeDeviceTracker {
    /**
     * MAC address of the device
     */
    mac?: string;
    /**
     * ID of the device (find the ID in `known_devices.yaml`)
     */
    dev_id?: string;
    /**
     * Hostname of the device
     */
    host_name?: string;
    /**
     * Name of the location where the device is located. The options are: `home`, `not_home`, or the name of the zone
     */
    location_name?: string;
    /**
     * GPS coordinates where the device is located, specified by latitude and longitude (for example: [51.513845, -0.100539])
     */
    gps?: Record<string, unknown>;
    /**
     * Accuracy of the GPS coordinates
     */
    gps_accuracy?: number;
    /**
     * Battery level of the device
     */
    battery?: number;
  }

  /**
   * Manually update the records of a seen legacy device tracker in the known_devices.yaml file
   */
  var seeDeviceTracker: (
    params?: SeeDeviceTracker,
  ) => Block<Partial<SeeDeviceTracker> | undefined, void>;
}

globalThis.seeDeviceTracker = (params) =>
  serviceCall({
    name: `Call device_tracker.see`,
    params: {
      domain: 'device_tracker',
      service: 'see',
      service_data: params,
    },
  });
