# @hass-blocks/hass-ts

A strongly-typed and comprehensively documented client for the Home Assistant API. Note, this package is the underlying client used by the Hass Blocks project, but it can be used independently.

## Installation

```
npm install @hass-blocks/hass-ts
```

## Usage

```TypeScript
import { getConfig, initialiseHass } from '@initialise';

const client = await initialiseHass(getConfig());

const states = await client.getStates();
```

## Configuration

Note - the `getConfig()` function will read your connection details (including credentials) from environment variables. See the API docs for more details.
