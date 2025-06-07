import core from '@hass-blocks/core/package.json' with { type: 'json' };
import triggers from '@hass-blocks/triggers/package.json' with { type: 'json' };

export const packageJson = `{
  "dependencies": {
    "@hass-blocks/core": "${core.version}",
    "@hass-blocks/triggers": "${triggers.version}"
  }
}`;
