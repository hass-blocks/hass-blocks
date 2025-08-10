import type { IHomeAssistant } from '@hass-blocks/hass-ts';

export const INTEGRATION_PREFIX = 'hass_blocks';

export abstract class Entity {
  constructor(
    private readonly homeAssistant: IHomeAssistant,
    private readonly entityId: string,
  ) {}

  abstract getEntityType(): string;

  protected async create(
    state: string,
    name?: string,
    attributes?: Record<string, unknown>,
  ): Promise<void> {
    await this.homeAssistant.fireEvent({
      event_type: `${INTEGRATION_PREFIX}_create_entity`,
      event_data: {
        state,
        entity_id: this.entityId,
        entity_type: this.getEntityType(),
        ...(name ? { name } : {}),
        ...(attributes ? { attributes } : {}),
      },
    });
  }

  protected async update(
    state: string,
    name?: string,
    attributes?: Record<string, unknown>,
  ): Promise<void> {
    await this.homeAssistant.fireEvent({
      event_type: `${INTEGRATION_PREFIX}_update_entity`,
      event_data: {
        state,
        entity_id: this.entityId,
        entity_type: this.getEntityType(),
        ...(name ? { name } : {}),
        ...(attributes ? { attributes } : {}),
      },
    });
  }

  protected async delete(): Promise<void> {
    await this.homeAssistant.fireEvent({
      event_type: `${INTEGRATION_PREFIX}_delete_entity`,
      event_data: {
        entity_id: this.entityId,
      },
    });
  }
}
