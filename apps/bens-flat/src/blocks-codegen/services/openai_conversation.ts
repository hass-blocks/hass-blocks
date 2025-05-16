import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface GenerateContentOpenaiConversationProps {
    /**
     * The config entry to use for this action
     */
    config_entry: never;
    /**
     * The prompt to send
     */
    prompt: string;
    /**
     * List of files to upload
     */
    filenames?: string;
  }

  /**
   * Sends a conversational query to ChatGPT including any attached image or PDF files
   */
  var generateContentOpenaiConversation: (
    params: GenerateContentOpenaiConversationProps,
  ) => Block;

  interface GenerateImageOpenaiConversationProps {
    /**
     * The config entry to use for this action
     */
    config_entry: never;
    /**
     * The text to turn into an image
     */
    prompt: string;
    /**
     * The size of the image to generate
     */
    size?: never;
    /**
     * The quality of the image that will be generated
     */
    quality?: never;
    /**
     * The style of the generated image
     */
    style?: never;
  }

  /**
   * Turns a prompt into an image
   */
  var generateImageOpenaiConversation: (
    params: GenerateImageOpenaiConversationProps,
  ) => Block;
}

globalThis.generateContentOpenaiConversation = (params) =>
  serviceCall({
    name: `Call openai_conversation.generate_content`,
    params: {
      domain: 'openai_conversation',
      service: 'generate_content',
      service_data: params,
    },
  });

globalThis.generateImageOpenaiConversation = (params) =>
  serviceCall({
    name: `Call openai_conversation.generate_image`,
    params: {
      domain: 'openai_conversation',
      service: 'generate_image',
      service_data: params,
    },
  });
