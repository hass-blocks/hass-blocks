import { trigger } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

/**
 * Configuration for the tagScanned trigger
 *
 * @public
 */
export interface TagScannedProps {
  /**
   * Will fire when a tag of this id fires
   */
  tag_id: string[];

  /**
   * Only fire if the card is scanned by a specific device
   */
  device_id?: string[];
}

/**
 * Fires when a tag is scanned. See {@link https://www.home-assistant.io/docs/automation/trigger/#tag-trigger}
 *
 * @param props - configuration
 * @public
 */
export const tagScanned = (props: TagScannedProps) =>
  trigger({
    name: 'When tag is scanned',
    trigger: removeUndefined({
      platform: 'tag',
      ...props,
    }),
  });
