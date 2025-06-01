import { action } from '@hass-blocks/core';

export const ttsSay = (what?: string) => {};
// action<string, void>({
//   name: `Say '${what}' with TTS`,
//   callback: (client, input) => {
//     const rfc3986EncodeURIComponent = (str) => {
//       return encodeURIComponent(str).replace(/[!'()*]/g, escape);
//     };
//     const messsage = rfc3986EncodeURIComponent(input);
//   },
// });
