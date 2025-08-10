import { describe, it, expect, afterEach, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import type { IHomeAssistant } from '@hass-blocks/hass-ts';
import { Entity } from './entity.ts';

afterEach(() => {
  vi.resetAllMocks();
});

class TestEntity extends Entity {
  getEntityType(): string {
    return 'switch';
  }

  public async testCreate(
    state: string,
    name?: string,
    attributes?: Record<string, unknown>,
  ) {
    return this.create(state, name, attributes);
  }

  public async testUpdate(
    state: string,
    name?: string,
    attributes?: Record<string, unknown>,
  ) {
    return this.update(state, name, attributes);
  }

  public async testDelete() {
    return this.delete();
  }
}

describe('Entity', () => {
  it('should be abstract and require getEntityType implementation', () => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const entity = new TestEntity(mockHomeAssistant, 'test.entity_1');

    expect(entity.getEntityType()).toBe('switch');
  });

  it('should create entity without name or attributes', async () => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const entity = new TestEntity(mockHomeAssistant, 'switch.test_switch');

    await entity.testCreate('on');

    expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_create_entity',
      event_data: {
        entity_id: 'switch.test_switch',
        entity_type: 'switch',
        state: 'on',
      },
    });
  });

  it('should create entity with attributes', async () => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const entity = new TestEntity(mockHomeAssistant, 'switch.test_switch');
    const attributes = { icon: 'mdi:switch' };

    await entity.testCreate('on', 'Test Switch', attributes);

    expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_create_entity',
      event_data: {
        entity_id: 'switch.test_switch',
        entity_type: 'switch',
        name: 'Test Switch',
        state: 'on',
        attributes: {
          icon: 'mdi:switch',
        },
      },
    });
  });

  it('should update entity with attributes', async () => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const entity = new TestEntity(mockHomeAssistant, 'switch.test_switch');

    await entity.testUpdate('on');

    expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_update_entity',
      event_data: {
        entity_id: 'switch.test_switch',
        entity_type: 'switch',
        state: 'on',
      },
    });
  });

  it('should delete entity', async () => {
    const mockHomeAssistant = mock<IHomeAssistant>();
    const entity = new TestEntity(mockHomeAssistant, 'switch.test_switch');

    await entity.testDelete();

    expect(mockHomeAssistant.fireEvent).toHaveBeenCalledWith({
      event_type: 'hass_blocks_delete_entity',
      event_data: {
        entity_id: 'switch.test_switch',
      },
    });
  });
});
