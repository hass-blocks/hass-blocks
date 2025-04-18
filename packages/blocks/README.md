> [!CAUTION]
> This project is still currently in development. It may be buggy and is certainly not feature complete. I could definitely do with additional contributors so do get in touch!

# Hass Blocks

A strongly-typed declarative framework for configuring Home Assistant automations.

## Getting Started

### Installing

`npm install @hass-blocks/blocks`

### Bootstrapping

Before you can build automations, you first need to configure the connection to Home Assistant. To do this, ensure you have populated the following environment variables:

- `HASS_HOST` - the hostname of your Home Assistant installation
- `HASS_PORT` - the port your Home Assistant installation is available on (defaults to 8123 if not provided)
- `HASS_TOKEN` - a [long lived access token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token) you've configured

Once this is done, the below code will bootstrap the connection and give you a client you can register automations with

```TypeScript
import { getConnection } from "@hass-blocks/blocks"

const { client } = await getConnection()
```

### Writing your first automation

Hass-blocks is all about creating blocks that describe what you want to happen. There are a few different kinds of blocks 

- **Actions** - a generic block that describes something you *want to happen*
- **Service Calls** - an action that calls a Home Assistant service
- **Assertions** - a block that decides whether a sequence of actions should continue executing
- **Sequences** - a block that when executed executs a number of different blocks, either in sequence or all at once
- **Conditions** - a block that decides which block to execute based on a condition

Since this is a framework, its your job to write a whole bunch of blocks that you can then compose together in order to build your automations, so lets talk a little bit about how to do that.


