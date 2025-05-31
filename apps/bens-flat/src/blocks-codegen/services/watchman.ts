import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface ReportWatchmanProps {
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
    params?: ReportWatchmanProps,
  ) => Block<Partial<ServiceCallArgs<ReportWatchmanProps>> | undefined, void>;
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
