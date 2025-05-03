> **This project is still currently in development. It may be buggy and is certainly not feature complete. I could definitely do with additional contributors so do get in touch!**

# Hass Blocks

A strongly-typed declarative framework for configuring Home Assistant automations.

## Getting Started

### Installing

`npm install @hass-blocks/core`

### Bootstrapping

Before you can build automations, you first need to configure the connection to Home Assistant. To do this, ensure you have populated the following environment variables:

- `HASS_HOST` - the hostname of your Home Assistant installation
- `HASS_PORT` - the port your Home Assistant installation is available on (defaults to 8123 if not provided)
- `HASS_TOKEN` - a [long lived access token](https://developers.home-assistant.io/docs/auth_api/#long-lived-access-token) you've configured

Once this is done, the below code will bootstrap the connection and give you a registry object that you can register automations with

```TypeScript
import { initialiseBlocks} from "@hass-blocks/core"

const { registry } = await initialiseBlocks()
```

## How it works

Hass-blocks is all about creating blocks that describe what you want to happen and combining them with triggers to make an automation. There are a few different kinds of blocks

- **Actions** - a generic block that describes something you _want to happen_
- **Service Calls** - an action that calls a Home Assistant service
- **Assertions** - a block that decides whether a sequence of actions should continue executing
- **Sequences** - a block that when executed executs a number of different blocks, either in sequence or all at once
- **Conditions** - a block that decides which block to execute based on a condition

Since this is a framework, its your job to write a whole bunch of blocks that you can then compose together in order to build your automations, so lets talk a little bit about how to do that.

> **It is very much my intention to write a package containing a whole series of premade blocks that you can use to easily build your automations. If this feels useless right now, its because its in its very early stages. Watch this space...**

## Creating your automation

A pretty standard action in my flat is to turn on the living room light - lets turn that into a block

```TypeScript
import { serviceCall } from "@hass-blocks/core"

const turnOnLivingRoomLight = serviceCall({
  name: "Turn on the light in the living room",
  params: {
    domain: "light",
    service: "turn_on",
    target: {
      entity_id: "light.living_room"
    }
  }
})
```

As well as making standalone actions, you can create factory functions that generate actions. So given that I am going to want to turn my light both on and off, lets do some refactoring

```TypeScript
const turnLivingRoomLights = (onOrOff: "on" | "off") =>
  serviceCall({
    name: 'Turn on the light in the living room',
    params: {
      domain: 'light',
      service: onOrOff === "on" ? "on" : "off",
      target: {
        entity_id: 'light.living_room',
      },
    },
  });
```

Ideally I want it to turn on when I walk in the room, so lets make a trigger

```TypeScript
import { trigger } from "@hass-blocks/core"

const whenSomeoneWalksInTheLivingRoom = trigger({
  name: 'When someone walks in the living room',
  trigger: {
    platform: 'state',
    entity_id: 'binary_sensor.motion_occupancy',
    from: 'off',
    to: 'on',
  },
});

```

I don't want to switch the light off straight away - so lets implement a 'wait' action factory

```TypeScript
import { action } from "@hass-blocks/core"

export const waitMinutes = (duration: number) =>
  action({
    name: `Wait ${duration} minutes`,
    callback: async () => {
      return await new Promise<void>((accept) =>
        setTimeout(
          () => {
            accept();
          },
          1000 * 60 * duration
        )
      );
    },
  });
```

Ok, looks like we are ready to create our first automation! Lets put it all together

```TypeScript
export const livingRoomMotionSensor = automation({
  name: "Living room motion sensor",
  when: someoneWalksInTheLivingRoom,
  then: [
    turnLivingRoomLights('on'),
    waitMinutes(10),
    turnLivingRoomLights('off')
  ]
})
```

And now the final part of the puzzle - lets register it with our client!

```TypeScript
registry.registerAutomation(livingRoomMotionSensor)
```
