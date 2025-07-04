import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface GetTorrentsQbittorrent {
    /**
     * Which service to grab the list from
     */
    device_id: never;
    /**
     * What kind of torrents you want to return, such as All or Active
     */
    torrent_filter: never;
  }

  /**
   * Gets a list of current torrents
   */
  var getTorrentsQbittorrent: (
    params: GetTorrentsQbittorrent,
  ) => Block<Partial<GetTorrentsQbittorrent> | undefined, void>;

  interface GetAllTorrentsQbittorrent {
    /**
     * What kind of torrents you want to return, such as All or Active
     */
    torrent_filter: never;
  }

  /**
   * Gets a list of current torrents from all instances of qBittorrent
   */
  var getAllTorrentsQbittorrent: (
    params: GetAllTorrentsQbittorrent,
  ) => Block<Partial<GetAllTorrentsQbittorrent> | undefined, void>;
}

globalThis.getTorrentsQbittorrent = (params) =>
  serviceCall({
    name: `Call qbittorrent.get_torrents`,
    params: {
      domain: 'qbittorrent',
      service: 'get_torrents',
      service_data: params,
    },
  });

globalThis.getAllTorrentsQbittorrent = (params) =>
  serviceCall({
    name: `Call qbittorrent.get_all_torrents`,
    params: {
      domain: 'qbittorrent',
      service: 'get_all_torrents',
      service_data: params,
    },
  });
