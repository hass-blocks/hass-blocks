import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var forecastHomeWeather: IEntity<`weather.${string}`>;
}

globalThis.forecastHomeWeather = entity('weather.forecast_home');
