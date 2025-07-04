import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface ButtonWebostv {
    /**
     * Name(s) of the webostv entities where to run the API method
     */
    entity_id: string;
    /**
     * Name of the button to press.  Known possible values are LEFT, RIGHT, DOWN, UP, HOME, MENU, BACK, ENTER, DASH, INFO, ASTERISK, CC, EXIT, MUTE, RED, GREEN, BLUE, YELLOW, VOLUMEUP, VOLUMEDOWN, CHANNELUP, CHANNELDOWN, PLAY, PAUSE, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
     */
    button: string;
  }

  /**
   * Sends a button press command
   */
  var buttonWebostv: (
    params: ButtonWebostv,
  ) => Block<Partial<ButtonWebostv> | undefined, void>;

  interface CommandWebostv {
    /**
     * Name(s) of the webostv entities where to run the API method
     */
    entity_id: string;
    /**
     * Endpoint of the command
     */
    command: string;
    /**
     * An optional payload to provide to the endpoint in the format of key value pair(s)
     */
    payload?: Record<string, unknown>;
  }

  /**
   * Sends a command
   */
  var commandWebostv: (
    params: CommandWebostv,
  ) => Block<Partial<CommandWebostv> | undefined, void>;

  interface SelectSoundOutputWebostv {
    /**
     * Name(s) of the webostv entities to change sound output on
     */
    entity_id: string;
    /**
     * Name of the sound output to switch to
     */
    sound_output: string;
  }

  /**
   * Sends the TV the command to change sound output
   */
  var selectSoundOutputWebostv: (
    params: SelectSoundOutputWebostv,
  ) => Block<Partial<SelectSoundOutputWebostv> | undefined, void>;
}

globalThis.buttonWebostv = (params) =>
  serviceCall({
    name: `Call webostv.button`,
    params: {
      domain: 'webostv',
      service: 'button',
      service_data: params,
    },
  });

globalThis.commandWebostv = (params) =>
  serviceCall({
    name: `Call webostv.command`,
    params: {
      domain: 'webostv',
      service: 'command',
      service_data: params,
    },
  });

globalThis.selectSoundOutputWebostv = (params) =>
  serviceCall({
    name: `Call webostv.select_sound_output`,
    params: {
      domain: 'webostv',
      service: 'select_sound_output',
      service_data: params,
    },
  });
