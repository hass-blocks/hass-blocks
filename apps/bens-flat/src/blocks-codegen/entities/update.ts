import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantSupervisorUpdateUpdate: IEntity<`update.home_assistant_supervisor_update`>;
  var homeAssistantCoreUpdateUpdate: IEntity<`update.home_assistant_core_update`>;
  var letSEncryptUpdateUpdate: IEntity<`update.let_s_encrypt_update`>;
  var mariadbUpdateUpdate: IEntity<`update.mariadb_update`>;
  var logViewerUpdateUpdate: IEntity<`update.log_viewer_update`>;
  var mosquittoBrokerUpdateUpdate: IEntity<`update.mosquitto_broker_update`>;
  var nodeRedUpdateUpdate: IEntity<`update.node_red_update`>;
  var studioCodeServerUpdateUpdate: IEntity<`update.studio_code_server_update`>;
  var terminalSshUpdateUpdate: IEntity<`update.terminal_ssh_update`>;
  var zWaveJsUpdateUpdate: IEntity<`update.z_wave_js_update`>;
  var zigbee2mqttUpdateUpdate: IEntity<`update.zigbee2mqtt_update`>;
  var ringMqttWithVideoStreamingUpdateUpdate: IEntity<`update.ring_mqtt_with_video_streaming_update`>;
  var appdaemonUpdateUpdate: IEntity<`update.appdaemon_update`>;
  var myHomeAutomationsUpdateUpdate: IEntity<`update.my_home_automations_update`>;
  var sharptoolsIoUpdateUpdate: IEntity<`update.sharptools_io_update`>;
  var plexMediaServerUpdateUpdate: IEntity<`update.plex_media_server_update`>;
  var adguardHomeUpdateUpdate: IEntity<`update.adguard_home_update`>;
  var nginxProxyManagerUpdateUpdate: IEntity<`update.nginx_proxy_manager_update`>;
  var nginxHomeAssistantSslProxyUpdateUpdate: IEntity<`update.nginx_home_assistant_ssl_proxy_update`>;
  var rhasspyAssistantUpdateUpdate: IEntity<`update.rhasspy_assistant_update`>;
  var influxdbUpdateUpdate: IEntity<`update.influxdb_update`>;
  var sambaShareUpdateUpdate: IEntity<`update.samba_share_update`>;
  var fileEditorUpdateUpdate: IEntity<`update.file_editor_update`>;
  var fireflyIiiUpdateUpdate: IEntity<`update.firefly_iii_update`>;
  var matterServerUpdateUpdate: IEntity<`update.matter_server_update`>;
  var fireflyIiiDataImporterUpdateUpdate: IEntity<`update.firefly_iii_data_importer_update`>;
  var mealieUpdateUpdate: IEntity<`update.mealie_update`>;
  var whisparrUpdateUpdate: IEntity<`update.whisparr_update`>;
  var radarrUpdateUpdate: IEntity<`update.radarr_update`>;
  var sonarrUpdateUpdate: IEntity<`update.sonarr_update`>;
  var prowlarrNasUpdateUpdate: IEntity<`update.prowlarr_nas_update`>;
  var flaresolverrUpdateUpdate: IEntity<`update.flaresolverr_update`>;
  var qbittorrentUpdateUpdate: IEntity<`update.qbittorrent_update`>;
  var bazarrNasUpdateUpdate: IEntity<`update.bazarr_nas_update`>;
  var jellyfinNasUpdateUpdate: IEntity<`update.jellyfin_nas_update`>;
  var assistMicrophoneUpdateUpdate: IEntity<`update.assist_microphone_update`>;
  var openwakewordUpdateUpdate: IEntity<`update.openwakeword_update`>;
  var whisperUpdateUpdate: IEntity<`update.whisper_update`>;
  var hassBlocksUpdateUpdate: IEntity<`update.hass_blocks_update`>;
  var hassBlocksFrontendUpdateUpdate: IEntity<`update.hass_blocks_frontend_update`>;
  var glancesUpdateUpdate: IEntity<`update.glances_update`>;
  var advancedSshWebTerminalUpdateUpdate: IEntity<`update.advanced_ssh_web_terminal_update`>;
  var flexgetUpdateUpdate: IEntity<`update.flexget_update`>;
  var jupyterlabUpdateUpdate: IEntity<`update.jupyterlab_update`>;
  var musicAssistantServerBetaUpdateUpdate: IEntity<`update.music_assistant_server_beta_update`>;
  var lmsLyrionMusicServerFormerlyLogitechMediaServerUpdateUpdate: IEntity<`update.lms_lyrion_music_server_formerly_logitech_media_server_update`>;
  var homeAssistantOperatingSystemUpdateUpdate: IEntity<`update.home_assistant_operating_system_update`>;
  var boilerBoostFirmwareUpdateUpdate: IEntity<`update.boiler_boost_firmware_update`>;
  var bannerCardUpdateUpdate: IEntity<`update.banner_card_update`>;
  var slateThemeUpdateUpdate: IEntity<`update.slate_theme_update`>;
  var streamAssistUpdateUpdate: IEntity<`update.stream_assist_update`>;
  var climateThermostatCardUpdateUpdate: IEntity<`update.climate_thermostat_card_update`>;
  var betterThermostatUiUpdateUpdate: IEntity<`update.better_thermostat_ui_update`>;
  var wavesUpdateUpdate: IEntity<`update.waves_update`>;
  var noctisUpdateUpdate: IEntity<`update.noctis_update`>;
  var icsCalendarIcalendarUpdateUpdate: IEntity<`update.ics_calendar_icalendar_update`>;
  var sonosCardUpdateUpdate: IEntity<`update.sonos_card_update`>;
  var autoEntitiesUpdateUpdate: IEntity<`update.auto_entities_update`>;
  var nukiBtUpdateUpdate: IEntity<`update.nuki_bt_update`>;
  var stateSwitchUpdateUpdate: IEntity<`update.state_switch_update`>;
  var stackInCardUpdateUpdate: IEntity<`update.stack_in_card_update`>;
  var firemoteCardUpdateUpdate: IEntity<`update.firemote_card_update`>;
  var icloud3V3IdeviceTrackerUpdateUpdate: IEntity<`update.icloud3_v3_idevice_tracker_update`>;
  var cardModUpdateUpdate: IEntity<`update.card_mod_update`>;
  var browserModUpdateUpdate: IEntity<`update.browser_mod_update`>;
  var alexaMediaPlayerUpdateUpdate: IEntity<`update.alexa_media_player_update`>;
  var circadianLightingUpdateUpdate: IEntity<`update.circadian_lighting_update`>;
  var mushroomUpdateUpdate: IEntity<`update.mushroom_update`>;
  var octopusEnergyUpdateUpdate: IEntity<`update.octopus_energy_update`>;
  var openaiTtsSpeechServiceUpdateUpdate: IEntity<`update.openai_tts_speech_service_update`>;
  var homeAssistantPlantUpdateUpdate: IEntity<`update.home_assistant_plant_update`>;
  var candySimplyFiUpdateUpdate: IEntity<`update.candy_simply_fi_update`>;
  var miniMediaPlayerUpdateUpdate: IEntity<`update.mini_media_player_update`>;
  var openplantbookUpdateUpdate: IEntity<`update.openplantbook_update`>;
  var spotifyplusUpdateUpdate: IEntity<`update.spotifyplus_update`>;
  var iphoneDeviceTrackerUpdateUpdate: IEntity<`update.iphone_device_tracker_update`>;
  var maxiMediaPlayerUpdateUpdate: IEntity<`update.maxi_media_player_update`>;
  var spotifyLovelaceCardUpdateUpdate: IEntity<`update.spotify_lovelace_card_update`>;
  var lovelaceHomeFeedCardUpdateUpdate: IEntity<`update.lovelace_home_feed_card_update`>;
  var nukiLockUpdateUpdate: IEntity<`update.nuki_lock_update`>;
  var galleryCardUpdateUpdate: IEntity<`update.gallery_card_update`>;
  var spotcastUpdateUpdate: IEntity<`update.spotcast_update`>;
  var googleCloudSpeechToTextUpdateUpdate: IEntity<`update.google_cloud_speech_to_text_update`>;
  var yourNameUpdateUpdate: IEntity<`update.your_name_update`>;
  var configTemplateCardUpdateUpdate: IEntity<`update.config_template_card_update`>;
  var kioskModeUpdateUpdate: IEntity<`update.kiosk_mode_update`>;
  var watchmanUpdateUpdate: IEntity<`update.watchman_update`>;
  var batteryStateCardEntityRowUpdateUpdate: IEntity<`update.battery_state_card_entity_row_update`>;
  var icalSensorUpdateUpdate: IEntity<`update.ical_sensor_update`>;
  var catppuccinThemeUpdateUpdate: IEntity<`update.catppuccin_theme_update`>;
  var selectListCardUpdateUpdate: IEntity<`update.select_list_card_update`>;
  var schedulerComponentUpdateUpdate: IEntity<`update.scheduler_component_update`>;
  var schedulerCardUpdateUpdate: IEntity<`update.scheduler_card_update`>;
  var blankCardUpdateUpdate: IEntity<`update.blank_card_update`>;
  var overkizBySomfyCustomComponentUpdateUpdate: IEntity<`update.overkiz_by_somfy_custom_component_update`>;
  var hacsUpdateUpdate: IEntity<`update.hacs_update`>;
  var adaptiveLightingUpdateUpdate: IEntity<`update.adaptive_lighting_update`>;
  var miniGraphCardUpdateUpdate: IEntity<`update.mini_graph_card_update`>;
  var iosThemesDarkModeAndLightModeUpdateUpdate: IEntity<`update.ios_themes_dark_mode_and_light_mode_update`>;
  var nodeRedCompanionUpdateUpdate: IEntity<`update.node_red_companion_update`>;
  var flowerCardUpdateUpdate: IEntity<`update.flower_card_update`>;
  var layoutCardUpdateUpdate: IEntity<`update.layout_card_update`>;
  var pyscriptUpdateUpdate: IEntity<`update.pyscript_update`>;
  var genericRemoteControlCardUpdateUpdate: IEntity<`update.generic_remote_control_card_update`>;
  var sonosAlarmUpdateUpdate: IEntity<`update.sonos_alarm_update`>;
  var playstationNetworkUpdateUpdate: IEntity<`update.playstation_network_update`>;
  var universalRemoteCardUpdateUpdate: IEntity<`update.universal_remote_card_update`>;
  var bubbleCardUpdateUpdate: IEntity<`update.bubble_card_update`>;
  var extendedOpenaiConversationUpdateUpdate: IEntity<`update.extended_openai_conversation_update`>;
  var bathroomMotionSensorUpdate: IEntity<`update.bathroom_motion_sensor`>;
  var hallwayMotionSensorUpdate: IEntity<`update.hallway_motion_sensor`>;
  var livingRoomSensorFirmwareUpdate: IEntity<`update.living_room_sensor_firmware`>;
  var gymSensorFirmwareUpdate: IEntity<`update.gym_sensor_firmware`>;
  var bedroomSensorFirmwareUpdate: IEntity<`update.bedroom_sensor_firmware`>;
  var livingRoomHeaderByTheTableFirmwareUpdate: IEntity<`update.living_room_header_by_the_table_firmware`>;
}

