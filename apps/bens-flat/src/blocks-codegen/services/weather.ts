import { Block, serviceCall, ITarget } from '@hass-blocks/core';
declare global {
  /**
   * Retrieves the forecast from selected weather services.
   */
  var getForecastsWeather: (
    target: ITarget,
    params: GetForecastsWeatherProps,
  ) => Block;
}

export interface GetForecastsWeatherProps {
  /**
   * The scope of the weather forecast.
   */
  type: never;
}

globalThis.getForecastsWeather = (
  target: ITarget,
  params: GetForecastsWeatherProps,
) =>
  serviceCall({
    name: `Call weather.get_forecasts`,
    params: {
      domain: 'weather',
      service: 'get_forecasts',
      service_data: params,
    },
    target,
  });
