import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var userDismissalsInputText: ITarget;
}

globalThis.userDismissalsInputText = entity('input_text.user_dismissals');
