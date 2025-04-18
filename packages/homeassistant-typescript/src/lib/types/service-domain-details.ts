import { Service } from "./services.ts";

/**
 * @alpha
 */
export interface ServiceDomainDetails {
  domain: string;
  services: Record<string, Service>;
}
