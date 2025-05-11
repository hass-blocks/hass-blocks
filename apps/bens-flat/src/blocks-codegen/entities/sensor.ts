import { entity } from '@hass-blocks/core';

export const ringMqttWithVideoStreamingCpuPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_cpu_percent',
);
export const ringMqttWithVideoStreamingMemoryPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_memory_percent',
);
export const backupBackupManagerStateSensor = entity(
  'sensor.backup_backup_manager_state',
);
export const backupNextScheduledAutomaticBackupSensor = entity(
  'sensor.backup_next_scheduled_automatic_backup',
);
export const backupLastSuccessfulAutomaticBackupSensor = entity(
  'sensor.backup_last_successful_automatic_backup',
);
export const sunNextDawnSensor = entity('sensor.sun_next_dawn');
export const sunNextDuskSensor = entity('sensor.sun_next_dusk');
export const sunNextMidnightSensor = entity('sensor.sun_next_midnight');
export const sunNextNoonSensor = entity('sensor.sun_next_noon');
export const sunNextRisingSensor = entity('sensor.sun_next_rising');
export const sunNextSettingSensor = entity('sensor.sun_next_setting');
export const dateTimeIsoSensor = entity('sensor.date_time_iso');
export const tahomaSwitchScHomekitSetupCodeSensor = entity(
  'sensor.tahoma_switch_sc_homekit_setup_code',
);
export const systemMonitorDiskFreeSslSensor = entity(
  'sensor.system_monitor_disk_free_ssl',
);
export const systemMonitorDiskFreeConfigSensor = entity(
  'sensor.system_monitor_disk_free_config',
);
export const systemMonitorDiskFreeShareSensor = entity(
  'sensor.system_monitor_disk_free_share',
);
export const systemMonitorDiskFreeSensor = entity(
  'sensor.system_monitor_disk_free',
);
export const systemMonitorDiskFreeMediaSensor = entity(
  'sensor.system_monitor_disk_free_media',
);
export const systemMonitorDiskFreeRunAudioSensor = entity(
  'sensor.system_monitor_disk_free_run_audio',
);
export const systemMonitorDiskUseSensor = entity(
  'sensor.system_monitor_disk_use',
);
export const systemMonitorDiskUsageSensor = entity(
  'sensor.system_monitor_disk_usage',
);
export const systemMonitorIpv4AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv4_address_enp1s0',
);
export const systemMonitorIpv6AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv6_address_enp1s0',
);
export const systemMonitorLastBootSensor = entity(
  'sensor.system_monitor_last_boot',
);
export const systemMonitorLoad_15mSensor = entity(
  'sensor.system_monitor_load_15m',
);
export const systemMonitorLoad_1mSensor = entity(
  'sensor.system_monitor_load_1m',
);
export const systemMonitorLoad_5mSensor = entity(
  'sensor.system_monitor_load_5m',
);
export const systemMonitorMemoryFreeSensor = entity(
  'sensor.system_monitor_memory_free',
);
export const systemMonitorMemoryUseSensor = entity(
  'sensor.system_monitor_memory_use',
);
export const systemMonitorMemoryUsageSensor = entity(
  'sensor.system_monitor_memory_usage',
);
export const systemMonitorNetworkInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_in_enp1s0',
);
export const systemMonitorNetworkOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_out_enp1s0',
);
export const systemMonitorPacketsInEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_in_enp1s0',
);
export const systemMonitorPacketsOutEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_out_enp1s0',
);
export const systemMonitorNetworkThroughputInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_in_enp1s0',
);
export const systemMonitorNetworkThroughputOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_out_enp1s0',
);
export const systemMonitorProcessorUseSensor = entity(
  'sensor.system_monitor_processor_use',
);
export const systemMonitorProcessorTemperatureSensor = entity(
  'sensor.system_monitor_processor_temperature',
);
export const systemMonitorSwapFreeSensor = entity(
  'sensor.system_monitor_swap_free',
);
export const systemMonitorSwapUseSensor = entity(
  'sensor.system_monitor_swap_use',
);
export const systemMonitorSwapUsageSensor = entity(
  'sensor.system_monitor_swap_usage',
);
export const boilerBoostTemperatureSensor = entity(
  'sensor.boiler_boost_temperature',
);
export const livingRoomHeaterDiningTablePowerSensor = entity(
  'sensor.living_room_heater_dining_table_power',
);
export const livingRoomHeaterDiningTableEnergySensor = entity(
  'sensor.living_room_heater_dining_table_energy',
);
export const shellyemA4e57cba73f5Channel_1PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power',
);
export const shellyemA4e57cba73f5Channel_1EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy',
);
export const shellyemA4e57cba73f5Channel_1EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_returned',
);
export const shellyemA4e57cba73f5Channel_1VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_voltage',
);
export const shellyemA4e57cba73f5Channel_1PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power_factor',
);
export const shellyemA4e57cba73f5Channel_2PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power',
);
export const shellyemA4e57cba73f5Channel_2EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy',
);
export const shellyemA4e57cba73f5Channel_2EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy_returned',
);
export const shellyemA4e57cba73f5Channel_2VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_voltage',
);
export const shellyemA4e57cba73f5Channel_2PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power_factor',
);
export const qbittorrentStatusSensor = entity('sensor.qbittorrent_status');
export const qbittorrentConnectionStatusSensor = entity(
  'sensor.qbittorrent_connection_status',
);
export const qbittorrentDownloadSpeedSensor = entity(
  'sensor.qbittorrent_download_speed',
);
export const qbittorrentUploadSpeedSensor = entity(
  'sensor.qbittorrent_upload_speed',
);
export const qbittorrentAllTimeDownloadSensor = entity(
  'sensor.qbittorrent_all_time_download',
);
export const qbittorrentAllTimeUploadSensor = entity(
  'sensor.qbittorrent_all_time_upload',
);
export const qbittorrentAllTorrentsSensor = entity(
  'sensor.qbittorrent_all_torrents',
);
export const qbittorrentActiveTorrentsSensor = entity(
  'sensor.qbittorrent_active_torrents',
);
export const qbittorrentInactiveTorrentsSensor = entity(
  'sensor.qbittorrent_inactive_torrents',
);
export const qbittorrentPausedTorrentsSensor = entity(
  'sensor.qbittorrent_paused_torrents',
);
export const zStickGen5UsbControllerStatusSensor = entity(
  'sensor.z_stick_gen5_usb_controller_status',
);
export const livingRoomHeatingSwitchNodeStatusSensor = entity(
  'sensor.living_room_heating_switch_node_status',
);
export const livingRoomHeatingSwitchLastSeenSensor = entity(
  'sensor.living_room_heating_switch_last_seen',
);
export const bedroomHeatingSwitchNodeStatusSensor = entity(
  'sensor.bedroom_heating_switch_node_status',
);
export const bedroomHeatingSwitchLastSeenSensor = entity(
  'sensor.bedroom_heating_switch_last_seen',
);
export const gymHeatingSwitchNodeStatusSensor = entity(
  'sensor.gym_heating_switch_node_status',
);
export const gymHeatingSwitchLastSeenSensor = entity(
  'sensor.gym_heating_switch_last_seen',
);
export const livingRoomSensorNodeStatusSensor = entity(
  'sensor.living_room_sensor_node_status',
);
export const livingRoomSensorLastSeenSensor = entity(
  'sensor.living_room_sensor_last_seen',
);
export const gymSensorNodeStatusSensor = entity(
  'sensor.gym_sensor_node_status',
);
export const gymSensorLastSeenSensor = entity('sensor.gym_sensor_last_seen');
export const bedroomSensorNodeStatusSensor = entity(
  'sensor.bedroom_sensor_node_status',
);
export const bedroomSensorLastSeenSensor = entity(
  'sensor.bedroom_sensor_last_seen',
);
export const livingRoomSensorAirTemperatureSensor = entity(
  'sensor.living_room_sensor_air_temperature',
);
export const livingRoomSensorIlluminanceSensor = entity(
  'sensor.living_room_sensor_illuminance',
);
export const livingRoomSensorAlarmTypeSensor = entity(
  'sensor.living_room_sensor_alarm_type',
);
export const livingRoomSensorAlarmLevelSensor = entity(
  'sensor.living_room_sensor_alarm_level',
);
export const livingRoomSensorBatteryLevelSensor = entity(
  'sensor.living_room_sensor_battery_level',
);
export const gymSensorAirTemperatureSensor = entity(
  'sensor.gym_sensor_air_temperature',
);
export const gymSensorIlluminanceSensor = entity(
  'sensor.gym_sensor_illuminance',
);
export const gymSensorAlarmTypeSensor = entity('sensor.gym_sensor_alarm_type');
export const gymSensorAlarmLevelSensor = entity(
  'sensor.gym_sensor_alarm_level',
);
export const gymSensorBatteryLevelSensor = entity(
  'sensor.gym_sensor_battery_level',
);
export const bedroomSensorAirTemperatureSensor = entity(
  'sensor.bedroom_sensor_air_temperature',
);
export const bedroomSensorIlluminanceSensor = entity(
  'sensor.bedroom_sensor_illuminance',
);
export const bedroomSensorAlarmTypeSensor = entity(
  'sensor.bedroom_sensor_alarm_type',
);
export const bedroomSensorAlarmLevelSensor = entity(
  'sensor.bedroom_sensor_alarm_level',
);
export const bedroomSensorBatteryLevelSensor = entity(
  'sensor.bedroom_sensor_battery_level',
);
export const shellyemA4e57cba73f5Channel_1EnergyCostSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_cost',
);
export const octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor =
  entity('sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_electricity');
