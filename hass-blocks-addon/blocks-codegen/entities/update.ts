import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Home Assistant Supervisor Update
   */
  var homeAssistantSupervisorUpdateUpdate: IEntity<`update.home_assistant_supervisor_update`>;
  /**
   * Home Assistant Core Update
   */
  var homeAssistantCoreUpdateUpdate: IEntity<`update.home_assistant_core_update`>;
  /**
   * Let's Encrypt Update
   */
  var letSEncryptUpdateUpdate: IEntity<`update.let_s_encrypt_update`>;
  /**
   * MariaDB Update
   */
  var mariadbUpdateUpdate: IEntity<`update.mariadb_update`>;
  /**
   * Log Viewer Update
   */
  var logViewerUpdateUpdate: IEntity<`update.log_viewer_update`>;
  /**
   * Mosquitto broker Update
   */
  var mosquittoBrokerUpdateUpdate: IEntity<`update.mosquitto_broker_update`>;
  /**
   * Node-RED Update
   */
  var nodeRedUpdateUpdate: IEntity<`update.node_red_update`>;
  /**
   * Studio Code Server Update
   */
  var studioCodeServerUpdateUpdate: IEntity<`update.studio_code_server_update`>;
  /**
   * Terminal & SSH Update
   */
  var terminalSshUpdateUpdate: IEntity<`update.terminal_ssh_update`>;
  /**
   * Z-Wave JS Update
   */
  var zWaveJsUpdateUpdate: IEntity<`update.z_wave_js_update`>;
  /**
   * Zigbee2MQTT Update
   */
  var zigbee2mqttUpdateUpdate: IEntity<`update.zigbee2mqtt_update`>;
  /**
   * Ring-MQTT with Video Streaming Update
   */
  var ringMqttWithVideoStreamingUpdateUpdate: IEntity<`update.ring_mqtt_with_video_streaming_update`>;
  /**
   * AppDaemon Update
   */
  var appdaemonUpdateUpdate: IEntity<`update.appdaemon_update`>;
  /**
   * My Home Automations Update
   */
  var myHomeAutomationsUpdateUpdate: IEntity<`update.my_home_automations_update`>;
  /**
   * SharpTools.io Update
   */
  var sharptoolsIoUpdateUpdate: IEntity<`update.sharptools_io_update`>;
  /**
   * Plex Media Server Update
   */
  var plexMediaServerUpdateUpdate: IEntity<`update.plex_media_server_update`>;
  /**
   * AdGuard Home Update
   */
  var adguardHomeUpdateUpdate: IEntity<`update.adguard_home_update`>;
  /**
   * Nginx Proxy Manager Update
   */
  var nginxProxyManagerUpdateUpdate: IEntity<`update.nginx_proxy_manager_update`>;
  /**
   * NGINX Home Assistant SSL proxy Update
   */
  var nginxHomeAssistantSslProxyUpdateUpdate: IEntity<`update.nginx_home_assistant_ssl_proxy_update`>;
  /**
   * Rhasspy Assistant Update
   */
  var rhasspyAssistantUpdateUpdate: IEntity<`update.rhasspy_assistant_update`>;
  /**
   * InfluxDB Update
   */
  var influxdbUpdateUpdate: IEntity<`update.influxdb_update`>;
  /**
   * Samba share Update
   */
  var sambaShareUpdateUpdate: IEntity<`update.samba_share_update`>;
  /**
   * File editor Update
   */
  var fileEditorUpdateUpdate: IEntity<`update.file_editor_update`>;
  /**
   * Firefly iii Update
   */
  var fireflyIiiUpdateUpdate: IEntity<`update.firefly_iii_update`>;
  /**
   * Matter Server Update
   */
  var matterServerUpdateUpdate: IEntity<`update.matter_server_update`>;
  /**
   * Firefly iii Data Importer Update
   */
  var fireflyIiiDataImporterUpdateUpdate: IEntity<`update.firefly_iii_data_importer_update`>;
  /**
   * Mealie Update
   */
  var mealieUpdateUpdate: IEntity<`update.mealie_update`>;
  /**
   * Whisparr Update
   */
  var whisparrUpdateUpdate: IEntity<`update.whisparr_update`>;
  /**
   * Radarr Update
   */
  var radarrUpdateUpdate: IEntity<`update.radarr_update`>;
  /**
   * Sonarr Update
   */
  var sonarrUpdateUpdate: IEntity<`update.sonarr_update`>;
  /**
   * Prowlarr NAS Update
   */
  var prowlarrNasUpdateUpdate: IEntity<`update.prowlarr_nas_update`>;
  /**
   * FlareSolverr Update
   */
  var flaresolverrUpdateUpdate: IEntity<`update.flaresolverr_update`>;
  /**
   * qBittorrent Update
   */
  var qbittorrentUpdateUpdate: IEntity<`update.qbittorrent_update`>;
  /**
   * Bazarr NAS Update
   */
  var bazarrNasUpdateUpdate: IEntity<`update.bazarr_nas_update`>;
  /**
   * Jellyfin NAS Update
   */
  var jellyfinNasUpdateUpdate: IEntity<`update.jellyfin_nas_update`>;
  /**
   * Assist Microphone Update
   */
  var assistMicrophoneUpdateUpdate: IEntity<`update.assist_microphone_update`>;
  /**
   * openWakeWord Update
   */
  var openwakewordUpdateUpdate: IEntity<`update.openwakeword_update`>;
  /**
   * Whisper Update
   */
  var whisperUpdateUpdate: IEntity<`update.whisper_update`>;
  /**
   * Hass Blocks Update
   */
  var hassBlocksUpdateUpdate: IEntity<`update.hass_blocks_update`>;
  /**
   * Hass Blocks Frontend Update
   */
  var hassBlocksFrontendUpdateUpdate: IEntity<`update.hass_blocks_frontend_update`>;
  /**
   * Glances Update
   */
  var glancesUpdateUpdate: IEntity<`update.glances_update`>;
  /**
   * Advanced SSH & Web Terminal Update
   */
  var advancedSshWebTerminalUpdateUpdate: IEntity<`update.advanced_ssh_web_terminal_update`>;
  /**
   * Flexget Update
   */
  var flexgetUpdateUpdate: IEntity<`update.flexget_update`>;
  /**
   * JupyterLab Update
   */
  var jupyterlabUpdateUpdate: IEntity<`update.jupyterlab_update`>;
  /**
   * Music Assistant Server (beta) Update
   */
  var musicAssistantServerBetaUpdateUpdate: IEntity<`update.music_assistant_server_beta_update`>;
  /**
   * LMS Lyrion Music Server(Formerly Logitech Media Server) Update
   */
  var lmsLyrionMusicServerFormerlyLogitechMediaServerUpdateUpdate: IEntity<`update.lms_lyrion_music_server_formerly_logitech_media_server_update`>;
  /**
   * Home Assistant Operating System Update
   */
  var homeAssistantOperatingSystemUpdateUpdate: IEntity<`update.home_assistant_operating_system_update`>;
  /**
   * Living Room Header (By the table) Firmware
   */
  var livingRoomHeaderByTheTableFirmwareUpdate: IEntity<`update.living_room_header_by_the_table_firmware`>;
  /**
   * TV Heater Firmware
   */
  var tvHeaterFirmwareUpdate: IEntity<`update.tv_heater_firmware`>;
  /**
   * Boiler (Boost) firmware update
   */
  var boilerBoostFirmwareUpdateUpdate: IEntity<`update.boiler_boost_firmware_update`>;
  /**
   * Bookshelf Heater Firmware
   */
  var bookshelfHeaterFirmwareUpdate: IEntity<`update.bookshelf_heater_firmware`>;
  /**
   * Hallway Heater Firmware
   */
  var hallwayHeaterFirmwareUpdate: IEntity<`update.hallway_heater_firmware`>;
  /**
   * Living Room Sensor Firmware
   */
  var livingRoomSensorFirmwareUpdate: IEntity<`update.living_room_sensor_firmware`>;
  /**
   * Gym Sensor Firmware
   */
  var gymSensorFirmwareUpdate: IEntity<`update.gym_sensor_firmware`>;
  /**
   * Bedroom Sensor Firmware
   */
  var bedroomSensorFirmwareUpdate: IEntity<`update.bedroom_sensor_firmware`>;
  /**
   * extended_openai_conversation update
   */
  var extendedOpenaiConversationUpdateUpdate: IEntity<`update.extended_openai_conversation_update`>;
  /**
   * auto-entities update
   */
  var autoEntitiesUpdateUpdate: IEntity<`update.auto_entities_update`>;
  /**
   * Banner Card update
   */
  var bannerCardUpdateUpdate: IEntity<`update.banner_card_update`>;
  /**
   * Noctis update
   */
  var noctisUpdateUpdate: IEntity<`update.noctis_update`>;
  /**
   * Mini Media Player update
   */
  var miniMediaPlayerUpdateUpdate: IEntity<`update.mini_media_player_update`>;
  /**
   * pyscript update
   */
  var pyscriptUpdateUpdate: IEntity<`update.pyscript_update`>;
  /**
   * Node-RED Companion update
   */
  var nodeRedCompanionUpdateUpdate: IEntity<`update.node_red_companion_update`>;
  /**
   * Sonos Alarm update
   */
  var sonosAlarmUpdateUpdate: IEntity<`update.sonos_alarm_update`>;
  /**
   * Alexa Media Player update
   */
  var alexaMediaPlayerUpdateUpdate: IEntity<`update.alexa_media_player_update`>;
  /**
   * Config Template Card update
   */
  var configTemplateCardUpdateUpdate: IEntity<`update.config_template_card_update`>;
  /**
   * Spotcast update
   */
  var spotcastUpdateUpdate: IEntity<`update.spotcast_update`>;
  /**
   * layout-card update
   */
  var layoutCardUpdateUpdate: IEntity<`update.layout_card_update`>;
  /**
   * Octopus Energy update
   */
  var octopusEnergyUpdateUpdate: IEntity<`update.octopus_energy_update`>;
  /**
   * Slate Theme update
   */
  var slateThemeUpdateUpdate: IEntity<`update.slate_theme_update`>;
  /**
   * Spotify Lovelace Card update
   */
  var spotifyLovelaceCardUpdateUpdate: IEntity<`update.spotify_lovelace_card_update`>;
  /**
   * Adaptive Lighting update
   */
  var adaptiveLightingUpdateUpdate: IEntity<`update.adaptive_lighting_update`>;
  /**
   * mini-graph-card update
   */
  var miniGraphCardUpdateUpdate: IEntity<`update.mini_graph_card_update`>;
  /**
   * Firemote Card update
   */
  var firemoteCardUpdateUpdate: IEntity<`update.firemote_card_update`>;
  /**
   * Catppuccin Theme update
   */
  var catppuccinThemeUpdateUpdate: IEntity<`update.catppuccin_theme_update`>;
  /**
   * Blank Card update
   */
  var blankCardUpdateUpdate: IEntity<`update.blank_card_update`>;
  /**
   * Watchman update
   */
  var watchmanUpdateUpdate: IEntity<`update.watchman_update`>;
  /**
   * iCloud3 v3 iDevice Tracker update
   */
  var icloud3V3IdeviceTrackerUpdateUpdate: IEntity<`update.icloud3_v3_idevice_tracker_update`>;
  /**
   * Universal Remote Card update
   */
  var universalRemoteCardUpdateUpdate: IEntity<`update.universal_remote_card_update`>;
  /**
   * Flower Card update
   */
  var flowerCardUpdateUpdate: IEntity<`update.flower_card_update`>;
  /**
   * Lovelace Home Feed Card update
   */
  var lovelaceHomeFeedCardUpdateUpdate: IEntity<`update.lovelace_home_feed_card_update`>;
  /**
   * OpenAI TTS Speech Service update
   */
  var openaiTtsSpeechServiceUpdateUpdate: IEntity<`update.openai_tts_speech_service_update`>;
  /**
   * Nuki BT update
   */
  var nukiBtUpdateUpdate: IEntity<`update.nuki_bt_update`>;
  /**
   * Gallery Card update
   */
  var galleryCardUpdateUpdate: IEntity<`update.gallery_card_update`>;
  /**
   * Bubble Card update
   */
  var bubbleCardUpdateUpdate: IEntity<`update.bubble_card_update`>;
  /**
   * Generic Remote Control Card update
   */
  var genericRemoteControlCardUpdateUpdate: IEntity<`update.generic_remote_control_card_update`>;
  /**
   * Mushroom update
   */
  var mushroomUpdateUpdate: IEntity<`update.mushroom_update`>;
  /**
   * HACS update
   */
  var hacsUpdateUpdate: IEntity<`update.hacs_update`>;
  /**
   * Battery State Card / Entity Row update
   */
  var batteryStateCardEntityRowUpdateUpdate: IEntity<`update.battery_state_card_entity_row_update`>;
  /**
   * Better Thermostat UI update
   */
  var betterThermostatUiUpdateUpdate: IEntity<`update.better_thermostat_ui_update`>;
  /**
   * Home Assistant Plant update
   */
  var homeAssistantPlantUpdateUpdate: IEntity<`update.home_assistant_plant_update`>;
  /**
   * Climate thermostat card update
   */
  var climateThermostatCardUpdateUpdate: IEntity<`update.climate_thermostat_card_update`>;
  /**
   * iOS Themes - Dark Mode and Light Mode update
   */
  var iosThemesDarkModeAndLightModeUpdateUpdate: IEntity<`update.ios_themes_dark_mode_and_light_mode_update`>;
  /**
   * SpotifyPlus update
   */
  var spotifyplusUpdateUpdate: IEntity<`update.spotifyplus_update`>;
  /**
   * Stack In Card update
   */
  var stackInCardUpdateUpdate: IEntity<`update.stack_in_card_update`>;
  /**
   * Maxi Media Player update
   */
  var maxiMediaPlayerUpdateUpdate: IEntity<`update.maxi_media_player_update`>;
  /**
   * ICS Calendar (iCalendar) update
   */
  var icsCalendarIcalendarUpdateUpdate: IEntity<`update.ics_calendar_icalendar_update`>;
  /**
   * Kiosk Mode update
   */
  var kioskModeUpdateUpdate: IEntity<`update.kiosk_mode_update`>;
  /**
   * Waves update
   */
  var wavesUpdateUpdate: IEntity<`update.waves_update`>;
  /**
   * Select list Card update
   */
  var selectListCardUpdateUpdate: IEntity<`update.select_list_card_update`>;
  /**
   * card-mod update
   */
  var cardModUpdateUpdate: IEntity<`update.card_mod_update`>;
  /**
   * state-switch update
   */
  var stateSwitchUpdateUpdate: IEntity<`update.state_switch_update`>;
  /**
   * Stream Assist update
   */
  var streamAssistUpdateUpdate: IEntity<`update.stream_assist_update`>;
  /**
   * Google Cloud Speech-To-Text update
   */
  var googleCloudSpeechToTextUpdateUpdate: IEntity<`update.google_cloud_speech_to_text_update`>;
  /**
   * iCal Sensor update
   */
  var icalSensorUpdateUpdate: IEntity<`update.ical_sensor_update`>;
  /**
   * Your Name. update
   */
  var yourNameUpdateUpdate: IEntity<`update.your_name_update`>;
  /**
   * Sonos Card update
   */
  var sonosCardUpdateUpdate: IEntity<`update.sonos_card_update`>;
  /**
   * OpenPlantbook update
   */
  var openplantbookUpdateUpdate: IEntity<`update.openplantbook_update`>;
  /**
   * Overkiz (by Somfy) - Custom component update
   */
  var overkizBySomfyCustomComponentUpdateUpdate: IEntity<`update.overkiz_by_somfy_custom_component_update`>;
  /**
   * browser_mod update
   */
  var browserModUpdateUpdate: IEntity<`update.browser_mod_update`>;
  /**
   * Circadian Lighting update
   */
  var circadianLightingUpdateUpdate: IEntity<`update.circadian_lighting_update`>;
  /**
   * Nuki Lock update
   */
  var nukiLockUpdateUpdate: IEntity<`update.nuki_lock_update`>;
  /**
   * Scheduler Card update
   */
  var schedulerCardUpdateUpdate: IEntity<`update.scheduler_card_update`>;
  /**
   * Candy Simply-Fi update
   */
  var candySimplyFiUpdateUpdate: IEntity<`update.candy_simply_fi_update`>;
  /**
   * Scheduler component update
   */
  var schedulerComponentUpdateUpdate: IEntity<`update.scheduler_component_update`>;
  /**
   * Playstation Network update
   */
  var playstationNetworkUpdateUpdate: IEntity<`update.playstation_network_update`>;
  /**
   * iPhone Device Tracker update
   */
  var iphoneDeviceTrackerUpdateUpdate: IEntity<`update.iphone_device_tracker_update`>;
  /**
   * Bathroom Motion Sensor
   */
  var bathroomMotionSensorUpdate: IEntity<`update.bathroom_motion_sensor`>;
  /**
   * Hallway Motion Sensor
   */
  var hallwayMotionSensorUpdate: IEntity<`update.hallway_motion_sensor`>;
}

