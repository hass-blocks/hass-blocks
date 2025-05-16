import dotEnv from 'dotenv';

import { getEnv } from '@utils';

import {
  HASS_HOST_ENV,
  HASS_HTTP_PATH_ENV,
  HASS_MQTT_HOST_ENV,
  HASS_MQTT_PASSWORD_ENV,
  HASS_MQTT_PORT_ENV,
  HASS_MQTT_USERNAME_ENV,
  HASS_PORT_ENV,
  HASS_TOKEN_ENV,
  HASS_WS_PATH_ENV,
  SUPERVISOR_TOKEN_ENV,
} from './constants.ts';

export interface HassConfig {
  /**
   * Host for the Home Assistant MQTT broker
   */
  mqttHost: string | undefined;
  /**
   * Port for the Home Assistant MQTT broker
   */
  mqttPort: number | undefined;

  /**
   * Username for the Home Asisstant MQTT broker
   */
  mqttUsername: string | undefined;

  /**
   * Password for the Home Asisstant MQTT broker
   */
  mqttPassword: string | undefined;
  /**
   * Home Assistant host
   */
  host: string;

  /**
   * Home Assistant port
   */
  port: number;

  /**
   * Home assistant token
   */
  token: string;

  /**
   * Path to Websocket API
   */
  websocketPath: string;

  /**
   * Path to HTTP API
   */
  httpPath: string;
}

export const getConfig = (): HassConfig => {
  dotEnv.config();
  const supervisorToken = process.env[SUPERVISOR_TOKEN_ENV];

  const mqttHost = process.env[HASS_MQTT_HOST_ENV];
  const mqttPassword = process.env[HASS_MQTT_PASSWORD_ENV];
  const mqttUsername = process.env[HASS_MQTT_USERNAME_ENV];
  const mqttPort = Number(process.env[HASS_MQTT_PORT_ENV]);

  const websocketPath = supervisorToken
    ? `/core/websocket`
    : (process.env[HASS_WS_PATH_ENV] ?? `/api/websocket`);

  const httpPath = supervisorToken
    ? `/core/api`
    : (process.env[HASS_HTTP_PATH_ENV] ?? `/api`);

  const host = supervisorToken ? `supervisor` : getEnv(HASS_HOST_ENV);
  const port = supervisorToken
    ? undefined
    : (process.env[HASS_PORT_ENV] ?? 8123);
  const token = supervisorToken ?? getEnv(HASS_TOKEN_ENV);

  if (!port) {
    throw new Error('Please supply a port!');
  }

  return {
    mqttHost,
    mqttPassword,
    mqttUsername,
    mqttPort,
    host,
    token,
    websocketPath,
    httpPath,
    port: Number(port),
  };
};
