---
sidebar_position: 3
---

# Creating Your First Automation

A pretty standard action in my flat is to turn on the living room light - lets turn that into a block

```TypeScript
import { serviceCall } from "@hass-blocks/blocks"

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
import { trigger } from "@hass-blocks/blocks"

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
import { action } from "@hass-blocks/blocks"

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
