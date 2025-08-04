# @hass-blocks/hass-ts

A strongly-typed and comprehensively documented TypeScript client for the Home Assistant HTTP and WebSocket APIs. This package provides full type safety and comprehensive coverage of Home Assistant's API surface, making it easy to build robust automations and integrations.

## Features

- 🔒 **Fully Type-Safe**: Complete TypeScript definitions for all Home Assistant entities, services, and events
- 🔌 **Dual Protocol Support**: Seamless HTTP REST and WebSocket API integration
- 🎯 **Event-Driven**: Subscribe to Home Assistant events with strongly-typed event handlers
- 🏠 **Comprehensive Coverage**: Support for entities, services, areas, devices, panels, and more
- 🔧 **Easy Configuration**: Environment-based configuration with sensible defaults
- 📦 **Standalone**: Can be used independently or as part of the Hass Blocks framework

## Installation

```bash
npm install @hass-blocks/hass-ts
```

## Quick Start

```typescript
import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';

// Initialize with environment-based configuration
const client = await initialiseHass(getConfig());

// Get all entity states
const states = await client.getStates();

// Get a specific entity state
const lightState = await client.getState('light.living_room');

// Call a service
await client.callService({
  domain: 'light',
  service: 'turn_on',
  target: { entity_id: 'light.living_room' },
  service_data: { brightness: 255 },
});

// Listen to events
const listenerId = await client.on('state_changed', (event) => {
  console.log(
    `${event.data.entity_id} changed from ${event.data.old_state.state} to ${event.data.new_state.state}`,
  );
});

// Clean up
client.off(listenerId);
await client.close();
```

## Configuration

The `getConfig()` function reads configuration from environment variables:

### Environment Variables

| Variable           | Description                     | Default          | Required                      |
| ------------------ | ------------------------------- | ---------------- | ----------------------------- |
| `HASS_HOST`        | Home Assistant hostname/IP      | -                | Yes (unless using supervisor) |
| `HASS_PORT`        | Home Assistant port             | `8123`           | No                            |
| `HASS_TOKEN`       | Long-lived access token         | -                | Yes (unless using supervisor) |
| `HASS_HTTP_PATH`   | HTTP API path                   | `/api`           | No                            |
| `HASS_WS_PATH`     | WebSocket API path              | `/api/websocket` | No                            |
| `SUPERVISOR_TOKEN` | Home Assistant Supervisor token | -                | No                            |

### Manual Configuration

```typescript
import { initialiseHass } from '@hass-blocks/hass-ts';

const client = await initialiseHass({
  host: 'homeassistant.local',
  port: 8123,
  token: 'your-long-lived-access-token',
  httpPath: '/api',
  websocketPath: '/api/websocket',
});
```

### Home Assistant Add-on

When running as a Home Assistant add-on, no configuration is needed. The client automatically detects the supervisor environment and uses the appropriate settings.

## API Reference

### Core Methods

#### Entity Management

```typescript
// Get all entities
const entities = await client.getEntities();

// Get all entity states
const states = await client.getStates();

// Get specific entity state
const state = await client.getState('sensor.temperature');
```

#### Service Calls

```typescript
// Basic service call
await client.callService({
  domain: 'light',
  service: 'turn_on',
  target: { entity_id: 'light.bedroom' },
});

// Service call with data
await client.callService({
  domain: 'climate',
  service: 'set_temperature',
  target: { entity_id: 'climate.living_room' },
  service_data: { temperature: 22 },
});

// Service call with response
const response = await client.callService({
  domain: 'weather',
  service: 'get_forecast',
  target: { entity_id: 'weather.home' },
  return_response: true,
});
```

#### Event Handling

```typescript
// Listen to all events
const allEventsId = await client.on((event) => {
  console.log('Event received:', event.event_type);
});

// Listen to specific event type
const stateChangedId = await client.on('state_changed', (event) => {
  console.log(
    `${event.data.entity_id}: ${event.data.old_state.state} → ${event.data.new_state.state}`,
  );
});

// Remove listener
client.off(allEventsId);
```

#### System Information

```typescript
// Get Home Assistant configuration
const config = await client.getConfig();

// Get areas
const areas = await client.getAreas();

// Get devices
const devices = await client.getDevices();

// Get services
const services = await client.getServices();

// Get panels
const panels = await client.getPanels();
```

#### History and Logs

```typescript
// Get entity history
const history = await client.getHistory({
  filterEntityId: ['sensor.temperature'],
  timestamp: new Date('2024-01-01'),
  significantChangesOnly: true,
});

// Get logbook entries
const logbook = await client.getLogbook({
  entity: 'light.living_room',
  timestamp: new Date('2024-01-01'),
});

// Get error log
const errorLog = await client.getErrorLog();
```

### Type Safety

All methods return strongly-typed objects. The client includes comprehensive TypeScript definitions for:

- **Entities**: `HassEntity` with full metadata
- **States**: `State` with attributes and context
- **Events**: Union type `HomeAssistantEvent` covering all event types
- **Services**: `Service` with field definitions and selectors
- **Areas**: `HassArea` with relationships
- **Devices**: `HassDevice` with capabilities

### Event Types

The client supports all Home Assistant event types with full typing:

- `state_changed` - Entity state changes
- `call_service` - Service call events
- `automation_triggered` - Automation executions
- `script_started` - Script executions
- `service_registered`/`service_removed` - Service lifecycle
- `component_loaded` - Component loading
- And many more...

## Examples

### Basic Automation

```typescript
import { getConfig, initialiseHass } from '@hass-blocks/hass-ts';

const client = await initialiseHass(getConfig());

// Turn on lights when motion is detected
await client.on('state_changed', async (event) => {
  if (
    event.data.entity_id === 'binary_sensor.motion' &&
    event.data.new_state.state === 'on'
  ) {
    await client.callService({
      domain: 'light',
      service: 'turn_on',
      target: { area_id: 'living_room' },
    });
  }
});
```

### Service Discovery

```typescript
// Get all available services for a domain
const services = await client.getServices();
const lightServices = services.light;

Object.entries(lightServices).forEach(([serviceName, service]) => {
  console.log(`${serviceName}: ${service.description}`);
  console.log('Fields:', Object.keys(service.fields));
});
```

### Resource Cleanup

```typescript
// Use async disposal (Node.js 20+)
{
  await using client = await initialiseHass(getConfig());
  // Client automatically closed when leaving scope
}

// Manual cleanup
const client = await initialiseHass(getConfig());
try {
  // Use client...
} finally {
  await client.close();
}
```

## Error Handling

The client includes custom error types for better error handling:

```typescript
import { HassHttpError, ErrorResponseError } from '@hass-blocks/hass-ts';

try {
  await client.callService({
    domain: 'invalid',
    service: 'invalid',
  });
} catch (error) {
  if (error instanceof HassHttpError) {
    console.error('HTTP Error:', error.status, error.message);
  } else if (error instanceof ErrorResponseError) {
    console.error('API Error:', error.code, error.message);
  }
}
```

## Requirements

- Node.js 18+
- Home Assistant with API access
- Long-lived access token or supervisor environment

## License

MIT
