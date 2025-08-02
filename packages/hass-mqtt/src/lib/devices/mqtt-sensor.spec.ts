import { MqttSensor } from './mqtt-sensor.ts';
import { mock } from 'vitest-mock-extended';
import type { IMQTTConnection } from '@types';
import type { SpecificMqttDeviceConfig } from './specific-mqtt-device-config.ts';

beforeEach(() => {
  vi.resetAllMocks();
});

describe('MqttSensor', () => {
  describe('constructor', () => {
    it('should create a sensor with correct type', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-sensor',
        context: 'test-context',
        friendlyName: 'Test Sensor',
        deviceClass: 'temperature',
      };
      const sensor = new MqttSensor(mockClient, config);

      expect(sensor.uniqueId).toBe('test-sensor');
    });
  });

  describe('getDeviceSpecificConfig', () => {
    it('should return empty configuration object', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-sensor',
        context: 'test-context',
        friendlyName: 'Test Sensor',
        deviceClass: 'temperature',
      };
      const sensor = new MqttSensor(mockClient, config);

      const specificConfig = sensor.getDeviceSpecificConfig();

      expect(specificConfig).toEqual({});
    });
  });
});
