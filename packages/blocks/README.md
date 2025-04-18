> [!CAUTION]
> This project is still currently in development. It may be buggy and is certainly not feature complete.

# Hass Blocks

A strongly-typed declarative framework for configuring Home Assistant automations.

## Installing

`npm install @hass-blocks/blocks`

### Bootstrapping

Before you can build automations, you first need to configure the connection to Home Assistant. To do this, ensure you have populated the following environment variables:

- `HASS_HOST` - the hostname of your Home Assistant installation
- `HASS_PORT` - the port your Home Assistant installation is available on (defaults to 8123 if not provided)
- `HASS_TOKEN` - a [long lived access token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token) you've configured


```TypeScript
import { getConnection } from "@hass-blocks/blocks"