import { serviceCall, Block } from '@hass-blocks/core';
declare global {
  /**
   * Downloads a file to the download location.
   */
  var downloadFileDownloader: (params: DownloadFileDownloaderProps) => Block;
}

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

globalThis.downloadFileDownloader = (params) =>
  serviceCall({
    name: `Call downloader.download_file`,
    params: {
      domain: 'downloader',
      service: 'download_file',
      service_data: params,
    },
  });
