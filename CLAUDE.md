# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Hass Blocks is a strongly typed declarative framework for configuring Home Assistant automations using TypeScript. The codebase is organized as an Nx monorepo with multiple packages and applications.

## Architecture

### Core Structure

- **Monorepo**: Uses Nx workspace with PNPM for dependency management
- **Packages**: Main logic in `/packages/` - core framework libraries
- **Apps**: Example applications and tooling in `/apps/`
- **Plugins**: Custom Nx plugins in `/plugins/`

### Key Packages

- `@hass-blocks/core`: Main framework with Block, automation, and execution engine
- `@hass-blocks/hass-ts`: TypeScript client for Home Assistant WebSocket/REST APIs
- `@hass-blocks/triggers`: Trigger system for automations (time, state changes, events)
- `@hass-blocks/websocket-plugin`: WebSocket server for real-time communication
- `@hass-blocks/hass-mqtt`: MQTT integration for Home Assistant
- `@hass-blocks/terminal-ui-plugin`: Terminal UI for automation visualization

### Applications

- `bens-flat`: Example Home Assistant configuration using the framework
- `hass-blocks-addon`: React-based Home Assistant add-on with web UI
- `docs-site`: Astro-based documentation website

## Development Commands

### Core Workflow

```bash
# Install dependencies
pnpm install

# Run tests across affected projects
pnpm test

# Lint code across affected projects
pnpm lint

# Build affected projects
pnpm build

# Generate TypeScript types for packages
pnpm generate-types

# Format code
pnpm format

# Check code formatting
pnpm check-style
```

### Nx-Specific Commands

```bash
# Run specific target for all projects
pnpm exec nx run-many -t test
pnpm exec nx run-many -t build
pnpm exec nx run-many -t lint

# Run target for specific project
pnpm exec nx test @hass-blocks/core
pnpm exec nx build hass-blocks-addon

# View project dependency graph
pnpm exec nx graph
```

### Testing

- Uses Vitest for unit testing
- Playwright for E2E testing
- Test files: `*.spec.ts`, `*.test.ts`
- Type-level tests: `*.test-d.ts` (using TypeScript compiler)

### Building and Releases

- Uses Nx for build orchestration and dependency management
- Automated releases via conventional commits
- Each package maintains independent versioning
- API documentation generated with API Extractor

### Home Assistant Integration

- Framework generates strongly-typed entity and service definitions
- Codegen creates TypeScript interfaces from Home Assistant API
- WebSocket connection for real-time state updates
- REST API client for service calls and configuration

## Key Concepts

### Blocks and Automations

- **Block**: Base unit of automation logic with typed inputs/outputs
- **Automation**: Combines triggers with action sequences
- **Sequence**: Chains multiple blocks with type safety
- **Actions**: Service calls, state changes, API requests
- **Assertions**: Conditional logic and state validation

### Type System

- Heavy use of TypeScript for compile-time safety
- Complex type manipulation for sequence validation
- Generic constraints ensure block compatibility
- Auto-generated types from Home Assistant API schemas

### Execution Model

- Asynchronous execution with proper error handling
- Queue-based processing with lifecycle management
- Plugin architecture for extensibility
- Event-driven architecture with WebSocket communication

## Development Practices

### Test-Driven Development (TDD)

**CRITICAL**: Always follow strict Test-Driven Development practices:

1. **Write Tests First**: Before implementing any functionality, write tests that describe the desired behavior
2. **Minimal Implementation**: Write only the minimal amount of code needed to make the test pass
3. **Ensure No Regressions**: Verify that all existing tests continue to pass after changes
4. **Red-Green-Refactor Cycle**:
   - Red: Write a failing test
   - Green: Write minimal code to make it pass
   - Refactor: Clean up code while keeping tests green

This TDD approach is essential for maintaining the framework's reliability and type safety.

### Code Style

**ABSOLUTE RULE**: Under NO CIRCUMSTANCES add ANY comments to code. The codebase maintains a strict no-comments policy. Code should be self-documenting through clear naming and structure.

### Quality Assurance

**CRITICAL**: After every code change, you MUST run both the linter and type checker:

1. **Run Linter**: Execute `pnpm lint` to ensure code style compliance
2. **Run Type Checker**: Execute `pnpm exec nx run-many -t build` or type-check affected projects
3. **Fix All Issues**: If any linting or type errors are reported, resolve them immediately
4. **No Exceptions**: Never consider a change complete until both linter and type checker pass without errors

This ensures code quality and prevents type safety regressions in the strongly-typed framework.
