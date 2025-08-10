# @hass-blocks/core

A strongly-typed declarative framework for building Home Assistant automations using composable TypeScript blocks. Create robust, maintainable automations with full type safety and sophisticated execution control.

> **Development Status**: This project is actively in development. While functional, it may have bugs and is not yet feature complete. Contributors welcome!

## Features

- 🔒 **Type-Safe Automations**: Full TypeScript support with compile-time validation of block compatibility
- 🧩 **Composable Blocks**: Build complex automations from simple, reusable building blocks
- 🔄 **Multiple Execution Modes**: Sequential, parallel, restart, and queued execution patterns
- 🎯 **Declarative Syntax**: Describe what you want to happen, not how to do it
- 🏗️ **Extensible Architecture**: Plugin system for custom functionality
- 📊 **Rich Event System**: Comprehensive logging and monitoring of automation execution
- ⚡ **Built-in Actions**: Pre-built blocks for common automation patterns

## Installation

```bash
npm install @hass-blocks/core
```

## Quick Start

### 1. Initialize Hass Blocks

```typescript
import { initialiseBlocks } from '@hass-blocks/core';

// Initialize with environment-based configuration
const { registry } = await initialiseBlocks();
```

### 2. Create Your First Automation

```typescript
import {
  automation,
  serviceCall,
  trigger,
  waitMinutes,
  entity,
} from '@hass-blocks/core';

// Create targets
const livingRoomLight = entity('light.living_room');
const motionSensor = entity('binary_sensor.motion');

// Create reusable blocks
const turnOnLights = serviceCall({
  name: 'Turn on living room lights',
  params: {
    domain: 'light',
    service: 'turn_on',
    service_data: { brightness: 255 },
  },
  target: livingRoomLight,
});

const motionTrigger = trigger({
  name: 'Motion detected',
  trigger: {
    platform: 'state',
    entity_id: 'binary_sensor.motion',
    from: 'off',
    to: 'on',
  },
});

// Compose them into an automation
const motionAutomation = automation({
  name: 'Motion-activated lights',
  when: motionTrigger,
  then: [
    turnOnLights,
    waitMinutes(10),
    serviceCall({
      name: 'Turn off lights',
      params: {
        domain: 'light',
        service: 'turn_off',
      },
      target: livingRoomLight,
    }),
  ],
});

// Register the automation
registry.registerAutomation(motionAutomation);
```

## Configuration

### Environment Variables

| Variable         | Description                | Default          | Required |
| ---------------- | -------------------------- | ---------------- | -------- |
| `HASS_HOST`      | Home Assistant hostname/IP | -                | Yes      |
| `HASS_PORT`      | Home Assistant port        | `8123`           | No       |
| `HASS_TOKEN`     | Long-lived access token    | -                | Yes      |
| `HASS_HTTP_PATH` | HTTP API path              | `/api`           | No       |
| `HASS_WS_PATH`   | WebSocket API path         | `/api/websocket` | No       |

### Advanced Configuration

```typescript
import { initialiseBlocks, ILogger } from '@hass-blocks/core';

const customLogger: ILogger = {
  info: (msg) => console.log(`[INFO] ${msg}`),
  warn: (msg) => console.log(`[WARN] ${msg}`),
  error: (msg) => console.log(`[ERROR] ${msg}`),
  debug: (msg) => console.log(`[DEBUG] ${msg}`),
  trace: (msg) => console.log(`[TRACE] ${msg}`),
  fatal: (msg) => console.log(`[FATAL] ${msg}`),
};

const { registry } = await initialiseBlocks({
  logger: customLogger,
  plugins: [
    /* custom plugins */
  ],
});
```

## Building Blocks

### Actions

Actions represent things you want to happen. They're the building blocks of automations.

```typescript
import { action } from '@hass-blocks/core';

const customAction = action({
  name: 'Send notification',
  callback: async ({ hass }) => {
    await hass.callService({
      domain: 'notify',
      service: 'mobile_app_phone',
      service_data: { message: 'Motion detected!' },
    });
  },
});
```

### Service Calls

Simplified actions for calling Home Assistant services:

```typescript
import { serviceCall, entity } from '@hass-blocks/core';

const bedroomLight = entity('light.bedroom');

const toggleLight = serviceCall({
  name: 'Toggle bedroom light',
  params: {
    domain: 'light',
    service: 'toggle',
  },
  target: bedroomLight,
});
```

### Assertions

Control automation flow based on conditions:

```typescript
import { assertion, stateIs, entity } from '@hass-blocks/core';

const sun = entity('sun.sun');

const isDarkOutside = assertion({
  name: 'Check if dark outside',
  predicate: stateIs(sun, 'below_horizon'),
});
```

