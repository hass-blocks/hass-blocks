import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingCpuPercentSensor: IEntity<`sensor.ring_mqtt_with_video_streaming_cpu_percent`>;
  var ringMqttWithVideoStreamingMemoryPercentSensor: IEntity<`sensor.ring_mqtt_with_video_streaming_memory_percent`>;
  var backupBackupManagerStateSensor: IEntity<`sensor.backup_backup_manager_state`>;
  var backupNextScheduledAutomaticBackupSensor: IEntity<`sensor.backup_next_scheduled_automatic_backup`>;
  var backupLastSuccessfulAutomaticBackupSensor: IEntity<`sensor.backup_last_successful_automatic_backup`>;
  var dateTimeIsoSensor: IEntity<`sensor.date_time_iso`>;
  var sunNextDawnSensor: IEntity<`sensor.sun_next_dawn`>;
  var sunNextDuskSensor: IEntity<`sensor.sun_next_dusk`>;
  var sunNextMidnightSensor: IEntity<`sensor.sun_next_midnight`>;
  var sunNextNoonSensor: IEntity<`sensor.sun_next_noon`>;
  var sunNextRisingSensor: IEntity<`sensor.sun_next_rising`>;
  var sunNextSettingSensor: IEntity<`sensor.sun_next_setting`>;
  var mumsPhoneBatteryLevelSensor: IEntity<`sensor.mums_phone_battery_level`>;
  var mumsPhoneBatteryStateSensor: IEntity<`sensor.mums_phone_battery_state`>;
  var mumsPhoneChargerTypeSensor: IEntity<`sensor.mums_phone_charger_type`>;
  var bensImacProStorageSensor: IEntity<`sensor.bens_imac_pro_storage`>;
  var bensImacProSsidSensor: IEntity<`sensor.bens_imac_pro_ssid`>;
  var bensImacProActiveAudioInputSensor: IEntity<`sensor.bens_imac_pro_active_audio_input`>;
  var bensImacProActiveAudioOutputSensor: IEntity<`sensor.bens_imac_pro_active_audio_output`>;
  var bensImacProBssidSensor: IEntity<`sensor.bens_imac_pro_bssid`>;
  var bensImacProActiveCameraSensor: IEntity<`sensor.bens_imac_pro_active_camera`>;
  var bensImacProConnectionTypeSensor: IEntity<`sensor.bens_imac_pro_connection_type`>;
  var bensImacProDisplaysSensor: IEntity<`sensor.bens_imac_pro_displays`>;
  var bensImacProPrimaryDisplayNameSensor: IEntity<`sensor.bens_imac_pro_primary_display_name`>;
  var bensImacProPrimaryDisplayIdSensor: IEntity<`sensor.bens_imac_pro_primary_display_id`>;
  var bensImacProFrontmostAppSensor: IEntity<`sensor.bens_imac_pro_frontmost_app`>;
  var bensImacProLastUpdateTriggerSensor: IEntity<`sensor.bens_imac_pro_last_update_trigger`>;
  var bensImacProAppVersionSensor: IEntity<`sensor.bens_imac_pro_app_version`>;
  var bensImacProLocationPermissionSensor: IEntity<`sensor.bens_imac_pro_location_permission`>;
  var bensImacProGeocodedLocationSensor: IEntity<`sensor.bens_imac_pro_geocoded_location`>;
  var bensIphoneActivitySensor: IEntity<`sensor.bens_iphone_activity`>;
  var bensIphoneAverageActivePaceSensor: IEntity<`sensor.bens_iphone_average_active_pace`>;
  var bensIphoneFloorsAscendedSensor: IEntity<`sensor.bens_iphone_floors_ascended`>;
  var bensIphoneFloorsDescendedSensor: IEntity<`sensor.bens_iphone_floors_descended`>;
  var bensIphoneBatteryLevelSensor: IEntity<`sensor.bens_iphone_battery_level`>;
  var bensIphoneBatteryStateSensor: IEntity<`sensor.bens_iphone_battery_state`>;
  var bensIphoneStorageSensor: IEntity<`sensor.bens_iphone_storage`>;
  var bensIphoneSsidSensor: IEntity<`sensor.bens_iphone_ssid`>;
  var bensIphoneBssidSensor: IEntity<`sensor.bens_iphone_bssid`>;
  var bensIphoneConnectionTypeSensor: IEntity<`sensor.bens_iphone_connection_type`>;
  var bensIphoneSim_1Sensor: IEntity<`sensor.bens_iphone_sim_1`>;
  var bensIphoneGeocodedLocationSensor: IEntity<`sensor.bens_iphone_geocoded_location`>;
  var bensIphoneSim_2Sensor: IEntity<`sensor.bens_iphone_sim_2`>;
  var bensIphoneDistanceSensor: IEntity<`sensor.bens_iphone_distance`>;
  var bensIphoneStepsSensor: IEntity<`sensor.bens_iphone_steps`>;
  var bensIphoneLastUpdateTriggerSensor: IEntity<`sensor.bens_iphone_last_update_trigger`>;
  var bensIphoneWatchBatteryLevelSensor: IEntity<`sensor.bens_iphone_watch_battery_level`>;
  var bensIphoneWatchBatteryStateSensor: IEntity<`sensor.bens_iphone_watch_battery_state`>;
  var bensIphoneAppVersionSensor: IEntity<`sensor.bens_iphone_app_version`>;
  var bensIphoneLocationPermissionSensor: IEntity<`sensor.bens_iphone_location_permission`>;
  var bensIphoneAudioOutputSensor: IEntity<`sensor.bens_iphone_audio_output`>;
  var bensImacStorageSensor: IEntity<`sensor.bens_imac_storage`>;
  var bensImacBssidSensor: IEntity<`sensor.bens_imac_bssid`>;
  var bensImacConnectionTypeSensor: IEntity<`sensor.bens_imac_connection_type`>;
  var bensImacSsidSensor: IEntity<`sensor.bens_imac_ssid`>;
  var bensImacActiveCameraSensor: IEntity<`sensor.bens_imac_active_camera`>;
  var bensImacGeocodedLocationSensor: IEntity<`sensor.bens_imac_geocoded_location`>;
  var bensImacActiveAudioInputSensor: IEntity<`sensor.bens_imac_active_audio_input`>;
  var bensImacActiveAudioOutputSensor: IEntity<`sensor.bens_imac_active_audio_output`>;
  var bensImacDisplaysSensor: IEntity<`sensor.bens_imac_displays`>;
  var bensImacPrimaryDisplayNameSensor: IEntity<`sensor.bens_imac_primary_display_name`>;
  var bensImacPrimaryDisplayIdSensor: IEntity<`sensor.bens_imac_primary_display_id`>;
  var bensImacFrontmostAppSensor: IEntity<`sensor.bens_imac_frontmost_app`>;
  var bensImacLastUpdateTriggerSensor: IEntity<`sensor.bens_imac_last_update_trigger`>;
  var bensImacAppVersionSensor: IEntity<`sensor.bens_imac_app_version`>;
  var bensImacLocationPermissionSensor: IEntity<`sensor.bens_imac_location_permission`>;
  var ryansIphoneSsidSensor: IEntity<`sensor.ryans_iphone_ssid`>;
  var ryansIphoneBatteryStateSensor: IEntity<`sensor.ryans_iphone_battery_state`>;
  var ryansIphoneStorageSensor: IEntity<`sensor.ryans_iphone_storage`>;
  var ryansIphoneBatteryLevelSensor: IEntity<`sensor.ryans_iphone_battery_level`>;
  var ryansIphoneBssidSensor: IEntity<`sensor.ryans_iphone_bssid`>;
  var ryansIphoneConnectionTypeSensor: IEntity<`sensor.ryans_iphone_connection_type`>;
  var ryansIphoneLastUpdateTriggerSensor: IEntity<`sensor.ryans_iphone_last_update_trigger`>;
  var ryansIphoneGeocodedLocationSensor: IEntity<`sensor.ryans_iphone_geocoded_location`>;
  var ryansIphoneLocationPermissionSensor: IEntity<`sensor.ryans_iphone_location_permission`>;
  var ryansIphoneAppVersionSensor: IEntity<`sensor.ryans_iphone_app_version`>;
  var ryansIphoneSim_1Sensor: IEntity<`sensor.ryans_iphone_sim_1`>;
  var ryansIphoneSim_2Sensor: IEntity<`sensor.ryans_iphone_sim_2`>;
  var ryansIphoneAudioOutputSensor: IEntity<`sensor.ryans_iphone_audio_output`>;
  var ryansIphoneActivitySensor: IEntity<`sensor.ryans_iphone_activity`>;
  var ryansIphoneDistanceSensor: IEntity<`sensor.ryans_iphone_distance`>;
  var ryansIphoneFloorsDescendedSensor: IEntity<`sensor.ryans_iphone_floors_descended`>;
  var ryansIphoneFloorsAscendedSensor: IEntity<`sensor.ryans_iphone_floors_ascended`>;
  var ryansIphoneStepsSensor: IEntity<`sensor.ryans_iphone_steps`>;
  var ryansIphoneAverageActivePaceSensor: IEntity<`sensor.ryans_iphone_average_active_pace`>;
  var ryansIphoneWatchBatteryLevelSensor: IEntity<`sensor.ryans_iphone_watch_battery_level`>;
  var ryansIphoneWatchBatteryStateSensor: IEntity<`sensor.ryans_iphone_watch_battery_state`>;
  var pixel_6ProBatteryLevelSensor: IEntity<`sensor.pixel_6_pro_battery_level`>;
  var pixel_6ProBatteryStateSensor: IEntity<`sensor.pixel_6_pro_battery_state`>;
  var pixel_6ProChargerTypeSensor: IEntity<`sensor.pixel_6_pro_charger_type`>;
  var tomSPixel_7BatteryLevelSensor: IEntity<`sensor.tom_s_pixel_7_battery_level`>;
  var tomSPixel_7BatteryStateSensor: IEntity<`sensor.tom_s_pixel_7_battery_state`>;
  var tomSPixel_7ChargerTypeSensor: IEntity<`sensor.tom_s_pixel_7_charger_type`>;
  var zStickGen5UsbControllerStatusSensor: IEntity<`sensor.z_stick_gen5_usb_controller_status`>;
  var livingRoomHeatingSwitchNodeStatusSensor: IEntity<`sensor.living_room_heating_switch_node_status`>;
  var livingRoomHeatingSwitchLastSeenSensor: IEntity<`sensor.living_room_heating_switch_last_seen`>;
  var bedroomHeatingSwitchNodeStatusSensor: IEntity<`sensor.bedroom_heating_switch_node_status`>;
  var bedroomHeatingSwitchLastSeenSensor: IEntity<`sensor.bedroom_heating_switch_last_seen`>;
  var gymHeatingSwitchNodeStatusSensor: IEntity<`sensor.gym_heating_switch_node_status`>;
  var gymHeatingSwitchLastSeenSensor: IEntity<`sensor.gym_heating_switch_last_seen`>;
  var livingRoomSensorNodeStatusSensor: IEntity<`sensor.living_room_sensor_node_status`>;
  var livingRoomSensorLastSeenSensor: IEntity<`sensor.living_room_sensor_last_seen`>;
  var gymSensorNodeStatusSensor: IEntity<`sensor.gym_sensor_node_status`>;
  var gymSensorLastSeenSensor: IEntity<`sensor.gym_sensor_last_seen`>;
  var bedroomSensorNodeStatusSensor: IEntity<`sensor.bedroom_sensor_node_status`>;
  var bedroomSensorLastSeenSensor: IEntity<`sensor.bedroom_sensor_last_seen`>;
  var livingRoomSensorAirTemperatureSensor: IEntity<`sensor.living_room_sensor_air_temperature`>;
  var livingRoomSensorIlluminanceSensor: IEntity<`sensor.living_room_sensor_illuminance`>;
  var livingRoomSensorAlarmTypeSensor: IEntity<`sensor.living_room_sensor_alarm_type`>;
  var livingRoomSensorAlarmLevelSensor: IEntity<`sensor.living_room_sensor_alarm_level`>;
  var livingRoomSensorBatteryLevelSensor: IEntity<`sensor.living_room_sensor_battery_level`>;
  var gymSensorAirTemperatureSensor: IEntity<`sensor.gym_sensor_air_temperature`>;
  var gymSensorIlluminanceSensor: IEntity<`sensor.gym_sensor_illuminance`>;
  var gymSensorAlarmTypeSensor: IEntity<`sensor.gym_sensor_alarm_type`>;
  var gymSensorAlarmLevelSensor: IEntity<`sensor.gym_sensor_alarm_level`>;
  var gymSensorBatteryLevelSensor: IEntity<`sensor.gym_sensor_battery_level`>;
  var bedroomSensorAirTemperatureSensor: IEntity<`sensor.bedroom_sensor_air_temperature`>;
  var bedroomSensorIlluminanceSensor: IEntity<`sensor.bedroom_sensor_illuminance`>;
  var bedroomSensorAlarmTypeSensor: IEntity<`sensor.bedroom_sensor_alarm_type`>;
  var bedroomSensorAlarmLevelSensor: IEntity<`sensor.bedroom_sensor_alarm_level`>;
  var bedroomSensorBatteryLevelSensor: IEntity<`sensor.bedroom_sensor_battery_level`>;
  var electricMeterSensor: IEntity<`sensor.electric_meter`>;
  var tahomaSwitchScHomekitSetupCodeSensor: IEntity<`sensor.tahoma_switch_sc_homekit_setup_code`>;
  var availableUpdatesCountSensor: IEntity<`sensor.available_updates_count`>;
  var aliceSoilMistureFixedSensor: IEntity<`sensor.alice_soil_misture_fixed`>;
  var lowBatteryCountSensor: IEntity<`sensor.low_battery_count`>;
  var availableUpdatesSensor: IEntity<`sensor.available_updates`>;
  var imacScreenOffSensor: IEntity<`sensor.imac_screen_off`>;
  var todaysEventsSensor: IEntity<`sensor.todays_events`>;
  var weatherForecastSensor: IEntity<`sensor.weather_forecast`>;
  var currentTvSourceSensor: IEntity<`sensor.current_tv_source`>;
  var livingRoomTemperatureSensor: IEntity<`sensor.living_room_temperature`>;
  var livingRoomTargetTemperatureSensor: IEntity<`sensor.living_room_target_temperature`>;
  var boilerTargetTemperatureSensor: IEntity<`sensor.boiler_target_temperature`>;
  var livingRoomHeatingModeSensor: IEntity<`sensor.living_room_heating_mode`>;
  var bedroomTemperatureSensor: IEntity<`sensor.bedroom_temperature`>;
  var bedroomTargetTemperatureSensor: IEntity<`sensor.bedroom_target_temperature`>;
  var bedroomHeatingModeSensor: IEntity<`sensor.bedroom_heating_mode`>;
  var gymTemperatureSensor: IEntity<`sensor.gym_temperature`>;
  var gymTargetTemperatureSensor: IEntity<`sensor.gym_target_temperature`>;
  var gymHeatingModeSensor: IEntity<`sensor.gym_heating_mode`>;
  var lastTimeLivingRoomMotionSensorWasTriggeredSensor: IEntity<`sensor.last_time_living_room_motion_sensor_was_triggered`>;
  var shellyemA4e57cba73f5Channel_1EnergyCostSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy_cost`>;
  var boilerBoostTemperatureSensor: IEntity<`sensor.boiler_boost_temperature`>;
  var tvHeaterPowerSensor: IEntity<`sensor.tv_heater_power`>;
  var tvHeaterEnergySensor: IEntity<`sensor.tv_heater_energy`>;
  var diningTableHeaterPowerSensor: IEntity<`sensor.dining_table_heater_power`>;
  var diningTableHeaterEnergySensor: IEntity<`sensor.dining_table_heater_energy`>;
  var hallwayHeaterPowerSensor: IEntity<`sensor.hallway_heater_power`>;
  var hallwayHeaterEnergySensor: IEntity<`sensor.hallway_heater_energy`>;
  var bookshelfHeaterPowerSensor: IEntity<`sensor.bookshelf_heater_power`>;
  var bookshelfHeaterEnergySensor: IEntity<`sensor.bookshelf_heater_energy`>;
  var shellyemA4e57cba73f5Channel_1PowerSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_power`>;
  var shellyemA4e57cba73f5Channel_1EnergySensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy`>;
  var shellyemA4e57cba73f5Channel_1EnergyReturnedSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy_returned`>;
  var shellyemA4e57cba73f5Channel_1VoltageSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_voltage`>;
  var shellyemA4e57cba73f5Channel_1PowerFactorSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_power_factor`>;
  var shellyemA4e57cba73f5Channel_2PowerSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_power`>;
  var shellyemA4e57cba73f5Channel_2EnergySensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_energy`>;
  var shellyemA4e57cba73f5Channel_2EnergyReturnedSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_energy_returned`>;
  var shellyemA4e57cba73f5Channel_2VoltageSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_voltage`>;
  var shellyemA4e57cba73f5Channel_2PowerFactorSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_power_factor`>;
  var frontDoorBattery_2Sensor: IEntity<`sensor.front_door_battery_2`>;
  var frontDoorLastActivitySensor: IEntity<`sensor.front_door_last_activity`>;
  var adguardHomeDnsQueriesSensor: IEntity<`sensor.adguard_home_dns_queries`>;
  var adguardHomeSafeBrowsingBlockedSensor: IEntity<`sensor.adguard_home_safe_browsing_blocked`>;
  var adguardHomeDnsQueriesBlockedSensor: IEntity<`sensor.adguard_home_dns_queries_blocked`>;
  var adguardHomeDnsQueriesBlockedRatioSensor: IEntity<`sensor.adguard_home_dns_queries_blocked_ratio`>;
  var adguardHomeParentalControlBlockedSensor: IEntity<`sensor.adguard_home_parental_control_blocked`>;
  var adguardHomeSafeSearchesEnforcedSensor: IEntity<`sensor.adguard_home_safe_searches_enforced`>;
  var adguardHomeAverageProcessingSpeedSensor: IEntity<`sensor.adguard_home_average_processing_speed`>;
  var systemMonitorDiskFreeRunAudioSensor: IEntity<`sensor.system_monitor_disk_free_run_audio`>;
  var systemMonitorDiskFreeSslSensor: IEntity<`sensor.system_monitor_disk_free_ssl`>;
  var systemMonitorDiskFreeConfigSensor: IEntity<`sensor.system_monitor_disk_free_config`>;
  var systemMonitorDiskFreeShareSensor: IEntity<`sensor.system_monitor_disk_free_share`>;
  var systemMonitorDiskFreeMediaSensor: IEntity<`sensor.system_monitor_disk_free_media`>;
  var systemMonitorDiskFreeSensor: IEntity<`sensor.system_monitor_disk_free`>;
  var systemMonitorDiskUseSensor: IEntity<`sensor.system_monitor_disk_use`>;
  var systemMonitorDiskUsageSensor: IEntity<`sensor.system_monitor_disk_usage`>;
  var systemMonitorIpv4AddressEnp1s0Sensor: IEntity<`sensor.system_monitor_ipv4_address_enp1s0`>;
  var systemMonitorIpv6AddressEnp1s0Sensor: IEntity<`sensor.system_monitor_ipv6_address_enp1s0`>;
  var systemMonitorLastBootSensor: IEntity<`sensor.system_monitor_last_boot`>;
  var systemMonitorLoad_15mSensor: IEntity<`sensor.system_monitor_load_15m`>;
  var systemMonitorLoad_1mSensor: IEntity<`sensor.system_monitor_load_1m`>;
  var systemMonitorLoad_5mSensor: IEntity<`sensor.system_monitor_load_5m`>;
  var systemMonitorMemoryFreeSensor: IEntity<`sensor.system_monitor_memory_free`>;
  var systemMonitorMemoryUseSensor: IEntity<`sensor.system_monitor_memory_use`>;
  var systemMonitorMemoryUsageSensor: IEntity<`sensor.system_monitor_memory_usage`>;
  var systemMonitorNetworkInEnp1s0Sensor: IEntity<`sensor.system_monitor_network_in_enp1s0`>;
  var systemMonitorNetworkOutEnp1s0Sensor: IEntity<`sensor.system_monitor_network_out_enp1s0`>;
  var systemMonitorPacketsInEnp1s0Sensor: IEntity<`sensor.system_monitor_packets_in_enp1s0`>;
  var systemMonitorPacketsOutEnp1s0Sensor: IEntity<`sensor.system_monitor_packets_out_enp1s0`>;
  var systemMonitorNetworkThroughputInEnp1s0Sensor: IEntity<`sensor.system_monitor_network_throughput_in_enp1s0`>;
  var systemMonitorNetworkThroughputOutEnp1s0Sensor: IEntity<`sensor.system_monitor_network_throughput_out_enp1s0`>;
  var systemMonitorProcessorUseSensor: IEntity<`sensor.system_monitor_processor_use`>;
  var systemMonitorProcessorTemperatureSensor: IEntity<`sensor.system_monitor_processor_temperature`>;
  var systemMonitorSwapFreeSensor: IEntity<`sensor.system_monitor_swap_free`>;
  var systemMonitorSwapUseSensor: IEntity<`sensor.system_monitor_swap_use`>;
  var systemMonitorSwapUsageSensor: IEntity<`sensor.system_monitor_swap_usage`>;
  var qbittorrentStatusSensor: IEntity<`sensor.qbittorrent_status`>;
  var qbittorrentConnectionStatusSensor: IEntity<`sensor.qbittorrent_connection_status`>;
  var qbittorrentDownloadSpeedSensor: IEntity<`sensor.qbittorrent_download_speed`>;
  var qbittorrentUploadSpeedSensor: IEntity<`sensor.qbittorrent_upload_speed`>;
  var qbittorrentAllTimeDownloadSensor: IEntity<`sensor.qbittorrent_all_time_download`>;
  var qbittorrentAllTimeUploadSensor: IEntity<`sensor.qbittorrent_all_time_upload`>;
  var qbittorrentAllTorrentsSensor: IEntity<`sensor.qbittorrent_all_torrents`>;
  var qbittorrentActiveTorrentsSensor: IEntity<`sensor.qbittorrent_active_torrents`>;
  var qbittorrentInactiveTorrentsSensor: IEntity<`sensor.qbittorrent_inactive_torrents`>;
  var qbittorrentPausedTorrentsSensor: IEntity<`sensor.qbittorrent_paused_torrents`>;
  var zteRouterDataReceivedSensor: IEntity<`sensor.zte_router_data_received`>;
  var zteRouterDataSentSensor: IEntity<`sensor.zte_router_data_sent`>;
  var zteRouterExternalIpSensor: IEntity<`sensor.zte_router_external_ip`>;
  var zteRouterUptimeSensor: IEntity<`sensor.zte_router_uptime`>;
  var zteRouterDownloadSpeedSensor: IEntity<`sensor.zte_router_download_speed`>;
  var zteRouterUploadSpeedSensor: IEntity<`sensor.zte_router_upload_speed`>;
  var octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor: IEntity<`sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_electricity`>;
  var octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor: IEntity<`sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_gas`>;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_current_rate`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_rate`>;
  var octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_next_rate`>;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_current_standing_charge`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_consumption`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_cost`>;
  var homeNearestDeviceSensor: IEntity<`sensor.home_nearest_device`>;
  var homeNearestDistanceSensor: IEntity<`sensor.home_nearest_distance`>;
  var homeNearestDirectionOfTravelSensor: IEntity<`sensor.home_nearest_direction_of_travel`>;
  var homeMeDistanceSensor: IEntity<`sensor.home_me_distance`>;
  var homeMeDirectionOfTravelSensor: IEntity<`sensor.home_me_direction_of_travel`>;
  var home_2NearestDeviceSensor: IEntity<`sensor.home_2_nearest_device`>;
  var home_2NearestDistanceSensor: IEntity<`sensor.home_2_nearest_distance`>;
  var home_2NearestDirectionOfTravelSensor: IEntity<`sensor.home_2_nearest_direction_of_travel`>;
  var home_2MeDistanceSensor: IEntity<`sensor.home_2_me_distance`>;
  var home_2MeDirectionOfTravelSensor: IEntity<`sensor.home_2_me_direction_of_travel`>;
  var tumbleDryerSmartPlugSignalLevelSensor: IEntity<`sensor.tumble_dryer_smart_plug_signal_level`>;
  var tumbleDryerSmartPlugAutoOffAtSensor: IEntity<`sensor.tumble_dryer_smart_plug_auto_off_at`>;
  var tumbleDryerSmartPlugCurrentConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_current_consumption`>;
  var tumbleDryerSmartPlugTodaySConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_today_s_consumption`>;
  var tumbleDryerSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_this_month_s_consumption`>;
  var tumbleDryerSmartPlugVoltageSensor: IEntity<`sensor.tumble_dryer_smart_plug_voltage`>;
  var tumbleDryerSmartPlugCurrentSensor: IEntity<`sensor.tumble_dryer_smart_plug_current`>;
  var watchmanLastUpdatedSensor: IEntity<`sensor.watchman_last_updated`>;
  var watchmanMissingEntitiesSensor: IEntity<`sensor.watchman_missing_entities`>;
  var watchmanMissingActionsSensor: IEntity<`sensor.watchman_missing_actions`>;
  var wearingClapper2TrophyLevelSensor: IEntity<`sensor.wearing_clapper2_trophy_level`>;
  var wearingClapper2StatusSensor: IEntity<`sensor.wearing_clapper2_status`>;
  var playstationPlaystationPlusSensor: IEntity<`sensor.playstation_playstation_plus`>;
  var playstationAboutMeSensor: IEntity<`sensor.playstation_about_me`>;
  var aliceIlluminanceSensor: IEntity<`sensor.alice_illuminance`>;
  var aliceConductivitySensor: IEntity<`sensor.alice_conductivity`>;
  var aliceSoilMoistureSensor: IEntity<`sensor.alice_soil_moisture`>;
  var aliceTemperatureSensor: IEntity<`sensor.alice_temperature`>;
  var aliceAirHumiditySensor: IEntity<`sensor.alice_air_humidity`>;
  var alicePpfdMolSensor: IEntity<`sensor.alice_ppfd_mol`>;
  var aliceTotalPpfdMolIntegralSensor: IEntity<`sensor.alice_total_ppfd_mol_integral`>;
  var aliceDliSensor: IEntity<`sensor.alice_dli`>;
  var frontDoorBatterySensor: IEntity<`sensor.front_door_battery`>;
  var frontDoorFirmwareVersionSensor: IEntity<`sensor.front_door_firmware_version`>;
  var bathroomMotionSensorTemperatureSensor: IEntity<`sensor.bathroom_motion_sensor_temperature`>;
  var bathroomMotionSensorBatterySensor: IEntity<`sensor.bathroom_motion_sensor_battery`>;
  var hallwayMotionSensorTemperatureSensor: IEntity<`sensor.hallway_motion_sensor_temperature`>;
  var hallwayMotionSensorBatterySensor: IEntity<`sensor.hallway_motion_sensor_battery`>;
  var zigbee2mqttBridgeVersionSensor: IEntity<`sensor.zigbee2mqtt_bridge_version`>;
  var sonosArcUltraAudioInputFormatSensor: IEntity<`sensor.sonos_arc_ultra_audio_input_format`>;
  var icloud3EventLogSensor: IEntity<`sensor.icloud3_event_log`>;
  var icloud3WazehistTrackSensor: IEntity<`sensor.icloud3_wazehist_track`>;
  var bensIphoneBadgeSensor: IEntity<`sensor.bens_iphone_badge`>;
  var bensIphoneLastUpdateSensor: IEntity<`sensor.bens_iphone_last_update`>;
  var bensIphoneIntervalSensor: IEntity<`sensor.bens_iphone_interval`>;
  var bensIphoneBatterySensor: IEntity<`sensor.bens_iphone_battery`>;
  var bensIphoneMovedDistanceSensor: IEntity<`sensor.bens_iphone_moved_distance`>;
  var bensIphoneDirOfTravelSensor: IEntity<`sensor.bens_iphone_dir_of_travel`>;
  var bensIphoneNameSensor: IEntity<`sensor.bens_iphone_name`>;
  var bensIphoneHomeDistanceSensor: IEntity<`sensor.bens_iphone_home_distance`>;
  var bensIphoneLastLocatedSensor: IEntity<`sensor.bens_iphone_last_located`>;
  var bensIphoneArrivalTimeSensor: IEntity<`sensor.bens_iphone_arrival_time`>;
  var bensIphoneNextUpdateSensor: IEntity<`sensor.bens_iphone_next_update`>;
  var bensIphoneTravelTimeMinSensor: IEntity<`sensor.bens_iphone_travel_time_min`>;
  var bensIphoneBatteryStatusSensor: IEntity<`sensor.bens_iphone_battery_status`>;
  var bensIphoneInfoSensor: IEntity<`sensor.bens_iphone_info`>;
  var bensIphoneZoneDistanceSensor: IEntity<`sensor.bens_iphone_zone_distance`>;
  var bensIphoneZoneNameSensor: IEntity<`sensor.bens_iphone_zone_name`>;
  var bensIphoneTravelTimeSensor: IEntity<`sensor.bens_iphone_travel_time`>;
  var icalBenSCalendarEvent_0Sensor: IEntity<`sensor.ical_ben_s_calendar_event_0`>;
  var icalBenSCalendarEvent_1Sensor: IEntity<`sensor.ical_ben_s_calendar_event_1`>;
  var icalBenSCalendarEvent_2Sensor: IEntity<`sensor.ical_ben_s_calendar_event_2`>;
  var icalBenSCalendarEvent_3Sensor: IEntity<`sensor.ical_ben_s_calendar_event_3`>;
  var icalBenSCalendarEvent_4Sensor: IEntity<`sensor.ical_ben_s_calendar_event_4`>;
  var icalBenSCalendarEvent_5Sensor: IEntity<`sensor.ical_ben_s_calendar_event_5`>;
  var icalBenSCalendarEvent_6Sensor: IEntity<`sensor.ical_ben_s_calendar_event_6`>;
  var icalBenSCalendarEvent_7Sensor: IEntity<`sensor.ical_ben_s_calendar_event_7`>;
  var icalBenSCalendarEvent_8Sensor: IEntity<`sensor.ical_ben_s_calendar_event_8`>;
  var icalBenSCalendarEvent_9Sensor: IEntity<`sensor.ical_ben_s_calendar_event_9`>;
  var benSSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_alarm`>;
  var benSSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_timer`>;
  var benSSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_reminder`>;
  var bedroomSpeakerNextAlarmSensor: IEntity<`sensor.bedroom_speaker_next_alarm`>;
  var bedroomSpeakerNextTimerSensor: IEntity<`sensor.bedroom_speaker_next_timer`>;
  var bedroomSpeakerNextReminderSensor: IEntity<`sensor.bedroom_speaker_next_reminder`>;
  var officeNextAlarmSensor: IEntity<`sensor.office_next_alarm`>;
  var officeNextTimerSensor: IEntity<`sensor.office_next_timer`>;
  var officeNextReminderSensor: IEntity<`sensor.office_next_reminder`>;
  var benS_2ndSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_alarm`>;
  var benS_2ndSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_timer`>;
  var benS_2ndSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_reminder`>;
  var benS_3rdSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_alarm`>;
  var benS_3rdSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_timer`>;
  var benS_3rdSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_reminder`>;
  var livingRoomNextAlarmSensor: IEntity<`sensor.living_room_next_alarm`>;
  var livingRoomNextTimerSensor: IEntity<`sensor.living_room_next_timer`>;
  var livingRoomNextReminderSensor: IEntity<`sensor.living_room_next_reminder`>;
  var sonosArcUltraNextAlarmSensor: IEntity<`sensor.sonos_arc_ultra_next_alarm`>;
  var sonosArcUltraNextTimerSensor: IEntity<`sensor.sonos_arc_ultra_next_timer`>;
  var sonosArcUltraNextReminderSensor: IEntity<`sensor.sonos_arc_ultra_next_reminder`>;
  var livingRoomSonosNextAlarmSensor: IEntity<`sensor.living_room_sonos_next_alarm`>;
  var livingRoomSonosNextTimerSensor: IEntity<`sensor.living_room_sonos_next_timer`>;
  var livingRoomSonosNextReminderSensor: IEntity<`sensor.living_room_sonos_next_reminder`>;
  var thisDeviceNextAlarm_2Sensor: IEntity<`sensor.this_device_next_alarm_2`>;
  var thisDeviceNextTimer_2Sensor: IEntity<`sensor.this_device_next_timer_2`>;
  var thisDeviceNextReminder_2Sensor: IEntity<`sensor.this_device_next_reminder_2`>;
  var livingRoomSensorCoverStatusSensor: IEntity<`sensor.living_room_sensor_cover_status`>;
  var livingRoomSensorMotionSensorStatusSensor: IEntity<`sensor.living_room_sensor_motion_sensor_status`>;
  var gymSensorCoverStatusSensor: IEntity<`sensor.gym_sensor_cover_status`>;
  var gymSensorMotionSensorStatusSensor: IEntity<`sensor.gym_sensor_motion_sensor_status`>;
  var bedroomSensorCoverStatusSensor: IEntity<`sensor.bedroom_sensor_cover_status`>;
  var bedroomSensorMotionSensorStatusSensor: IEntity<`sensor.bedroom_sensor_motion_sensor_status`>;
  var automationLogEntitySensor: IEntity<`sensor.automation_log_entity`>;
  var zStickGen5UsbControllerBasicSensor: IEntity<`sensor.z_stick_gen5_usb_controller_basic`>;
  var goodMorningMessageSensor: IEntity<`sensor.good_morning_message`>;
  var livingRoomOccupiedSensor: IEntity<`sensor.living_room_occupied`>;
  var systemMonitorIpv4AddressWlan0Sensor: IEntity<`sensor.system_monitor_ipv4_address_wlan0`>;
  var homeAssistantServerAutoOffAtSensor: IEntity<`sensor.home_assistant_server_auto_off_at`>;
  var homeAssistantServerCurrentConsumptionSensor: IEntity<`sensor.home_assistant_server_current_consumption`>;
  var homeAssistantServerSignalLevelSensor: IEntity<`sensor.home_assistant_server_signal_level`>;
  var homeAssistantServerThisMonthSConsumptionSensor: IEntity<`sensor.home_assistant_server_this_month_s_consumption`>;
  var homeAssistantServerTodaySConsumptionSensor: IEntity<`sensor.home_assistant_server_today_s_consumption`>;
  var imacSmartPlugAutoOffAt_2Sensor: IEntity<`sensor.imac_smart_plug_auto_off_at_2`>;
  var imacSmartPlugCurrentConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_current_consumption_2`>;
  var imacSmartPlugSignalLevel_2Sensor: IEntity<`sensor.imac_smart_plug_signal_level_2`>;
  var imacSmartPlugThisMonthSConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_this_month_s_consumption_2`>;
  var imacSmartPlugTodaySConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_today_s_consumption_2`>;
  var livingRoomHeaterSmartPlugAutoOffAtSensor: IEntity<`sensor.living_room_heater_smart_plug_auto_off_at`>;
  var livingRoomHeaterSmartPlugCurrentConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_current_consumption`>;
  var livingRoomHeaterSmartPlugSignalLevelSensor: IEntity<`sensor.living_room_heater_smart_plug_signal_level`>;
  var livingRoomHeaterSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_this_month_s_consumption`>;
  var livingRoomHeaterSmartPlugTodaySConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_today_s_consumption`>;
  var lastUnlockerSensor: IEntity<`sensor.last_unlocker`>;
  var frontDoorDoorbellMqttBattery_3Sensor: IEntity<`sensor.front_door_doorbell_mqtt_battery_3`>;
  var frontDoorDoorbellMqttInfoSensor: IEntity<`sensor.front_door_doorbell_mqtt_info`>;
  var frontDoorDoorbellMqttWirelessSensor: IEntity<`sensor.front_door_doorbell_mqtt_wireless`>;
  var batterySensor: IEntity<`sensor.battery`>;
  var battery_2Sensor: IEntity<`sensor.battery_2`>;
  var magicKeyboardWithNumericKeypadBatteryBatterySensor: IEntity<`sensor.magic_keyboard_with_numeric_keypad_battery_battery`>;
  var magicMouseBatteryBatterySensor: IEntity<`sensor.magic_mouse_battery_battery`>;
  var undefinedBatteryBatterySensor: IEntity<`sensor.undefined_battery_battery`>;
  var icalIcalBenSCalendarEvent_0Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_0`>;
  var icalIcalBenSCalendarEvent_1Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_1`>;
  var icalIcalBenSCalendarEvent_2Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_2`>;
  var icalIcalBenSCalendarEvent_3Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_3`>;
  var icalIcalBenSCalendarEvent_4Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_4`>;
  var icalIcalBenSCalendarEvent_5Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_5`>;
  var icalIcalBenSCalendarEvent_6Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_6`>;
  var icalIcalBenSCalendarEvent_7Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_7`>;
  var icalIcalBenSCalendarEvent_8Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_8`>;
  var icalIcalBenSCalendarEvent_9Sensor: IEntity<`sensor.ical_ical_ben_s_calendar_event_9`>;
  var tp357sD5f7SignalStrengthSensor: IEntity<`sensor.tp357s_d5f7_signal_strength`>;
  var tp357sD5f7BatterySensor: IEntity<`sensor.tp357s_d5f7_battery`>;
  var tp357sD5f7TemperatureSensor: IEntity<`sensor.tp357s_d5f7_temperature`>;
  var tp357sD5f7HumiditySensor: IEntity<`sensor.tp357s_d5f7_humidity`>;
  var spotifyBenWainwrightSongTempoSensor: IEntity<`sensor.spotify_ben_wainwright_song_tempo`>;
  var homeAssistantServerVoltageSensor: IEntity<`sensor.home_assistant_server_voltage`>;
  var homeAssistantServerCurrentSensor: IEntity<`sensor.home_assistant_server_current`>;
  var livingRoomHeaterSmartPlugVoltageSensor: IEntity<`sensor.living_room_heater_smart_plug_voltage`>;
  var livingRoomHeaterSmartPlugCurrentSensor: IEntity<`sensor.living_room_heater_smart_plug_current`>;
  var imacSmartPlugVoltageSensor: IEntity<`sensor.imac_smart_plug_voltage`>;
  var imacSmartPlugCurrentSensor: IEntity<`sensor.imac_smart_plug_current`>;
  var boilerBoostTimeRemainingSensor: IEntity<`sensor.boiler_boost_time_remaining`>;
  var gw1100aIndoorHumiditySensor: IEntity<`sensor.gw1100a_indoor_humidity`>;
  var gw1100aSoilMoisture_1Sensor: IEntity<`sensor.gw1100a_soil_moisture_1`>;
  var gw1100aSoilMoisture_3Sensor: IEntity<`sensor.gw1100a_soil_moisture_3`>;
  var gw1100aSoilMoisture_4Sensor: IEntity<`sensor.gw1100a_soil_moisture_4`>;
  var gw1100aSoilBattery_1Sensor: IEntity<`sensor.gw1100a_soil_battery_1`>;
  var gw1100aSoilBattery_2Sensor: IEntity<`sensor.gw1100a_soil_battery_2`>;
  var gw1100aSoilBattery_3Sensor: IEntity<`sensor.gw1100a_soil_battery_3`>;
  var gw1100aSoilBattery_4Sensor: IEntity<`sensor.gw1100a_soil_battery_4`>;
  var gw1100aIndoorTemperatureSensor: IEntity<`sensor.gw1100a_indoor_temperature`>;
  var gw1100aRelativePressureSensor: IEntity<`sensor.gw1100a_relative_pressure`>;
  var gw1100aAbsolutePressureSensor: IEntity<`sensor.gw1100a_absolute_pressure`>;
  var gw1100aIndoorDewpointSensor: IEntity<`sensor.gw1100a_indoor_dewpoint`>;
  var aliceMoistureSensor: IEntity<`sensor.alice_moisture`>;
}

