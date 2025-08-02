import { MqttSwitch } from './mqtt-switch.ts';
import { mock } from 'vitest-mock-extended';
import type { IMQTTConnection } from '@types';
import type { SpecificMqttDeviceConfig } from './specific-mqtt-device-config.ts';

class TestMqttSwitch extends MqttSwitch {
  public getTestDeviceSpecificConfig() {
    return this.getDeviceSpecificConfig();
  }
}

beforeEach(() => {
  vi.resetAllMocks();
});

describe('MqttSwitch', () => {
  describe('constructor', () => {
    it('should create a switch and subscribe to command topic', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-switch',
        context: 'test-context',
        friendlyName: 'Test Switch',
        deviceClass: 'switch',
      };
      new MqttSwitch(mockClient, config);

      expect(mockClient.subscribe).toHaveBeenCalledWith(
        'test-context/test-switch/switch/state/command',
        expect.any(Function),
      );
    });
  });

  describe('getDeviceSpecificConfig', () => {
    it('should return switch-specific configuration', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-switch',
        context: 'test-context',
        friendlyName: 'Test Switch',
        deviceClass: 'switch',
      };
      const switchDevice = new TestMqttSwitch(mockClient, config);

      const specificConfig = switchDevice.getTestDeviceSpecificConfig();

      expect(specificConfig).toEqual({
        command_topic: 'test-context/test-switch/switch/state/command',
      });
    });
  });

  describe('command topic subscription', () => {
    it('should update state when receiving command', () => {
      expect.assertions(3);
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-switch',
        context: 'test-context',
        friendlyName: 'Test Switch',
        deviceClass: 'switch',
      };
      const switchDevice = new MqttSwitch(mockClient, config);

      const commandHandler = mockClient.subscribe.mock.calls[0]?.[1];
      expect(commandHandler).toBeDefined();

      if (commandHandler) {
        commandHandler('ON');
      }

      expect(mockClient.publish).toHaveBeenCalledWith(
        'test-context/test-switch/switch/state',
        'ON',
      );
      expect(switchDevice.state).toBe('ON');
    });
  });

  describe('turnOn', () => {
    it('should set state to ON', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-switch',
        context: 'test-context',
        friendlyName: 'Test Switch',
        deviceClass: 'switch',
      };
      const switchDevice = new MqttSwitch(mockClient, config);

      switchDevice.turnOn();

      expect(mockClient.publish).toHaveBeenCalledWith(
        'test-context/test-switch/switch/state',
        'ON',
      );
      expect(switchDevice.state).toBe('ON');
    });
  });

  describe('turnOff', () => {
    it('should set state to OFF', () => {
      const mockClient = mock<IMQTTConnection>();
      const config: SpecificMqttDeviceConfig = {
        discoveryPrefix: 'homeassistant',
        uniqueId: 'test-switch',
        context: 'test-context',
        friendlyName: 'Test Switch',
        deviceClass: 'switch',
      };
      const switchDevice = new MqttSwitch(mockClient, config);

      switchDevice.turnOff();

      expect(mockClient.publish).toHaveBeenCalledWith(
        'test-context/test-switch/switch/state',
        'OFF',
      );
      expect(switchDevice.state).toBe('OFF');
    });
  });
});
