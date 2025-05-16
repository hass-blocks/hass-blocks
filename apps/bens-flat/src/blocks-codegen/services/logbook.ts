import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface LogLogbookProps {
    /**
     * Custom name for an entity, can be referenced using the 'Entity ID' field.
     */
    name: string;
    /**
     * Message of the logbook entry.
     */
    message: string;
    /**
     * Entity to reference in the logbook entry.
     */
    entity_id?: string;
    /**
     * Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry.
     */
    domain?: string;
  }

  /**
   * Creates a custom entry in the logbook.
   */
  var logLogbook: (params: LogLogbookProps) => Block;
}

globalThis.logLogbook = (params) =>
  serviceCall({
    name: `Call logbook.log`,
    params: {
      domain: 'logbook',
      service: 'log',
      service_data: params,
    },
  });
