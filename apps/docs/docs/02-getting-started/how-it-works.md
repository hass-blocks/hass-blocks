---
sidebar_position: 1
---

# How it works

Hass-blocks is all about creating blocks that describe what you want to happen and combining them with triggers to make an automation. There are a few different kinds of blocks

- **Actions** - a generic block that describes something you _want to happen_
- **Service Calls** - an action that calls a Home Assistant service
- **Assertions** - a block that decides whether a sequence of actions should continue executing
- **Sequences** - a block that when executed executs a number of different blocks, either in sequence or all at once
- **Conditions** - a block that decides which block to execute based on a condition

Since this is a framework, its your job to write a whole bunch of blocks that you can then compose together in order to build your automations, so lets talk a little bit about how to do that.

> **It is very much my intention to write a package containing a whole series of premade blocks that you can use to easily build your automations. If this feels useless right now, its because its in its very early stages. Watch this space...**
