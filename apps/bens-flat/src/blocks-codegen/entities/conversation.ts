import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Home Assistant
   */
  var homeAssistantConversation: IEntity<`conversation.home_assistant`>;
  /**
   * ChatGPT
   */
  var chatgptConversation: IEntity<`conversation.chatgpt`>;
}

globalThis.homeAssistantConversation = entity(
  'conversation.home_assistant',
  'Home Assistant',
);
globalThis.chatgptConversation = entity('conversation.chatgpt', 'ChatGPT');
