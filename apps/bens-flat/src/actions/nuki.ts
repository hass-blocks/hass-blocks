import { apiRequest, waitMinutes, waitSeconds } from '@hass-blocks/blocks';
import z, { type keyof } from 'zod/v4';
import {
  action,
  assertion,
  loop,
  sequence,
  type Block,
  type IHass,
} from '@hass-blocks/core';

interface SmartLock {
  smartlockId: number;
}

const nukiRequestParams = () => {
  const token = process.env['NUKI_TOKEN'];
  if (!token) {
    throw new Error('Please supply NUKI Api Token');
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {},
    method: 'GET',
  } as const;
};

export const getSmartlocksFromNuki = apiRequest({
  ...nukiRequestParams(),
  path: 'smartlock/',
  responseSchema: z.array(
    z.object({
      smartlockId: z.number(),
    }),
  ),
});

export const setRequestParams = action({
  name: 'Set request params',
  callback: (_client, input: SmartLock[]) => {
    return {
      path: `smartlock/${input[0]?.smartlockId}/log`,
    };
  },
});

const lockLogsResponse = z.array(
  z.object({
    deviceType: z.number(),
    action: z.number(),
    trigger: z.number(),
    state: z.number(),
    source: z.number(),
  }),
);

export const getLockLogs = apiRequest({
  ...nukiRequestParams(),
  responseSchema: lockLogsResponse,
});

const deviceType = {
  0: 'smartlock',
  1: 'box',
  2: 'opener',
  3: 'smartdoor',
  4: 'smartlock',
} as const;

const nukiAction = {
  1: 'unlock',
  2: 'lock',
  3: 'unlatch',
  4: 'lock_n_go',
  5: 'lock_n_go_with_unlatch',
  200: 'door_warning_ajar',
  209: 'door_warning_status_mismatch',
  224: 'doorbell_recognition',
  240: 'door_opened',
  241: 'door_closed',
  242: 'door_sensor_jammed',
  243: 'firmware_update',
  250: 'door_log_enabled',
  251: 'door_log_disabled',
  252: 'initialization',
  253: 'calibration',
  254: 'activity_log_enabled',
  255: 'activity_log_disabled',
} as const;

const trigger = {
  0: 'system',
  1: 'manual',
  2: 'button',
  3: 'automatic',
  4: 'web',
  5: 'app',
  6: 'auto_lock',
  7: 'accessory',
  255: 'keypad',
};

const nukiState = {
  0: 'success',
  1: 'motor_blocked',
  2: 'cancelled',
  3: 'too_recent',
  4: 'busy',
  5: 'low_motor_voltage',
  6: 'clutch_failure',
  7: 'motor_power_failure',
  8: 'incomplete',
  9: 'rejected',
  10: 'rejected_night_mode',
  254: 'other_errors',
  255: 'unknown_error',
} as const;

const source = {
  0: 'default',
  1: 'keypad',
  2: 'fingerprint',
} as const;

export const hydrateStatuses = action({
  name: 'Hydrate statuses',
  callback: (_client, statuses: z.infer<typeof lockLogsResponse>) => {
    // See https://developer.nuki.io/page/nuki-web-api-1-5/10/#heading--get-activity-logs

    const lastLog = statuses[0];

    if (!lastLog) {
      return null;
    }

    return {
      ...lastLog,
      deviceType: deviceType[lastLog.deviceType as keyof typeof deviceType],
      action: nukiAction[lastLog.action as keyof typeof nukiAction],
      trigger: trigger[lastLog.trigger as keyof typeof trigger],
      state: nukiState[lastLog.state as keyof typeof nukiState],
      source: source[lastLog.source as keyof typeof source],
    };
  },
});

const notUnlock = assertion({
  name: 'If the last action was an unlock',
  predicate: (
    _client: IHass,
    config?: { action: (typeof nukiAction)[keyof typeof nukiAction] },
  ) => {
    return config?.action !== 'unlock';
  },
});

export const getLastUnlockDetailsFromLock = sequence(
  getSmartlocksFromNuki,
  loop({
    name: 'Loop while waiting for an unlock',
    do: sequence(
      setRequestParams,
      getLockLogs,
      hydrateStatuses,
      waitSeconds<{ action: (typeof nukiAction)[keyof typeof nukiAction] }>(5),
    ),
    while: notUnlock,
  }),
);
