import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var homeAssistantSupervisorUpdateUpdate: IEntity<`update.${string}`>;
  var homeAssistantCoreUpdateUpdate: IEntity<`update.${string}`>;
  var letSEncryptUpdateUpdate: IEntity<`update.${string}`>;
  var mariadbUpdateUpdate: IEntity<`update.${string}`>;
  var logViewerUpdateUpdate: IEntity<`update.${string}`>;
  var mosquittoBrokerUpdateUpdate: IEntity<`update.${string}`>;
  var nodeRedUpdateUpdate: IEntity<`update.${string}`>;
  var studioCodeServerUpdateUpdate: IEntity<`update.${string}`>;
  var terminalSshUpdateUpdate: IEntity<`update.${string}`>;
  var zWaveJsUpdateUpdate: IEntity<`update.${string}`>;
  var zigbee2mqttUpdateUpdate: IEntity<`update.${string}`>;
  var ringMqttWithVideoStreamingUpdateUpdate: IEntity<`update.${string}`>;
  var appdaemonUpdateUpdate: IEntity<`update.${string}`>;
  var myHomeAutomationsUpdateUpdate: IEntity<`update.${string}`>;
  var sharptoolsIoUpdateUpdate: IEntity<`update.${string}`>;
  var plexMediaServerUpdateUpdate: IEntity<`update.${string}`>;
  var adguardHomeUpdateUpdate: IEntity<`update.${string}`>;
  var nginxProxyManagerUpdateUpdate: IEntity<`update.${string}`>;
  var nginxHomeAssistantSslProxyUpdateUpdate: IEntity<`update.${string}`>;
  var rhasspyAssistantUpdateUpdate: IEntity<`update.${string}`>;
  var influxdbUpdateUpdate: IEntity<`update.${string}`>;
  var sambaShareUpdateUpdate: IEntity<`update.${string}`>;
  var fileEditorUpdateUpdate: IEntity<`update.${string}`>;
  var fireflyIiiUpdateUpdate: IEntity<`update.${string}`>;
  var matterServerUpdateUpdate: IEntity<`update.${string}`>;
  var fireflyIiiDataImporterUpdateUpdate: IEntity<`update.${string}`>;
  var mealieUpdateUpdate: IEntity<`update.${string}`>;
  var whisparrUpdateUpdate: IEntity<`update.${string}`>;
  var radarrUpdateUpdate: IEntity<`update.${string}`>;
  var sonarrUpdateUpdate: IEntity<`update.${string}`>;
  var prowlarrNasUpdateUpdate: IEntity<`update.${string}`>;
  var flaresolverrUpdateUpdate: IEntity<`update.${string}`>;
  var qbittorrentUpdateUpdate: IEntity<`update.${string}`>;
  var bazarrNasUpdateUpdate: IEntity<`update.${string}`>;
  var jellyfinNasUpdateUpdate: IEntity<`update.${string}`>;
  var assistMicrophoneUpdateUpdate: IEntity<`update.${string}`>;
  var openwakewordUpdateUpdate: IEntity<`update.${string}`>;
  var whisperUpdateUpdate: IEntity<`update.${string}`>;
  var hassBlocksUpdateUpdate: IEntity<`update.${string}`>;
  var hassBlocksFrontendUpdateUpdate: IEntity<`update.${string}`>;
  var glancesUpdateUpdate: IEntity<`update.${string}`>;
  var advancedSshWebTerminalUpdateUpdate: IEntity<`update.${string}`>;
  var flexgetUpdateUpdate: IEntity<`update.${string}`>;
  var jupyterlabUpdateUpdate: IEntity<`update.${string}`>;
  var musicAssistantServerBetaUpdateUpdate: IEntity<`update.${string}`>;
  var lmsLyrionMusicServerFormerlyLogitechMediaServerUpdateUpdate: IEntity<`update.${string}`>;
  var homeAssistantOperatingSystemUpdateUpdate: IEntity<`update.${string}`>;
  var boilerBoostFirmwareUpdateUpdate: IEntity<`update.${string}`>;
  var bannerCardUpdateUpdate: IEntity<`update.${string}`>;
  var slateThemeUpdateUpdate: IEntity<`update.${string}`>;
  var streamAssistUpdateUpdate: IEntity<`update.${string}`>;
  var climateThermostatCardUpdateUpdate: IEntity<`update.${string}`>;
  var betterThermostatUiUpdateUpdate: IEntity<`update.${string}`>;
  var wavesUpdateUpdate: IEntity<`update.${string}`>;
  var noctisUpdateUpdate: IEntity<`update.${string}`>;
  var icsCalendarIcalendarUpdateUpdate: IEntity<`update.${string}`>;
  var sonosCardUpdateUpdate: IEntity<`update.${string}`>;
  var autoEntitiesUpdateUpdate: IEntity<`update.${string}`>;
  var nukiBtUpdateUpdate: IEntity<`update.${string}`>;
  var stateSwitchUpdateUpdate: IEntity<`update.${string}`>;
  var stackInCardUpdateUpdate: IEntity<`update.${string}`>;
  var firemoteCardUpdateUpdate: IEntity<`update.${string}`>;
  var icloud3V3IdeviceTrackerUpdateUpdate: IEntity<`update.${string}`>;
  var cardModUpdateUpdate: IEntity<`update.${string}`>;
  var browserModUpdateUpdate: IEntity<`update.${string}`>;
  var alexaMediaPlayerUpdateUpdate: IEntity<`update.${string}`>;
  var circadianLightingUpdateUpdate: IEntity<`update.${string}`>;
  var mushroomUpdateUpdate: IEntity<`update.${string}`>;
  var octopusEnergyUpdateUpdate: IEntity<`update.${string}`>;
  var openaiTtsSpeechServiceUpdateUpdate: IEntity<`update.${string}`>;
  var homeAssistantPlantUpdateUpdate: IEntity<`update.${string}`>;
  var candySimplyFiUpdateUpdate: IEntity<`update.${string}`>;
  var miniMediaPlayerUpdateUpdate: IEntity<`update.${string}`>;
  var openplantbookUpdateUpdate: IEntity<`update.${string}`>;
  var spotifyplusUpdateUpdate: IEntity<`update.${string}`>;
  var iphoneDeviceTrackerUpdateUpdate: IEntity<`update.${string}`>;
  var maxiMediaPlayerUpdateUpdate: IEntity<`update.${string}`>;
  var spotifyLovelaceCardUpdateUpdate: IEntity<`update.${string}`>;
  var lovelaceHomeFeedCardUpdateUpdate: IEntity<`update.${string}`>;
  var nukiLockUpdateUpdate: IEntity<`update.${string}`>;
  var galleryCardUpdateUpdate: IEntity<`update.${string}`>;
  var spotcastUpdateUpdate: IEntity<`update.${string}`>;
  var googleCloudSpeechToTextUpdateUpdate: IEntity<`update.${string}`>;
  var yourNameUpdateUpdate: IEntity<`update.${string}`>;
  var configTemplateCardUpdateUpdate: IEntity<`update.${string}`>;
  var kioskModeUpdateUpdate: IEntity<`update.${string}`>;
  var watchmanUpdateUpdate: IEntity<`update.${string}`>;
  var batteryStateCardEntityRowUpdateUpdate: IEntity<`update.${string}`>;
  var icalSensorUpdateUpdate: IEntity<`update.${string}`>;
  var catppuccinThemeUpdateUpdate: IEntity<`update.${string}`>;
  var selectListCardUpdateUpdate: IEntity<`update.${string}`>;
  var schedulerComponentUpdateUpdate: IEntity<`update.${string}`>;
  var schedulerCardUpdateUpdate: IEntity<`update.${string}`>;
  var blankCardUpdateUpdate: IEntity<`update.${string}`>;
  var overkizBySomfyCustomComponentUpdateUpdate: IEntity<`update.${string}`>;
  var hacsUpdateUpdate: IEntity<`update.${string}`>;
  var adaptiveLightingUpdateUpdate: IEntity<`update.${string}`>;
  var miniGraphCardUpdateUpdate: IEntity<`update.${string}`>;
  var iosThemesDarkModeAndLightModeUpdateUpdate: IEntity<`update.${string}`>;
  var nodeRedCompanionUpdateUpdate: IEntity<`update.${string}`>;
  var flowerCardUpdateUpdate: IEntity<`update.${string}`>;
  var layoutCardUpdateUpdate: IEntity<`update.${string}`>;
  var pyscriptUpdateUpdate: IEntity<`update.${string}`>;
  var genericRemoteControlCardUpdateUpdate: IEntity<`update.${string}`>;
  var sonosAlarmUpdateUpdate: IEntity<`update.${string}`>;
  var playstationNetworkUpdateUpdate: IEntity<`update.${string}`>;
  var universalRemoteCardUpdateUpdate: IEntity<`update.${string}`>;
  var bubbleCardUpdateUpdate: IEntity<`update.${string}`>;
  var extendedOpenaiConversationUpdateUpdate: IEntity<`update.${string}`>;
  var bathroomMotionSensorUpdate: IEntity<`update.${string}`>;
  var hallwayMotionSensorUpdate: IEntity<`update.${string}`>;
  var livingRoomSensorFirmwareUpdate: IEntity<`update.${string}`>;
  var gymSensorFirmwareUpdate: IEntity<`update.${string}`>;
  var bedroomSensorFirmwareUpdate: IEntity<`update.${string}`>;
  var livingRoomHeaderByTheTableFirmwareUpdate: IEntity<`update.${string}`>;
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
