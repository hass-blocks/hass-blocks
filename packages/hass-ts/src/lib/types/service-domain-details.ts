import type { Service } from './services.ts';

/**
 * @public
 */
export interface ServiceDomainDetails {
  domain: string;
  services: Record<string, Service>;
}
