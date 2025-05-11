import { serviceCall } from '@hass-blocks/core';

export interface DownloadFileDownloaderProps {
  /**
   * The URL of the file to download.
   */
  url: string;
  /**
   * Relative download path.
   */
  subdir?: string;
  /**
   * Custom name for the downloaded file.
   */
  filename?: string;
  /**
   * Overwrite file if it exists.
   */
  overwrite?: boolean;
}

/**
 * Downloads a file to the download location.
 */
export const downloadFileDownloader = (params: DownloadFileDownloaderProps) =>
  serviceCall({
    name: `Call downloader.download_file`,
    params: {
      domain: 'downloader',
      service: 'download_file',
      service_data: params,
    },
  });
