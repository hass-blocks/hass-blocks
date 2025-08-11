# Repository Guidelines

## Project Structure & Module Organization

- Monorepo managed by Nx and pnpm. Key roots:
  - `packages/` core publishable npm packages (e.g., `core`, `triggers`, `hass-ts`, `hass-mqtt`, plugins).
  - `apps/` runnable apps (e.g., `bens-flat`, `docs-site`).
  - `hass-blocks-addon/` - a Home Assistant addon
  - `hass-blocks-integration/` - a Home Assistant custom component
  - `plugins/` custom Nx plugin(s) and executors (e.g., `publisher`).
  - `coverage/`, `dist/`, `.nx/` are generated outputs; don’t edit

## Project names

- `@hass-blocks/core` - the core framework package containing most of utilities needed to build a hass-blocks automation
- `@hass-blocks/triggers` - a set of trigger blocks that (will) cover most of the triggers provided in the Home Assistant documentation
- `@hass-blocks/mqtt` - a simple library that connects to an MQTT orchestrator and allows users to create entities within Home Assistant using the MQTT integration
- `@hass-blocks/hass-ts` - a strongly typed, comprehensively documented client for the Home Assistant APIs. This is the core client used by `@hass-blocks/core`, but it can be used independently
- `@hass-blocks/local-hass` - a private utility package that allows scripts to easily spin up and spin down a local version of Home Assistant for testing
- `@hass-blocks/terminal-ui-plugin` - a plugin for blocks that provides a more advanced TUI visualisation of executing automations
- `@hass-blocks/typed-socket-client` - a package which allows you to create a backend based on socket.io, with with handlers and clients that preserves strong typing across the API boundary
- `@hass-blocks/websocket-plugin` - a plugin for Hass Blocks that creates a websocket server to allow interaction with Hass Blocks along with a react hook that can communicate with that server

- Monorepo managed by Nx and pnpm. Key roots:

## Build, Test, and Development Commands

- Install: `pnpm install`
- Affected targets (fast path):

  - `pnpm test` → `nx affected -t test --coverage`
  - `pnpm build` → `nx affected -t build`
  - `pnpm lint` → `nx affected -t lint`
  - `pnpm e2e-test` → `nx affected -t e2e-test`
  - `pnpm generate-types` → `nx affected -t generate-types`

- Per-project targets: `pnpm exec nx run <project>:<target>`
  - Example: `pnpm exec nx run @hass-blocks/core:test`

## Coding Style & Naming Conventions

- Language: TypeScript (ES modules). Directory and file names use kebab-case.
- Formatting: Prettier (singleQuote: true). Run `pnpm format`; CI enforces `pnpm check-style`.
- Linting: ESLint (Nx flat config) + Biome rules; run `pnpm lint`.
- Imports: respect Nx boundaries; no cross-package deep imports.

## Testing Guidelines

- Unit tests: Vitest. Name tests `*.spec.ts` or `*.test.ts` alongside sources.
- E2E: Playwright where provided (e.g., `packages/hass-ts/src/e2e-tests`).
- Run: `pnpm test` for coverage; project-specific via `nx run <project>:test`.

## Commit & Pull Request Guidelines

- Commits: Conventional Commits enforced by commitlint (e.g., `feat: add mqtt sensor`).
- Pre-commit: Husky + lint-staged auto-format and lint changed files.
