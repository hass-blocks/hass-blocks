import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var userDismissalsInputText: IEntity<`input_text.user_dismissals`>;
}

globalThis.userDismissalsInputText = entity('input_text.user_dismissals');
