# Hass Blocks Development Guide for AI agents

This is a monorepo containing a number of packages and applications that together make up a framework for developing automations on the Home Assistant automation platform using declarative, strongly-typed TypeScript. The framework centers around the concept of 'blocks' - functions that can be pieced together in a points-free style in order to describe the automation you wish to achieve. It also makes heavy use of complex TypeScript validation to ensure that the inputs and outputs of different blocks match

## Initial Setup (already done)

You shouldn't need to do this most of the time, but you can setup the dependencies using `pnpm install`

## Available Projects

Because this repo is an NX monorepo, it is divided into 'projects' (a folder with a `project.json`) which have `targets` that can be executed using the nx cli. The available projects are:

- `@hass-blocks/core` - the core framework package containing most of utilities needed to build a hass-blocks automation
- `@hass-blocks/triggers` - a set of trigger blocks that (will) cover most of the triggers provided in the Home Assistant documentation
- `@hass-blocks/mqtt` - a simple library that connects to an MQTT orchestrator and allows users to create entities within Home Assistant using the MQTT integration
- `@hass-blocks/hass-ts` - a strongly typed, comprehensively documented client for the Home Assistant APIs. This is the core client used by `@hass-blocks/core`, but it can be used independently
- `@hass-blocks/local-hass` - a private utility package that allows scripts to easily spin up and spin down a local version of Home Assistant for testing
- `@hass-blocks/terminal-ui-plugin` - a plugin for blocks that provides a more advanced TUI visualisation of executing automations
- `@hass-blocks/typed-socket-client` - a package which allows you to create a backend based on socket.io, with with handlers and clients that preserves strong typing across the API boundary
- `@hass-blocks/websocket-plugin` - a plugin for Hass Blocks that creates a websocket server to allow interaction with Hass Blocks along with a react hook that can communicate with that server

## Commands Useful in Development

The targets against each of the above packages can be executed like this

`pnpm exec nx run <project>:<target>`

The repo contains a custom NX plugin which provides the following targets for most projects:

- `test` - for running all unit tests associated with a project
- `typecheck` - for checking TypeScript types associated with a project
- `lint` - for running eslint against a project
- `generate-api` - for generating the .d.ts rollup, generating an API report and warning if the API of a package has changed
- `build` - for transpiling the TypeScript source code into executable JavaScript
- `e2e-test` - for running end to end tests against a package (only provided by hass-ts at the current time)

If you want to install packages, you can use the following commands

- `pnpm install -w --save-dev <package>` - install a development package at the workspace root
- `cd <projectDir> && pnpm install <package>` - install a package for a given project
