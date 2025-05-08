import { getPackageName } from './get-package-name.ts';
import { hass } from '@hass-blocks/local-hass';
import type { TestProject } from 'vitest/node';
import { $ } from 'execa';
import { join } from 'node:path';

declare module 'vitest' {
  export interface ProvidedContext {
    hassHost: string;
    hassPort: number;
    hassToken: string;
  }
}

const { startHass, stopHass } = hass();

const projectRoot = join(__dirname, '..', '..');

export const setup = async (project: TestProject) => {
  if (process.env['POST_RELEASE'] === 'true') {
    const packageName = getPackageName() ?? '';
    console.log(`Installing npm:${packageName}`);
    const log = await $({
      cwd: projectRoot,
    })`pnpm install npm:${packageName}@latest --ignore-workspace`;
    console.log(log);
  }
  const { port, token } = await startHass();

  project.provide('hassPort', port);
  project.provide('hassToken', token);
};

export const teardown = async () => {
  await stopHass();
};
