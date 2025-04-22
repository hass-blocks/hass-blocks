import { Stack } from 'aws-cdk-lib';
import {
  Certificate,
  CertificateValidation,
  ICertificate,
} from 'aws-cdk-lib/aws-certificatemanager';
import { PublicHostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';

interface CertificateStackProps {
  env: {
    account: string;
  };
  domainName: string;
}

export class CertificateStack extends Stack {
  public certificate: ICertificate;

  public constructor(
    context: Construct,
    id: string,
    props: CertificateStackProps,
  ) {
    super(context, id, {
      ...props,
      env: { ...props.env, region: 'eu-west-1' },
    });

    const { domainName } = props;

    const hostedZone = new PublicHostedZone(this, 'HostedZone', {
      zoneName: domainName,
    });

    this.certificate = new Certificate(this, 'cert', {
      domainName,
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}
