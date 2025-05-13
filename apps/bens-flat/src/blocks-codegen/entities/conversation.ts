import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantConversation: IEntity<`conversation.${string}`>;
  var chatgptConversation: IEntity<`conversation.${string}`>;
}

globalThis.homeAssistantConversation = entity('conversation.home_assistant');
globalThis.chatgptConversation = entity('conversation.chatgpt');
