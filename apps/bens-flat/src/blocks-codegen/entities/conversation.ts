import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantConversation: IEntity<`conversation.home_assistant`>;
  var chatgptConversation: IEntity<`conversation.chatgpt`>;
}

globalThis.homeAssistantConversation = entity('conversation.home_assistant');
globalThis.chatgptConversation = entity('conversation.chatgpt');
