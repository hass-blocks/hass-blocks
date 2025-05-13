import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var userDismissalsInputText: IEntity<`input_text.${string}`>;
}

globalThis.userDismissalsInputText = entity('input_text.user_dismissals');
