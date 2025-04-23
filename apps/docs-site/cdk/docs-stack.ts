import { App, Stack } from 'aws-cdk-lib';
import { ICertificate } from 'aws-cdk-lib/aws-certificatemanager';
import { Distribution } from 'aws-cdk-lib/aws-cloudfront';
import { S3StaticWebsiteOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  ARecord,
  PublicHostedZone,
  RecordTarget,
} from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
import { join } from 'path';

interface DocsStackProps {
  env: {
    region: string;
    account: string;
  };
  domainName: string;
  certificate: ICertificate;
}

export class DocsStack extends Stack {
  constructor(scope: Construct, id: string, props: DocsStackProps) {
    super(scope, id, { ...props, crossRegionReferences: true });

    const { domainName, certificate } = props;

    const assetsBucket = new Bucket(this, 'AssetsBucket', {
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
    });

    const hostedZone = new PublicHostedZone(this, 'HostedZone', {
      zoneName: domainName,
    });

    const distribution = new Distribution(
      this,
      'hass-blocks-docs-distribution',
      {
        defaultBehavior: {
          origin: new S3StaticWebsiteOrigin(assetsBucket),
        },
        certificate,
        domainNames: [domainName],
      },
    );

    new BucketDeployment(this, 'AssetsDeployment', {
      destinationBucket: assetsBucket,
      sources: [Source.asset(join(__dirname, '..', 'dist'))],
      distribution,
    });

    new ARecord(this, 'FrontendARecord', {
      zone: hostedZone,
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });
  }
}
