import { serviceCall } from '@hass-blocks/core';

export interface ReportWatchmanProps {
  /**
   * Parse configuration files before generating the report. Usually, this is done automatically by Watchman, so this flag is typically not required.
   */
  parse_config?: boolean;
  advanced_options?: never;
}

/**
 * Run the Watchman report
 */
export const reportWatchman = (params?: ReportWatchmanProps) =>
  serviceCall({
    name: `Call watchman.report`,
    params: {
      domain: 'watchman',
      service: 'report',
      service_data: params,
    },
  });
