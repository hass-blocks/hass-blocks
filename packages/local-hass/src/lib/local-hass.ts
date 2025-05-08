import { v2 as compose } from 'docker-compose';
import path from 'node:path';
import { generateDockerCompose } from './docker-compose-yaml-generator.ts';
import getPort from 'get-port';
import waitOn from 'wait-on';
import { TEST_HASS_TOKEN } from './hass-server-credentials.ts';

const configDir = path.join(__dirname, `..`, `..`, `hass-config`);
const dockerFile = path.join(__dirname, `..`, `..`);

export const hass = () => {
  let port: number | undefined;
  const startHass = async () => {
    console.log(' ℹ️  Starting test HASS server...');

    port = await getPort();

    const configAsString = generateDockerCompose({
      configDir,
      dockerFileDir: dockerFile,
      port,
    });

    await compose.upAll({
      cwd: path.join(__dirname),
      commandOptions: ['--build'],
      configAsString,
      callback: (chunk) => {
        console.log(' ℹ️  Job in progress: ', chunk.toString());
      },
    });

    compose.logs('homeassistant', {
      follow: true,
      configAsString,
      callback: (chunk) => {
        console.log(' ℹ️  ', chunk.toString());
      },
    });

    await waitOn({
      log: true,
      resources: [`http-get://localhost:${port}/api/`],
      headers: {
        Authorization: `Bearer ${TEST_HASS_TOKEN}`,
      },
    });

    return { port, token: TEST_HASS_TOKEN };
  };

  const stopHass = async () => {
    if (port) {
      console.log(' ℹ️  Stopping test HASS server...');

      const configAsString = generateDockerCompose({
        configDir,
        dockerFileDir: dockerFile,
        port,
      });

      await compose.down({
        configAsString,
        cwd: path.join(__dirname),
      });
    }
  };

  return { startHass, stopHass };
};