globalThis.ringMqttWithVideoStreamingCpuPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_cpu_percent',
);
globalThis.ringMqttWithVideoStreamingMemoryPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_memory_percent',
);
globalThis.backupBackupManagerStateSensor = entity(
  'sensor.backup_backup_manager_state',
);
globalThis.backupNextScheduledAutomaticBackupSensor = entity(
  'sensor.backup_next_scheduled_automatic_backup',
);
globalThis.backupLastSuccessfulAutomaticBackupSensor = entity(
  'sensor.backup_last_successful_automatic_backup',
);
globalThis.dateTimeIsoSensor = entity('sensor.date_time_iso');
globalThis.sunNextDawnSensor = entity('sensor.sun_next_dawn');
globalThis.sunNextDuskSensor = entity('sensor.sun_next_dusk');
globalThis.sunNextMidnightSensor = entity('sensor.sun_next_midnight');
globalThis.sunNextNoonSensor = entity('sensor.sun_next_noon');
globalThis.sunNextRisingSensor = entity('sensor.sun_next_rising');
globalThis.sunNextSettingSensor = entity('sensor.sun_next_setting');
globalThis.mumsPhoneBatteryLevelSensor = entity(
  'sensor.mums_phone_battery_level',
);
globalThis.mumsPhoneBatteryStateSensor = entity(
  'sensor.mums_phone_battery_state',
);
globalThis.mumsPhoneChargerTypeSensor = entity(
  'sensor.mums_phone_charger_type',
);
globalThis.bensImacProStorageSensor = entity('sensor.bens_imac_pro_storage');
globalThis.bensImacProSsidSensor = entity('sensor.bens_imac_pro_ssid');
globalThis.bensImacProActiveAudioInputSensor = entity(
  'sensor.bens_imac_pro_active_audio_input',
);
globalThis.bensImacProActiveAudioOutputSensor = entity(
  'sensor.bens_imac_pro_active_audio_output',
);
globalThis.bensImacProBssidSensor = entity('sensor.bens_imac_pro_bssid');
globalThis.bensImacProActiveCameraSensor = entity(
  'sensor.bens_imac_pro_active_camera',
);
globalThis.bensImacProConnectionTypeSensor = entity(
  'sensor.bens_imac_pro_connection_type',
);
globalThis.bensImacProDisplaysSensor = entity('sensor.bens_imac_pro_displays');
globalThis.bensImacProPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_pro_primary_display_name',
);
globalThis.bensImacProPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_pro_primary_display_id',
);
globalThis.bensImacProFrontmostAppSensor = entity(
  'sensor.bens_imac_pro_frontmost_app',
);
globalThis.bensImacProLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_pro_last_update_trigger',
);
globalThis.bensImacProAppVersionSensor = entity(
  'sensor.bens_imac_pro_app_version',
);
globalThis.bensImacProLocationPermissionSensor = entity(
  'sensor.bens_imac_pro_location_permission',
);
globalThis.bensImacProGeocodedLocationSensor = entity(
  'sensor.bens_imac_pro_geocoded_location',
);
globalThis.bensIphoneActivitySensor = entity('sensor.bens_iphone_activity');
globalThis.bensIphoneAverageActivePaceSensor = entity(
  'sensor.bens_iphone_average_active_pace',
);
globalThis.bensIphoneFloorsAscendedSensor = entity(
  'sensor.bens_iphone_floors_ascended',
);
globalThis.bensIphoneFloorsDescendedSensor = entity(
  'sensor.bens_iphone_floors_descended',
);
globalThis.bensIphoneBatteryLevelSensor = entity(
  'sensor.bens_iphone_battery_level',
);
globalThis.bensIphoneBatteryStateSensor = entity(
  'sensor.bens_iphone_battery_state',
);
globalThis.bensIphoneStorageSensor = entity('sensor.bens_iphone_storage');
globalThis.bensIphoneSsidSensor = entity('sensor.bens_iphone_ssid');
globalThis.bensIphoneBssidSensor = entity('sensor.bens_iphone_bssid');
globalThis.bensIphoneConnectionTypeSensor = entity(
  'sensor.bens_iphone_connection_type',
);
globalThis.bensIphoneSim_1Sensor = entity('sensor.bens_iphone_sim_1');
globalThis.bensIphoneGeocodedLocationSensor = entity(
  'sensor.bens_iphone_geocoded_location',
);
globalThis.bensIphoneSim_2Sensor = entity('sensor.bens_iphone_sim_2');
globalThis.bensIphoneDistanceSensor = entity('sensor.bens_iphone_distance');
globalThis.bensIphoneStepsSensor = entity('sensor.bens_iphone_steps');
globalThis.bensIphoneLastUpdateTriggerSensor = entity(
  'sensor.bens_iphone_last_update_trigger',
);
globalThis.bensIphoneWatchBatteryLevelSensor = entity(
  'sensor.bens_iphone_watch_battery_level',
);
globalThis.bensIphoneWatchBatteryStateSensor = entity(
  'sensor.bens_iphone_watch_battery_state',
);
globalThis.bensIphoneAppVersionSensor = entity(
  'sensor.bens_iphone_app_version',
);
globalThis.bensIphoneLocationPermissionSensor = entity(
  'sensor.bens_iphone_location_permission',
);
globalThis.bensIphoneAudioOutputSensor = entity(
  'sensor.bens_iphone_audio_output',
);
globalThis.bensImacStorageSensor = entity('sensor.bens_imac_storage');
globalThis.bensImacBssidSensor = entity('sensor.bens_imac_bssid');
globalThis.bensImacConnectionTypeSensor = entity(
  'sensor.bens_imac_connection_type',
);
globalThis.bensImacSsidSensor = entity('sensor.bens_imac_ssid');
globalThis.bensImacActiveCameraSensor = entity(
  'sensor.bens_imac_active_camera',
);
globalThis.bensImacGeocodedLocationSensor = entity(
  'sensor.bens_imac_geocoded_location',
);
globalThis.bensImacActiveAudioInputSensor = entity(
  'sensor.bens_imac_active_audio_input',
);
globalThis.bensImacActiveAudioOutputSensor = entity(
  'sensor.bens_imac_active_audio_output',
);
globalThis.bensImacDisplaysSensor = entity('sensor.bens_imac_displays');
globalThis.bensImacPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_primary_display_name',
);
globalThis.bensImacPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_primary_display_id',
);
globalThis.bensImacFrontmostAppSensor = entity(
  'sensor.bens_imac_frontmost_app',
);
globalThis.bensImacLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_last_update_trigger',
);
globalThis.bensImacAppVersionSensor = entity('sensor.bens_imac_app_version');
globalThis.bensImacLocationPermissionSensor = entity(
  'sensor.bens_imac_location_permission',
);
globalThis.ryansIphoneSsidSensor = entity('sensor.ryans_iphone_ssid');
globalThis.ryansIphoneBatteryStateSensor = entity(
  'sensor.ryans_iphone_battery_state',
);
globalThis.ryansIphoneStorageSensor = entity('sensor.ryans_iphone_storage');
globalThis.ryansIphoneBatteryLevelSensor = entity(
  'sensor.ryans_iphone_battery_level',
);
globalThis.ryansIphoneBssidSensor = entity('sensor.ryans_iphone_bssid');
globalThis.ryansIphoneConnectionTypeSensor = entity(
  'sensor.ryans_iphone_connection_type',
);
globalThis.ryansIphoneLastUpdateTriggerSensor = entity(
  'sensor.ryans_iphone_last_update_trigger',
);
globalThis.ryansIphoneGeocodedLocationSensor = entity(
  'sensor.ryans_iphone_geocoded_location',
);
globalThis.ryansIphoneLocationPermissionSensor = entity(
  'sensor.ryans_iphone_location_permission',
);
globalThis.ryansIphoneAppVersionSensor = entity(
  'sensor.ryans_iphone_app_version',
);
globalThis.ryansIphoneSim_1Sensor = entity('sensor.ryans_iphone_sim_1');
globalThis.ryansIphoneSim_2Sensor = entity('sensor.ryans_iphone_sim_2');
globalThis.ryansIphoneAudioOutputSensor = entity(
  'sensor.ryans_iphone_audio_output',
);
globalThis.ryansIphoneActivitySensor = entity('sensor.ryans_iphone_activity');
globalThis.ryansIphoneDistanceSensor = entity('sensor.ryans_iphone_distance');
globalThis.ryansIphoneFloorsDescendedSensor = entity(
  'sensor.ryans_iphone_floors_descended',
);
globalThis.ryansIphoneFloorsAscendedSensor = entity(
  'sensor.ryans_iphone_floors_ascended',
);
globalThis.ryansIphoneStepsSensor = entity('sensor.ryans_iphone_steps');
globalThis.ryansIphoneAverageActivePaceSensor = entity(
  'sensor.ryans_iphone_average_active_pace',
);
globalThis.ryansIphoneWatchBatteryLevelSensor = entity(
  'sensor.ryans_iphone_watch_battery_level',
);
globalThis.ryansIphoneWatchBatteryStateSensor = entity(
  'sensor.ryans_iphone_watch_battery_state',
);
globalThis.pixel_6ProBatteryLevelSensor = entity(
  'sensor.pixel_6_pro_battery_level',
);
globalThis.pixel_6ProBatteryStateSensor = entity(
  'sensor.pixel_6_pro_battery_state',
);
globalThis.pixel_6ProChargerTypeSensor = entity(
  'sensor.pixel_6_pro_charger_type',
);
globalThis.tomSPixel_7BatteryLevelSensor = entity(
  'sensor.tom_s_pixel_7_battery_level',
);
globalThis.tomSPixel_7BatteryStateSensor = entity(
  'sensor.tom_s_pixel_7_battery_state',
);
globalThis.tomSPixel_7ChargerTypeSensor = entity(
  'sensor.tom_s_pixel_7_charger_type',
);
globalThis.zStickGen5UsbControllerStatusSensor = entity(
  'sensor.z_stick_gen5_usb_controller_status',
);
globalThis.livingRoomHeatingSwitchNodeStatusSensor = entity(
  'sensor.living_room_heating_switch_node_status',
);
globalThis.livingRoomHeatingSwitchLastSeenSensor = entity(
  'sensor.living_room_heating_switch_last_seen',
);
globalThis.bedroomHeatingSwitchNodeStatusSensor = entity(
  'sensor.bedroom_heating_switch_node_status',
);
globalThis.bedroomHeatingSwitchLastSeenSensor = entity(
  'sensor.bedroom_heating_switch_last_seen',
);
globalThis.gymHeatingSwitchNodeStatusSensor = entity(
  'sensor.gym_heating_switch_node_status',
);
globalThis.gymHeatingSwitchLastSeenSensor = entity(
  'sensor.gym_heating_switch_last_seen',
);
globalThis.livingRoomSensorNodeStatusSensor = entity(
  'sensor.living_room_sensor_node_status',
);
globalThis.livingRoomSensorLastSeenSensor = entity(
  'sensor.living_room_sensor_last_seen',
);
globalThis.gymSensorNodeStatusSensor = entity('sensor.gym_sensor_node_status');
globalThis.gymSensorLastSeenSensor = entity('sensor.gym_sensor_last_seen');
globalThis.bedroomSensorNodeStatusSensor = entity(
  'sensor.bedroom_sensor_node_status',
);
globalThis.bedroomSensorLastSeenSensor = entity(
  'sensor.bedroom_sensor_last_seen',
);
globalThis.livingRoomSensorAirTemperatureSensor = entity(
  'sensor.living_room_sensor_air_temperature',
);
globalThis.livingRoomSensorIlluminanceSensor = entity(
  'sensor.living_room_sensor_illuminance',
);
globalThis.livingRoomSensorAlarmTypeSensor = entity(
  'sensor.living_room_sensor_alarm_type',
);
globalThis.livingRoomSensorAlarmLevelSensor = entity(
  'sensor.living_room_sensor_alarm_level',
);
globalThis.livingRoomSensorBatteryLevelSensor = entity(
  'sensor.living_room_sensor_battery_level',
);
globalThis.gymSensorAirTemperatureSensor = entity(
  'sensor.gym_sensor_air_temperature',
);
globalThis.gymSensorIlluminanceSensor = entity('sensor.gym_sensor_illuminance');
globalThis.gymSensorAlarmTypeSensor = entity('sensor.gym_sensor_alarm_type');
globalThis.gymSensorAlarmLevelSensor = entity('sensor.gym_sensor_alarm_level');
globalThis.gymSensorBatteryLevelSensor = entity(
  'sensor.gym_sensor_battery_level',
);
globalThis.bedroomSensorAirTemperatureSensor = entity(
  'sensor.bedroom_sensor_air_temperature',
);
globalThis.bedroomSensorIlluminanceSensor = entity(
  'sensor.bedroom_sensor_illuminance',
);
globalThis.bedroomSensorAlarmTypeSensor = entity(
  'sensor.bedroom_sensor_alarm_type',
);
globalThis.bedroomSensorAlarmLevelSensor = entity(
  'sensor.bedroom_sensor_alarm_level',
);
globalThis.bedroomSensorBatteryLevelSensor = entity(
  'sensor.bedroom_sensor_battery_level',
);
globalThis.electricMeterSensor = entity('sensor.electric_meter');
globalThis.tahomaSwitchScHomekitSetupCodeSensor = entity(
  'sensor.tahoma_switch_sc_homekit_setup_code',
);
globalThis.availableUpdatesCountSensor = entity(
  'sensor.available_updates_count',
);
globalThis.aliceSoilMistureFixedSensor = entity(
  'sensor.alice_soil_misture_fixed',
);
globalThis.lowBatteryCountSensor = entity('sensor.low_battery_count');
globalThis.availableUpdatesSensor = entity('sensor.available_updates');
globalThis.imacScreenOffSensor = entity('sensor.imac_screen_off');
globalThis.todaysEventsSensor = entity('sensor.todays_events');
globalThis.weatherForecastSensor = entity('sensor.weather_forecast');
globalThis.currentTvSourceSensor = entity('sensor.current_tv_source');
globalThis.livingRoomTemperatureSensor = entity(
  'sensor.living_room_temperature',
);
globalThis.livingRoomTargetTemperatureSensor = entity(
  'sensor.living_room_target_temperature',
);
globalThis.boilerTargetTemperatureSensor = entity(
  'sensor.boiler_target_temperature',
);
globalThis.livingRoomHeatingModeSensor = entity(
  'sensor.living_room_heating_mode',
);
globalThis.bedroomTemperatureSensor = entity('sensor.bedroom_temperature');
globalThis.bedroomTargetTemperatureSensor = entity(
  'sensor.bedroom_target_temperature',
);
globalThis.bedroomHeatingModeSensor = entity('sensor.bedroom_heating_mode');
globalThis.gymTemperatureSensor = entity('sensor.gym_temperature');
globalThis.gymTargetTemperatureSensor = entity('sensor.gym_target_temperature');
globalThis.gymHeatingModeSensor = entity('sensor.gym_heating_mode');
globalThis.lastTimeLivingRoomMotionSensorWasTriggeredSensor = entity(
  'sensor.last_time_living_room_motion_sensor_was_triggered',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergyCostSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_cost',
);
globalThis.boilerBoostTemperatureSensor = entity(
  'sensor.boiler_boost_temperature',
);
globalThis.tvHeaterPowerSensor = entity('sensor.tv_heater_power');
globalThis.tvHeaterEnergySensor = entity('sensor.tv_heater_energy');
globalThis.diningTableHeaterPowerSensor = entity(
  'sensor.dining_table_heater_power',
);
globalThis.diningTableHeaterEnergySensor = entity(
  'sensor.dining_table_heater_energy',
);
globalThis.hallwayHeaterPowerSensor = entity('sensor.hallway_heater_power');
globalThis.hallwayHeaterEnergySensor = entity('sensor.hallway_heater_energy');
globalThis.bookshelfHeaterPowerSensor = entity('sensor.bookshelf_heater_power');
globalThis.bookshelfHeaterEnergySensor = entity(
  'sensor.bookshelf_heater_energy',
);
globalThis.shellyemA4e57cba73f5Channel_1PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_returned',
);
globalThis.shellyemA4e57cba73f5Channel_1VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_voltage',
);
globalThis.shellyemA4e57cba73f5Channel_1PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power_factor',
);
globalThis.shellyemA4e57cba73f5Channel_2PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power',
);
globalThis.shellyemA4e57cba73f5Channel_2EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy',
);
globalThis.shellyemA4e57cba73f5Channel_2EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy_returned',
);
globalThis.shellyemA4e57cba73f5Channel_2VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_voltage',
);
globalThis.shellyemA4e57cba73f5Channel_2PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power_factor',
);
globalThis.frontDoorBattery_2Sensor = entity('sensor.front_door_battery_2');
globalThis.frontDoorLastActivitySensor = entity(
  'sensor.front_door_last_activity',
);
globalThis.adguardHomeDnsQueriesSensor = entity(
  'sensor.adguard_home_dns_queries',
);
globalThis.adguardHomeSafeBrowsingBlockedSensor = entity(
  'sensor.adguard_home_safe_browsing_blocked',
);
globalThis.adguardHomeDnsQueriesBlockedSensor = entity(
  'sensor.adguard_home_dns_queries_blocked',
);
globalThis.adguardHomeDnsQueriesBlockedRatioSensor = entity(
  'sensor.adguard_home_dns_queries_blocked_ratio',
);
globalThis.adguardHomeParentalControlBlockedSensor = entity(
  'sensor.adguard_home_parental_control_blocked',
);
globalThis.adguardHomeSafeSearchesEnforcedSensor = entity(
  'sensor.adguard_home_safe_searches_enforced',
);
globalThis.adguardHomeAverageProcessingSpeedSensor = entity(
  'sensor.adguard_home_average_processing_speed',
);
globalThis.systemMonitorDiskFreeRunAudioSensor = entity(
  'sensor.system_monitor_disk_free_run_audio',
);
globalThis.systemMonitorDiskFreeSslSensor = entity(
  'sensor.system_monitor_disk_free_ssl',
);
globalThis.systemMonitorDiskFreeConfigSensor = entity(
  'sensor.system_monitor_disk_free_config',
);
globalThis.systemMonitorDiskFreeShareSensor = entity(
  'sensor.system_monitor_disk_free_share',
);
globalThis.systemMonitorDiskFreeMediaSensor = entity(
  'sensor.system_monitor_disk_free_media',
);
globalThis.systemMonitorDiskFreeSensor = entity(
  'sensor.system_monitor_disk_free',
);
globalThis.systemMonitorDiskUseSensor = entity(
  'sensor.system_monitor_disk_use',
);
globalThis.systemMonitorDiskUsageSensor = entity(
  'sensor.system_monitor_disk_usage',
);
globalThis.systemMonitorIpv4AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv4_address_enp1s0',
);
globalThis.systemMonitorIpv6AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv6_address_enp1s0',
);
globalThis.systemMonitorLastBootSensor = entity(
  'sensor.system_monitor_last_boot',
);
globalThis.systemMonitorLoad_15mSensor = entity(
  'sensor.system_monitor_load_15m',
);
globalThis.systemMonitorLoad_1mSensor = entity('sensor.system_monitor_load_1m');
globalThis.systemMonitorLoad_5mSensor = entity('sensor.system_monitor_load_5m');
globalThis.systemMonitorMemoryFreeSensor = entity(
  'sensor.system_monitor_memory_free',
);
globalThis.systemMonitorMemoryUseSensor = entity(
  'sensor.system_monitor_memory_use',
);
globalThis.systemMonitorMemoryUsageSensor = entity(
  'sensor.system_monitor_memory_usage',
);
globalThis.systemMonitorNetworkInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_in_enp1s0',
);
globalThis.systemMonitorNetworkOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_out_enp1s0',
);
globalThis.systemMonitorPacketsInEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_in_enp1s0',
);
globalThis.systemMonitorPacketsOutEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_out_enp1s0',
);
globalThis.systemMonitorNetworkThroughputInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_in_enp1s0',
);
globalThis.systemMonitorNetworkThroughputOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_out_enp1s0',
);
globalThis.systemMonitorProcessorUseSensor = entity(
  'sensor.system_monitor_processor_use',
);
globalThis.systemMonitorProcessorTemperatureSensor = entity(
  'sensor.system_monitor_processor_temperature',
);
globalThis.systemMonitorSwapFreeSensor = entity(
  'sensor.system_monitor_swap_free',
);
globalThis.systemMonitorSwapUseSensor = entity(
  'sensor.system_monitor_swap_use',
);
globalThis.systemMonitorSwapUsageSensor = entity(
  'sensor.system_monitor_swap_usage',
);
globalThis.qbittorrentStatusSensor = entity('sensor.qbittorrent_status');
globalThis.qbittorrentConnectionStatusSensor = entity(
  'sensor.qbittorrent_connection_status',
);
globalThis.qbittorrentDownloadSpeedSensor = entity(
  'sensor.qbittorrent_download_speed',
);
globalThis.qbittorrentUploadSpeedSensor = entity(
  'sensor.qbittorrent_upload_speed',
);
globalThis.qbittorrentAllTimeDownloadSensor = entity(
  'sensor.qbittorrent_all_time_download',
);
globalThis.qbittorrentAllTimeUploadSensor = entity(
  'sensor.qbittorrent_all_time_upload',
);
globalThis.qbittorrentAllTorrentsSensor = entity(
  'sensor.qbittorrent_all_torrents',
);
globalThis.qbittorrentActiveTorrentsSensor = entity(
  'sensor.qbittorrent_active_torrents',
);
globalThis.qbittorrentInactiveTorrentsSensor = entity(
  'sensor.qbittorrent_inactive_torrents',
);
globalThis.qbittorrentPausedTorrentsSensor = entity(
  'sensor.qbittorrent_paused_torrents',
);
globalThis.zteRouterDataReceivedSensor = entity(
  'sensor.zte_router_data_received',
);
globalThis.zteRouterDataSentSensor = entity('sensor.zte_router_data_sent');
globalThis.zteRouterExternalIpSensor = entity('sensor.zte_router_external_ip');
globalThis.zteRouterUptimeSensor = entity('sensor.zte_router_uptime');
globalThis.zteRouterDownloadSpeedSensor = entity(
  'sensor.zte_router_download_speed',
);
globalThis.zteRouterUploadSpeedSensor = entity(
  'sensor.zte_router_upload_speed',
);
globalThis.octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor = entity(
  'sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_electricity',
);
globalThis.octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor = entity(
  'sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_gas',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_rate',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_rate',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_next_rate',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_standing_charge',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_consumption',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_cost',
  );
