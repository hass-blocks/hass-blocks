import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ProcessConversation {
    /**
     * Transcribed text input.
     */
    text: string;
    /**
     * Language of text. Defaults to server language.
     */
    language?: string;
    /**
     * Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands.
     */
    agent_id?: never;
    /**
     * ID of the conversation, to be able to continue a previous conversation
     */
    conversation_id?: string;
  }

  /**
   * Launches a conversation from a transcribed text.
   */
  var processConversation: (
    params: ProcessConversation,
  ) => Block<Partial<ServiceCallArgs<ProcessConversation>> | undefined, void>;

  interface ReloadConversation {
    /**
     * Language to clear cached intents for. Defaults to server language.
     */
    language?: string;
    /**
     * Conversation agent to reload.
     */
    agent_id?: never;
  }

  /**
   * Reloads the intent configuration.
   */
  var reloadConversation: (
    params?: ReloadConversation,
  ) => Block<Partial<ServiceCallArgs<ReloadConversation>> | undefined, void>;
}

globalThis.processConversation = (params) =>
  serviceCall({
    name: `Call conversation.process`,
    params: {
      domain: 'conversation',
      service: 'process',
      service_data: params,
    },
  });

globalThis.reloadConversation = (params) =>
  serviceCall({
    name: `Call conversation.reload`,
    params: {
      domain: 'conversation',
      service: 'reload',
      service_data: params,
    },
  });
