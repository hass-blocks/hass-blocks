import { serviceCall, type Block } from '@hass-blocks/core';

declare global {
  interface SendMagicPacketWakeOnLan {
    /**
     * MAC address of the device to wake up
     */
    mac: string;
    /**
     * The IP address of the host to send the magic packet to. Defaults to `255.255.255.255` and is normally not changed
     */
    broadcast_address?: string;
    /**
     * The port to send the magic packet to. Defaults to `9` and is normally not changed
     */
    broadcast_port?: number;
  }

  /**
   * Sends a 'magic packet' to wake up a device with 'Wake-On-LAN' capabilities
   */
  var sendMagicPacketWakeOnLan: (
    params: SendMagicPacketWakeOnLan,
  ) => Block<Partial<SendMagicPacketWakeOnLan> | undefined, void>;
}

globalThis.sendMagicPacketWakeOnLan = (params) =>
  serviceCall({
    name: `Call wake_on_lan.send_magic_packet`,
    params: {
      domain: 'wake_on_lan',
      service: 'send_magic_packet',
      service_data: params,
    },
  });
