import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface GetForecastsWeatherProps {
    /**
     * The scope of the weather forecast.
     */
    type: never;
  }

  /**
   * Retrieves the forecast from selected weather services.
   */
  var getForecastsWeather: (
    target: IEntity<`weather.${string}`> | IArea,
    params: GetForecastsWeatherProps,
  ) => Block;
}

globalThis.getForecastsWeather = (target, params) =>
  serviceCall({
    name: `Call weather.get_forecasts`,
    params: {
      domain: 'weather',
      service: 'get_forecasts',
      service_data: params,
    },
    target,
  });
