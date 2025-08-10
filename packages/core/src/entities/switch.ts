import { Entity } from './entity.ts';

export class Switch extends Entity {
  override getEntityType(): string {
    return 'switch';
  }

  public async off(): Promise<void> {
    await this.update('off');
  }

  public async on(): Promise<void> {
    await this.update('on');
  }
}
