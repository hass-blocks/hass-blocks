import { action, HassBlocksError } from '@hass-blocks/core';
import z from 'zod/v4';
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
   * The base URL for the request
   */
  baseUrl: string;

  /**
   * The path segment for the request
   */
  path: string;

  /**
   * Body of the request
   */
  body?: Record<string, unknown>;

  /**
   * Zod schema for the response
   */
  responseSchema?: z.core.$ZodType;
}

/**
 * @public
 *
 * Make a HTTP request
 *
 * @param props - request configuration
 */

export const apiRequest = <
  TProps extends Partial<ApiRequestProps>,
  TInputProps extends Partial<ApiRequestProps>,
>(
  props: TProps,
) => {
  return action<
    TInputProps,
    z.output<Exclude<TProps['responseSchema'], undefined>>
  >({
    name: 'API Request',
    callback: async (
      _client,
      input,
    ): Promise<z.output<Exclude<TProps['responseSchema'], undefined>>> => {
      const basePath = input.baseUrl ?? props.baseUrl;
      const thePath = input.path ?? props.path;
      const finalUrl = `${basePath?.endsWith('/') ? basePath.slice(0, -1) : basePath}${thePath?.startsWith('/') ? thePath : `/${thePath}`}`;

      const response = await fetch(finalUrl, {
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

      const responseJson = await response.json();

      const { responseSchema } = props;

      if (typeof responseSchema !== 'undefined') {
        return z.parse(responseSchema, responseJson);
      }

      return responseJson;
    },
  });
};
