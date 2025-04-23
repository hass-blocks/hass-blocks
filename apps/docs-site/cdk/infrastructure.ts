import { App } from 'aws-cdk-lib';
import { DocsStack } from './docs-stack';
import { CertificateStack } from './certificate-stack';

const app = new App();

const domainName = 'hass-blocks.com';
const region = `eu-west-2`;
const account = `688567288532`;

const certificateStack = new CertificateStack(
  app,
  `hass-blocks-certificate-stack`,
  {
    env: {
      account,
    },
    domainName,
  },
);

new DocsStack(app, 'hass-blocks-docs-stack', {
  env: {
    region,
    account,
  },
  domainName,
  certificate: certificateStack.certificate,
});

app.synth();
