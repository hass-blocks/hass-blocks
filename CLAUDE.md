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
- **NO BARREL FILE TESTS**: Do not write tests for barrel files (index.ts files containing only exports) as they provide no behavioral logic to test
- **TEST HOOKS PLACEMENT**: All test hooks (beforeEach, beforeAll, afterEach, afterAll) must be placed at the TOP level of the test file, never inside describe blocks
- **NO GLOBAL TEST STATE**: Never put mutable state in the global scope of test files unless it is absolutely essential. Create mocks and variables inside individual tests or test hooks to maintain test isolation
- **MINIMAL HOOK USAGE**: Use test hooks (beforeEach/afterEach) sparingly and only for test hygiene - clearing mock states, cleaning up resources (servers, timers, etc.). Everything else needed for a test should be created within the test itself for clarity and isolation
- **CONDITIONAL ASSERTIONS**: When placing assertions inside 'if' blocks, always use `expect.assertions(<number>)` to prevent false positives from skipped assertions
- **VI.MOCK HYGIENE**: When using `vi.mock()` at the top level of a test file, always add `vi.resetAllMocks()` in an `afterEach` hook to prevent test pollution
- **VI.MOCK SIMPLICITY**: Use `vi.mock('package')` without factory functions - Vitest automatically mocks all exports. Only use factory functions when you need specific mock implementations. Then use `vi.mocked()` directly on imported functions to configure behavior
- **CONDITIONAL MOCKING**: Instead of using `mockReturnValue()` for functions called inside implementations, use the `vitest-when` package to provide return values only when a function is called with specific arguments. This makes tests more precise and prevents unintended mock behaviors. Example: `when(mockHass.getState).calledWith('light.living_room').thenReturn('on')`
- **ONE TEST AT A TIME**: Write tests incrementally, one at a time. After writing each test, ensure it passes and that all linting and type checking is correct before writing the next test. This prevents accumulating multiple broken tests and makes debugging easier.

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

**ABSOLUTE RULE**: Under NO CIRCUMSTANCES add ANY comments to code. The codebase maintains a strict no-comments policy. Code should be self-documenting through clear naming and structure. **EXCEPTIONS**: JSDoc comments are acceptable for public API documentation, and `// NOOP` comments are acceptable in empty blocks to satisfy linter requirements.

**STRICT TYPE SAFETY RULES**:

Under NO CIRCUMSTANCES can you deviate from these rules except where specified in the rule itself

- **NO TYPE ASSERTIONS**: Never use type assertions (the 'as' keyword) under any circumstances. All type issues must be resolved through proper typing.
- **NO 'any' TYPE**: The 'any' type is forbidden except in very limited circumstances. You must ask for explicit permission before using 'any' and provide justification for why proper typing cannot be achieved.
- **NO DOUBLE ASSERTIONS**: Never use 'as unknown as X' except in exceptional circumstances. Always try to find proper typing alternatives first, then ask for permission if no other solution exists.

### Quality Assurance

**CRITICAL**: After every code change, you MUST ensure all linting, type checking, and formatting issAues are resolved. UNDER NO CIRCUMSTANCES can you proceed unless they have been resolved:

**When working in VSCode/IDE environment:**

1. **Fix Diagnostics**: Address all VSCode diagnostics (red squiggles, yellow warnings) immediately as they appear
2. **Run Prettier**: Execute `pnpm format` to format all files after everything else is clean
3. **No Exceptions**: Never consider a change complete until all IDE diagnostics are resolved and formatting is applied

**When working in command-line environment:**

1. **Run Linter**: Execute `pnpm lint` to ensure code style compliance
2. **Run Type Checker**: Execute `pnpm exec nx run-many -t check-types` to type-check affected projects (NOTE: `:build` only transpiles JavaScript - use `:check-types` for actual TypeScript type checking)
3. **Run Prettier**: Execute `pnpm format` to format all files after everything else is clean
4. **Fix All Issues**: If any linting or type errors are reported, resolve them immediately
5. **No Exceptions**: Never consider a change complete until linter, type checker, and formatter all pass without errors

This ensures code quality and prevents type safety regressions in the strongly-typed framework.

**NOTE**: TS6305 errors in an incremental project are usually caused by upstream packages having build failures. If these are encountered, first fix the upstream errors, then try running type checking again. Once you've done that you should be able to see the real problem

### Git Workflow

**MANDATORY**: Make atomic commits for every single behavioral change:

1. **Atomic Changes**: Each commit should represent one complete, logical change to application behavior
2. **Immediate Commits**: Commit immediately after each successful change (after linter/type checker pass)
3. **Clear Messages**: Use descriptive commit messages following conventional commit format
4. **No Bundling**: Never bundle multiple behavioral changes into a single commit
5. **Test Integration**: Each commit should leave the codebase in a working, tested state

This granular commit history enables precise change tracking, easier debugging, and more effective code review.
