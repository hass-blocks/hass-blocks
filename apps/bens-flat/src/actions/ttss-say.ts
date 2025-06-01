import { waitSeconds } from '@hass-blocks/blocks';
import { action, type IEntity, type ITarget } from '@hass-blocks/core';

export const ttsSay = (
  target: IEntity<`media_player.${string}`>,
  what?: string,
) => {
  return action<string | undefined, void>({
    name: `Say '${what}' with TTS`,
    callback: async ({ runner, hass, input }) => {
      const rfc3986EncodeURIComponent = (str: string) => {
        return encodeURIComponent(str).replace(/[!'()*]/g, escape);
      };
      const messsage = rfc3986EncodeURIComponent(what ?? input ?? '');

      const playMedia = runner(
        playMediaMediaPlayer(target, {
          media_content_id: `media-source://tts/tts.openai_tts_onyx?message=${messsage}`,
          media_content_type: 'music',
          announce: false,
        }),
      );

      const delay = runner(waitSeconds(2));

      await playMedia({});
      await Promise.all(
        target.targetIds.entity_id.map(async (id) => {
          let state: undefined | string;
          do {
            state = hass.getState(id);
            await delay({ __pass: 'pass' });
          } while (state === 'playing');

          do {
            state = hass.getState(id);
            await delay({ __pass: 'pass' });
          } while (state !== 'playing');
        }),
      );
    },
  });
};
