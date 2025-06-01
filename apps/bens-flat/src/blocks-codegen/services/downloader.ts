import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface DownloadFileDownloader {
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
  var downloadFileDownloader: (
    params: DownloadFileDownloader,
  ) => Block<
    Partial<ServiceCallArgs<DownloadFileDownloader>> | undefined,
    void
  >;
}

globalThis.downloadFileDownloader = (params) =>
  serviceCall({
    name: `Call downloader.download_file`,
    params: {
      domain: 'downloader',
      service: 'download_file',
      service_data: params,
    },
  });
