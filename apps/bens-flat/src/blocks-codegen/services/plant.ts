import { serviceCall } from '@hass-blocks/core';

export interface ReplaceSensorPlantProps {
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
export const replaceSensorPlant = (params: ReplaceSensorPlantProps) =>
  serviceCall({
    name: `Call plant.replace_sensor`,
    params: {
      domain: 'plant',
      service: 'replace_sensor',
      service_data: params,
    },
  });
