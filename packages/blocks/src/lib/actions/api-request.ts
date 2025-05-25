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
  return action<void, R>({
    name: 'API Request',
    callback: async () => {
      const response = await fetch(
        props.url,
        removeUndefined({
          method: props.method,
          headers: props.headers,
          body: props.body,
        }),
      );

      if (!response.ok) {
        throw new HassBlocksError(
          `Returned status code ${response.status} with response ${await response.text()}`,
        );
      }

      return (await response.json()) as R;
    },
  });
};
