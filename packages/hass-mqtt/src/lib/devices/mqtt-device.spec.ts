import { MqttDevice, type MqttDeviceConfig } from './mqtt-device.ts';
import { mock } from 'vitest-mock-extended';
import type { IMQTTConnection } from '@types';

class TestMqttDevice extends MqttDevice {
  constructor(client: IMQTTConnection, config: MqttDeviceConfig) {
    super(client, config);
  }

  protected getDeviceSpecificConfig(): Record<string, unknown> {
    return { test: 'config' };
  }

  public setTestState(state: string) {
    this.state = state;
  }

  public getStateTopic() {
    return this.stateTopic;
  }
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('MqttDevice', () => {
  describe('constructor', () => {
    it('should create a device with the correct state topic', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      expect(device.getStateTopic()).toBe(
        'test-context/test-device/test/state',
      );
    });
  });

  describe('uniqueId getter', () => {
    it('should return the unique ID from config', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      expect(device.uniqueId).toBe('test-device');
    });
  });

  describe('state getter and setter', () => {
    it('should return empty string when state is undefined', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      expect(device.state).toBe('');
    });

    it('should publish state when setting a new state', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.setTestState('ON');

      expect(mockClient.publish).toHaveBeenCalledWith(
        'test-context/test-device/test/state',
        'ON',
      );
      expect(device.state).toBe('ON');
    });

    it('should not publish state when setting the same state', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.setTestState('ON');
      device.setTestState('ON');

      expect(mockClient.publish).toHaveBeenCalledTimes(1);
    });
  });

  describe('initialise', () => {
    it('should subscribe to homeassistant status topic and trigger discovery', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.initialise();

      expect(mockClient.subscribe).toHaveBeenCalledWith(
        'homeassistant/status',
        expect.any(Function),
      );
      expect(mockClient.publish).toHaveBeenCalledWith(
        'homeassistant/test/test-device/config',
        {
          state_topic: 'test-context/test-device/test/state',
          unique_id: 'test-device',
          device_class: 'test-class',
          device: {
            identifiers: ['device_test-device'],
            name: 'Test Device',
          },
          object_id: 'test-device',
          friendly_name: 'Test Device',
          test: 'config',
        },
      );
    });

    it('should trigger discovery when receiving "online" status', () => {
      expect.assertions(2);
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.initialise();

      const statusHandler = mockClient.subscribe.mock.calls[0]?.[1];
      expect(statusHandler).toBeDefined();
      vi.resetAllMocks();

      if (statusHandler) {
        statusHandler('online');
      }

      expect(mockClient.publish).toHaveBeenCalledWith(
        'homeassistant/test/test-device/config',
        {
          state_topic: 'test-context/test-device/test/state',
          unique_id: 'test-device',
          device_class: 'test-class',
          device: {
            identifiers: ['device_test-device'],
            name: 'Test Device',
          },
          object_id: 'test-device',
          friendly_name: 'Test Device',
          test: 'config',
        },
      );
    });

    it('should not trigger discovery when receiving other status messages', () => {
      expect.assertions(2);
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.initialise();

      const statusHandler = mockClient.subscribe.mock.calls[0]?.[1];
      expect(statusHandler).toBeDefined();
      vi.resetAllMocks();

      if (statusHandler) {
        statusHandler('offline');
      }

      expect(mockClient.publish).not.toHaveBeenCalled();
    });
  });

  describe('delete', () => {
    it('should publish empty string to discovery topic', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: MqttDeviceConfig = {
        type: 'test',
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-device',
        context: 'test-context',
        friendlyName: 'Test Device',
        deviceClass: 'test-class',
      };
      const device = new TestMqttDevice(mockClient, config);

      device.delete();

      expect(mockClient.publish).toHaveBeenCalledWith(
        'homeassistant/test/test-device/config',
        '',
      );
    });
  });
});
