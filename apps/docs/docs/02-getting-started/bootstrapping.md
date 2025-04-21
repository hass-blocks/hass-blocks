---
sidebar_position: 2
title: Bootstrapping
---

To start, install the package from your favourite package manager

`npm install @hass-blocks/blocks`

Before you can build automations, you first need to configure the connection to Home Assistant. To do this, ensure you have populated the following environment variables:

- `HASS_HOST` - the hostname of your Home Assistant installation
- `HASS_PORT` - the port your Home Assistant installation is available on (defaults to 8123 if not provided)
- `HASS_TOKEN` - a [long lived access token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token) you've configured

Once this is done, the below code will bootstrap the connection and give you a registry object that you can register automations with

```TypeScript
import { initialiseBlocks} from "@hass-blocks/blocks"

const { registry } = await initialiseBlocks()
```
