import { Block, serviceCall } from '@hass-blocks/core';
declare global {
  /**
   * Gets a list of current torrents
   */
  var getTorrentsQbittorrent: (params: GetTorrentsQbittorrentProps) => Block;
  /**
   * Gets a list of current torrents from all instances of qBittorrent
   */
  var getAllTorrentsQbittorrent: (
    params: GetAllTorrentsQbittorrentProps,
  ) => Block;
}

export interface GetTorrentsQbittorrentProps {
  /**
   * Which service to grab the list from
   */
  device_id: never;
  /**
   * What kind of torrents you want to return, such as All or Active.
   */
  torrent_filter: never;
}

globalThis.getTorrentsQbittorrent = (params: GetTorrentsQbittorrentProps) =>
  serviceCall({
    name: `Call qbittorrent.get_torrents`,
    params: {
      domain: 'qbittorrent',
      service: 'get_torrents',
      service_data: params,
    },
  });

export interface GetAllTorrentsQbittorrentProps {
  /**
   * What kind of torrents you want to return, such as All or Active.
   */
  torrent_filter: never;
}

globalThis.getAllTorrentsQbittorrent = (
  params: GetAllTorrentsQbittorrentProps,
) =>
  serviceCall({
    name: `Call qbittorrent.get_all_torrents`,
    params: {
      domain: 'qbittorrent',
      service: 'get_all_torrents',
      service_data: params,
    },
  });
