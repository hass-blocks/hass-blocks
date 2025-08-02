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

Note, you should ask me before installing any packages

## Development Practises

### API Changes

- Periodically, you'll need to run the `generate-api` target - if it reports any changes, let me know

### Code Style

- Never use type assertions (the 'as' keyword) under any circumstances. All type issues must be resolved through proper typing.
- The 'any' type is forbidden except in very limited circumstances. You must ask for explicit permission before using 'any' and provide justification for why proper typing cannot be achieved
- Never use 'as unknown as X' except in exceptional circumstances. Always try to find proper typing alternatives first, then ask for permission if no other solution exists
- Under NO CIRCUMSTANCES add ANY comments to code. The codebase maintains a strict no-comments policy. Code should be self-documenting through clear naming and structure. **EXCEPTIONS**: JSDoc comments are acceptable for public API documentation, and `// NOOP` comments are acceptable in empty blocks to satisfy linter requirements.

### Autoformatting

You can also run `pnpm exec nx format` to format all code in the codebase with prettier. Human devs have IDEs that autoformat code on every save. You MUST do the same by running the this command each time you make a change.

### Linting and other diagnostics

When executing in a VSCode environment, the editor will provide you with diagnostic feedback in the form of eslint and TypeScript errors. Any violations reported (either warnings or errors) MUST be fixed before proceeding

### Testing

- No tests should be written for barrel files
- Code MUST be written using strict red/green refactor style TDD; write a test to specifiy the requested behaviour, write the smallest amount of code that will make that test pass, then refactor the code if needed
- Tests SHOULD be written one at a time, to ensure that everything is working before proceeding
- Test files usually follow the pattern `*.spec.ts` or `*.test.ts`
- There are also type level tests following the pattern `*.test.d.ts`

#### Hooks

- Hooks MUST be placed at the global scope of a test file
- Hooks SHOULD be used sparingly and only for test hygiene - clearing mock states, cleaning up resources (servers, timers, etc.). Everything else needed for a test should be created within the test itself for clarity and isolation

### Assertions

- When placing assertions inside 'if' blocks, you MUST use `expect.assertions(<number>)` to prevent false positives from skipped assertions

### Test State

- You MUST NOT put mutable state in the global scope of test files unless it is absolutely essential. Create mocks and variables inside individual tests or test hooks to maintain test isolation

### Structure

- Tests MUST NOT be nested further than one describe/it

### Mocking

- When using `vi.mock()` at the top level of a test file, always add `vi.resetAllMocks()` in an `afterEach` hook to prevent mock state pollution
- use `vi.mock('package')` without factory functions - Vitest automatically mocks all exports. Only use factory functions when you need specific mock implementations. Then use `vi.mocked()` directly on imported functions to configure behavior
