import { MqttConnection } from './lib/mqtt-connection.ts';
import { MqttSwitch } from './lib/index.ts';

const username = 'imac';
const password = '520972vi';
const host = 'homeassistant.local';
const port = 1883;

const client = await MqttConnection.create({
  host,
  username: username ?? '',
  password: password ?? '',
  port,
});

const theSwitch = new MqttSwitch(client, {
  discoveryPrefix: 'homeassistant',
  uniqueId: 'my_testing_switch',
  context: 'thing',
  friendlyName: 'My Testing Switch',
  deviceClass: 'switch',
});

theSwitch.turnOff();
