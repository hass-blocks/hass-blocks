import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ReportWatchman {
    /**
     * Parse configuration files before generating the report. Usually, this is done automatically by Watchman, so this flag is typically not required.
     */
    parse_config?: boolean;
    advanced_options?: never;
  }

  /**
   * Run the Watchman report
   */
  var reportWatchman: (
    params?: ReportWatchman,
  ) => Block<Partial<ServiceCallArgs<ReportWatchman>> | undefined, void>;
}

globalThis.reportWatchman = (params) =>
  serviceCall({
    name: `Call watchman.report`,
    params: {
      domain: 'watchman',
      service: 'report',
      service_data: params,
    },
  });
