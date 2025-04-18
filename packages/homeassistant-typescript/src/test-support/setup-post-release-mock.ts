import { vi } from "vitest";

// eslint-disable-next-line @nx/enforce-module-boundaries
import * as hassTs from "@hass-blocks/homeassistant-typescript";

vi.doMock("@test-support/package-intercept", () => hassTs);