globalThis.homeNearestDeviceSensor = entity('sensor.home_nearest_device');
globalThis.homeNearestDistanceSensor = entity('sensor.home_nearest_distance');
globalThis.homeNearestDirectionOfTravelSensor = entity(
  'sensor.home_nearest_direction_of_travel',
);
globalThis.homeMeDistanceSensor = entity('sensor.home_me_distance');
globalThis.homeMeDirectionOfTravelSensor = entity(
  'sensor.home_me_direction_of_travel',
);
globalThis.home_2NearestDeviceSensor = entity('sensor.home_2_nearest_device');
globalThis.home_2NearestDistanceSensor = entity(
  'sensor.home_2_nearest_distance',
);
globalThis.home_2NearestDirectionOfTravelSensor = entity(
  'sensor.home_2_nearest_direction_of_travel',
);
globalThis.home_2MeDistanceSensor = entity('sensor.home_2_me_distance');
globalThis.home_2MeDirectionOfTravelSensor = entity(
  'sensor.home_2_me_direction_of_travel',
);
globalThis.tumbleDryerSmartPlugSignalLevelSensor = entity(
  'sensor.tumble_dryer_smart_plug_signal_level',
);
globalThis.tumbleDryerSmartPlugAutoOffAtSensor = entity(
  'sensor.tumble_dryer_smart_plug_auto_off_at',
);
globalThis.tumbleDryerSmartPlugCurrentConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_current_consumption',
);
globalThis.tumbleDryerSmartPlugTodaySConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_today_s_consumption',
);
globalThis.tumbleDryerSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_this_month_s_consumption',
);
globalThis.tumbleDryerSmartPlugVoltageSensor = entity(
  'sensor.tumble_dryer_smart_plug_voltage',
);
globalThis.tumbleDryerSmartPlugCurrentSensor = entity(
  'sensor.tumble_dryer_smart_plug_current',
);
globalThis.watchmanLastUpdatedSensor = entity('sensor.watchman_last_updated');
globalThis.watchmanMissingEntitiesSensor = entity(
  'sensor.watchman_missing_entities',
);
globalThis.watchmanMissingActionsSensor = entity(
  'sensor.watchman_missing_actions',
);
globalThis.wearingClapper2TrophyLevelSensor = entity(
  'sensor.wearing_clapper2_trophy_level',
);
globalThis.wearingClapper2StatusSensor = entity(
  'sensor.wearing_clapper2_status',
);
globalThis.playstationPlaystationPlusSensor = entity(
  'sensor.playstation_playstation_plus',
);
globalThis.playstationAboutMeSensor = entity('sensor.playstation_about_me');
globalThis.aliceIlluminanceSensor = entity('sensor.alice_illuminance');
globalThis.aliceConductivitySensor = entity('sensor.alice_conductivity');
globalThis.aliceSoilMoistureSensor = entity('sensor.alice_soil_moisture');
globalThis.aliceTemperatureSensor = entity('sensor.alice_temperature');
globalThis.aliceAirHumiditySensor = entity('sensor.alice_air_humidity');
globalThis.alicePpfdMolSensor = entity('sensor.alice_ppfd_mol');
globalThis.aliceTotalPpfdMolIntegralSensor = entity(
  'sensor.alice_total_ppfd_mol_integral',
);
globalThis.aliceDliSensor = entity('sensor.alice_dli');
globalThis.frontDoorBatterySensor = entity('sensor.front_door_battery');
globalThis.frontDoorFirmwareVersionSensor = entity(
  'sensor.front_door_firmware_version',
);
globalThis.bathroomMotionSensorTemperatureSensor = entity(
  'sensor.bathroom_motion_sensor_temperature',
);
globalThis.bathroomMotionSensorBatterySensor = entity(
  'sensor.bathroom_motion_sensor_battery',
);
globalThis.hallwayMotionSensorTemperatureSensor = entity(
  'sensor.hallway_motion_sensor_temperature',
);
globalThis.hallwayMotionSensorBatterySensor = entity(
  'sensor.hallway_motion_sensor_battery',
);
globalThis.zigbee2mqttBridgeVersionSensor = entity(
  'sensor.zigbee2mqtt_bridge_version',
);
globalThis.sonosArcUltraAudioInputFormatSensor = entity(
  'sensor.sonos_arc_ultra_audio_input_format',
);
globalThis.icloud3EventLogSensor = entity('sensor.icloud3_event_log');
globalThis.icloud3WazehistTrackSensor = entity('sensor.icloud3_wazehist_track');
globalThis.bensIphoneBadgeSensor = entity('sensor.bens_iphone_badge');
globalThis.bensIphoneLastUpdateSensor = entity(
  'sensor.bens_iphone_last_update',
);
globalThis.bensIphoneIntervalSensor = entity('sensor.bens_iphone_interval');
globalThis.bensIphoneBatterySensor = entity('sensor.bens_iphone_battery');
globalThis.bensIphoneMovedDistanceSensor = entity(
  'sensor.bens_iphone_moved_distance',
);
globalThis.bensIphoneDirOfTravelSensor = entity(
  'sensor.bens_iphone_dir_of_travel',
);
globalThis.bensIphoneNameSensor = entity('sensor.bens_iphone_name');
globalThis.bensIphoneHomeDistanceSensor = entity(
  'sensor.bens_iphone_home_distance',
);
globalThis.bensIphoneLastLocatedSensor = entity(
  'sensor.bens_iphone_last_located',
);
globalThis.bensIphoneArrivalTimeSensor = entity(
  'sensor.bens_iphone_arrival_time',
);
globalThis.bensIphoneNextUpdateSensor = entity(
  'sensor.bens_iphone_next_update',
);
globalThis.bensIphoneTravelTimeMinSensor = entity(
  'sensor.bens_iphone_travel_time_min',
);
globalThis.bensIphoneBatteryStatusSensor = entity(
  'sensor.bens_iphone_battery_status',
);
globalThis.bensIphoneInfoSensor = entity('sensor.bens_iphone_info');
globalThis.bensIphoneZoneDistanceSensor = entity(
  'sensor.bens_iphone_zone_distance',
);
globalThis.bensIphoneZoneNameSensor = entity('sensor.bens_iphone_zone_name');
globalThis.bensIphoneTravelTimeSensor = entity(
  'sensor.bens_iphone_travel_time',
);
globalThis.icalBenSCalendarEvent_0Sensor = entity(
  'sensor.ical_ben_s_calendar_event_0',
);
globalThis.icalBenSCalendarEvent_1Sensor = entity(
  'sensor.ical_ben_s_calendar_event_1',
);
globalThis.icalBenSCalendarEvent_2Sensor = entity(
  'sensor.ical_ben_s_calendar_event_2',
);
globalThis.icalBenSCalendarEvent_3Sensor = entity(
  'sensor.ical_ben_s_calendar_event_3',
);
globalThis.icalBenSCalendarEvent_4Sensor = entity(
  'sensor.ical_ben_s_calendar_event_4',
);
globalThis.icalBenSCalendarEvent_5Sensor = entity(
  'sensor.ical_ben_s_calendar_event_5',
);
globalThis.icalBenSCalendarEvent_6Sensor = entity(
  'sensor.ical_ben_s_calendar_event_6',
);
globalThis.icalBenSCalendarEvent_7Sensor = entity(
  'sensor.ical_ben_s_calendar_event_7',
);
globalThis.icalBenSCalendarEvent_8Sensor = entity(
  'sensor.ical_ben_s_calendar_event_8',
);
globalThis.icalBenSCalendarEvent_9Sensor = entity(
  'sensor.ical_ben_s_calendar_event_9',
);
globalThis.benSSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_alarm',
);
globalThis.benSSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_timer',
);
globalThis.benSSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_reminder',
);
globalThis.bedroomSpeakerNextAlarmSensor = entity(
  'sensor.bedroom_speaker_next_alarm',
);
globalThis.bedroomSpeakerNextTimerSensor = entity(
  'sensor.bedroom_speaker_next_timer',
);
globalThis.bedroomSpeakerNextReminderSensor = entity(
  'sensor.bedroom_speaker_next_reminder',
);
globalThis.officeNextAlarmSensor = entity('sensor.office_next_alarm');
globalThis.officeNextTimerSensor = entity('sensor.office_next_timer');
globalThis.officeNextReminderSensor = entity('sensor.office_next_reminder');
globalThis.benS_2ndSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_alarm',
);
globalThis.benS_2ndSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_timer',
);
globalThis.benS_2ndSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_reminder',
);
globalThis.benS_3rdSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_alarm',
);
globalThis.benS_3rdSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_timer',
);
globalThis.benS_3rdSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_reminder',
);
globalThis.livingRoomNextAlarmSensor = entity('sensor.living_room_next_alarm');
globalThis.livingRoomNextTimerSensor = entity('sensor.living_room_next_timer');
globalThis.livingRoomNextReminderSensor = entity(
  'sensor.living_room_next_reminder',
);
globalThis.sonosArcUltraNextAlarmSensor = entity(
  'sensor.sonos_arc_ultra_next_alarm',
);
globalThis.sonosArcUltraNextTimerSensor = entity(
  'sensor.sonos_arc_ultra_next_timer',
);
globalThis.sonosArcUltraNextReminderSensor = entity(
  'sensor.sonos_arc_ultra_next_reminder',
);
globalThis.livingRoomSonosNextAlarmSensor = entity(
  'sensor.living_room_sonos_next_alarm',
);
globalThis.livingRoomSonosNextTimerSensor = entity(
  'sensor.living_room_sonos_next_timer',
);
globalThis.livingRoomSonosNextReminderSensor = entity(
  'sensor.living_room_sonos_next_reminder',
);
globalThis.thisDeviceNextAlarm_2Sensor = entity(
  'sensor.this_device_next_alarm_2',
);
globalThis.thisDeviceNextTimer_2Sensor = entity(
  'sensor.this_device_next_timer_2',
);
globalThis.thisDeviceNextReminder_2Sensor = entity(
  'sensor.this_device_next_reminder_2',
);
globalThis.livingRoomSensorCoverStatusSensor = entity(
  'sensor.living_room_sensor_cover_status',
);
globalThis.livingRoomSensorMotionSensorStatusSensor = entity(
  'sensor.living_room_sensor_motion_sensor_status',
);
globalThis.gymSensorCoverStatusSensor = entity(
  'sensor.gym_sensor_cover_status',
);
globalThis.gymSensorMotionSensorStatusSensor = entity(
  'sensor.gym_sensor_motion_sensor_status',
);
globalThis.bedroomSensorCoverStatusSensor = entity(
  'sensor.bedroom_sensor_cover_status',
);
globalThis.bedroomSensorMotionSensorStatusSensor = entity(
  'sensor.bedroom_sensor_motion_sensor_status',
);
globalThis.automationLogEntitySensor = entity('sensor.automation_log_entity');
globalThis.zStickGen5UsbControllerBasicSensor = entity(
  'sensor.z_stick_gen5_usb_controller_basic',
);
globalThis.goodMorningMessageSensor = entity('sensor.good_morning_message');
globalThis.livingRoomOccupiedSensor = entity('sensor.living_room_occupied');
globalThis.systemMonitorIpv4AddressWlan0Sensor = entity(
  'sensor.system_monitor_ipv4_address_wlan0',
);
globalThis.homeAssistantServerAutoOffAtSensor = entity(
  'sensor.home_assistant_server_auto_off_at',
);
globalThis.homeAssistantServerCurrentConsumptionSensor = entity(
  'sensor.home_assistant_server_current_consumption',
);
globalThis.homeAssistantServerSignalLevelSensor = entity(
  'sensor.home_assistant_server_signal_level',
);
globalThis.homeAssistantServerThisMonthSConsumptionSensor = entity(
  'sensor.home_assistant_server_this_month_s_consumption',
);
globalThis.homeAssistantServerTodaySConsumptionSensor = entity(
  'sensor.home_assistant_server_today_s_consumption',
);
globalThis.imacSmartPlugAutoOffAt_2Sensor = entity(
  'sensor.imac_smart_plug_auto_off_at_2',
);
globalThis.imacSmartPlugCurrentConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_current_consumption_2',
);
globalThis.imacSmartPlugSignalLevel_2Sensor = entity(
  'sensor.imac_smart_plug_signal_level_2',
);
globalThis.imacSmartPlugThisMonthSConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_this_month_s_consumption_2',
);
globalThis.imacSmartPlugTodaySConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_today_s_consumption_2',
);
globalThis.livingRoomHeaterSmartPlugAutoOffAtSensor = entity(
  'sensor.living_room_heater_smart_plug_auto_off_at',
);
globalThis.livingRoomHeaterSmartPlugCurrentConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_current_consumption',
);
globalThis.livingRoomHeaterSmartPlugSignalLevelSensor = entity(
  'sensor.living_room_heater_smart_plug_signal_level',
);
globalThis.livingRoomHeaterSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_this_month_s_consumption',
);
globalThis.livingRoomHeaterSmartPlugTodaySConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_today_s_consumption',
);
globalThis.lastUnlockerSensor = entity('sensor.last_unlocker');
globalThis.frontDoorDoorbellMqttBattery_3Sensor = entity(
  'sensor.front_door_doorbell_mqtt_battery_3',
);
globalThis.frontDoorDoorbellMqttInfoSensor = entity(
  'sensor.front_door_doorbell_mqtt_info',
);
globalThis.frontDoorDoorbellMqttWirelessSensor = entity(
  'sensor.front_door_doorbell_mqtt_wireless',
);
globalThis.batterySensor = entity('sensor.battery');
globalThis.battery_2Sensor = entity('sensor.battery_2');
globalThis.magicKeyboardWithNumericKeypadBatteryBatterySensor = entity(
  'sensor.magic_keyboard_with_numeric_keypad_battery_battery',
);
globalThis.magicMouseBatteryBatterySensor = entity(
  'sensor.magic_mouse_battery_battery',
);
globalThis.undefinedBatteryBatterySensor = entity(
  'sensor.undefined_battery_battery',
);
globalThis.icalIcalBenSCalendarEvent_0Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_0',
);
globalThis.icalIcalBenSCalendarEvent_1Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_1',
);
globalThis.icalIcalBenSCalendarEvent_2Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_2',
);
globalThis.icalIcalBenSCalendarEvent_3Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_3',
);
globalThis.icalIcalBenSCalendarEvent_4Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_4',
);
globalThis.icalIcalBenSCalendarEvent_5Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_5',
);
globalThis.icalIcalBenSCalendarEvent_6Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_6',
);
globalThis.icalIcalBenSCalendarEvent_7Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_7',
);
globalThis.icalIcalBenSCalendarEvent_8Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_8',
);
globalThis.icalIcalBenSCalendarEvent_9Sensor = entity(
  'sensor.ical_ical_ben_s_calendar_event_9',
);
globalThis.tp357sD5f7SignalStrengthSensor = entity(
  'sensor.tp357s_d5f7_signal_strength',
);
globalThis.tp357sD5f7BatterySensor = entity('sensor.tp357s_d5f7_battery');
globalThis.tp357sD5f7TemperatureSensor = entity(
  'sensor.tp357s_d5f7_temperature',
);
globalThis.tp357sD5f7HumiditySensor = entity('sensor.tp357s_d5f7_humidity');
globalThis.spotifyBenWainwrightSongTempoSensor = entity(
  'sensor.spotify_ben_wainwright_song_tempo',
);
globalThis.homeAssistantServerVoltageSensor = entity(
  'sensor.home_assistant_server_voltage',
);
globalThis.homeAssistantServerCurrentSensor = entity(
  'sensor.home_assistant_server_current',
);
globalThis.livingRoomHeaterSmartPlugVoltageSensor = entity(
  'sensor.living_room_heater_smart_plug_voltage',
);
globalThis.livingRoomHeaterSmartPlugCurrentSensor = entity(
  'sensor.living_room_heater_smart_plug_current',
);
globalThis.imacSmartPlugVoltageSensor = entity(
  'sensor.imac_smart_plug_voltage',
);
globalThis.imacSmartPlugCurrentSensor = entity(
  'sensor.imac_smart_plug_current',
);
globalThis.boilerBoostTimeRemainingSensor = entity(
  'sensor.boiler_boost_time_remaining',
);
globalThis.gw1100aIndoorHumiditySensor = entity(
  'sensor.gw1100a_indoor_humidity',
);
globalThis.gw1100aSoilMoisture_1Sensor = entity(
  'sensor.gw1100a_soil_moisture_1',
);
globalThis.gw1100aSoilMoisture_3Sensor = entity(
  'sensor.gw1100a_soil_moisture_3',
);
globalThis.gw1100aSoilMoisture_4Sensor = entity(
  'sensor.gw1100a_soil_moisture_4',
);
globalThis.gw1100aSoilBattery_1Sensor = entity('sensor.gw1100a_soil_battery_1');
globalThis.gw1100aSoilBattery_2Sensor = entity('sensor.gw1100a_soil_battery_2');
globalThis.gw1100aSoilBattery_3Sensor = entity('sensor.gw1100a_soil_battery_3');
globalThis.gw1100aSoilBattery_4Sensor = entity('sensor.gw1100a_soil_battery_4');
globalThis.gw1100aIndoorTemperatureSensor = entity(
  'sensor.gw1100a_indoor_temperature',
);
globalThis.gw1100aRelativePressureSensor = entity(
  'sensor.gw1100a_relative_pressure',
);
globalThis.gw1100aAbsolutePressureSensor = entity(
  'sensor.gw1100a_absolute_pressure',
);
globalThis.gw1100aIndoorDewpointSensor = entity(
  'sensor.gw1100a_indoor_dewpoint',
);
globalThis.aliceMoistureSensor = entity('sensor.alice_moisture');