globalThis.homeAssistantSupervisorUpdateUpdate = entity(
  'update.home_assistant_supervisor_update',
);
globalThis.homeAssistantCoreUpdateUpdate = entity(
  'update.home_assistant_core_update',
);
globalThis.letSEncryptUpdateUpdate = entity('update.let_s_encrypt_update');
globalThis.mariadbUpdateUpdate = entity('update.mariadb_update');
globalThis.logViewerUpdateUpdate = entity('update.log_viewer_update');
globalThis.mosquittoBrokerUpdateUpdate = entity(
  'update.mosquitto_broker_update',
);
globalThis.nodeRedUpdateUpdate = entity('update.node_red_update');
globalThis.studioCodeServerUpdateUpdate = entity(
  'update.studio_code_server_update',
);
globalThis.terminalSshUpdateUpdate = entity('update.terminal_ssh_update');
globalThis.zWaveJsUpdateUpdate = entity('update.z_wave_js_update');
globalThis.zigbee2mqttUpdateUpdate = entity('update.zigbee2mqtt_update');
globalThis.ringMqttWithVideoStreamingUpdateUpdate = entity(
  'update.ring_mqtt_with_video_streaming_update',
);
globalThis.appdaemonUpdateUpdate = entity('update.appdaemon_update');
globalThis.myHomeAutomationsUpdateUpdate = entity(
  'update.my_home_automations_update',
);
globalThis.sharptoolsIoUpdateUpdate = entity('update.sharptools_io_update');
globalThis.plexMediaServerUpdateUpdate = entity(
  'update.plex_media_server_update',
);
globalThis.adguardHomeUpdateUpdate = entity('update.adguard_home_update');
globalThis.nginxProxyManagerUpdateUpdate = entity(
  'update.nginx_proxy_manager_update',
);
globalThis.nginxHomeAssistantSslProxyUpdateUpdate = entity(
  'update.nginx_home_assistant_ssl_proxy_update',
);
globalThis.rhasspyAssistantUpdateUpdate = entity(
  'update.rhasspy_assistant_update',
);
globalThis.influxdbUpdateUpdate = entity('update.influxdb_update');
globalThis.sambaShareUpdateUpdate = entity('update.samba_share_update');
globalThis.fileEditorUpdateUpdate = entity('update.file_editor_update');
globalThis.fireflyIiiUpdateUpdate = entity('update.firefly_iii_update');
globalThis.matterServerUpdateUpdate = entity('update.matter_server_update');
globalThis.fireflyIiiDataImporterUpdateUpdate = entity(
  'update.firefly_iii_data_importer_update',
);
globalThis.mealieUpdateUpdate = entity('update.mealie_update');
globalThis.whisparrUpdateUpdate = entity('update.whisparr_update');
globalThis.radarrUpdateUpdate = entity('update.radarr_update');
globalThis.sonarrUpdateUpdate = entity('update.sonarr_update');
globalThis.prowlarrNasUpdateUpdate = entity('update.prowlarr_nas_update');
globalThis.flaresolverrUpdateUpdate = entity('update.flaresolverr_update');
globalThis.qbittorrentUpdateUpdate = entity('update.qbittorrent_update');
globalThis.bazarrNasUpdateUpdate = entity('update.bazarr_nas_update');
globalThis.jellyfinNasUpdateUpdate = entity('update.jellyfin_nas_update');
globalThis.assistMicrophoneUpdateUpdate = entity(
  'update.assist_microphone_update',
);
globalThis.openwakewordUpdateUpdate = entity('update.openwakeword_update');
globalThis.whisperUpdateUpdate = entity('update.whisper_update');
globalThis.hassBlocksUpdateUpdate = entity('update.hass_blocks_update');
globalThis.hassBlocksFrontendUpdateUpdate = entity(
  'update.hass_blocks_frontend_update',
);
globalThis.glancesUpdateUpdate = entity('update.glances_update');
globalThis.advancedSshWebTerminalUpdateUpdate = entity(
  'update.advanced_ssh_web_terminal_update',
);
globalThis.flexgetUpdateUpdate = entity('update.flexget_update');
globalThis.jupyterlabUpdateUpdate = entity('update.jupyterlab_update');
globalThis.musicAssistantServerBetaUpdateUpdate = entity(
  'update.music_assistant_server_beta_update',
);
globalThis.lmsLyrionMusicServerFormerlyLogitechMediaServerUpdateUpdate = entity(
  'update.lms_lyrion_music_server_formerly_logitech_media_server_update',
);
globalThis.homeAssistantOperatingSystemUpdateUpdate = entity(
  'update.home_assistant_operating_system_update',
);
globalThis.boilerBoostFirmwareUpdateUpdate = entity(
  'update.boiler_boost_firmware_update',
);
globalThis.bannerCardUpdateUpdate = entity('update.banner_card_update');
globalThis.slateThemeUpdateUpdate = entity('update.slate_theme_update');
globalThis.streamAssistUpdateUpdate = entity('update.stream_assist_update');
globalThis.climateThermostatCardUpdateUpdate = entity(
  'update.climate_thermostat_card_update',
);
globalThis.betterThermostatUiUpdateUpdate = entity(
  'update.better_thermostat_ui_update',
);
globalThis.wavesUpdateUpdate = entity('update.waves_update');
globalThis.noctisUpdateUpdate = entity('update.noctis_update');
globalThis.icsCalendarIcalendarUpdateUpdate = entity(
  'update.ics_calendar_icalendar_update',
);
globalThis.sonosCardUpdateUpdate = entity('update.sonos_card_update');
globalThis.autoEntitiesUpdateUpdate = entity('update.auto_entities_update');
globalThis.nukiBtUpdateUpdate = entity('update.nuki_bt_update');
globalThis.stateSwitchUpdateUpdate = entity('update.state_switch_update');
globalThis.stackInCardUpdateUpdate = entity('update.stack_in_card_update');
globalThis.firemoteCardUpdateUpdate = entity('update.firemote_card_update');
globalThis.icloud3V3IdeviceTrackerUpdateUpdate = entity(
  'update.icloud3_v3_idevice_tracker_update',
);
globalThis.cardModUpdateUpdate = entity('update.card_mod_update');
globalThis.browserModUpdateUpdate = entity('update.browser_mod_update');
globalThis.alexaMediaPlayerUpdateUpdate = entity(
  'update.alexa_media_player_update',
);
globalThis.circadianLightingUpdateUpdate = entity(
  'update.circadian_lighting_update',
);
globalThis.mushroomUpdateUpdate = entity('update.mushroom_update');
globalThis.octopusEnergyUpdateUpdate = entity('update.octopus_energy_update');
globalThis.openaiTtsSpeechServiceUpdateUpdate = entity(
  'update.openai_tts_speech_service_update',
);
globalThis.homeAssistantPlantUpdateUpdate = entity(
  'update.home_assistant_plant_update',
);
globalThis.candySimplyFiUpdateUpdate = entity('update.candy_simply_fi_update');
globalThis.miniMediaPlayerUpdateUpdate = entity(
  'update.mini_media_player_update',
);
globalThis.openplantbookUpdateUpdate = entity('update.openplantbook_update');
globalThis.spotifyplusUpdateUpdate = entity('update.spotifyplus_update');
globalThis.iphoneDeviceTrackerUpdateUpdate = entity(
  'update.iphone_device_tracker_update',
);
globalThis.maxiMediaPlayerUpdateUpdate = entity(
  'update.maxi_media_player_update',
);
globalThis.spotifyLovelaceCardUpdateUpdate = entity(
  'update.spotify_lovelace_card_update',
);
globalThis.lovelaceHomeFeedCardUpdateUpdate = entity(
  'update.lovelace_home_feed_card_update',
);
globalThis.nukiLockUpdateUpdate = entity('update.nuki_lock_update');
globalThis.galleryCardUpdateUpdate = entity('update.gallery_card_update');
globalThis.spotcastUpdateUpdate = entity('update.spotcast_update');
globalThis.googleCloudSpeechToTextUpdateUpdate = entity(
  'update.google_cloud_speech_to_text_update',
);
globalThis.yourNameUpdateUpdate = entity('update.your_name_update');
globalThis.configTemplateCardUpdateUpdate = entity(
  'update.config_template_card_update',
);
globalThis.kioskModeUpdateUpdate = entity('update.kiosk_mode_update');
globalThis.watchmanUpdateUpdate = entity('update.watchman_update');
globalThis.batteryStateCardEntityRowUpdateUpdate = entity(
  'update.battery_state_card_entity_row_update',
);
globalThis.icalSensorUpdateUpdate = entity('update.ical_sensor_update');
globalThis.catppuccinThemeUpdateUpdate = entity(
  'update.catppuccin_theme_update',
);
globalThis.selectListCardUpdateUpdate = entity(
  'update.select_list_card_update',
);
globalThis.schedulerComponentUpdateUpdate = entity(
  'update.scheduler_component_update',
);
globalThis.schedulerCardUpdateUpdate = entity('update.scheduler_card_update');
globalThis.blankCardUpdateUpdate = entity('update.blank_card_update');
globalThis.overkizBySomfyCustomComponentUpdateUpdate = entity(
  'update.overkiz_by_somfy_custom_component_update',
);
globalThis.hacsUpdateUpdate = entity('update.hacs_update');
globalThis.adaptiveLightingUpdateUpdate = entity(
  'update.adaptive_lighting_update',
);
globalThis.miniGraphCardUpdateUpdate = entity('update.mini_graph_card_update');
globalThis.iosThemesDarkModeAndLightModeUpdateUpdate = entity(
  'update.ios_themes_dark_mode_and_light_mode_update',
);
globalThis.nodeRedCompanionUpdateUpdate = entity(
  'update.node_red_companion_update',
);
globalThis.flowerCardUpdateUpdate = entity('update.flower_card_update');
globalThis.layoutCardUpdateUpdate = entity('update.layout_card_update');
globalThis.pyscriptUpdateUpdate = entity('update.pyscript_update');
globalThis.genericRemoteControlCardUpdateUpdate = entity(
  'update.generic_remote_control_card_update',
);
globalThis.sonosAlarmUpdateUpdate = entity('update.sonos_alarm_update');
globalThis.playstationNetworkUpdateUpdate = entity(
  'update.playstation_network_update',
);
globalThis.universalRemoteCardUpdateUpdate = entity(
  'update.universal_remote_card_update',
);
globalThis.bubbleCardUpdateUpdate = entity('update.bubble_card_update');
globalThis.extendedOpenaiConversationUpdateUpdate = entity(
  'update.extended_openai_conversation_update',
);
globalThis.bathroomMotionSensorUpdate = entity('update.bathroom_motion_sensor');
globalThis.hallwayMotionSensorUpdate = entity('update.hallway_motion_sensor');
globalThis.livingRoomSensorFirmwareUpdate = entity(
  'update.living_room_sensor_firmware',
);
globalThis.gymSensorFirmwareUpdate = entity('update.gym_sensor_firmware');
globalThis.bedroomSensorFirmwareUpdate = entity(
  'update.bedroom_sensor_firmware',
);
globalThis.livingRoomHeaderByTheTableFirmwareUpdate = entity(
  'update.living_room_header_by_the_table_firmware',
);
