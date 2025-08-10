import { describe, it, expect, afterEach, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { Switch } from './switch.ts';

afterEach(() => {
  vi.resetAllMocks();
});

describe('Switch', () => {
  const createSwitchEntity = (entityId = 'switch.test_switch') => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const switchEntity = new Switch(mockHomeAssistant, entityId);
    return { mockHomeAssistant, switchEntity };
  };

  describe('getEntityType', () => {
    it('should return "switch"', () => {
      const { switchEntity } = createSwitchEntity();

      expect(switchEntity.getEntityType()).toBe('switch');
    });
  });

  describe('on', () => {
    it('should call update with "on" state', async () => {
      const { mockHomeAssistant, switchEntity } = createSwitchEntity();

      await switchEntity.on();

      expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
        event_type: 'hass_blocks_update_entity',
        event_data: {
          entity_id: 'switch.test_switch',
          entity_type: 'switch',
          state: 'on',
        },
      });
    });

    it('should work with different entity IDs', async () => {
      const { mockHomeAssistant, switchEntity } = createSwitchEntity(
        'switch.living_room_lamp',
      );

      await switchEntity.on();

      expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
        event_type: 'hass_blocks_update_entity',
        event_data: {
          entity_id: 'switch.living_room_lamp',
          entity_type: 'switch',
          state: 'on',
        },
      });
    });
  });

  describe('off', () => {
    it('should call update with "off" state', async () => {
      const { mockHomeAssistant, switchEntity } = createSwitchEntity();

      await switchEntity.off();

      expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
        event_type: 'hass_blocks_update_entity',
        event_data: {
          entity_id: 'switch.test_switch',
          entity_type: 'switch',
          state: 'off',
        },
      });
    });

    it('should work with different entity IDs', async () => {
      const { mockHomeAssistant, switchEntity } =
        createSwitchEntity('switch.bedroom_fan');

      await switchEntity.off();

      expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
        event_type: 'hass_blocks_update_entity',
        event_data: {
          entity_id: 'switch.bedroom_fan',
          entity_type: 'switch',
          state: 'off',
        },
      });
    });
  });
});
