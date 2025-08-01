import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';
import z from 'zod/v4';

import type { IBlockRunner, IHass } from '@types';

import { apiRequest } from './api-request.ts';

vi.mock('@utils', () => ({
  removeUndefined: vi.fn(),
  md5: vi.fn(),
}));

vi.mock('@errors', () => ({
  HassBlocksError: vi.fn(),
}));

global.fetch = vi.fn();

describe('apiRequest', () => {
  const mockHass = mock<IHass>();
  const mockRunner = mock<IBlockRunner>();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should make a GET request with correct URL construction', async () => {
    const mockResponse = { data: 'test' };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: '/test',
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await action.run({
      hass: mockHass,
      input: {},
      runner: mockRunner,
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://api.example.com/test',
      expect.objectContaining({
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }),
    );
    if ('output' in result) {
      expect(result.output).toEqual(mockResponse);
    }
  });

  it('should handle baseUrl with trailing slash correctly', async () => {
    const mockResponse = { data: 'test' };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com/',
      path: '/test',
      headers: {},
    });

    await action.run({
      hass: mockHass,
      input: {},
      runner: mockRunner,
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://api.example.com/test',
      expect.any(Object),
    );
  });

  it('should handle path without leading slash correctly', async () => {
    const mockResponse = { data: 'test' };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: 'test',
      headers: {},
    });

    await action.run({
      hass: mockHass,
      input: {},
      runner: mockRunner,
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://api.example.com/test',
      expect.any(Object),
    );
  });

  it('should use input properties to override props', async () => {
    const mockResponse = { data: 'test' };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: '/test',
      headers: { Authorization: 'Bearer old-token' },
    });

    await action.run({
      hass: mockHass,
      input: {
        baseUrl: 'https://api.override.com',
        path: '/override',
        method: 'POST',
        headers: { Authorization: 'Bearer new-token' },
      },
      runner: mockRunner,
    });

    expect(fetch).toHaveBeenCalledWith(
      'https://api.override.com/override',
      expect.any(Object),
    );
  });

  it('should throw HassBlocksError when response is not ok', async () => {
    const errorText = 'Not Found';
    const response = new Response(errorText, { status: 404 });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const { HassBlocksError } = await import('@errors');
    const mockError = new Error('Mock error');
    vi.mocked(HassBlocksError).mockImplementation(() => mockError);

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: '/test',
      headers: {},
    });

    await expect(
      action.run({
        hass: mockHass,
        input: {},
        runner: mockRunner,
      }),
    ).rejects.toThrow(mockError);
  });

  it('should validate response with zod schema when provided', async () => {
    expect.assertions(1);

    const mockResponse = { name: 'test', age: 25 };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const userSchema = z.object({
      name: z.string(),
      age: z.number(),
    });

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: '/user',
      headers: {},
      responseSchema: userSchema,
    });

    const result = await action.run({
      hass: mockHass,
      input: {},
      runner: mockRunner,
    });

    if ('output' in result) {
      expect(result.output).toEqual(mockResponse);
    }
  });

  it('should return raw JSON response when no schema is provided', async () => {
    expect.assertions(1);

    const mockResponse = { unvalidated: 'data' };
    const response = new Response(JSON.stringify(mockResponse), {
      status: 200,
    });

    vi.mocked(fetch).mockResolvedValue(response);

    const { removeUndefined } = await import('@utils');
    vi.mocked(removeUndefined).mockReturnValue({});

    const action = apiRequest({
      method: 'GET',
      baseUrl: 'https://api.example.com',
      path: '/data',
      headers: {},
    });

    const result = await action.run({
      hass: mockHass,
      input: {},
      runner: mockRunner,
    });

    if ('output' in result) {
      expect(result.output).toEqual(mockResponse);
    }
  });
});
