import { HTTP } from '../../lib/core/index.ts';
import { DefaultBodyType, HttpResponse, StrictRequest } from 'msw';
import { TEST_HASS_TOKEN } from '../index.ts';

export const validateCredentials = (
  request: StrictRequest<DefaultBodyType>,
): HttpResponse | undefined => {
  const auth = request.headers.get('Authorization');
  const matches = auth?.match(/Bearer (?<token>.*)/);
  const token = matches?.groups?.['token'];
  if (!token || token !== TEST_HASS_TOKEN) {
    return HttpResponse.text('Unauthorized', {
      status: HTTP.statusCodes.unauthorized,
    });
  }
  return undefined;
};
