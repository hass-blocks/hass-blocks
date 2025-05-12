import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var forecastHomeWeather: ITarget;
}

globalThis.forecastHomeWeather = entity('weather.forecast_home');
