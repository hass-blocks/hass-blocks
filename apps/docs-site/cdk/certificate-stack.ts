import { Stack } from 'aws-cdk-lib';
import {
  Certificate,
  CertificateValidation,
  ICertificate,
} from 'aws-cdk-lib/aws-certificatemanager';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
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
      env: { ...props.env, region: 'us-east-1' },
      crossRegionReferences: true,
    });

    const { domainName } = props;

    const hostedZone = HostedZone.fromLookup(this, `cert-stack-hosted-zone`, {
      domainName,
    });

    this.certificate = new Certificate(this, 'cert', {
      domainName,
      subjectAlternativeNames: [`www.${domainName}`],
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}