### Sequences

Execute multiple blocks in order:

```typescript
import { sequence, serviceCall, entity } from '@hass-blocks/core';

const lights = entity('light.living_room');
const blinds = entity('cover.blinds');
const thermostat = entity('climate.thermostat');

const eveningRoutine = sequence({
  name: 'Evening routine',
  blocks: [
    serviceCall({
      name: 'Dim lights',
      params: {
        domain: 'light',
        service: 'turn_on',
        service_data: { brightness: 50 },
      },
      target: lights,
    }),
    serviceCall({
      name: 'Close blinds',
      params: { domain: 'cover', service: 'close_cover' },
      target: blinds,
    }),
    serviceCall({
      name: 'Set thermostat',
      params: {
        domain: 'climate',
        service: 'set_temperature',
        service_data: { temperature: 20 },
      },
      target: thermostat,
    }),
  ],
});
```

### Conditional Logic

Execute different blocks based on conditions:

```typescript
import { when, stateIs, entity } from '@hass-blocks/core';

const sun = entity('sun.sun');
const lights = entity('light.living_room');

const smartLighting = when(stateIs(sun, 'below_horizon'), {
  then: serviceCall({
    name: 'Turn on lights',
    params: { domain: 'light', service: 'turn_on' },
    target: lights,
  }),
  else: action({
    name: 'Daytime - no action needed',
    callback: () => console.log('Daytime motion - no action needed'),
  }),
});
```

### Loops

Repeat blocks based on conditions:

```typescript
import { loop, serviceCall, waitSeconds, entity } from '@hass-blocks/core';

const lights = entity('light.living_room');

const flashLights = loop({
  name: 'Flash lights',
  condition: ({ iteration }) => iteration < 3,
  do: [
    serviceCall({
      name: 'Turn on',
      params: { domain: 'light', service: 'turn_on' },
      target: lights,
    }),
    waitSeconds(1),
    serviceCall({
      name: 'Turn off',
      params: { domain: 'light', service: 'turn_off' },
      target: lights,
    }),
    waitSeconds(1),
  ],
});
```

## Built-in Actions

### Wait Actions

```typescript
import {
  waitSeconds,
  waitMinutes,
  waitUntilState,
  entity,
} from '@hass-blocks/core';

// Time-based waits
const shortWait = waitSeconds(30);
const longWait = waitMinutes(5);

// State-based waits
const door = entity('binary_sensor.door');
const waitForDoor = waitUntilState(door, 'off');
```

### API Requests

```typescript
import { apiRequest } from '@hass-blocks/core';

const weatherUpdate = apiRequest({
  name: 'Get weather data',
  url: 'https://api.weather.com/current',
  method: 'GET',
  headers: { Authorization: 'Bearer token' },
});
```

## Built-in Assertions

```typescript
import {
  stateIs,
  stateIsNot,
  entityExists,
  gate,
  entity,
} from '@hass-blocks/core';

const lightEntity = entity('light.living_room');
const doorEntity = entity('binary_sensor.door');

// State checks
const lightIsOn = stateIs(lightEntity, 'on');
const doorNotOpen = stateIsNot(doorEntity, 'on');

// Entity validation
const sensorExists = entityExists('sensor.temperature');

// Complex conditions
const isWeekend = gate({
  name: 'Is weekend',
  callback: () => new Date().getDay() % 6 === 0,
});
```

## Execution Modes

Control how automations handle multiple triggers:

```typescript
import { automation, ExecutionMode } from '@hass-blocks/core';

const myAutomation = automation({
  name: 'My automation',
  when: trigger,
  then: blocks,
  mode: ExecutionMode.Queue, // Queue, Restart, or Parallel
});
```

- **Restart** (default): Abort running execution and start fresh
- **Queue**: Queue new executions to run after current one finishes
- **Parallel**: Run multiple executions simultaneously

## Targets and Entities

Create reusable target definitions:

```typescript
import { entity, area, combine, toggle } from '@hass-blocks/core';

// Single entity
const livingRoomLight = entity('light.living_room');

// Area targeting
const bedroomLights = area('bedroom', 'light');

// Multiple targets
const allLights = combine([
  entity('light.living_room'),
  entity('light.kitchen'),
  area('bedroom', 'light'),
]);

// Toggle switches
const smartSwitch = toggle({
  entityId: 'switch.smart_plug',
  name: 'Smart Plug',
});
```

## Error Handling

Hass Blocks provides specific error types for better debugging:

