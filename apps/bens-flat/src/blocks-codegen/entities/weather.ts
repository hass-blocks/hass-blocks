import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var forecastHomeWeather: IEntity<`weather.forecast_home`>;
}

globalThis.forecastHomeWeather = entity('weather.forecast_home');
