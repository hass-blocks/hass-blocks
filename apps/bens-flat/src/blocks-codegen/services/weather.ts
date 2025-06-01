import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface GetForecastsWeather {
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
    params: GetForecastsWeather,
  ) => Block<Partial<ServiceCallArgs<GetForecastsWeather>> | undefined, void>;
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
