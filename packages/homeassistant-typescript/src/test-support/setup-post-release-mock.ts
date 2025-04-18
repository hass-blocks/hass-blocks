import { vi } from "vitest";

// eslint-disable-next-line @nx/enforce-module-boundaries, @typescript-eslint/ban-ts-comment
// @ts-expect-error
import * as hassTs from "homeassistant-typescript";

vi.doMock("@test-support/package-intercept", () => hassTs);
