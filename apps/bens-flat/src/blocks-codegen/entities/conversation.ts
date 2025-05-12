import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var homeAssistantConversation: ITarget;
  var chatgptConversation: ITarget;
}

globalThis.homeAssistantConversation = entity('conversation.home_assistant');
globalThis.chatgptConversation = entity('conversation.chatgpt');
