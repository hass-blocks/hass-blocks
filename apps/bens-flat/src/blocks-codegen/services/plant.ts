import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ReplaceSensorPlant {
    /**
     * The meter entity to replace the sensor for.
     */
    meter_entity: string;
    /**
     * Entity id of the new sensor. Leave blank to remove sensor.
     */
    new_sensor?: string;
  }

  /**
   * Replaces the source for a plant sensor.
   */
  var replaceSensorPlant: (
    params: ReplaceSensorPlant,
  ) => Block<Partial<ServiceCallArgs<ReplaceSensorPlant>> | undefined, void>;
}

globalThis.replaceSensorPlant = (params) =>
  serviceCall({
    name: `Call plant.replace_sensor`,
    params: {
      domain: 'plant',
      service: 'replace_sensor',
      service_data: params,
    },
  });