globalThis.homeAssistantSupervisorUpdateUpdate = entity(
  'update.home_assistant_supervisor_update',
  'Home Assistant Supervisor Update',
);
globalThis.homeAssistantCoreUpdateUpdate = entity(
  'update.home_assistant_core_update',
  'Home Assistant Core Update',
);
globalThis.letSEncryptUpdateUpdate = entity(
  'update.let_s_encrypt_update',
  "Let's Encrypt Update",
);
globalThis.mariadbUpdateUpdate = entity(
  'update.mariadb_update',
  'MariaDB Update',
);
globalThis.logViewerUpdateUpdate = entity(
  'update.log_viewer_update',
  'Log Viewer Update',
);
globalThis.mosquittoBrokerUpdateUpdate = entity(
  'update.mosquitto_broker_update',
  'Mosquitto broker Update',
);
globalThis.nodeRedUpdateUpdate = entity(
  'update.node_red_update',
  'Node-RED Update',
);
globalThis.studioCodeServerUpdateUpdate = entity(
  'update.studio_code_server_update',
  'Studio Code Server Update',
);
globalThis.terminalSshUpdateUpdate = entity(
  'update.terminal_ssh_update',
  'Terminal & SSH Update',
);
globalThis.zWaveJsUpdateUpdate = entity(
  'update.z_wave_js_update',
  'Z-Wave JS Update',
);
globalThis.zigbee2mqttUpdateUpdate = entity(
  'update.zigbee2mqtt_update',
  'Zigbee2MQTT Update',
);
globalThis.ringMqttWithVideoStreamingUpdateUpdate = entity(
  'update.ring_mqtt_with_video_streaming_update',
  'Ring-MQTT with Video Streaming Update',
);
globalThis.appdaemonUpdateUpdate = entity(
  'update.appdaemon_update',
  'AppDaemon Update',
);
globalThis.myHomeAutomationsUpdateUpdate = entity(
  'update.my_home_automations_update',
  'My Home Automations Update',
);
globalThis.sharptoolsIoUpdateUpdate = entity(
  'update.sharptools_io_update',
  'SharpTools.io Update',
);
globalThis.plexMediaServerUpdateUpdate = entity(
  'update.plex_media_server_update',
  'Plex Media Server Update',
);
globalThis.adguardHomeUpdateUpdate = entity(
  'update.adguard_home_update',
  'AdGuard Home Update',
);
globalThis.nginxProxyManagerUpdateUpdate = entity(
  'update.nginx_proxy_manager_update',
  'Nginx Proxy Manager Update',
);
globalThis.nginxHomeAssistantSslProxyUpdateUpdate = entity(
  'update.nginx_home_assistant_ssl_proxy_update',
  'NGINX Home Assistant SSL proxy Update',
);
globalThis.rhasspyAssistantUpdateUpdate = entity(
  'update.rhasspy_assistant_update',
  'Rhasspy Assistant Update',
);
globalThis.influxdbUpdateUpdate = entity(
  'update.influxdb_update',
  'InfluxDB Update',
);
globalThis.sambaShareUpdateUpdate = entity(
  'update.samba_share_update',
  'Samba share Update',
);
globalThis.fileEditorUpdateUpdate = entity(
  'update.file_editor_update',
  'File editor Update',
);
globalThis.fireflyIiiUpdateUpdate = entity(
  'update.firefly_iii_update',
  'Firefly iii Update',
);
globalThis.matterServerUpdateUpdate = entity(
  'update.matter_server_update',
  'Matter Server Update',
);
globalThis.fireflyIiiDataImporterUpdateUpdate = entity(
  'update.firefly_iii_data_importer_update',
  'Firefly iii Data Importer Update',
);
globalThis.mealieUpdateUpdate = entity('update.mealie_update', 'Mealie Update');
globalThis.whisparrUpdateUpdate = entity(
  'update.whisparr_update',
  'Whisparr Update',
);
globalThis.radarrUpdateUpdate = entity('update.radarr_update', 'Radarr Update');
globalThis.sonarrUpdateUpdate = entity('update.sonarr_update', 'Sonarr Update');
globalThis.prowlarrNasUpdateUpdate = entity(
  'update.prowlarr_nas_update',
  'Prowlarr NAS Update',
);
globalThis.flaresolverrUpdateUpdate = entity(
  'update.flaresolverr_update',
  'FlareSolverr Update',
);
globalThis.qbittorrentUpdateUpdate = entity(
  'update.qbittorrent_update',
  'qBittorrent Update',
);
globalThis.bazarrNasUpdateUpdate = entity(
  'update.bazarr_nas_update',
  'Bazarr NAS Update',
);
globalThis.jellyfinNasUpdateUpdate = entity(
  'update.jellyfin_nas_update',
  'Jellyfin NAS Update',
);
globalThis.assistMicrophoneUpdateUpdate = entity(
  'update.assist_microphone_update',
  'Assist Microphone Update',
);
globalThis.openwakewordUpdateUpdate = entity(
  'update.openwakeword_update',
  'openWakeWord Update',
);
globalThis.whisperUpdateUpdate = entity(
  'update.whisper_update',
  'Whisper Update',
);
globalThis.hassBlocksUpdateUpdate = entity(
  'update.hass_blocks_update',
  'Hass Blocks Update',
);
globalThis.hassBlocksFrontendUpdateUpdate = entity(
  'update.hass_blocks_frontend_update',
  'Hass Blocks Frontend Update',
);
globalThis.glancesUpdateUpdate = entity(
  'update.glances_update',
  'Glances Update',
);
globalThis.advancedSshWebTerminalUpdateUpdate = entity(
  'update.advanced_ssh_web_terminal_update',
  'Advanced SSH & Web Terminal Update',
);
globalThis.flexgetUpdateUpdate = entity(
  'update.flexget_update',
  'Flexget Update',
);
globalThis.jupyterlabUpdateUpdate = entity(
  'update.jupyterlab_update',
  'JupyterLab Update',
);
globalThis.musicAssistantServerBetaUpdateUpdate = entity(
  'update.music_assistant_server_beta_update',
  'Music Assistant Server (beta) Update',
);
globalThis.lmsLyrionMusicServerFormerlyLogitechMediaServerUpdateUpdate = entity(
  'update.lms_lyrion_music_server_formerly_logitech_media_server_update',
  'LMS Lyrion Music Server(Formerly Logitech Media Server) Update',
);
globalThis.homeAssistantOperatingSystemUpdateUpdate = entity(
  'update.home_assistant_operating_system_update',
  'Home Assistant Operating System Update',
);
globalThis.livingRoomHeaderByTheTableFirmwareUpdate = entity(
  'update.living_room_header_by_the_table_firmware',
  'Living Room Header (By the table) Firmware',
);
globalThis.tvHeaterFirmwareUpdate = entity(
  'update.tv_heater_firmware',
  'TV Heater Firmware',
);
globalThis.boilerBoostFirmwareUpdateUpdate = entity(
  'update.boiler_boost_firmware_update',
  'Boiler (Boost) firmware update',
);
globalThis.bookshelfHeaterFirmwareUpdate = entity(
  'update.bookshelf_heater_firmware',
  'Bookshelf Heater Firmware',
);
globalThis.hallwayHeaterFirmwareUpdate = entity(
  'update.hallway_heater_firmware',
  'Hallway Heater Firmware',
);
globalThis.livingRoomSensorFirmwareUpdate = entity(
  'update.living_room_sensor_firmware',
  'Living Room Sensor Firmware',
);
globalThis.gymSensorFirmwareUpdate = entity(
  'update.gym_sensor_firmware',
  'Gym Sensor Firmware',
);
globalThis.bedroomSensorFirmwareUpdate = entity(
  'update.bedroom_sensor_firmware',
  'Bedroom Sensor Firmware',
);
globalThis.extendedOpenaiConversationUpdateUpdate = entity(
  'update.extended_openai_conversation_update',
  'extended_openai_conversation update',
);
globalThis.autoEntitiesUpdateUpdate = entity(
  'update.auto_entities_update',
  'auto-entities update',
);
globalThis.bannerCardUpdateUpdate = entity(
  'update.banner_card_update',
  'Banner Card update',
);
globalThis.noctisUpdateUpdate = entity('update.noctis_update', 'Noctis update');
globalThis.miniMediaPlayerUpdateUpdate = entity(
  'update.mini_media_player_update',
  'Mini Media Player update',
);
globalThis.pyscriptUpdateUpdate = entity(
  'update.pyscript_update',
  'pyscript update',
);
globalThis.nodeRedCompanionUpdateUpdate = entity(
  'update.node_red_companion_update',
  'Node-RED Companion update',
);
globalThis.sonosAlarmUpdateUpdate = entity(
  'update.sonos_alarm_update',
  'Sonos Alarm update',
);
globalThis.alexaMediaPlayerUpdateUpdate = entity(
  'update.alexa_media_player_update',
  'Alexa Media Player update',
);
globalThis.configTemplateCardUpdateUpdate = entity(
  'update.config_template_card_update',
  'Config Template Card update',
);
globalThis.spotcastUpdateUpdate = entity(
  'update.spotcast_update',
  'Spotcast update',
);
globalThis.layoutCardUpdateUpdate = entity(
  'update.layout_card_update',
  'layout-card update',
);
globalThis.octopusEnergyUpdateUpdate = entity(
  'update.octopus_energy_update',
  'Octopus Energy update',
);
globalThis.slateThemeUpdateUpdate = entity(
  'update.slate_theme_update',
  'Slate Theme update',
);
globalThis.spotifyLovelaceCardUpdateUpdate = entity(
  'update.spotify_lovelace_card_update',
  'Spotify Lovelace Card update',
);
globalThis.adaptiveLightingUpdateUpdate = entity(
  'update.adaptive_lighting_update',
  'Adaptive Lighting update',
);
globalThis.miniGraphCardUpdateUpdate = entity(
  'update.mini_graph_card_update',
  'mini-graph-card update',
);
globalThis.firemoteCardUpdateUpdate = entity(
  'update.firemote_card_update',
  'Firemote Card update',
);
globalThis.catppuccinThemeUpdateUpdate = entity(
  'update.catppuccin_theme_update',
  'Catppuccin Theme update',
);
globalThis.blankCardUpdateUpdate = entity(
  'update.blank_card_update',
  'Blank Card update',
);
globalThis.watchmanUpdateUpdate = entity(
  'update.watchman_update',
  'Watchman update',
);
globalThis.icloud3V3IdeviceTrackerUpdateUpdate = entity(
  'update.icloud3_v3_idevice_tracker_update',
  'iCloud3 v3 iDevice Tracker update',
);
globalThis.universalRemoteCardUpdateUpdate = entity(
  'update.universal_remote_card_update',
  'Universal Remote Card update',
);
globalThis.flowerCardUpdateUpdate = entity(
  'update.flower_card_update',
  'Flower Card update',
);
globalThis.lovelaceHomeFeedCardUpdateUpdate = entity(
  'update.lovelace_home_feed_card_update',
  'Lovelace Home Feed Card update',
);
globalThis.openaiTtsSpeechServiceUpdateUpdate = entity(
  'update.openai_tts_speech_service_update',
  'OpenAI TTS Speech Service update',
);
globalThis.nukiBtUpdateUpdate = entity(
  'update.nuki_bt_update',
  'Nuki BT update',
);
globalThis.galleryCardUpdateUpdate = entity(
  'update.gallery_card_update',
  'Gallery Card update',
);
globalThis.bubbleCardUpdateUpdate = entity(
  'update.bubble_card_update',
  'Bubble Card update',
);
globalThis.genericRemoteControlCardUpdateUpdate = entity(
  'update.generic_remote_control_card_update',
  'Generic Remote Control Card update',
);
globalThis.mushroomUpdateUpdate = entity(
  'update.mushroom_update',
  'Mushroom update',
);
globalThis.hacsUpdateUpdate = entity('update.hacs_update', 'HACS update');
globalThis.batteryStateCardEntityRowUpdateUpdate = entity(
  'update.battery_state_card_entity_row_update',
  'Battery State Card / Entity Row update',
);
globalThis.betterThermostatUiUpdateUpdate = entity(
  'update.better_thermostat_ui_update',
  'Better Thermostat UI update',
);
globalThis.homeAssistantPlantUpdateUpdate = entity(
  'update.home_assistant_plant_update',
  'Home Assistant Plant update',
);
globalThis.climateThermostatCardUpdateUpdate = entity(
  'update.climate_thermostat_card_update',
  'Climate thermostat card update',
);
globalThis.iosThemesDarkModeAndLightModeUpdateUpdate = entity(
  'update.ios_themes_dark_mode_and_light_mode_update',
  'iOS Themes - Dark Mode and Light Mode update',
);
globalThis.spotifyplusUpdateUpdate = entity(
  'update.spotifyplus_update',
  'SpotifyPlus update',
);
globalThis.stackInCardUpdateUpdate = entity(
  'update.stack_in_card_update',
  'Stack In Card update',
);
globalThis.maxiMediaPlayerUpdateUpdate = entity(
  'update.maxi_media_player_update',
  'Maxi Media Player update',
);
globalThis.icsCalendarIcalendarUpdateUpdate = entity(
  'update.ics_calendar_icalendar_update',
  'ICS Calendar (iCalendar) update',
);
globalThis.kioskModeUpdateUpdate = entity(
  'update.kiosk_mode_update',
  'Kiosk Mode update',
);
globalThis.wavesUpdateUpdate = entity('update.waves_update', 'Waves update');
globalThis.selectListCardUpdateUpdate = entity(
  'update.select_list_card_update',
  'Select list Card update',
);
globalThis.cardModUpdateUpdate = entity(
  'update.card_mod_update',
  'card-mod update',
);
globalThis.stateSwitchUpdateUpdate = entity(
  'update.state_switch_update',
  'state-switch update',
);
globalThis.streamAssistUpdateUpdate = entity(
  'update.stream_assist_update',
  'Stream Assist update',
);
globalThis.googleCloudSpeechToTextUpdateUpdate = entity(
  'update.google_cloud_speech_to_text_update',
  'Google Cloud Speech-To-Text update',
);
globalThis.icalSensorUpdateUpdate = entity(
  'update.ical_sensor_update',
  'iCal Sensor update',
);
globalThis.yourNameUpdateUpdate = entity(
  'update.your_name_update',
  'Your Name. update',
);
globalThis.sonosCardUpdateUpdate = entity(
  'update.sonos_card_update',
  'Sonos Card update',
);
globalThis.openplantbookUpdateUpdate = entity(
  'update.openplantbook_update',
  'OpenPlantbook update',
);
globalThis.overkizBySomfyCustomComponentUpdateUpdate = entity(
  'update.overkiz_by_somfy_custom_component_update',
  'Overkiz (by Somfy) - Custom component update',
);
globalThis.browserModUpdateUpdate = entity(
  'update.browser_mod_update',
  'browser_mod update',
);
globalThis.circadianLightingUpdateUpdate = entity(
  'update.circadian_lighting_update',
  'Circadian Lighting update',
);
globalThis.nukiLockUpdateUpdate = entity(
  'update.nuki_lock_update',
  'Nuki Lock update',
);
globalThis.schedulerCardUpdateUpdate = entity(
  'update.scheduler_card_update',
  'Scheduler Card update',
);
globalThis.candySimplyFiUpdateUpdate = entity(
  'update.candy_simply_fi_update',
  'Candy Simply-Fi update',
);
globalThis.schedulerComponentUpdateUpdate = entity(
  'update.scheduler_component_update',
  'Scheduler component update',
);
globalThis.playstationNetworkUpdateUpdate = entity(
  'update.playstation_network_update',
  'Playstation Network update',
);
globalThis.iphoneDeviceTrackerUpdateUpdate = entity(
  'update.iphone_device_tracker_update',
  'iPhone Device Tracker update',
);
globalThis.bathroomMotionSensorUpdate = entity(
  'update.bathroom_motion_sensor',
  'Bathroom Motion Sensor',
);
globalThis.hallwayMotionSensorUpdate = entity(
  'update.hallway_motion_sensor',
  'Hallway Motion Sensor',
);
