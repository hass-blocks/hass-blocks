import { exec } from "node:child_process";
import { promisify } from "node:util";
import { getPackageName } from "./get-package-name.ts";
import { hass } from "@hass-blocks/local-hass"
import type {  TestProject } from 'vitest/node'

declare module 'vitest' {
  export interface ProvidedContext {
    hassHost: string
    hassPort: number
    hassToken: string
  }
}

const { startHass, stopHass } = hass()

export const setup = async (project: TestProject) => {
  if (process.env.POST_RELEASE === "true") {
    const packageName = getPackageName();
    console.log(`Installing ${packageName}`);
    const execCommand = promisify(exec);
    await execCommand(`pnpm install npm:${packageName}@latest`);
  }
  const { port, token } = await startHass()

  project.provide('hassPort', port)
  project.provide('hassToken', token)
};

export const teardown = async () => {
  await stopHass()
};