```typescript
import { HassBlocksError, ExecutionAbortedError } from '@hass-blocks/core';

try {
  await registry.registerAutomation(myAutomation);
} catch (error) {
  if (error instanceof ExecutionAbortedError) {
    console.log('Automation was aborted');
  } else if (error instanceof HassBlocksError) {
    console.log('Hass Blocks error:', error.message);
  }
}
```

## Event System

Monitor automation execution with the event bus:

```typescript
const { registry } = await initialiseBlocks({
  logger: {
    info: (msg) => console.log(msg),
    warn: (msg) => console.warn(msg),
    error: (msg) => console.error(msg),
    debug: (msg) => console.debug(msg),
    trace: (msg) => console.trace(msg),
    fatal: (msg) => console.error('[FATAL]', msg),
  },
});

// Events are automatically logged based on your logger configuration
```

## Plugins

Extend Hass Blocks with custom functionality:

```typescript
import { IBlocksPlugin } from '@hass-blocks/core';

const myPlugin: IBlocksPlugin = {
  name: 'My Custom Plugin',
  version: '1.0.0',

  async load({ client, events, logger }) {
    logger.info('Loading my plugin');

    // Add custom functionality
    events.subscribe((event) => {
      if (event.eventType === 'automation-registered') {
        logger.info(`Automation registered: ${event.name}`);
      }
    });
  },
};

const { registry } = await initialiseBlocks({
  plugins: [myPlugin],
});
```

## TypeScript Integration

Hass Blocks provides extensive TypeScript support for compile-time validation:

```typescript
// Type-safe sequence validation
const validSequence = sequence({
  name: 'Valid sequence',
  blocks: [
    action<void, string>({
      name: 'Get string',
      callback: () => 'hello',
    }),
    action<string, number>({
      name: 'Get length',
      callback: ({ input }) => input.length,
    }),
  ],
});

// This would cause a TypeScript error:
// const invalidSequence = sequence({
//   blocks: [
//     action<void, string>({ callback: () => 'hello' }),
//     action<number, void>({ callback: ({ input }) => console.log(input) })
//     // Error: string output doesn't match number input
//   ]
// });
```

## Advanced Patterns

### Factory Functions

Create reusable block factories:

```typescript
const createLightToggle = (entityId: string, name: string) => {
  const lightEntity = entity(entityId);
  return serviceCall({
    name: `Toggle ${name}`,
    params: {
      domain: 'light',
      service: 'toggle',
    },
    target: lightEntity,
  });
};

const livingRoomToggle = createLightToggle('light.living_room', 'Living Room');
const bedroomToggle = createLightToggle('light.bedroom', 'Bedroom');
```

### Conditional Automation

```typescript
const sun = entity('sun.sun');
const lights = entity('light.living_room');
const motionSensor = entity('binary_sensor.motion');

const intelligentLighting = automation({
  name: 'Intelligent lighting',
  when: trigger({
    name: 'Motion detected',
    trigger: {
      platform: 'state',
      entity_id: 'binary_sensor.motion',
      from: 'off',
      to: 'on',
    },
  }),
  then: when(stateIs(sun, 'below_horizon'), {
    then: sequence({
      name: 'Nighttime sequence',
      blocks: [
        stateIsNot(lights, 'on'), // Only turn on if off
        serviceCall({
          name: 'Turn on lights',
          params: { domain: 'light', service: 'turn_on' },
          target: lights,
        }),
      ],
    }),
    else: action({
      name: 'Daytime motion',
      callback: () => console.log('Motion during day - no action needed'),
    }),
  }),
});
```

### Concurrent Operations

```typescript
import { concurrently } from '@hass-blocks/core';

const lights = entity('light.living_room');
const music = entity('media_player.spotify');
const thermostat = entity('climate.thermostat');

const allAtOnce = concurrently(
  serviceCall({
    name: 'Turn on lights',
    params: { domain: 'light', service: 'turn_on' },
    target: lights,
  }),
  serviceCall({
    name: 'Start music',
    params: { domain: 'media_player', service: 'media_play' },
    target: music,
  }),
  serviceCall({
    name: 'Adjust thermostat',
    params: {
      domain: 'climate',
      service: 'set_temperature',
      service_data: { temperature: 22 },
    },
    target: thermostat,
  }),
);
```

## Best Practices

1. **Use TypeScript**: Leverage type safety for robust automations
2. **Create Factories**: Build reusable block factories for common patterns
3. **Compose Small Blocks**: Prefer many small blocks over large complex ones
4. **Name Everything**: Use descriptive names for better logging and debugging
5. **Handle Errors**: Use assertions and error handling for robust automations
6. **Define Targets Once**: Create entity/target objects and reuse them

## Requirements

- Node.js 18+
- Home Assistant with API access
- Long-lived access token

## License

MIT
