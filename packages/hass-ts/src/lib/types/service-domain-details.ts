import type { Service } from './services.ts';

/**
 * A map of domains, with each domain containing a map of services
 *
 * @public
 */
export interface ServiceDomainDetails {
  /**
   * The service domain (e.g. 'light')
   */
  domain: string;
  /**
   * Services registered with this domain
   */
  services: Record<string, Service>;
}
