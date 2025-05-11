import { serviceCall, ITarget } from '@hass-blocks/core';

export interface GetForecastsWeatherProps {
  /**
   * The scope of the weather forecast.
   */
  type: never;
}

/**
 * Retrieves the forecast from selected weather services.
 */
export const getForecastsWeather = (
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