export const octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor = entity(
  'sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_gas',
);
export const octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_rate',
  );
export const octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_rate',
  );
export const octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_next_rate',
  );
export const octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_standing_charge',
  );
export const octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_consumption',
  );
export const octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_cost',
  );
export const mumsPhoneBatteryLevelSensor = entity(
  'sensor.mums_phone_battery_level',
);
export const mumsPhoneBatteryStateSensor = entity(
  'sensor.mums_phone_battery_state',
);
export const mumsPhoneChargerTypeSensor = entity(
  'sensor.mums_phone_charger_type',
);
export const bensImacProStorageSensor = entity('sensor.bens_imac_pro_storage');
export const bensImacProSsidSensor = entity('sensor.bens_imac_pro_ssid');
export const bensImacProActiveAudioInputSensor = entity(
  'sensor.bens_imac_pro_active_audio_input',
);
export const bensImacProActiveAudioOutputSensor = entity(
  'sensor.bens_imac_pro_active_audio_output',
);
export const bensImacProBssidSensor = entity('sensor.bens_imac_pro_bssid');
export const bensImacProActiveCameraSensor = entity(
  'sensor.bens_imac_pro_active_camera',
);
export const bensImacProConnectionTypeSensor = entity(
  'sensor.bens_imac_pro_connection_type',
);
export const bensImacProDisplaysSensor = entity(
  'sensor.bens_imac_pro_displays',
);
export const bensImacProPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_pro_primary_display_name',
);
export const bensImacProPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_pro_primary_display_id',
);
export const bensImacProFrontmostAppSensor = entity(
  'sensor.bens_imac_pro_frontmost_app',
);
export const bensImacProLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_pro_last_update_trigger',
);
export const bensImacProAppVersionSensor = entity(
  'sensor.bens_imac_pro_app_version',
);
export const bensImacProLocationPermissionSensor = entity(
  'sensor.bens_imac_pro_location_permission',
);
export const bensImacProGeocodedLocationSensor = entity(
  'sensor.bens_imac_pro_geocoded_location',
);
export const bensIphoneActivitySensor = entity('sensor.bens_iphone_activity');
export const bensIphoneAverageActivePaceSensor = entity(
  'sensor.bens_iphone_average_active_pace',
);
export const bensIphoneFloorsAscendedSensor = entity(
  'sensor.bens_iphone_floors_ascended',
);
export const bensIphoneFloorsDescendedSensor = entity(
  'sensor.bens_iphone_floors_descended',
);
export const bensIphoneBatteryLevelSensor = entity(
  'sensor.bens_iphone_battery_level',
);
export const bensIphoneBatteryStateSensor = entity(
  'sensor.bens_iphone_battery_state',
);
export const bensIphoneStorageSensor = entity('sensor.bens_iphone_storage');
export const bensIphoneSsidSensor = entity('sensor.bens_iphone_ssid');
export const bensIphoneBssidSensor = entity('sensor.bens_iphone_bssid');
export const bensIphoneConnectionTypeSensor = entity(
  'sensor.bens_iphone_connection_type',
);
export const bensIphoneSim_1Sensor = entity('sensor.bens_iphone_sim_1');
export const bensIphoneGeocodedLocationSensor = entity(
  'sensor.bens_iphone_geocoded_location',
);
export const bensIphoneSim_2Sensor = entity('sensor.bens_iphone_sim_2');
export const bensIphoneDistanceSensor = entity('sensor.bens_iphone_distance');
export const bensIphoneStepsSensor = entity('sensor.bens_iphone_steps');
export const bensIphoneLastUpdateTriggerSensor = entity(
  'sensor.bens_iphone_last_update_trigger',
);
export const bensIphoneWatchBatteryLevelSensor = entity(
  'sensor.bens_iphone_watch_battery_level',
);
export const bensIphoneWatchBatteryStateSensor = entity(
  'sensor.bens_iphone_watch_battery_state',
);
export const bensIphoneAppVersionSensor = entity(
  'sensor.bens_iphone_app_version',
);
export const bensIphoneLocationPermissionSensor = entity(
  'sensor.bens_iphone_location_permission',
);
export const bensIphoneAudioOutputSensor = entity(
  'sensor.bens_iphone_audio_output',
);
export const bensImacStorageSensor = entity('sensor.bens_imac_storage');
export const bensImacBssidSensor = entity('sensor.bens_imac_bssid');
export const bensImacConnectionTypeSensor = entity(
  'sensor.bens_imac_connection_type',
);
export const bensImacSsidSensor = entity('sensor.bens_imac_ssid');
export const bensImacActiveCameraSensor = entity(
  'sensor.bens_imac_active_camera',
);
export const bensImacGeocodedLocationSensor = entity(
  'sensor.bens_imac_geocoded_location',
);
export const bensImacActiveAudioInputSensor = entity(
  'sensor.bens_imac_active_audio_input',
);
export const bensImacActiveAudioOutputSensor = entity(
  'sensor.bens_imac_active_audio_output',
);
export const bensImacDisplaysSensor = entity('sensor.bens_imac_displays');
export const bensImacPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_primary_display_name',
);
export const bensImacPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_primary_display_id',
);
export const bensImacFrontmostAppSensor = entity(
  'sensor.bens_imac_frontmost_app',
);
export const bensImacLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_last_update_trigger',
);
export const bensImacAppVersionSensor = entity('sensor.bens_imac_app_version');
export const bensImacLocationPermissionSensor = entity(
  'sensor.bens_imac_location_permission',
);
export const ryansIphoneSsidSensor = entity('sensor.ryans_iphone_ssid');
export const ryansIphoneBatteryStateSensor = entity(
  'sensor.ryans_iphone_battery_state',
);
export const ryansIphoneStorageSensor = entity('sensor.ryans_iphone_storage');
export const ryansIphoneBatteryLevelSensor = entity(
  'sensor.ryans_iphone_battery_level',
);
export const ryansIphoneBssidSensor = entity('sensor.ryans_iphone_bssid');
export const ryansIphoneConnectionTypeSensor = entity(
  'sensor.ryans_iphone_connection_type',
);
export const ryansIphoneLastUpdateTriggerSensor = entity(
  'sensor.ryans_iphone_last_update_trigger',
);
export const ryansIphoneGeocodedLocationSensor = entity(
  'sensor.ryans_iphone_geocoded_location',
);
export const ryansIphoneLocationPermissionSensor = entity(
  'sensor.ryans_iphone_location_permission',
);
export const ryansIphoneAppVersionSensor = entity(
  'sensor.ryans_iphone_app_version',
);
export const ryansIphoneSim_1Sensor = entity('sensor.ryans_iphone_sim_1');
export const ryansIphoneSim_2Sensor = entity('sensor.ryans_iphone_sim_2');
export const ryansIphoneAudioOutputSensor = entity(
  'sensor.ryans_iphone_audio_output',
);
export const ryansIphoneActivitySensor = entity('sensor.ryans_iphone_activity');
export const ryansIphoneDistanceSensor = entity('sensor.ryans_iphone_distance');
export const ryansIphoneFloorsDescendedSensor = entity(
  'sensor.ryans_iphone_floors_descended',
);
export const ryansIphoneFloorsAscendedSensor = entity(
  'sensor.ryans_iphone_floors_ascended',
);
export const ryansIphoneStepsSensor = entity('sensor.ryans_iphone_steps');
export const ryansIphoneAverageActivePaceSensor = entity(
  'sensor.ryans_iphone_average_active_pace',
);
export const ryansIphoneWatchBatteryLevelSensor = entity(
  'sensor.ryans_iphone_watch_battery_level',
);
export const ryansIphoneWatchBatteryStateSensor = entity(
  'sensor.ryans_iphone_watch_battery_state',
);
export const pixel_6ProBatteryLevelSensor = entity(
  'sensor.pixel_6_pro_battery_level',
);
export const pixel_6ProBatteryStateSensor = entity(
  'sensor.pixel_6_pro_battery_state',
);
export const pixel_6ProChargerTypeSensor = entity(
  'sensor.pixel_6_pro_charger_type',
);
export const tomSPixel_7BatteryLevelSensor = entity(
  'sensor.tom_s_pixel_7_battery_level',
);
export const tomSPixel_7BatteryStateSensor = entity(
  'sensor.tom_s_pixel_7_battery_state',
);
export const tomSPixel_7ChargerTypeSensor = entity(
  'sensor.tom_s_pixel_7_charger_type',
);
export const availableUpdatesCountSensor = entity(
  'sensor.available_updates_count',
);
export const aliceSoilMistureFixedSensor = entity(
  'sensor.alice_soil_misture_fixed',
);
export const lowBatteryCountSensor = entity('sensor.low_battery_count');
export const availableUpdatesSensor = entity('sensor.available_updates');
export const imacScreenOffSensor = entity('sensor.imac_screen_off');
export const todaysEventsSensor = entity('sensor.todays_events');
export const weatherForecastSensor = entity('sensor.weather_forecast');
export const currentTvSourceSensor = entity('sensor.current_tv_source');
export const livingRoomTemperatureSensor = entity(
  'sensor.living_room_temperature',
);
export const livingRoomTargetTemperatureSensor = entity(
  'sensor.living_room_target_temperature',
);
export const boilerTargetTemperatureSensor = entity(
  'sensor.boiler_target_temperature',
);
export const livingRoomHeatingModeSensor = entity(
  'sensor.living_room_heating_mode',
);
export const bedroomTemperatureSensor = entity('sensor.bedroom_temperature');
export const bedroomTargetTemperatureSensor = entity(
  'sensor.bedroom_target_temperature',
);
export const bedroomHeatingModeSensor = entity('sensor.bedroom_heating_mode');
export const gymTemperatureSensor = entity('sensor.gym_temperature');
export const gymTargetTemperatureSensor = entity(
  'sensor.gym_target_temperature',
);
export const gymHeatingModeSensor = entity('sensor.gym_heating_mode');
export const lastTimeLivingRoomMotionSensorWasTriggeredSensor = entity(
  'sensor.last_time_living_room_motion_sensor_was_triggered',
);
export const electricMeterSensor = entity('sensor.electric_meter');
export const adguardHomeDnsQueriesSensor = entity(
  'sensor.adguard_home_dns_queries',
);
export const adguardHomeDnsQueriesBlockedSensor = entity(
  'sensor.adguard_home_dns_queries_blocked',
);
export const adguardHomeDnsQueriesBlockedRatioSensor = entity(
  'sensor.adguard_home_dns_queries_blocked_ratio',
);
export const adguardHomeParentalControlBlockedSensor = entity(
  'sensor.adguard_home_parental_control_blocked',
);
export const adguardHomeSafeBrowsingBlockedSensor = entity(
  'sensor.adguard_home_safe_browsing_blocked',
);
export const adguardHomeSafeSearchesEnforcedSensor = entity(
  'sensor.adguard_home_safe_searches_enforced',
);
export const adguardHomeAverageProcessingSpeedSensor = entity(
  'sensor.adguard_home_average_processing_speed',
);
export const homeNearestDeviceSensor = entity('sensor.home_nearest_device');
export const homeNearestDistanceSensor = entity('sensor.home_nearest_distance');
export const homeNearestDirectionOfTravelSensor = entity(
  'sensor.home_nearest_direction_of_travel',
);
export const homeMeDistanceSensor = entity('sensor.home_me_distance');
export const homeMeDirectionOfTravelSensor = entity(
  'sensor.home_me_direction_of_travel',
);
export const home_2NearestDeviceSensor = entity('sensor.home_2_nearest_device');
export const home_2NearestDistanceSensor = entity(
  'sensor.home_2_nearest_distance',
);
export const home_2NearestDirectionOfTravelSensor = entity(
  'sensor.home_2_nearest_direction_of_travel',
);
export const home_2MeDistanceSensor = entity('sensor.home_2_me_distance');
export const home_2MeDirectionOfTravelSensor = entity(
  'sensor.home_2_me_direction_of_travel',
);
export const zteRouterDataReceivedSensor = entity(
  'sensor.zte_router_data_received',
);
export const zteRouterDataSentSensor = entity('sensor.zte_router_data_sent');
export const zteRouterExternalIpSensor = entity(
  'sensor.zte_router_external_ip',
);
export const zteRouterUptimeSensor = entity('sensor.zte_router_uptime');
export const zteRouterDownloadSpeedSensor = entity(
  'sensor.zte_router_download_speed',
);
export const zteRouterUploadSpeedSensor = entity(
  'sensor.zte_router_upload_speed',
);
export const watchmanLastUpdatedSensor = entity('sensor.watchman_last_updated');
export const watchmanMissingEntitiesSensor = entity(
  'sensor.watchman_missing_entities',
);
export const watchmanMissingActionsSensor = entity(
  'sensor.watchman_missing_actions',
);
export const tumbleDryerSmartPlugSignalLevelSensor = entity(
  'sensor.tumble_dryer_smart_plug_signal_level',
);
export const tumbleDryerSmartPlugAutoOffAtSensor = entity(
  'sensor.tumble_dryer_smart_plug_auto_off_at',
);
export const tumbleDryerSmartPlugCurrentConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_current_consumption',
);
export const tumbleDryerSmartPlugTodaySConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_today_s_consumption',
);
export const tumbleDryerSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_this_month_s_consumption',
);
export const tumbleDryerSmartPlugVoltageSensor = entity(
  'sensor.tumble_dryer_smart_plug_voltage',
);
export const tumbleDryerSmartPlugCurrentSensor = entity(
  'sensor.tumble_dryer_smart_plug_current',
);
export const homeAssistantServerSignalLevelSensor = entity(
  'sensor.home_assistant_server_signal_level',
);
export const homeAssistantServerAutoOffAtSensor = entity(
  'sensor.home_assistant_server_auto_off_at',
);
export const homeAssistantServerCurrentConsumptionSensor = entity(
  'sensor.home_assistant_server_current_consumption',
);
export const homeAssistantServerTodaySConsumptionSensor = entity(
  'sensor.home_assistant_server_today_s_consumption',
);
export const homeAssistantServerThisMonthSConsumptionSensor = entity(
  'sensor.home_assistant_server_this_month_s_consumption',
);
export const homeAssistantServerVoltageSensor = entity(
  'sensor.home_assistant_server_voltage',
);
export const homeAssistantServerCurrentSensor = entity(
  'sensor.home_assistant_server_current',
);
export const imacSmartPlugSignalLevel_2Sensor = entity(
  'sensor.imac_smart_plug_signal_level_2',
);
export const imacSmartPlugAutoOffAt_2Sensor = entity(
  'sensor.imac_smart_plug_auto_off_at_2',
);
export const imacSmartPlugCurrentConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_current_consumption_2',
);
export const imacSmartPlugTodaySConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_today_s_consumption_2',
);
export const imacSmartPlugThisMonthSConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_this_month_s_consumption_2',
);
export const imacSmartPlugVoltageSensor = entity(
  'sensor.imac_smart_plug_voltage',
);
export const imacSmartPlugCurrentSensor = entity(
  'sensor.imac_smart_plug_current',
);
export const livingRoomHeaterSmartPlugSignalLevelSensor = entity(
  'sensor.living_room_heater_smart_plug_signal_level',
);
export const livingRoomHeaterSmartPlugAutoOffAtSensor = entity(
  'sensor.living_room_heater_smart_plug_auto_off_at',
);
export const livingRoomHeaterSmartPlugCurrentConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_current_consumption',
);
export const livingRoomHeaterSmartPlugTodaySConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_today_s_consumption',
);
export const livingRoomHeaterSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_this_month_s_consumption',
);
export const livingRoomHeaterSmartPlugVoltageSensor = entity(
  'sensor.living_room_heater_smart_plug_voltage',
);
export const livingRoomHeaterSmartPlugCurrentSensor = entity(
  'sensor.living_room_heater_smart_plug_current',
);
export const frontDoorBattery_2Sensor = entity('sensor.front_door_battery_2');
export const frontDoorLastActivitySensor = entity(
  'sensor.front_door_last_activity',
);
export const wearingClapper2TrophyLevelSensor = entity(
  'sensor.wearing_clapper2_trophy_level',
);
export const wearingClapper2StatusSensor = entity(
  'sensor.wearing_clapper2_status',
);
export const playstationPlaystationPlusSensor = entity(
  'sensor.playstation_playstation_plus',
);
export const playstationAboutMeSensor = entity('sensor.playstation_about_me');
export const aliceIlluminanceSensor = entity('sensor.alice_illuminance');
export const aliceConductivitySensor = entity('sensor.alice_conductivity');
export const aliceSoilMoistureSensor = entity('sensor.alice_soil_moisture');
export const aliceTemperatureSensor = entity('sensor.alice_temperature');
export const aliceAirHumiditySensor = entity('sensor.alice_air_humidity');
export const alicePpfdMolSensor = entity('sensor.alice_ppfd_mol');
export const aliceTotalPpfdMolIntegralSensor = entity(
  'sensor.alice_total_ppfd_mol_integral',
);
export const aliceDliSensor = entity('sensor.alice_dli');
export const frontDoorBatterySensor = entity('sensor.front_door_battery');
export const frontDoorFirmwareVersionSensor = entity(
  'sensor.front_door_firmware_version',
);
export const bathroomMotionSensorTemperatureSensor = entity(
  'sensor.bathroom_motion_sensor_temperature',
);
export const bathroomMotionSensorBatterySensor = entity(
  'sensor.bathroom_motion_sensor_battery',
);
export const hallwayMotionSensorTemperatureSensor = entity(
  'sensor.hallway_motion_sensor_temperature',
);
export const hallwayMotionSensorBatterySensor = entity(
  'sensor.hallway_motion_sensor_battery',
);
export const zigbee2mqttBridgeVersionSensor = entity(
  'sensor.zigbee2mqtt_bridge_version',
);
export const sonosArcUltraAudioInputFormatSensor = entity(
  'sensor.sonos_arc_ultra_audio_input_format',
);
export const gw1100aIndoorHumiditySensor = entity(
  'sensor.gw1100a_indoor_humidity',
);
export const gw1100aSoilMoisture_1Sensor = entity(
  'sensor.gw1100a_soil_moisture_1',
);
export const aliceMoistureSensor = entity('sensor.alice_moisture');
export const gw1100aSoilMoisture_3Sensor = entity(
  'sensor.gw1100a_soil_moisture_3',
);
export const gw1100aSoilMoisture_4Sensor = entity(
  'sensor.gw1100a_soil_moisture_4',
);
export const gw1100aSoilBattery_1Sensor = entity(
  'sensor.gw1100a_soil_battery_1',
);
export const gw1100aSoilBattery_2Sensor = entity(
  'sensor.gw1100a_soil_battery_2',
);
export const gw1100aSoilBattery_3Sensor = entity(
  'sensor.gw1100a_soil_battery_3',
);
export const gw1100aSoilBattery_4Sensor = entity(
  'sensor.gw1100a_soil_battery_4',
);
export const gw1100aIndoorTemperatureSensor = entity(
  'sensor.gw1100a_indoor_temperature',
);
export const gw1100aRelativePressureSensor = entity(
  'sensor.gw1100a_relative_pressure',
);
export const gw1100aAbsolutePressureSensor = entity(
  'sensor.gw1100a_absolute_pressure',
);
export const gw1100aIndoorDewpointSensor = entity(
  'sensor.gw1100a_indoor_dewpoint',
);
export const icloud3EventLogSensor = entity('sensor.icloud3_event_log');
export const icloud3WazehistTrackSensor = entity(
  'sensor.icloud3_wazehist_track',
);
export const bensIphoneNextUpdateSensor = entity(
  'sensor.bens_iphone_next_update',
);
export const bensIphoneMovedDistanceSensor = entity(
  'sensor.bens_iphone_moved_distance',
);
export const bensIphoneLastUpdateSensor = entity(
  'sensor.bens_iphone_last_update',
);
export const bensIphoneIntervalSensor = entity('sensor.bens_iphone_interval');
export const bensIphoneInfoSensor = entity('sensor.bens_iphone_info');
export const bensIphoneTravelTimeMinSensor = entity(
  'sensor.bens_iphone_travel_time_min',
);
export const bensIphoneZoneNameSensor = entity('sensor.bens_iphone_zone_name');
export const bensIphoneHomeDistanceSensor = entity(
  'sensor.bens_iphone_home_distance',
);
export const bensIphoneBatterySensor = entity('sensor.bens_iphone_battery');
export const bensIphoneBadgeSensor = entity('sensor.bens_iphone_badge');
export const bensIphoneArrivalTimeSensor = entity(
  'sensor.bens_iphone_arrival_time',
);
export const bensIphoneTravelTimeSensor = entity(
  'sensor.bens_iphone_travel_time',
);
export const bensIphoneZoneDistanceSensor = entity(
  'sensor.bens_iphone_zone_distance',
);
export const bensIphoneNameSensor = entity('sensor.bens_iphone_name');
export const bensIphoneDirOfTravelSensor = entity(
  'sensor.bens_iphone_dir_of_travel',
);
export const bensIphoneLastLocatedSensor = entity(
  'sensor.bens_iphone_last_located',
);
export const bensIphoneBatteryStatusSensor = entity(
  'sensor.bens_iphone_battery_status',
);
export const icalBenSCalendarEvent_0Sensor = entity(
  'sensor.ical_ben_s_calendar_event_0',
);
export const icalBenSCalendarEvent_1Sensor = entity(
  'sensor.ical_ben_s_calendar_event_1',
);
export const icalBenSCalendarEvent_2Sensor = entity(
  'sensor.ical_ben_s_calendar_event_2',
);
export const icalBenSCalendarEvent_3Sensor = entity(
  'sensor.ical_ben_s_calendar_event_3',
);
export const icalBenSCalendarEvent_4Sensor = entity(
  'sensor.ical_ben_s_calendar_event_4',
);
export const icalBenSCalendarEvent_5Sensor = entity(
  'sensor.ical_ben_s_calendar_event_5',
);
export const icalBenSCalendarEvent_6Sensor = entity(
  'sensor.ical_ben_s_calendar_event_6',
);
export const icalBenSCalendarEvent_7Sensor = entity(
  'sensor.ical_ben_s_calendar_event_7',
);
export const icalBenSCalendarEvent_8Sensor = entity(
  'sensor.ical_ben_s_calendar_event_8',
);
export const icalBenSCalendarEvent_9Sensor = entity(
  'sensor.ical_ben_s_calendar_event_9',
);
export const benSSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_alarm',
);
export const benSSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_timer',
);
export const benSSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_reminder',
);
export const bedroomSpeakerNextAlarmSensor = entity(
  'sensor.bedroom_speaker_next_alarm',
);
export const bedroomSpeakerNextTimerSensor = entity(
  'sensor.bedroom_speaker_next_timer',
);
export const bedroomSpeakerNextReminderSensor = entity(
  'sensor.bedroom_speaker_next_reminder',
);
export const officeNextAlarmSensor = entity('sensor.office_next_alarm');
export const officeNextTimerSensor = entity('sensor.office_next_timer');
export const officeNextReminderSensor = entity('sensor.office_next_reminder');
export const benS_2ndSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_alarm',
);
export const benS_2ndSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_timer',
);
export const benS_2ndSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_reminder',
);
export const benS_3rdSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_alarm',
);
export const benS_3rdSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_timer',
);
export const benS_3rdSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_reminder',
);
export const livingRoomNextAlarmSensor = entity(
  'sensor.living_room_next_alarm',
);
export const livingRoomNextTimerSensor = entity(
  'sensor.living_room_next_timer',
);
export const livingRoomNextReminderSensor = entity(
  'sensor.living_room_next_reminder',
);
export const sonosArcUltraNextAlarmSensor = entity(
  'sensor.sonos_arc_ultra_next_alarm',
);
export const sonosArcUltraNextTimerSensor = entity(
  'sensor.sonos_arc_ultra_next_timer',
);
export const sonosArcUltraNextReminderSensor = entity(
  'sensor.sonos_arc_ultra_next_reminder',
);
export const livingRoomSonosNextAlarmSensor = entity(
  'sensor.living_room_sonos_next_alarm',
);
export const livingRoomSonosNextTimerSensor = entity(
  'sensor.living_room_sonos_next_timer',
);
export const livingRoomSonosNextReminderSensor = entity(
  'sensor.living_room_sonos_next_reminder',
);
export const thisDeviceNextAlarm_2Sensor = entity(
  'sensor.this_device_next_alarm_2',
);
export const thisDeviceNextTimer_2Sensor = entity(
  'sensor.this_device_next_timer_2',
);
export const thisDeviceNextReminder_2Sensor = entity(
  'sensor.this_device_next_reminder_2',
);
export const livingRoomSensorCoverStatusSensor = entity(
  'sensor.living_room_sensor_cover_status',
);
export const livingRoomSensorMotionSensorStatusSensor = entity(
  'sensor.living_room_sensor_motion_sensor_status',
);
export const gymSensorCoverStatusSensor = entity(
  'sensor.gym_sensor_cover_status',
);
export const gymSensorMotionSensorStatusSensor = entity(
  'sensor.gym_sensor_motion_sensor_status',
);
export const bedroomSensorCoverStatusSensor = entity(
  'sensor.bedroom_sensor_cover_status',
);
export const bedroomSensorMotionSensorStatusSensor = entity(
  'sensor.bedroom_sensor_motion_sensor_status',
);
export const automationLogEntitySensor = entity('sensor.automation_log_entity');
export const zStickGen5UsbControllerBasicSensor = entity(
  'sensor.z_stick_gen5_usb_controller_basic',
);
export const goodMorningMessageSensor = entity('sensor.good_morning_message');
export const livingRoomOccupiedSensor = entity('sensor.living_room_occupied');
export const systemMonitorIpv4AddressWlan0Sensor = entity(
  'sensor.system_monitor_ipv4_address_wlan0',
);
export const lastUnlockerSensor = entity('sensor.last_unlocker');
export const frontDoorDoorbellMqttBattery_3Sensor = entity(
  'sensor.front_door_doorbell_mqtt_battery_3',
);
export const frontDoorDoorbellMqttInfoSensor = entity(
  'sensor.front_door_doorbell_mqtt_info',
);
export const frontDoorDoorbellMqttWirelessSensor = entity(
  'sensor.front_door_doorbell_mqtt_wireless',
);
export const batterySensor = entity('sensor.battery');
export const battery_2Sensor = entity('sensor.battery_2');
export const magicKeyboardWithNumericKeypadBatteryBatterySensor = entity(
  'sensor.magic_keyboard_with_numeric_keypad_battery_battery',
);
export const magicMouseBatteryBatterySensor = entity(
  'sensor.magic_mouse_battery_battery',
);
export const undefinedBatteryBatterySensor = entity(
  'sensor.undefined_battery_battery',
);
export const icalIcalBenSCalendarEvent_0Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_0',
);
export const icalIcalBenSCalendarEvent_1Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_1',
);
export const icalIcalBenSCalendarEvent_2Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_2',
);
export const icalIcalBenSCalendarEvent_3Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_3',
);
export const icalIcalBenSCalendarEvent_4Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_4',
);
export const icalIcalBenSCalendarEvent_5Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_5',
);
export const icalIcalBenSCalendarEvent_6Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_6',
);
export const icalIcalBenSCalendarEvent_7Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_7',
);
export const icalIcalBenSCalendarEvent_8Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_8',
);
export const icalIcalBenSCalendarEvent_9Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_9',
);
export const tp357sD5f7SignalStrengthSensor = entity(
  'sensor.tp357s_d5f7_signal_strength',
);
export const tp357sD5f7BatterySensor = entity('sensor.tp357s_d5f7_battery');
export const tp357sD5f7TemperatureSensor = entity(
  'sensor.tp357s_d5f7_temperature',
);
export const tp357sD5f7HumiditySensor = entity('sensor.tp357s_d5f7_humidity');
export const spotifyBenWainwrightSongTempoSensor = entity(
  'sensor.spotify_ben_wainwright_song_tempo',
);
export const boilerBoostTimeRemainingSensor = entity(
  'sensor.boiler_boost_time_remaining',
);
export const lmsPlayersSensor = entity('sensor.lms_players');
export const lmsAlbumsSensor = entity('sensor.lms_albums');
export const lmsSongsSensor = entity('sensor.lms_songs');
export const lmsGenresSensor = entity('sensor.lms_genres');
export const lmsArtistsSensor = entity('sensor.lms_artists');
export const lmsDurationSensor = entity('sensor.lms_duration');
