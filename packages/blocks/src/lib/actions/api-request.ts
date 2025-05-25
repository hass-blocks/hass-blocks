import { action, HassBlocksError } from '@hass-blocks/core';
import { removeUndefined } from '@utils';

/**
 * @public
 *
 * HTTP Request configuration
 */
export interface ApiRequestProps {
  /**
   * HTTP Verb to use
   */
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

  /**
   * Headers to be sent along with the request
   */
  headers: Record<string, unknown>;
  /**
   * The URL to send the request to
   */
  url: string;

  /**
   * Body of the request
   */
  body?: Record<string, unknown>;
}

/**
 * @public
 *
 * Make a HTTP request
 *
 * @param props - request configuration
 */
export const apiRequest = <R>(props: ApiRequestProps) => {
  return action<ApiRequestProps, R>({
    name: 'API Request',
    callback: async (_client, input) => {
      const response = await fetch(input.url ?? props.url, {
        ...removeUndefined({
          method: props.method,
          headers: props.headers,
          body: props.body,
        }),
        ...removeUndefined({
          method: input.method,
          headers: input.headers,
          body: input.body,
        }),
      });
      if (!response.ok) {
        throw new HassBlocksError(
          `Returned status code ${response.status} with response ${await response.text()}`,
        );
      }

      return (await response.json()) as R;
    },
  });
};
