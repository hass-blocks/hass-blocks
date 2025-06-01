import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Ring-MQTT with Video Streaming CPU percent
   */
  var ringMqttWithVideoStreamingCpuPercentSensor: IEntity<`sensor.ring_mqtt_with_video_streaming_cpu_percent`>;
  /**
   * Ring-MQTT with Video Streaming Memory percent
   */
  var ringMqttWithVideoStreamingMemoryPercentSensor: IEntity<`sensor.ring_mqtt_with_video_streaming_memory_percent`>;
  /**
   * Backup Backup Manager state
   */
  var backupBackupManagerStateSensor: IEntity<`sensor.backup_backup_manager_state`>;
  /**
   * Backup Next scheduled automatic backup
   */
  var backupNextScheduledAutomaticBackupSensor: IEntity<`sensor.backup_next_scheduled_automatic_backup`>;
  /**
   * Backup Last successful automatic backup
   */
  var backupLastSuccessfulAutomaticBackupSensor: IEntity<`sensor.backup_last_successful_automatic_backup`>;
  /**
   * Date & Time (ISO)
   */
  var dateTimeIsoSensor: IEntity<`sensor.date_time_iso`>;
  /**
   * Sun Next dawn
   */
  var sunNextDawnSensor: IEntity<`sensor.sun_next_dawn`>;
  /**
   * Sun Next dusk
   */
  var sunNextDuskSensor: IEntity<`sensor.sun_next_dusk`>;
  /**
   * Sun Next midnight
   */
  var sunNextMidnightSensor: IEntity<`sensor.sun_next_midnight`>;
  /**
   * Sun Next noon
   */
  var sunNextNoonSensor: IEntity<`sensor.sun_next_noon`>;
  /**
   * Sun Next rising
   */
  var sunNextRisingSensor: IEntity<`sensor.sun_next_rising`>;
  /**
   * Sun Next setting
   */
  var sunNextSettingSensor: IEntity<`sensor.sun_next_setting`>;
  /**
   * Mums phone Battery Level
   */
  var mumsPhoneBatteryLevelSensor: IEntity<`sensor.mums_phone_battery_level`>;
  /**
   * Mums phone Battery State
   */
  var mumsPhoneBatteryStateSensor: IEntity<`sensor.mums_phone_battery_state`>;
  /**
   * Mums phone Charger Type
   */
  var mumsPhoneChargerTypeSensor: IEntity<`sensor.mums_phone_charger_type`>;
  /**
   * Ben’s iMac Pro Storage
   */
  var bensImacProStorageSensor: IEntity<`sensor.bens_imac_pro_storage`>;
  /**
   * Ben’s iMac Pro SSID
   */
  var bensImacProSsidSensor: IEntity<`sensor.bens_imac_pro_ssid`>;
  /**
   * Ben’s iMac Pro Active Audio Input
   */
  var bensImacProActiveAudioInputSensor: IEntity<`sensor.bens_imac_pro_active_audio_input`>;
  /**
   * Ben’s iMac Pro Active Audio Output
   */
  var bensImacProActiveAudioOutputSensor: IEntity<`sensor.bens_imac_pro_active_audio_output`>;
  /**
   * Ben’s iMac Pro BSSID
   */
  var bensImacProBssidSensor: IEntity<`sensor.bens_imac_pro_bssid`>;
  /**
   * Ben’s iMac Pro Active Camera
   */
  var bensImacProActiveCameraSensor: IEntity<`sensor.bens_imac_pro_active_camera`>;
  /**
   * Ben’s iMac Pro Connection Type
   */
  var bensImacProConnectionTypeSensor: IEntity<`sensor.bens_imac_pro_connection_type`>;
  /**
   * Ben’s iMac Pro Displays
   */
  var bensImacProDisplaysSensor: IEntity<`sensor.bens_imac_pro_displays`>;
  /**
   * Ben’s iMac Pro Primary Display Name
   */
  var bensImacProPrimaryDisplayNameSensor: IEntity<`sensor.bens_imac_pro_primary_display_name`>;
  /**
   * Ben’s iMac Pro Primary Display ID
   */
  var bensImacProPrimaryDisplayIdSensor: IEntity<`sensor.bens_imac_pro_primary_display_id`>;
  /**
   * Ben’s iMac Pro Frontmost App
   */
  var bensImacProFrontmostAppSensor: IEntity<`sensor.bens_imac_pro_frontmost_app`>;
  /**
   * Ben’s iMac Pro Last Update Trigger
   */
  var bensImacProLastUpdateTriggerSensor: IEntity<`sensor.bens_imac_pro_last_update_trigger`>;
  /**
   * Ben’s iMac Pro App Version
   */
  var bensImacProAppVersionSensor: IEntity<`sensor.bens_imac_pro_app_version`>;
  /**
   * Ben’s iMac Pro Location permission
   */
  var bensImacProLocationPermissionSensor: IEntity<`sensor.bens_imac_pro_location_permission`>;
  /**
   * Ben’s iMac Pro Geocoded Location
   */
  var bensImacProGeocodedLocationSensor: IEntity<`sensor.bens_imac_pro_geocoded_location`>;
  /**
   * Ben’s iPhone Activity
   */
  var bensIphoneActivitySensor: IEntity<`sensor.bens_iphone_activity`>;
  /**
   * Ben’s iPhone Average Active Pace
   */
  var bensIphoneAverageActivePaceSensor: IEntity<`sensor.bens_iphone_average_active_pace`>;
  /**
   * Ben’s iPhone Floors Ascended
   */
  var bensIphoneFloorsAscendedSensor: IEntity<`sensor.bens_iphone_floors_ascended`>;
  /**
   * Ben’s iPhone Floors Descended
   */
  var bensIphoneFloorsDescendedSensor: IEntity<`sensor.bens_iphone_floors_descended`>;
  /**
   * Ben’s iPhone Battery Level
   */
  var bensIphoneBatteryLevelSensor: IEntity<`sensor.bens_iphone_battery_level`>;
  /**
   * Ben’s iPhone Battery State
   */
  var bensIphoneBatteryStateSensor: IEntity<`sensor.bens_iphone_battery_state`>;
  /**
   * Ben’s iPhone Storage
   */
  var bensIphoneStorageSensor: IEntity<`sensor.bens_iphone_storage`>;
  /**
   * Ben’s iPhone SSID
   */
  var bensIphoneSsidSensor: IEntity<`sensor.bens_iphone_ssid`>;
  /**
   * Ben’s iPhone BSSID
   */
  var bensIphoneBssidSensor: IEntity<`sensor.bens_iphone_bssid`>;
  /**
   * Ben’s iPhone Connection Type
   */
  var bensIphoneConnectionTypeSensor: IEntity<`sensor.bens_iphone_connection_type`>;
  /**
   * Ben’s iPhone SIM 1
   */
  var bensIphoneSim_1Sensor: IEntity<`sensor.bens_iphone_sim_1`>;
  /**
   * Ben’s iPhone Geocoded Location
   */
  var bensIphoneGeocodedLocationSensor: IEntity<`sensor.bens_iphone_geocoded_location`>;
  /**
   * Ben’s iPhone SIM 2
   */
  var bensIphoneSim_2Sensor: IEntity<`sensor.bens_iphone_sim_2`>;
  /**
   * Ben’s iPhone Distance
   */
  var bensIphoneDistanceSensor: IEntity<`sensor.bens_iphone_distance`>;
  /**
   * Ben’s iPhone Steps
   */
  var bensIphoneStepsSensor: IEntity<`sensor.bens_iphone_steps`>;
  /**
   * Ben’s iPhone Last Update Trigger
   */
  var bensIphoneLastUpdateTriggerSensor: IEntity<`sensor.bens_iphone_last_update_trigger`>;
  /**
   * Ben’s iPhone Watch Battery Level
   */
  var bensIphoneWatchBatteryLevelSensor: IEntity<`sensor.bens_iphone_watch_battery_level`>;
  /**
   * Ben’s iPhone Watch Battery State
   */
  var bensIphoneWatchBatteryStateSensor: IEntity<`sensor.bens_iphone_watch_battery_state`>;
  /**
   * Ben’s iPhone App Version
   */
  var bensIphoneAppVersionSensor: IEntity<`sensor.bens_iphone_app_version`>;
  /**
   * Ben’s iPhone Location permission
   */
  var bensIphoneLocationPermissionSensor: IEntity<`sensor.bens_iphone_location_permission`>;
  /**
   * Ben’s iPhone Audio Output
   */
  var bensIphoneAudioOutputSensor: IEntity<`sensor.bens_iphone_audio_output`>;
  /**
   * Ben’s iMac Storage
   */
  var bensImacStorageSensor: IEntity<`sensor.bens_imac_storage`>;
  /**
   * Ben’s iMac BSSID
   */
  var bensImacBssidSensor: IEntity<`sensor.bens_imac_bssid`>;
  /**
   * Ben’s iMac Connection Type
   */
  var bensImacConnectionTypeSensor: IEntity<`sensor.bens_imac_connection_type`>;
  /**
   * Ben’s iMac SSID
   */
  var bensImacSsidSensor: IEntity<`sensor.bens_imac_ssid`>;
  /**
   * Ben’s iMac Active Camera
   */
  var bensImacActiveCameraSensor: IEntity<`sensor.bens_imac_active_camera`>;
  /**
   * Ben’s iMac Geocoded Location
   */
  var bensImacGeocodedLocationSensor: IEntity<`sensor.bens_imac_geocoded_location`>;
  /**
   * Ben’s iMac Active Audio Input
   */
  var bensImacActiveAudioInputSensor: IEntity<`sensor.bens_imac_active_audio_input`>;
  /**
   * Ben’s iMac Active Audio Output
   */
  var bensImacActiveAudioOutputSensor: IEntity<`sensor.bens_imac_active_audio_output`>;
  /**
   * Ben’s iMac Displays
   */
  var bensImacDisplaysSensor: IEntity<`sensor.bens_imac_displays`>;
  /**
   * Ben’s iMac Primary Display Name
   */
  var bensImacPrimaryDisplayNameSensor: IEntity<`sensor.bens_imac_primary_display_name`>;
  /**
   * Ben’s iMac Primary Display ID
   */
  var bensImacPrimaryDisplayIdSensor: IEntity<`sensor.bens_imac_primary_display_id`>;
  /**
   * Ben’s iMac Frontmost App
   */
  var bensImacFrontmostAppSensor: IEntity<`sensor.bens_imac_frontmost_app`>;
  /**
   * Ben’s iMac Last Update Trigger
   */
  var bensImacLastUpdateTriggerSensor: IEntity<`sensor.bens_imac_last_update_trigger`>;
  /**
   * Ben’s iMac App Version
   */
  var bensImacAppVersionSensor: IEntity<`sensor.bens_imac_app_version`>;
  /**
   * Ben’s iMac Location permission
   */
  var bensImacLocationPermissionSensor: IEntity<`sensor.bens_imac_location_permission`>;
  /**
   * Ryan’s iPhone SSID
   */
  var ryansIphoneSsidSensor: IEntity<`sensor.ryans_iphone_ssid`>;
  /**
   * Ryan’s iPhone Battery State
   */
  var ryansIphoneBatteryStateSensor: IEntity<`sensor.ryans_iphone_battery_state`>;
  /**
   * Ryan’s iPhone Storage
   */
  var ryansIphoneStorageSensor: IEntity<`sensor.ryans_iphone_storage`>;
  /**
   * Ryan’s iPhone Battery Level
   */
  var ryansIphoneBatteryLevelSensor: IEntity<`sensor.ryans_iphone_battery_level`>;
  /**
   * Ryan’s iPhone BSSID
   */
  var ryansIphoneBssidSensor: IEntity<`sensor.ryans_iphone_bssid`>;
  /**
   * Ryan’s iPhone Connection Type
   */
  var ryansIphoneConnectionTypeSensor: IEntity<`sensor.ryans_iphone_connection_type`>;
  /**
   * Ryan’s iPhone Last Update Trigger
   */
  var ryansIphoneLastUpdateTriggerSensor: IEntity<`sensor.ryans_iphone_last_update_trigger`>;
  /**
   * Ryan’s iPhone Geocoded Location
   */
  var ryansIphoneGeocodedLocationSensor: IEntity<`sensor.ryans_iphone_geocoded_location`>;
  /**
   * Ryan’s iPhone Location permission
   */
  var ryansIphoneLocationPermissionSensor: IEntity<`sensor.ryans_iphone_location_permission`>;
  /**
   * Ryan’s iPhone App Version
   */
  var ryansIphoneAppVersionSensor: IEntity<`sensor.ryans_iphone_app_version`>;
  /**
   * Ryan’s iPhone SIM 1
   */
  var ryansIphoneSim_1Sensor: IEntity<`sensor.ryans_iphone_sim_1`>;
  /**
   * Ryan’s iPhone SIM 2
   */
  var ryansIphoneSim_2Sensor: IEntity<`sensor.ryans_iphone_sim_2`>;
  /**
   * Ryan’s iPhone Audio Output
   */
  var ryansIphoneAudioOutputSensor: IEntity<`sensor.ryans_iphone_audio_output`>;
  /**
   * Ryan’s iPhone Activity
   */
  var ryansIphoneActivitySensor: IEntity<`sensor.ryans_iphone_activity`>;
  /**
   * Ryan’s iPhone Distance
   */
  var ryansIphoneDistanceSensor: IEntity<`sensor.ryans_iphone_distance`>;
  /**
   * Ryan’s iPhone Floors Descended
   */
  var ryansIphoneFloorsDescendedSensor: IEntity<`sensor.ryans_iphone_floors_descended`>;
  /**
   * Ryan’s iPhone Floors Ascended
   */
  var ryansIphoneFloorsAscendedSensor: IEntity<`sensor.ryans_iphone_floors_ascended`>;
  /**
   * Ryan’s iPhone Steps
   */
  var ryansIphoneStepsSensor: IEntity<`sensor.ryans_iphone_steps`>;
  /**
   * Ryan’s iPhone Average Active Pace
   */
  var ryansIphoneAverageActivePaceSensor: IEntity<`sensor.ryans_iphone_average_active_pace`>;
  /**
   * Ryan’s iPhone Watch Battery Level
   */
  var ryansIphoneWatchBatteryLevelSensor: IEntity<`sensor.ryans_iphone_watch_battery_level`>;
  /**
   * Ryan’s iPhone Watch Battery State
   */
  var ryansIphoneWatchBatteryStateSensor: IEntity<`sensor.ryans_iphone_watch_battery_state`>;
  /**
   * Pixel 6 Pro Battery level
   */
  var pixel_6ProBatteryLevelSensor: IEntity<`sensor.pixel_6_pro_battery_level`>;
  /**
   * Pixel 6 Pro Battery state
   */
  var pixel_6ProBatteryStateSensor: IEntity<`sensor.pixel_6_pro_battery_state`>;
  /**
   * Pixel 6 Pro Charger type
   */
  var pixel_6ProChargerTypeSensor: IEntity<`sensor.pixel_6_pro_charger_type`>;
  /**
   * Tom's Pixel 7 Battery level
   */
  var tomSPixel_7BatteryLevelSensor: IEntity<`sensor.tom_s_pixel_7_battery_level`>;
  /**
   * Tom's Pixel 7 Battery state
   */
  var tomSPixel_7BatteryStateSensor: IEntity<`sensor.tom_s_pixel_7_battery_state`>;
  /**
   * Tom's Pixel 7 Charger type
   */
  var tomSPixel_7ChargerTypeSensor: IEntity<`sensor.tom_s_pixel_7_charger_type`>;
  /**
   * Z‐Stick Gen5 USB Controller Status
   */
  var zStickGen5UsbControllerStatusSensor: IEntity<`sensor.z_stick_gen5_usb_controller_status`>;
  /**
   * Living Room Heating Switch Node status
   */
  var livingRoomHeatingSwitchNodeStatusSensor: IEntity<`sensor.living_room_heating_switch_node_status`>;
  /**
   * Living Room Heating Switch Last seen
   */
  var livingRoomHeatingSwitchLastSeenSensor: IEntity<`sensor.living_room_heating_switch_last_seen`>;
  /**
   * Bedroom Heating Switch Node status
   */
  var bedroomHeatingSwitchNodeStatusSensor: IEntity<`sensor.bedroom_heating_switch_node_status`>;
  /**
   * Bedroom Heating Switch Last seen
   */
  var bedroomHeatingSwitchLastSeenSensor: IEntity<`sensor.bedroom_heating_switch_last_seen`>;
  /**
   * Gym Heating Switch Node status
   */
  var gymHeatingSwitchNodeStatusSensor: IEntity<`sensor.gym_heating_switch_node_status`>;
  /**
   * Gym Heating Switch Last seen
   */
  var gymHeatingSwitchLastSeenSensor: IEntity<`sensor.gym_heating_switch_last_seen`>;
  /**
   * Living Room Sensor Node status
   */
  var livingRoomSensorNodeStatusSensor: IEntity<`sensor.living_room_sensor_node_status`>;
  /**
   * Living Room Sensor Last seen
   */
  var livingRoomSensorLastSeenSensor: IEntity<`sensor.living_room_sensor_last_seen`>;
  /**
   * Gym Sensor Node status
   */
  var gymSensorNodeStatusSensor: IEntity<`sensor.gym_sensor_node_status`>;
  /**
   * Gym Sensor Last seen
   */
  var gymSensorLastSeenSensor: IEntity<`sensor.gym_sensor_last_seen`>;
  /**
   * Bedroom Sensor Node status
   */
  var bedroomSensorNodeStatusSensor: IEntity<`sensor.bedroom_sensor_node_status`>;
  /**
   * Bedroom Sensor Last seen
   */
  var bedroomSensorLastSeenSensor: IEntity<`sensor.bedroom_sensor_last_seen`>;
  /**
   * Living Room Sensor Air temperature
   */
  var livingRoomSensorAirTemperatureSensor: IEntity<`sensor.living_room_sensor_air_temperature`>;
  /**
   * Living Room Sensor Illuminance
   */
  var livingRoomSensorIlluminanceSensor: IEntity<`sensor.living_room_sensor_illuminance`>;
  /**
   * Living Room Sensor Alarm Type
   */
  var livingRoomSensorAlarmTypeSensor: IEntity<`sensor.living_room_sensor_alarm_type`>;
  /**
   * Living Room Sensor Alarm Level
   */
  var livingRoomSensorAlarmLevelSensor: IEntity<`sensor.living_room_sensor_alarm_level`>;
  /**
   * Living Room Sensor
   */
  var livingRoomSensorBatteryLevelSensor: IEntity<`sensor.living_room_sensor_battery_level`>;
  /**
   * Gym Sensor Air temperature
   */
  var gymSensorAirTemperatureSensor: IEntity<`sensor.gym_sensor_air_temperature`>;
  /**
   * Gym Sensor Illuminance
   */
  var gymSensorIlluminanceSensor: IEntity<`sensor.gym_sensor_illuminance`>;
  /**
   * Gym Sensor Alarm Type
   */
  var gymSensorAlarmTypeSensor: IEntity<`sensor.gym_sensor_alarm_type`>;
  /**
   * Gym Sensor Alarm Level
   */
  var gymSensorAlarmLevelSensor: IEntity<`sensor.gym_sensor_alarm_level`>;
  /**
   * Gym Sensor Battery level
   */
  var gymSensorBatteryLevelSensor: IEntity<`sensor.gym_sensor_battery_level`>;
  /**
   * Bedroom Sensor Air temperature
   */
  var bedroomSensorAirTemperatureSensor: IEntity<`sensor.bedroom_sensor_air_temperature`>;
  /**
   * Bedroom Sensor Illuminance
   */
  var bedroomSensorIlluminanceSensor: IEntity<`sensor.bedroom_sensor_illuminance`>;
  /**
   * Bedroom Sensor Alarm Type
   */
  var bedroomSensorAlarmTypeSensor: IEntity<`sensor.bedroom_sensor_alarm_type`>;
  /**
   * Bedroom Sensor Alarm Level
   */
  var bedroomSensorAlarmLevelSensor: IEntity<`sensor.bedroom_sensor_alarm_level`>;
  /**
   * Bedroom Sensor
   */
  var bedroomSensorBatteryLevelSensor: IEntity<`sensor.bedroom_sensor_battery_level`>;
  /**
   * Electric Meter
   */
  var electricMeterSensor: IEntity<`sensor.electric_meter`>;
  /**
   * TaHoma Switch Sc HomeKit setup code
   */
  var tahomaSwitchScHomekitSetupCodeSensor: IEntity<`sensor.tahoma_switch_sc_homekit_setup_code`>;
  /**
   * Available updates count
   */
  var availableUpdatesCountSensor: IEntity<`sensor.available_updates_count`>;
  /**
   * Alice soil misture_fixed
   */
  var aliceSoilMistureFixedSensor: IEntity<`sensor.alice_soil_misture_fixed`>;
  /**
   * Low battery count
   */
  var lowBatteryCountSensor: IEntity<`sensor.low_battery_count`>;
  /**
   * Available updates
   */
  var availableUpdatesSensor: IEntity<`sensor.available_updates`>;
  /**
   * iMac Screen Off
   */
  var imacScreenOffSensor: IEntity<`sensor.imac_screen_off`>;
  /**
   * Todays events
   */
  var todaysEventsSensor: IEntity<`sensor.todays_events`>;
  /**
   * Weather forecast
   */
  var weatherForecastSensor: IEntity<`sensor.weather_forecast`>;
  /**
   * Current TV Source
   */
  var currentTvSourceSensor: IEntity<`sensor.current_tv_source`>;
  /**
   * Living Room Temperature
   */
  var livingRoomTemperatureSensor: IEntity<`sensor.living_room_temperature`>;
  /**
   * Living Room Target Temperature
   */
  var livingRoomTargetTemperatureSensor: IEntity<`sensor.living_room_target_temperature`>;
  /**
   * Boiler Target Temperature
   */
  var boilerTargetTemperatureSensor: IEntity<`sensor.boiler_target_temperature`>;
  /**
   * Living Room Heating Mode
   */
  var livingRoomHeatingModeSensor: IEntity<`sensor.living_room_heating_mode`>;
  /**
   * Bedroom Temperature
   */
  var bedroomTemperatureSensor: IEntity<`sensor.bedroom_temperature`>;
  /**
   * Bedroom Target Temperature
   */
  var bedroomTargetTemperatureSensor: IEntity<`sensor.bedroom_target_temperature`>;
  /**
   * Bedroom Heating Mode
   */
  var bedroomHeatingModeSensor: IEntity<`sensor.bedroom_heating_mode`>;
  /**
   * Gym Temperature
   */
  var gymTemperatureSensor: IEntity<`sensor.gym_temperature`>;
  /**
   * Gym Target Temperature
   */
  var gymTargetTemperatureSensor: IEntity<`sensor.gym_target_temperature`>;
  /**
   * Gym Heating Mode
   */
  var gymHeatingModeSensor: IEntity<`sensor.gym_heating_mode`>;
  /**
   * Last time living room motion sensor was triggered
   */
  var lastTimeLivingRoomMotionSensorWasTriggeredSensor: IEntity<`sensor.last_time_living_room_motion_sensor_was_triggered`>;
  /**
   * sensor Cost
   */
  var shellyemA4e57cba73f5Channel_1EnergyCostSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy_cost`>;
  /**
   * Boiler (Boost) temperature
   */
  var boilerBoostTemperatureSensor: IEntity<`sensor.boiler_boost_temperature`>;
  /**
   * TV Heater Power
   */
  var tvHeaterPowerSensor: IEntity<`sensor.tv_heater_power`>;
  /**
   * TV Heater Energy
   */
  var tvHeaterEnergySensor: IEntity<`sensor.tv_heater_energy`>;
  /**
   * Dining Table Heater Power
   */
  var diningTableHeaterPowerSensor: IEntity<`sensor.dining_table_heater_power`>;
  /**
   * Dining Table Heater Energy
   */
  var diningTableHeaterEnergySensor: IEntity<`sensor.dining_table_heater_energy`>;
  /**
   * Hallway Heater Power
   */
  var hallwayHeaterPowerSensor: IEntity<`sensor.hallway_heater_power`>;
  /**
   * Hallway Heater Energy
   */
  var hallwayHeaterEnergySensor: IEntity<`sensor.hallway_heater_energy`>;
  /**
   * Bookshelf Heater Power
   */
  var bookshelfHeaterPowerSensor: IEntity<`sensor.bookshelf_heater_power`>;
  /**
   * Bookshelf Heater Energy
   */
  var bookshelfHeaterEnergySensor: IEntity<`sensor.bookshelf_heater_energy`>;
  /**
   * shellyem-A4E57CBA73F5 channel 1 power
   */
  var shellyemA4e57cba73f5Channel_1PowerSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_power`>;
  /**
   * shellyem-A4E57CBA73F5 channel 1 energy
   */
  var shellyemA4e57cba73f5Channel_1EnergySensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy`>;
  /**
   * shellyem-A4E57CBA73F5 channel 1 energy returned
   */
  var shellyemA4e57cba73f5Channel_1EnergyReturnedSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_energy_returned`>;
  /**
   * shellyem-A4E57CBA73F5 channel 1 voltage
   */
  var shellyemA4e57cba73f5Channel_1VoltageSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_voltage`>;
  /**
   * shellyem-A4E57CBA73F5 channel 1 power factor
   */
  var shellyemA4e57cba73f5Channel_1PowerFactorSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_1_power_factor`>;
  /**
   * shellyem-A4E57CBA73F5 channel 2 power
   */
  var shellyemA4e57cba73f5Channel_2PowerSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_power`>;
  /**
   * shellyem-A4E57CBA73F5 channel 2 energy
   */
  var shellyemA4e57cba73f5Channel_2EnergySensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_energy`>;
  /**
   * shellyem-A4E57CBA73F5 channel 2 energy returned
   */
  var shellyemA4e57cba73f5Channel_2EnergyReturnedSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_energy_returned`>;
  /**
   * shellyem-A4E57CBA73F5 channel 2 voltage
   */
  var shellyemA4e57cba73f5Channel_2VoltageSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_voltage`>;
  /**
   * shellyem-A4E57CBA73F5 channel 2 power factor
   */
  var shellyemA4e57cba73f5Channel_2PowerFactorSensor: IEntity<`sensor.shellyem_a4e57cba73f5_channel_2_power_factor`>;
  /**
   * Front Door Battery
   */
  var frontDoorBattery_2Sensor: IEntity<`sensor.front_door_battery_2`>;
  /**
   * Front Door Last activity
   */
  var frontDoorLastActivitySensor: IEntity<`sensor.front_door_last_activity`>;
  /**
   * AdGuard Home DNS queries
   */
  var adguardHomeDnsQueriesSensor: IEntity<`sensor.adguard_home_dns_queries`>;
  /**
   * AdGuard Home Safe browsing blocked
   */
  var adguardHomeSafeBrowsingBlockedSensor: IEntity<`sensor.adguard_home_safe_browsing_blocked`>;
  /**
   * AdGuard Home DNS queries blocked
   */
  var adguardHomeDnsQueriesBlockedSensor: IEntity<`sensor.adguard_home_dns_queries_blocked`>;
  /**
   * AdGuard Home DNS queries blocked ratio
   */
  var adguardHomeDnsQueriesBlockedRatioSensor: IEntity<`sensor.adguard_home_dns_queries_blocked_ratio`>;
  /**
   * AdGuard Home Parental control blocked
   */
  var adguardHomeParentalControlBlockedSensor: IEntity<`sensor.adguard_home_parental_control_blocked`>;
  /**
   * AdGuard Home Safe searches enforced
   */
  var adguardHomeSafeSearchesEnforcedSensor: IEntity<`sensor.adguard_home_safe_searches_enforced`>;
  /**
   * AdGuard Home Average processing speed
   */
  var adguardHomeAverageProcessingSpeedSensor: IEntity<`sensor.adguard_home_average_processing_speed`>;
  /**
   * System Monitor Disk free /run/audio
   */
  var systemMonitorDiskFreeRunAudioSensor: IEntity<`sensor.system_monitor_disk_free_run_audio`>;
  /**
   * System Monitor Disk free /ssl
   */
  var systemMonitorDiskFreeSslSensor: IEntity<`sensor.system_monitor_disk_free_ssl`>;
  /**
   * System Monitor Disk free /config
   */
  var systemMonitorDiskFreeConfigSensor: IEntity<`sensor.system_monitor_disk_free_config`>;
  /**
   * System Monitor Disk free /share
   */
  var systemMonitorDiskFreeShareSensor: IEntity<`sensor.system_monitor_disk_free_share`>;
  /**
   * System Monitor Disk free /media
   */
  var systemMonitorDiskFreeMediaSensor: IEntity<`sensor.system_monitor_disk_free_media`>;
  /**
   * Free
   */
  var systemMonitorDiskFreeSensor: IEntity<`sensor.system_monitor_disk_free`>;
  /**
   * System Monitor Disk use /
   */
  var systemMonitorDiskUseSensor: IEntity<`sensor.system_monitor_disk_use`>;
  /**
   * System Monitor Disk usage /
   */
  var systemMonitorDiskUsageSensor: IEntity<`sensor.system_monitor_disk_usage`>;
  /**
   * System Monitor IPv4 address enp1s0
   */
  var systemMonitorIpv4AddressEnp1s0Sensor: IEntity<`sensor.system_monitor_ipv4_address_enp1s0`>;
  /**
   * System Monitor IPv6 address enp1s0
   */
  var systemMonitorIpv6AddressEnp1s0Sensor: IEntity<`sensor.system_monitor_ipv6_address_enp1s0`>;
  /**
   * System Monitor Last boot
   */
  var systemMonitorLastBootSensor: IEntity<`sensor.system_monitor_last_boot`>;
  /**
   * System Monitor Load (15 min)
   */
  var systemMonitorLoad_15mSensor: IEntity<`sensor.system_monitor_load_15m`>;
  /**
   * System Monitor Load (1 min)
   */
  var systemMonitorLoad_1mSensor: IEntity<`sensor.system_monitor_load_1m`>;
  /**
   * System Monitor Load (5 min)
   */
  var systemMonitorLoad_5mSensor: IEntity<`sensor.system_monitor_load_5m`>;
  /**
   * System Monitor Memory free
   */
  var systemMonitorMemoryFreeSensor: IEntity<`sensor.system_monitor_memory_free`>;
  /**
   * Total used
   */
  var systemMonitorMemoryUseSensor: IEntity<`sensor.system_monitor_memory_use`>;
  /**
   * Usage percentage
   */
  var systemMonitorMemoryUsageSensor: IEntity<`sensor.system_monitor_memory_usage`>;
  /**
   * System Monitor Network in enp1s0
   */
  var systemMonitorNetworkInEnp1s0Sensor: IEntity<`sensor.system_monitor_network_in_enp1s0`>;
  /**
   * System Monitor Network out enp1s0
   */
  var systemMonitorNetworkOutEnp1s0Sensor: IEntity<`sensor.system_monitor_network_out_enp1s0`>;
  /**
   * System Monitor Packets in enp1s0
   */
  var systemMonitorPacketsInEnp1s0Sensor: IEntity<`sensor.system_monitor_packets_in_enp1s0`>;
  /**
   * System Monitor Packets out enp1s0
   */
  var systemMonitorPacketsOutEnp1s0Sensor: IEntity<`sensor.system_monitor_packets_out_enp1s0`>;
  /**
   * System Monitor Network throughput in enp1s0
   */
  var systemMonitorNetworkThroughputInEnp1s0Sensor: IEntity<`sensor.system_monitor_network_throughput_in_enp1s0`>;
  /**
   * System Monitor Network throughput out enp1s0
   */
  var systemMonitorNetworkThroughputOutEnp1s0Sensor: IEntity<`sensor.system_monitor_network_throughput_out_enp1s0`>;
  /**
   * Use
   */
  var systemMonitorProcessorUseSensor: IEntity<`sensor.system_monitor_processor_use`>;
  /**
   * Temperature
   */
  var systemMonitorProcessorTemperatureSensor: IEntity<`sensor.system_monitor_processor_temperature`>;
  /**
   * System Monitor Swap free
   */
  var systemMonitorSwapFreeSensor: IEntity<`sensor.system_monitor_swap_free`>;
  /**
   * System Monitor Swap use
   */
  var systemMonitorSwapUseSensor: IEntity<`sensor.system_monitor_swap_use`>;
  /**
   * System Monitor Swap usage
   */
  var systemMonitorSwapUsageSensor: IEntity<`sensor.system_monitor_swap_usage`>;
  /**
   * qBittorrent Status
   */
  var qbittorrentStatusSensor: IEntity<`sensor.qbittorrent_status`>;
  /**
   * qBittorrent Connection status
   */
  var qbittorrentConnectionStatusSensor: IEntity<`sensor.qbittorrent_connection_status`>;
  /**
   * qBittorrent Download speed
   */
  var qbittorrentDownloadSpeedSensor: IEntity<`sensor.qbittorrent_download_speed`>;
  /**
   * qBittorrent Upload speed
   */
  var qbittorrentUploadSpeedSensor: IEntity<`sensor.qbittorrent_upload_speed`>;
  /**
   * qBittorrent All-time download
   */
  var qbittorrentAllTimeDownloadSensor: IEntity<`sensor.qbittorrent_all_time_download`>;
  /**
   * qBittorrent All-time upload
   */
  var qbittorrentAllTimeUploadSensor: IEntity<`sensor.qbittorrent_all_time_upload`>;
  /**
   * qBittorrent All torrents
   */
  var qbittorrentAllTorrentsSensor: IEntity<`sensor.qbittorrent_all_torrents`>;
  /**
   * qBittorrent Active torrents
   */
  var qbittorrentActiveTorrentsSensor: IEntity<`sensor.qbittorrent_active_torrents`>;
  /**
   * qBittorrent Inactive torrents
   */
  var qbittorrentInactiveTorrentsSensor: IEntity<`sensor.qbittorrent_inactive_torrents`>;
  /**
   * qBittorrent Paused torrents
   */
  var qbittorrentPausedTorrentsSensor: IEntity<`sensor.qbittorrent_paused_torrents`>;
  /**
   * ZTE Router Data received
   */
  var zteRouterDataReceivedSensor: IEntity<`sensor.zte_router_data_received`>;
  /**
   * ZTE Router Data sent
   */
  var zteRouterDataSentSensor: IEntity<`sensor.zte_router_data_sent`>;
  /**
   * ZTE Router External IP
   */
  var zteRouterExternalIpSensor: IEntity<`sensor.zte_router_external_ip`>;
  /**
   * ZTE Router Uptime
   */
  var zteRouterUptimeSensor: IEntity<`sensor.zte_router_uptime`>;
  /**
   * ZTE Router Download speed
   */
  var zteRouterDownloadSpeedSensor: IEntity<`sensor.zte_router_download_speed`>;
  /**
   * ZTE Router Upload speed
   */
  var zteRouterUploadSpeedSensor: IEntity<`sensor.zte_router_upload_speed`>;
  /**
   * Wheel Of Fortune Spins Electricity (A-11077925)
   */
  var octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor: IEntity<`sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_electricity`>;
  /**
   * Wheel Of Fortune Spins Gas (A-11077925)
   */
  var octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor: IEntity<`sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_gas`>;
  /**
   * Current Rate Electricity (19L3210845 1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_current_rate`>;
  /**
   * Previous Rate Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_rate`>;
  /**
   * Next Rate Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_next_rate`>;
  /**
   * Current Standing Charge Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_current_standing_charge`>;
  /**
   * Previous Accumulative Consumption Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_consumption`>;
  /**
   * Previous Accumulative Cost Electricity (19L3210845/1630000030495)
   */
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor: IEntity<`sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_cost`>;
  /**
   * Home Nearest device
   */
  var homeNearestDeviceSensor: IEntity<`sensor.home_nearest_device`>;
  /**
   * Home Nearest distance
   */
  var homeNearestDistanceSensor: IEntity<`sensor.home_nearest_distance`>;
  /**
   * Home Nearest direction of travel
   */
  var homeNearestDirectionOfTravelSensor: IEntity<`sensor.home_nearest_direction_of_travel`>;
  /**
   * Home Me Distance
   */
  var homeMeDistanceSensor: IEntity<`sensor.home_me_distance`>;
  /**
   * Home Me Direction of travel
   */
  var homeMeDirectionOfTravelSensor: IEntity<`sensor.home_me_direction_of_travel`>;
  /**
   * Home 2 Nearest device
   */
  var home_2NearestDeviceSensor: IEntity<`sensor.home_2_nearest_device`>;
  /**
   * Home 2 Nearest distance
   */
  var home_2NearestDistanceSensor: IEntity<`sensor.home_2_nearest_distance`>;
  /**
   * Home 2 Nearest direction of travel
   */
  var home_2NearestDirectionOfTravelSensor: IEntity<`sensor.home_2_nearest_direction_of_travel`>;
  /**
   * Home 2 Me Distance
   */
  var home_2MeDistanceSensor: IEntity<`sensor.home_2_me_distance`>;
  /**
   * Home 2 Me Direction of travel
   */
  var home_2MeDirectionOfTravelSensor: IEntity<`sensor.home_2_me_direction_of_travel`>;
  /**
   * Tumble Dryer Smart Plug Signal level
   */
  var tumbleDryerSmartPlugSignalLevelSensor: IEntity<`sensor.tumble_dryer_smart_plug_signal_level`>;
  /**
   * Tumble Dryer Smart Plug Auto-off at
   */
  var tumbleDryerSmartPlugAutoOffAtSensor: IEntity<`sensor.tumble_dryer_smart_plug_auto_off_at`>;
  /**
   * Tumble Dryer Smart Plug Current consumption
   */
  var tumbleDryerSmartPlugCurrentConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_current_consumption`>;
  /**
   * Tumble Dryer Smart Plug Today's consumption
   */
  var tumbleDryerSmartPlugTodaySConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_today_s_consumption`>;
  /**
   * Tumble Dryer Smart Plug This month's consumption
   */
  var tumbleDryerSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.tumble_dryer_smart_plug_this_month_s_consumption`>;
  /**
   * Tumble Dryer Smart Plug Voltage
   */
  var tumbleDryerSmartPlugVoltageSensor: IEntity<`sensor.tumble_dryer_smart_plug_voltage`>;
  /**
   * Tumble Dryer Smart Plug Current
   */
  var tumbleDryerSmartPlugCurrentSensor: IEntity<`sensor.tumble_dryer_smart_plug_current`>;
  /**
   * watchman_last_updated
   */
  var watchmanLastUpdatedSensor: IEntity<`sensor.watchman_last_updated`>;
  /**
   * watchman_missing_entities
   */
  var watchmanMissingEntitiesSensor: IEntity<`sensor.watchman_missing_entities`>;
  /**
   * watchman_missing_actions
   */
  var watchmanMissingActionsSensor: IEntity<`sensor.watchman_missing_actions`>;
  /**
   * Playstation Trophy Level
   */
  var wearingClapper2TrophyLevelSensor: IEntity<`sensor.wearing_clapper2_trophy_level`>;
  /**
   * Playstation Status
   */
  var wearingClapper2StatusSensor: IEntity<`sensor.wearing_clapper2_status`>;
  /**
   * Playstation Playstation Plus
   */
  var playstationPlaystationPlusSensor: IEntity<`sensor.playstation_playstation_plus`>;
  /**
   * Playstation About Me
   */
  var playstationAboutMeSensor: IEntity<`sensor.playstation_about_me`>;
  /**
   * Alice illuminance
   */
  var aliceIlluminanceSensor: IEntity<`sensor.alice_illuminance`>;
  /**
   * Alice conductivity
   */
  var aliceConductivitySensor: IEntity<`sensor.alice_conductivity`>;
  /**
   * Alice soil moisture
   */
  var aliceSoilMoistureSensor: IEntity<`sensor.alice_soil_moisture`>;
  /**
   * Alice temperature
   */
  var aliceTemperatureSensor: IEntity<`sensor.alice_temperature`>;
  /**
   * Alice air humidity
   */
  var aliceAirHumiditySensor: IEntity<`sensor.alice_air_humidity`>;
  /**
   * Alice ppfd (mol)
   */
  var alicePpfdMolSensor: IEntity<`sensor.alice_ppfd_mol`>;
  /**
   * Alice Total ppfd (mol) Integral
   */
  var aliceTotalPpfdMolIntegralSensor: IEntity<`sensor.alice_total_ppfd_mol_integral`>;
  /**
   * Alice dli
   */
  var aliceDliSensor: IEntity<`sensor.alice_dli`>;
  /**
   * Front Door
   */
  var frontDoorBatterySensor: IEntity<`sensor.front_door_battery`>;
  /**
   * Front Door Firmware version
   */
  var frontDoorFirmwareVersionSensor: IEntity<`sensor.front_door_firmware_version`>;
  /**
   * Bathroom Motion Sensor Temperature
   */
  var bathroomMotionSensorTemperatureSensor: IEntity<`sensor.bathroom_motion_sensor_temperature`>;
  /**
   * Bathroom Motion Sensor
   */
  var bathroomMotionSensorBatterySensor: IEntity<`sensor.bathroom_motion_sensor_battery`>;
  /**
   * Hallway Motion Sensor Temperature
   */
  var hallwayMotionSensorTemperatureSensor: IEntity<`sensor.hallway_motion_sensor_temperature`>;
  /**
   * Hallway Motion Sensor
   */
  var hallwayMotionSensorBatterySensor: IEntity<`sensor.hallway_motion_sensor_battery`>;
  /**
   * Zigbee2MQTT Bridge Version
   */
  var zigbee2mqttBridgeVersionSensor: IEntity<`sensor.zigbee2mqtt_bridge_version`>;
  /**
   * Sonos Arc Ultra Audio input format
   */
  var sonosArcUltraAudioInputFormatSensor: IEntity<`sensor.sonos_arc_ultra_audio_input_format`>;
  /**
   * iCloud3 Event Log
   */
  var icloud3EventLogSensor: IEntity<`sensor.icloud3_event_log`>;
  /**
   * iCloud3 Waze History Track
   */
  var icloud3WazehistTrackSensor: IEntity<`sensor.icloud3_wazehist_track`>;
  /**
   * Ben's iPhone Badge
   */
  var bensIphoneBadgeSensor: IEntity<`sensor.bens_iphone_badge`>;
  /**
   * Ben's iPhone LastUpdate
   */
  var bensIphoneLastUpdateSensor: IEntity<`sensor.bens_iphone_last_update`>;
  /**
   * Ben's iPhone Interval
   */
  var bensIphoneIntervalSensor: IEntity<`sensor.bens_iphone_interval`>;
  /**
   * Ben's iPhone Battery
   */
  var bensIphoneBatterySensor: IEntity<`sensor.bens_iphone_battery`>;
  /**
   * Ben's iPhone MovedDistance
   */
  var bensIphoneMovedDistanceSensor: IEntity<`sensor.bens_iphone_moved_distance`>;
  /**
   * Ben's iPhone Direction
   */
  var bensIphoneDirOfTravelSensor: IEntity<`sensor.bens_iphone_dir_of_travel`>;
  /**
   * Ben's iPhone Name
   */
  var bensIphoneNameSensor: IEntity<`sensor.bens_iphone_name`>;
  /**
   * Ben's iPhone HomeDistance
   */
  var bensIphoneHomeDistanceSensor: IEntity<`sensor.bens_iphone_home_distance`>;
  /**
   * Ben's iPhone LastLocated
   */
  var bensIphoneLastLocatedSensor: IEntity<`sensor.bens_iphone_last_located`>;
  /**
   * Ben's iPhone ArrivalTime
   */
  var bensIphoneArrivalTimeSensor: IEntity<`sensor.bens_iphone_arrival_time`>;
  /**
   * Ben's iPhone NextUpdate
   */
  var bensIphoneNextUpdateSensor: IEntity<`sensor.bens_iphone_next_update`>;
  /**
   * Ben's iPhone TravelTime (min)
   */
  var bensIphoneTravelTimeMinSensor: IEntity<`sensor.bens_iphone_travel_time_min`>;
  /**
   * Ben's iPhone BatteryStatus
   */
  var bensIphoneBatteryStatusSensor: IEntity<`sensor.bens_iphone_battery_status`>;
  /**
   * Ben's iPhone Info
   */
  var bensIphoneInfoSensor: IEntity<`sensor.bens_iphone_info`>;
  /**
   * Ben's iPhone ZoneDistance
   */
  var bensIphoneZoneDistanceSensor: IEntity<`sensor.bens_iphone_zone_distance`>;
  /**
   * Ben's iPhone ZoneName
   */
  var bensIphoneZoneNameSensor: IEntity<`sensor.bens_iphone_zone_name`>;
  /**
   * Ben's iPhone TravelTime
   */
  var bensIphoneTravelTimeSensor: IEntity<`sensor.bens_iphone_travel_time`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_0Sensor: IEntity<`sensor.ical_ben_s_calendar_event_0`>;
  /**
   * Jen Awaze drinks
   */
  var icalBenSCalendarEvent_1Sensor: IEntity<`sensor.ical_ben_s_calendar_event_1`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_2Sensor: IEntity<`sensor.ical_ben_s_calendar_event_2`>;
  /**
   * Moustafa
   */
  var icalBenSCalendarEvent_3Sensor: IEntity<`sensor.ical_ben_s_calendar_event_3`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_4Sensor: IEntity<`sensor.ical_ben_s_calendar_event_4`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_5Sensor: IEntity<`sensor.ical_ben_s_calendar_event_5`>;
  /**
   * BBQ Mike
   */
  var icalBenSCalendarEvent_6Sensor: IEntity<`sensor.ical_ben_s_calendar_event_6`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_7Sensor: IEntity<`sensor.ical_ben_s_calendar_event_7`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_8Sensor: IEntity<`sensor.ical_ben_s_calendar_event_8`>;
  /**
   * Work
   */
  var icalBenSCalendarEvent_9Sensor: IEntity<`sensor.ical_ben_s_calendar_event_9`>;
  /**
   * Bedroom Sonos One next Alarm
   */
  var benSSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_alarm`>;
  /**
   * Bedroom Sonos One next Timer
   */
  var benSSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_timer`>;
  /**
   * Bedroom Sonos One next Reminder
   */
  var benSSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_sonos_one_second_edition_next_reminder`>;
  /**
   * Bedroom Speaker next Alarm
   */
  var bedroomSpeakerNextAlarmSensor: IEntity<`sensor.bedroom_speaker_next_alarm`>;
  /**
   * Bedroom Speaker next Timer
   */
  var bedroomSpeakerNextTimerSensor: IEntity<`sensor.bedroom_speaker_next_timer`>;
  /**
   * Bedroom Speaker next Reminder
   */
  var bedroomSpeakerNextReminderSensor: IEntity<`sensor.bedroom_speaker_next_reminder`>;
  /**
   * Office next Alarm
   */
  var officeNextAlarmSensor: IEntity<`sensor.office_next_alarm`>;
  /**
   * Office next Timer
   */
  var officeNextTimerSensor: IEntity<`sensor.office_next_timer`>;
  /**
   * Office next Reminder
   */
  var officeNextReminderSensor: IEntity<`sensor.office_next_reminder`>;
  /**
   * Gym Sonos One next Alarm
   */
  var benS_2ndSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_alarm`>;
  /**
   * Gym Sonos One next Timer
   */
  var benS_2ndSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_timer`>;
  /**
   * Gym Sonos One next Reminder
   */
  var benS_2ndSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_2nd_sonos_one_second_edition_next_reminder`>;
  /**
   * Living Room Sonos One next Alarm
   */
  var benS_3rdSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_alarm`>;
  /**
   * Living Room Sonos One next Timer
   */
  var benS_3rdSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_timer`>;
  /**
   * Living Room Sonos One next Reminder
   */
  var benS_3rdSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.ben_s_3rd_sonos_one_second_edition_next_reminder`>;
  /**
   * Living Room next Alarm
   */
  var livingRoomNextAlarmSensor: IEntity<`sensor.living_room_next_alarm`>;
  /**
   * Living Room next Timer
   */
  var livingRoomNextTimerSensor: IEntity<`sensor.living_room_next_timer`>;
  /**
   * Living Room next Reminder
   */
  var livingRoomNextReminderSensor: IEntity<`sensor.living_room_next_reminder`>;
  /**
   * Sonos Arc Ultra next Alarm
   */
  var sonosArcUltraNextAlarmSensor: IEntity<`sensor.sonos_arc_ultra_next_alarm`>;
  /**
   * Sonos Arc Ultra next Timer
   */
  var sonosArcUltraNextTimerSensor: IEntity<`sensor.sonos_arc_ultra_next_timer`>;
  /**
   * Sonos Arc Ultra next Reminder
   */
  var sonosArcUltraNextReminderSensor: IEntity<`sensor.sonos_arc_ultra_next_reminder`>;
  /**
   * Living Room Sonos next Alarm
   */
  var livingRoomSonosNextAlarmSensor: IEntity<`sensor.living_room_sonos_next_alarm`>;
  /**
   * Living Room Sonos next Timer
   */
  var livingRoomSonosNextTimerSensor: IEntity<`sensor.living_room_sonos_next_timer`>;
  /**
   * Living Room Sonos next Reminder
   */
  var livingRoomSonosNextReminderSensor: IEntity<`sensor.living_room_sonos_next_reminder`>;
  /**
   * This Device next Alarm
   */
  var thisDeviceNextAlarm_2Sensor: IEntity<`sensor.this_device_next_alarm_2`>;
  /**
   * This Device next Timer
   */
  var thisDeviceNextTimer_2Sensor: IEntity<`sensor.this_device_next_timer_2`>;
  /**
   * This Device next Reminder
   */
  var thisDeviceNextReminder_2Sensor: IEntity<`sensor.this_device_next_reminder_2`>;
  /**
   * Home Security Cover status
   */
  var livingRoomSensorCoverStatusSensor: IEntity<`sensor.living_room_sensor_cover_status`>;
  /**
   * Home Security Motion sensor status
   */
  var livingRoomSensorMotionSensorStatusSensor: IEntity<`sensor.living_room_sensor_motion_sensor_status`>;
  /**
   * Home Security Cover status
   */
  var gymSensorCoverStatusSensor: IEntity<`sensor.gym_sensor_cover_status`>;
  /**
   * Home Security Motion sensor status
   */
  var gymSensorMotionSensorStatusSensor: IEntity<`sensor.gym_sensor_motion_sensor_status`>;
  /**
   * Home Security Cover status
   */
  var bedroomSensorCoverStatusSensor: IEntity<`sensor.bedroom_sensor_cover_status`>;
  /**
   * Home Security Motion sensor status
   */
  var bedroomSensorMotionSensorStatusSensor: IEntity<`sensor.bedroom_sensor_motion_sensor_status`>;
  /**
   * Node Red Logging
   */
  var automationLogEntitySensor: IEntity<`sensor.automation_log_entity`>;
  /**
   * Basic
   */
  var zStickGen5UsbControllerBasicSensor: IEntity<`sensor.z_stick_gen5_usb_controller_basic`>;
  /**
   * Good Morning Message
   */
  var goodMorningMessageSensor: IEntity<`sensor.good_morning_message`>;
  /**
   * Living room occupied
   */
  var livingRoomOccupiedSensor: IEntity<`sensor.living_room_occupied`>;
  /**
   * IPv4 address wlan0
   */
  var systemMonitorIpv4AddressWlan0Sensor: IEntity<`sensor.system_monitor_ipv4_address_wlan0`>;
  /**
   * Auto-off at
   */
  var homeAssistantServerAutoOffAtSensor: IEntity<`sensor.home_assistant_server_auto_off_at`>;
  /**
   * Current consumption
   */
  var homeAssistantServerCurrentConsumptionSensor: IEntity<`sensor.home_assistant_server_current_consumption`>;
  /**
   * Signal level
   */
  var homeAssistantServerSignalLevelSensor: IEntity<`sensor.home_assistant_server_signal_level`>;
  /**
   * This month's consumption
   */
  var homeAssistantServerThisMonthSConsumptionSensor: IEntity<`sensor.home_assistant_server_this_month_s_consumption`>;
  /**
   * Today's consumption
   */
  var homeAssistantServerTodaySConsumptionSensor: IEntity<`sensor.home_assistant_server_today_s_consumption`>;
  /**
   * Auto-off at
   */
  var imacSmartPlugAutoOffAt_2Sensor: IEntity<`sensor.imac_smart_plug_auto_off_at_2`>;
  /**
   * Current consumption
   */
  var imacSmartPlugCurrentConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_current_consumption_2`>;
  /**
   * Signal level
   */
  var imacSmartPlugSignalLevel_2Sensor: IEntity<`sensor.imac_smart_plug_signal_level_2`>;
  /**
   * This month's consumption
   */
  var imacSmartPlugThisMonthSConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_this_month_s_consumption_2`>;
  /**
   * Today's consumption
   */
  var imacSmartPlugTodaySConsumption_2Sensor: IEntity<`sensor.imac_smart_plug_today_s_consumption_2`>;
  /**
   * Auto-off at
   */
  var livingRoomHeaterSmartPlugAutoOffAtSensor: IEntity<`sensor.living_room_heater_smart_plug_auto_off_at`>;
  /**
   * Current consumption
   */
  var livingRoomHeaterSmartPlugCurrentConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_current_consumption`>;
  /**
   * Signal level
   */
  var livingRoomHeaterSmartPlugSignalLevelSensor: IEntity<`sensor.living_room_heater_smart_plug_signal_level`>;
  /**
   * This month's consumption
   */
  var livingRoomHeaterSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_this_month_s_consumption`>;
  /**
   * Today's consumption
   */
  var livingRoomHeaterSmartPlugTodaySConsumptionSensor: IEntity<`sensor.living_room_heater_smart_plug_today_s_consumption`>;
  /**
   * Last unlocker
   */
  var lastUnlockerSensor: IEntity<`sensor.last_unlocker`>;
  /**
   * Front Door Doorbell MQTT Battery
   */
  var frontDoorDoorbellMqttBattery_3Sensor: IEntity<`sensor.front_door_doorbell_mqtt_battery_3`>;
  /**
   * Front Door Doorbell MQTT Info
   */
  var frontDoorDoorbellMqttInfoSensor: IEntity<`sensor.front_door_doorbell_mqtt_info`>;
  /**
   * Front Door Doorbell MQTT Wireless
   */
  var frontDoorDoorbellMqttWirelessSensor: IEntity<`sensor.front_door_doorbell_mqtt_wireless`>;
  /**
   * Battery
   */
  var batterySensor: IEntity<`sensor.battery`>;
  /**
   * Battery
   */
  var battery_2Sensor: IEntity<`sensor.battery_2`>;
  /**
   * Magic Keyboard
   */
  var magicKeyboardWithNumericKeypadBatteryBatterySensor: IEntity<`sensor.magic_keyboard_with_numeric_keypad_battery_battery`>;
  /**
   * Magic Mouse
   */
  var magicMouseBatteryBatterySensor: IEntity<`sensor.magic_mouse_battery_battery`>;
  /**
   * Battery
   */
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
  /**
   * Signal Strength
   */
  var tp357sD5f7SignalStrengthSensor: IEntity<`sensor.tp357s_d5f7_signal_strength`>;
  /**
   * Battery
   */
  var tp357sD5f7BatterySensor: IEntity<`sensor.tp357s_d5f7_battery`>;
  /**
   * Temperature
   */
  var tp357sD5f7TemperatureSensor: IEntity<`sensor.tp357s_d5f7_temperature`>;
  /**
   * Humidity
   */
  var tp357sD5f7HumiditySensor: IEntity<`sensor.tp357s_d5f7_humidity`>;
  /**
   * Song tempo
   */
  var spotifyBenWainwrightSongTempoSensor: IEntity<`sensor.spotify_ben_wainwright_song_tempo`>;
  /**
   * Voltage
   */
  var homeAssistantServerVoltageSensor: IEntity<`sensor.home_assistant_server_voltage`>;
  /**
   * Current
   */
  var homeAssistantServerCurrentSensor: IEntity<`sensor.home_assistant_server_current`>;
  /**
   * Voltage
   */
  var livingRoomHeaterSmartPlugVoltageSensor: IEntity<`sensor.living_room_heater_smart_plug_voltage`>;
  /**
   * Current
   */
  var livingRoomHeaterSmartPlugCurrentSensor: IEntity<`sensor.living_room_heater_smart_plug_current`>;
  /**
   * Voltage
   */
  var imacSmartPlugVoltageSensor: IEntity<`sensor.imac_smart_plug_voltage`>;
  /**
   * Current
   */
  var imacSmartPlugCurrentSensor: IEntity<`sensor.imac_smart_plug_current`>;
  /**
   * Boiler boost time remaining
   */
  var boilerBoostTimeRemainingSensor: IEntity<`sensor.boiler_boost_time_remaining`>;
  /**
   * GW1100A Indoor Humidity
   */
  var gw1100aIndoorHumiditySensor: IEntity<`sensor.gw1100a_indoor_humidity`>;
  /**
   * GW1100A Soil Moisture 1
   */
  var gw1100aSoilMoisture_1Sensor: IEntity<`sensor.gw1100a_soil_moisture_1`>;
  /**
   * GW1100A Soil Moisture 3
   */
  var gw1100aSoilMoisture_3Sensor: IEntity<`sensor.gw1100a_soil_moisture_3`>;
  /**
   * GW1100A Soil Moisture 4
   */
  var gw1100aSoilMoisture_4Sensor: IEntity<`sensor.gw1100a_soil_moisture_4`>;
  /**
   * GW1100A Soil Battery 1
   */
  var gw1100aSoilBattery_1Sensor: IEntity<`sensor.gw1100a_soil_battery_1`>;
  /**
   * GW1100A Soil Battery 2
   */
  var gw1100aSoilBattery_2Sensor: IEntity<`sensor.gw1100a_soil_battery_2`>;
  /**
   * GW1100A Soil Battery 3
   */
  var gw1100aSoilBattery_3Sensor: IEntity<`sensor.gw1100a_soil_battery_3`>;
  /**
   * GW1100A Soil Battery 4
   */
  var gw1100aSoilBattery_4Sensor: IEntity<`sensor.gw1100a_soil_battery_4`>;
  /**
   * GW1100A Indoor Temperature
   */
  var gw1100aIndoorTemperatureSensor: IEntity<`sensor.gw1100a_indoor_temperature`>;
  /**
   * GW1100A Relative Pressure
   */
  var gw1100aRelativePressureSensor: IEntity<`sensor.gw1100a_relative_pressure`>;
  /**
   * GW1100A Absolute Pressure
   */
  var gw1100aAbsolutePressureSensor: IEntity<`sensor.gw1100a_absolute_pressure`>;
  /**
   * GW1100A Indoor Dewpoint
   */
  var gw1100aIndoorDewpointSensor: IEntity<`sensor.gw1100a_indoor_dewpoint`>;
  /**
   * Alice - Moisture
   */
  var aliceMoistureSensor: IEntity<`sensor.alice_moisture`>;
}

globalThis.ringMqttWithVideoStreamingCpuPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_cpu_percent',
  'Ring-MQTT with Video Streaming CPU percent',
);
globalThis.ringMqttWithVideoStreamingMemoryPercentSensor = entity(
  'sensor.ring_mqtt_with_video_streaming_memory_percent',
  'Ring-MQTT with Video Streaming Memory percent',
);
globalThis.backupBackupManagerStateSensor = entity(
  'sensor.backup_backup_manager_state',
  'Backup Backup Manager state',
);
globalThis.backupNextScheduledAutomaticBackupSensor = entity(
  'sensor.backup_next_scheduled_automatic_backup',
  'Backup Next scheduled automatic backup',
);
globalThis.backupLastSuccessfulAutomaticBackupSensor = entity(
  'sensor.backup_last_successful_automatic_backup',
  'Backup Last successful automatic backup',
);
globalThis.dateTimeIsoSensor = entity(
  'sensor.date_time_iso',
  'Date & Time (ISO)',
);
globalThis.sunNextDawnSensor = entity('sensor.sun_next_dawn', 'Sun Next dawn');
globalThis.sunNextDuskSensor = entity('sensor.sun_next_dusk', 'Sun Next dusk');
globalThis.sunNextMidnightSensor = entity(
  'sensor.sun_next_midnight',
  'Sun Next midnight',
);
globalThis.sunNextNoonSensor = entity('sensor.sun_next_noon', 'Sun Next noon');
globalThis.sunNextRisingSensor = entity(
  'sensor.sun_next_rising',
  'Sun Next rising',
);
globalThis.sunNextSettingSensor = entity(
  'sensor.sun_next_setting',
  'Sun Next setting',
);
globalThis.mumsPhoneBatteryLevelSensor = entity(
  'sensor.mums_phone_battery_level',
  'Mums phone Battery Level',
);
globalThis.mumsPhoneBatteryStateSensor = entity(
  'sensor.mums_phone_battery_state',
  'Mums phone Battery State',
);
globalThis.mumsPhoneChargerTypeSensor = entity(
  'sensor.mums_phone_charger_type',
  'Mums phone Charger Type',
);
globalThis.bensImacProStorageSensor = entity(
  'sensor.bens_imac_pro_storage',
  'Ben\u2019s iMac Pro Storage',
);
globalThis.bensImacProSsidSensor = entity(
  'sensor.bens_imac_pro_ssid',
  'Ben\u2019s iMac Pro SSID',
);
globalThis.bensImacProActiveAudioInputSensor = entity(
  'sensor.bens_imac_pro_active_audio_input',
  'Ben\u2019s iMac Pro Active Audio Input',
);
globalThis.bensImacProActiveAudioOutputSensor = entity(
  'sensor.bens_imac_pro_active_audio_output',
  'Ben\u2019s iMac Pro Active Audio Output',
);
globalThis.bensImacProBssidSensor = entity(
  'sensor.bens_imac_pro_bssid',
  'Ben\u2019s iMac Pro BSSID',
);
globalThis.bensImacProActiveCameraSensor = entity(
  'sensor.bens_imac_pro_active_camera',
  'Ben\u2019s iMac Pro Active Camera',
);
globalThis.bensImacProConnectionTypeSensor = entity(
  'sensor.bens_imac_pro_connection_type',
  'Ben\u2019s iMac Pro Connection Type',
);
globalThis.bensImacProDisplaysSensor = entity(
  'sensor.bens_imac_pro_displays',
  'Ben\u2019s iMac Pro Displays',
);
globalThis.bensImacProPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_pro_primary_display_name',
  'Ben\u2019s iMac Pro Primary Display Name',
);
globalThis.bensImacProPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_pro_primary_display_id',
  'Ben\u2019s iMac Pro Primary Display ID',
);
globalThis.bensImacProFrontmostAppSensor = entity(
  'sensor.bens_imac_pro_frontmost_app',
  'Ben\u2019s iMac Pro Frontmost App',
);
globalThis.bensImacProLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_pro_last_update_trigger',
  'Ben\u2019s iMac Pro Last Update Trigger',
);
globalThis.bensImacProAppVersionSensor = entity(
  'sensor.bens_imac_pro_app_version',
  'Ben\u2019s iMac Pro App Version',
);
globalThis.bensImacProLocationPermissionSensor = entity(
  'sensor.bens_imac_pro_location_permission',
  'Ben\u2019s iMac Pro Location permission',
);
globalThis.bensImacProGeocodedLocationSensor = entity(
  'sensor.bens_imac_pro_geocoded_location',
  'Ben\u2019s iMac Pro Geocoded Location',
);
globalThis.bensIphoneActivitySensor = entity(
  'sensor.bens_iphone_activity',
  'Ben\u2019s iPhone Activity',
);
globalThis.bensIphoneAverageActivePaceSensor = entity(
  'sensor.bens_iphone_average_active_pace',
  'Ben\u2019s iPhone Average Active Pace',
);
globalThis.bensIphoneFloorsAscendedSensor = entity(
  'sensor.bens_iphone_floors_ascended',
  'Ben\u2019s iPhone Floors Ascended',
);
globalThis.bensIphoneFloorsDescendedSensor = entity(
  'sensor.bens_iphone_floors_descended',
  'Ben\u2019s iPhone Floors Descended',
);
globalThis.bensIphoneBatteryLevelSensor = entity(
  'sensor.bens_iphone_battery_level',
  'Ben\u2019s iPhone Battery Level',
);
globalThis.bensIphoneBatteryStateSensor = entity(
  'sensor.bens_iphone_battery_state',
  'Ben\u2019s iPhone Battery State',
);
globalThis.bensIphoneStorageSensor = entity(
  'sensor.bens_iphone_storage',
  'Ben\u2019s iPhone Storage',
);
globalThis.bensIphoneSsidSensor = entity(
  'sensor.bens_iphone_ssid',
  'Ben\u2019s iPhone SSID',
);
globalThis.bensIphoneBssidSensor = entity(
  'sensor.bens_iphone_bssid',
  'Ben\u2019s iPhone BSSID',
);
globalThis.bensIphoneConnectionTypeSensor = entity(
  'sensor.bens_iphone_connection_type',
  'Ben\u2019s iPhone Connection Type',
);
globalThis.bensIphoneSim_1Sensor = entity(
  'sensor.bens_iphone_sim_1',
  'Ben\u2019s iPhone SIM 1',
);
globalThis.bensIphoneGeocodedLocationSensor = entity(
  'sensor.bens_iphone_geocoded_location',
  'Ben\u2019s iPhone Geocoded Location',
);
globalThis.bensIphoneSim_2Sensor = entity(
  'sensor.bens_iphone_sim_2',
  'Ben\u2019s iPhone SIM 2',
);
globalThis.bensIphoneDistanceSensor = entity(
  'sensor.bens_iphone_distance',
  'Ben\u2019s iPhone Distance',
);
globalThis.bensIphoneStepsSensor = entity(
  'sensor.bens_iphone_steps',
  'Ben\u2019s iPhone Steps',
);
globalThis.bensIphoneLastUpdateTriggerSensor = entity(
  'sensor.bens_iphone_last_update_trigger',
  'Ben\u2019s iPhone Last Update Trigger',
);
globalThis.bensIphoneWatchBatteryLevelSensor = entity(
  'sensor.bens_iphone_watch_battery_level',
  'Ben\u2019s iPhone Watch Battery Level',
);
globalThis.bensIphoneWatchBatteryStateSensor = entity(
  'sensor.bens_iphone_watch_battery_state',
  'Ben\u2019s iPhone Watch Battery State',
);
globalThis.bensIphoneAppVersionSensor = entity(
  'sensor.bens_iphone_app_version',
  'Ben\u2019s iPhone App Version',
);
globalThis.bensIphoneLocationPermissionSensor = entity(
  'sensor.bens_iphone_location_permission',
  'Ben\u2019s iPhone Location permission',
);
globalThis.bensIphoneAudioOutputSensor = entity(
  'sensor.bens_iphone_audio_output',
  'Ben\u2019s iPhone Audio Output',
);
globalThis.bensImacStorageSensor = entity(
  'sensor.bens_imac_storage',
  'Ben\u2019s iMac Storage',
);
globalThis.bensImacBssidSensor = entity(
  'sensor.bens_imac_bssid',
  'Ben\u2019s iMac BSSID',
);
globalThis.bensImacConnectionTypeSensor = entity(
  'sensor.bens_imac_connection_type',
  'Ben\u2019s iMac Connection Type',
);
globalThis.bensImacSsidSensor = entity(
  'sensor.bens_imac_ssid',
  'Ben\u2019s iMac SSID',
);
globalThis.bensImacActiveCameraSensor = entity(
  'sensor.bens_imac_active_camera',
  'Ben\u2019s iMac Active Camera',
);
globalThis.bensImacGeocodedLocationSensor = entity(
  'sensor.bens_imac_geocoded_location',
  'Ben\u2019s iMac Geocoded Location',
);
globalThis.bensImacActiveAudioInputSensor = entity(
  'sensor.bens_imac_active_audio_input',
  'Ben\u2019s iMac Active Audio Input',
);
globalThis.bensImacActiveAudioOutputSensor = entity(
  'sensor.bens_imac_active_audio_output',
  'Ben\u2019s iMac Active Audio Output',
);
globalThis.bensImacDisplaysSensor = entity(
  'sensor.bens_imac_displays',
  'Ben\u2019s iMac Displays',
);
globalThis.bensImacPrimaryDisplayNameSensor = entity(
  'sensor.bens_imac_primary_display_name',
  'Ben\u2019s iMac Primary Display Name',
);
globalThis.bensImacPrimaryDisplayIdSensor = entity(
  'sensor.bens_imac_primary_display_id',
  'Ben\u2019s iMac Primary Display ID',
);
globalThis.bensImacFrontmostAppSensor = entity(
  'sensor.bens_imac_frontmost_app',
  'Ben\u2019s iMac Frontmost App',
);
globalThis.bensImacLastUpdateTriggerSensor = entity(
  'sensor.bens_imac_last_update_trigger',
  'Ben\u2019s iMac Last Update Trigger',
);
globalThis.bensImacAppVersionSensor = entity(
  'sensor.bens_imac_app_version',
  'Ben\u2019s iMac App Version',
);
globalThis.bensImacLocationPermissionSensor = entity(
  'sensor.bens_imac_location_permission',
  'Ben\u2019s iMac Location permission',
);
globalThis.ryansIphoneSsidSensor = entity(
  'sensor.ryans_iphone_ssid',
  'Ryan\u2019s iPhone SSID',
);
globalThis.ryansIphoneBatteryStateSensor = entity(
  'sensor.ryans_iphone_battery_state',
  'Ryan\u2019s iPhone Battery State',
);
globalThis.ryansIphoneStorageSensor = entity(
  'sensor.ryans_iphone_storage',
  'Ryan\u2019s iPhone Storage',
);
globalThis.ryansIphoneBatteryLevelSensor = entity(
  'sensor.ryans_iphone_battery_level',
  'Ryan\u2019s iPhone Battery Level',
);
globalThis.ryansIphoneBssidSensor = entity(
  'sensor.ryans_iphone_bssid',
  'Ryan\u2019s iPhone BSSID',
);
globalThis.ryansIphoneConnectionTypeSensor = entity(
  'sensor.ryans_iphone_connection_type',
  'Ryan\u2019s iPhone Connection Type',
);
globalThis.ryansIphoneLastUpdateTriggerSensor = entity(
  'sensor.ryans_iphone_last_update_trigger',
  'Ryan\u2019s iPhone Last Update Trigger',
);
globalThis.ryansIphoneGeocodedLocationSensor = entity(
  'sensor.ryans_iphone_geocoded_location',
  'Ryan\u2019s iPhone Geocoded Location',
);
globalThis.ryansIphoneLocationPermissionSensor = entity(
  'sensor.ryans_iphone_location_permission',
  'Ryan\u2019s iPhone Location permission',
);
globalThis.ryansIphoneAppVersionSensor = entity(
  'sensor.ryans_iphone_app_version',
  'Ryan\u2019s iPhone App Version',
);
globalThis.ryansIphoneSim_1Sensor = entity(
  'sensor.ryans_iphone_sim_1',
  'Ryan\u2019s iPhone SIM 1',
);
globalThis.ryansIphoneSim_2Sensor = entity(
  'sensor.ryans_iphone_sim_2',
  'Ryan\u2019s iPhone SIM 2',
);
globalThis.ryansIphoneAudioOutputSensor = entity(
  'sensor.ryans_iphone_audio_output',
  'Ryan\u2019s iPhone Audio Output',
);
globalThis.ryansIphoneActivitySensor = entity(
  'sensor.ryans_iphone_activity',
  'Ryan\u2019s iPhone Activity',
);
globalThis.ryansIphoneDistanceSensor = entity(
  'sensor.ryans_iphone_distance',
  'Ryan\u2019s iPhone Distance',
);
globalThis.ryansIphoneFloorsDescendedSensor = entity(
  'sensor.ryans_iphone_floors_descended',
  'Ryan\u2019s iPhone Floors Descended',
);
globalThis.ryansIphoneFloorsAscendedSensor = entity(
  'sensor.ryans_iphone_floors_ascended',
  'Ryan\u2019s iPhone Floors Ascended',
);
globalThis.ryansIphoneStepsSensor = entity(
  'sensor.ryans_iphone_steps',
  'Ryan\u2019s iPhone Steps',
);
globalThis.ryansIphoneAverageActivePaceSensor = entity(
  'sensor.ryans_iphone_average_active_pace',
  'Ryan\u2019s iPhone Average Active Pace',
);
globalThis.ryansIphoneWatchBatteryLevelSensor = entity(
  'sensor.ryans_iphone_watch_battery_level',
  'Ryan\u2019s iPhone Watch Battery Level',
);
globalThis.ryansIphoneWatchBatteryStateSensor = entity(
  'sensor.ryans_iphone_watch_battery_state',
  'Ryan\u2019s iPhone Watch Battery State',
);
globalThis.pixel_6ProBatteryLevelSensor = entity(
  'sensor.pixel_6_pro_battery_level',
  'Pixel 6 Pro Battery level',
);
globalThis.pixel_6ProBatteryStateSensor = entity(
  'sensor.pixel_6_pro_battery_state',
  'Pixel 6 Pro Battery state',
);
globalThis.pixel_6ProChargerTypeSensor = entity(
  'sensor.pixel_6_pro_charger_type',
  'Pixel 6 Pro Charger type',
);
globalThis.tomSPixel_7BatteryLevelSensor = entity(
  'sensor.tom_s_pixel_7_battery_level',
  "Tom's Pixel 7 Battery level",
);
globalThis.tomSPixel_7BatteryStateSensor = entity(
  'sensor.tom_s_pixel_7_battery_state',
  "Tom's Pixel 7 Battery state",
);
globalThis.tomSPixel_7ChargerTypeSensor = entity(
  'sensor.tom_s_pixel_7_charger_type',
  "Tom's Pixel 7 Charger type",
);
globalThis.zStickGen5UsbControllerStatusSensor = entity(
  'sensor.z_stick_gen5_usb_controller_status',
  'Z\u2010Stick Gen5 USB Controller Status',
);
globalThis.livingRoomHeatingSwitchNodeStatusSensor = entity(
  'sensor.living_room_heating_switch_node_status',
  'Living Room Heating Switch Node status',
);
globalThis.livingRoomHeatingSwitchLastSeenSensor = entity(
  'sensor.living_room_heating_switch_last_seen',
  'Living Room Heating Switch Last seen',
);
globalThis.bedroomHeatingSwitchNodeStatusSensor = entity(
  'sensor.bedroom_heating_switch_node_status',
  'Bedroom Heating Switch Node status',
);
globalThis.bedroomHeatingSwitchLastSeenSensor = entity(
  'sensor.bedroom_heating_switch_last_seen',
  'Bedroom Heating Switch Last seen',
);
globalThis.gymHeatingSwitchNodeStatusSensor = entity(
  'sensor.gym_heating_switch_node_status',
  'Gym Heating Switch Node status',
);
globalThis.gymHeatingSwitchLastSeenSensor = entity(
  'sensor.gym_heating_switch_last_seen',
  'Gym Heating Switch Last seen',
);
globalThis.livingRoomSensorNodeStatusSensor = entity(
  'sensor.living_room_sensor_node_status',
  'Living Room Sensor Node status',
);
globalThis.livingRoomSensorLastSeenSensor = entity(
  'sensor.living_room_sensor_last_seen',
  'Living Room Sensor Last seen',
);
globalThis.gymSensorNodeStatusSensor = entity(
  'sensor.gym_sensor_node_status',
  'Gym Sensor Node status',
);
globalThis.gymSensorLastSeenSensor = entity(
  'sensor.gym_sensor_last_seen',
  'Gym Sensor Last seen',
);
globalThis.bedroomSensorNodeStatusSensor = entity(
  'sensor.bedroom_sensor_node_status',
  'Bedroom Sensor Node status',
);
globalThis.bedroomSensorLastSeenSensor = entity(
  'sensor.bedroom_sensor_last_seen',
  'Bedroom Sensor Last seen',
);
globalThis.livingRoomSensorAirTemperatureSensor = entity(
  'sensor.living_room_sensor_air_temperature',
  'Living Room Sensor Air temperature',
);
globalThis.livingRoomSensorIlluminanceSensor = entity(
  'sensor.living_room_sensor_illuminance',
  'Living Room Sensor Illuminance',
);
globalThis.livingRoomSensorAlarmTypeSensor = entity(
  'sensor.living_room_sensor_alarm_type',
  'Living Room Sensor Alarm Type',
);
globalThis.livingRoomSensorAlarmLevelSensor = entity(
  'sensor.living_room_sensor_alarm_level',
  'Living Room Sensor Alarm Level',
);
globalThis.livingRoomSensorBatteryLevelSensor = entity(
  'sensor.living_room_sensor_battery_level',
  'Living Room Sensor',
);
globalThis.gymSensorAirTemperatureSensor = entity(
  'sensor.gym_sensor_air_temperature',
  'Gym Sensor Air temperature',
);
globalThis.gymSensorIlluminanceSensor = entity(
  'sensor.gym_sensor_illuminance',
  'Gym Sensor Illuminance',
);
globalThis.gymSensorAlarmTypeSensor = entity(
  'sensor.gym_sensor_alarm_type',
  'Gym Sensor Alarm Type',
);
globalThis.gymSensorAlarmLevelSensor = entity(
  'sensor.gym_sensor_alarm_level',
  'Gym Sensor Alarm Level',
);
globalThis.gymSensorBatteryLevelSensor = entity(
  'sensor.gym_sensor_battery_level',
  'Gym Sensor Battery level',
);
globalThis.bedroomSensorAirTemperatureSensor = entity(
  'sensor.bedroom_sensor_air_temperature',
  'Bedroom Sensor Air temperature',
);
globalThis.bedroomSensorIlluminanceSensor = entity(
  'sensor.bedroom_sensor_illuminance',
  'Bedroom Sensor Illuminance',
);
globalThis.bedroomSensorAlarmTypeSensor = entity(
  'sensor.bedroom_sensor_alarm_type',
  'Bedroom Sensor Alarm Type',
);
globalThis.bedroomSensorAlarmLevelSensor = entity(
  'sensor.bedroom_sensor_alarm_level',
  'Bedroom Sensor Alarm Level',
);
globalThis.bedroomSensorBatteryLevelSensor = entity(
  'sensor.bedroom_sensor_battery_level',
  'Bedroom Sensor',
);
globalThis.electricMeterSensor = entity(
  'sensor.electric_meter',
  'Electric Meter',
);
globalThis.tahomaSwitchScHomekitSetupCodeSensor = entity(
  'sensor.tahoma_switch_sc_homekit_setup_code',
  'TaHoma Switch Sc HomeKit setup code',
);
globalThis.availableUpdatesCountSensor = entity(
  'sensor.available_updates_count',
  'Available updates count',
);
globalThis.aliceSoilMistureFixedSensor = entity(
  'sensor.alice_soil_misture_fixed',
  'Alice soil misture_fixed',
);
globalThis.lowBatteryCountSensor = entity(
  'sensor.low_battery_count',
  'Low battery count',
);
globalThis.availableUpdatesSensor = entity(
  'sensor.available_updates',
  'Available updates',
);
globalThis.imacScreenOffSensor = entity(
  'sensor.imac_screen_off',
  'iMac Screen Off',
);
globalThis.todaysEventsSensor = entity('sensor.todays_events', 'Todays events');
globalThis.weatherForecastSensor = entity(
  'sensor.weather_forecast',
  'Weather forecast',
);
globalThis.currentTvSourceSensor = entity(
  'sensor.current_tv_source',
  'Current TV Source',
);
globalThis.livingRoomTemperatureSensor = entity(
  'sensor.living_room_temperature',
  'Living Room Temperature',
);
globalThis.livingRoomTargetTemperatureSensor = entity(
  'sensor.living_room_target_temperature',
  'Living Room Target Temperature',
);
globalThis.boilerTargetTemperatureSensor = entity(
  'sensor.boiler_target_temperature',
  'Boiler Target Temperature',
);
globalThis.livingRoomHeatingModeSensor = entity(
  'sensor.living_room_heating_mode',
  'Living Room Heating Mode',
);
globalThis.bedroomTemperatureSensor = entity(
  'sensor.bedroom_temperature',
  'Bedroom Temperature',
);
globalThis.bedroomTargetTemperatureSensor = entity(
  'sensor.bedroom_target_temperature',
  'Bedroom Target Temperature',
);
globalThis.bedroomHeatingModeSensor = entity(
  'sensor.bedroom_heating_mode',
  'Bedroom Heating Mode',
);
globalThis.gymTemperatureSensor = entity(
  'sensor.gym_temperature',
  'Gym Temperature',
);
globalThis.gymTargetTemperatureSensor = entity(
  'sensor.gym_target_temperature',
  'Gym Target Temperature',
);
globalThis.gymHeatingModeSensor = entity(
  'sensor.gym_heating_mode',
  'Gym Heating Mode',
);
globalThis.lastTimeLivingRoomMotionSensorWasTriggeredSensor = entity(
  'sensor.last_time_living_room_motion_sensor_was_triggered',
  'Last time living room motion sensor was triggered',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergyCostSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_cost',
  'sensor Cost',
);
globalThis.boilerBoostTemperatureSensor = entity(
  'sensor.boiler_boost_temperature',
  'Boiler (Boost) temperature',
);
globalThis.tvHeaterPowerSensor = entity(
  'sensor.tv_heater_power',
  'TV Heater Power',
);
globalThis.tvHeaterEnergySensor = entity(
  'sensor.tv_heater_energy',
  'TV Heater Energy',
);
globalThis.diningTableHeaterPowerSensor = entity(
  'sensor.dining_table_heater_power',
  'Dining Table Heater Power',
);
globalThis.diningTableHeaterEnergySensor = entity(
  'sensor.dining_table_heater_energy',
  'Dining Table Heater Energy',
);
globalThis.hallwayHeaterPowerSensor = entity(
  'sensor.hallway_heater_power',
  'Hallway Heater Power',
);
globalThis.hallwayHeaterEnergySensor = entity(
  'sensor.hallway_heater_energy',
  'Hallway Heater Energy',
);
globalThis.bookshelfHeaterPowerSensor = entity(
  'sensor.bookshelf_heater_power',
  'Bookshelf Heater Power',
);
globalThis.bookshelfHeaterEnergySensor = entity(
  'sensor.bookshelf_heater_energy',
  'Bookshelf Heater Energy',
);
globalThis.shellyemA4e57cba73f5Channel_1PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power',
  'shellyem-A4E57CBA73F5 channel 1 power',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy',
  'shellyem-A4E57CBA73F5 channel 1 energy',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_returned',
  'shellyem-A4E57CBA73F5 channel 1 energy returned',
);
globalThis.shellyemA4e57cba73f5Channel_1VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_voltage',
  'shellyem-A4E57CBA73F5 channel 1 voltage',
);
globalThis.shellyemA4e57cba73f5Channel_1PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_power_factor',
  'shellyem-A4E57CBA73F5 channel 1 power factor',
);
globalThis.shellyemA4e57cba73f5Channel_2PowerSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power',
  'shellyem-A4E57CBA73F5 channel 2 power',
);
globalThis.shellyemA4e57cba73f5Channel_2EnergySensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy',
  'shellyem-A4E57CBA73F5 channel 2 energy',
);
globalThis.shellyemA4e57cba73f5Channel_2EnergyReturnedSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_energy_returned',
  'shellyem-A4E57CBA73F5 channel 2 energy returned',
);
globalThis.shellyemA4e57cba73f5Channel_2VoltageSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_voltage',
  'shellyem-A4E57CBA73F5 channel 2 voltage',
);
globalThis.shellyemA4e57cba73f5Channel_2PowerFactorSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_2_power_factor',
  'shellyem-A4E57CBA73F5 channel 2 power factor',
);
globalThis.frontDoorBattery_2Sensor = entity(
  'sensor.front_door_battery_2',
  'Front Door Battery',
);
globalThis.frontDoorLastActivitySensor = entity(
  'sensor.front_door_last_activity',
  'Front Door Last activity',
);
globalThis.adguardHomeDnsQueriesSensor = entity(
  'sensor.adguard_home_dns_queries',
  'AdGuard Home DNS queries',
);
globalThis.adguardHomeSafeBrowsingBlockedSensor = entity(
  'sensor.adguard_home_safe_browsing_blocked',
  'AdGuard Home Safe browsing blocked',
);
globalThis.adguardHomeDnsQueriesBlockedSensor = entity(
  'sensor.adguard_home_dns_queries_blocked',
  'AdGuard Home DNS queries blocked',
);
globalThis.adguardHomeDnsQueriesBlockedRatioSensor = entity(
  'sensor.adguard_home_dns_queries_blocked_ratio',
  'AdGuard Home DNS queries blocked ratio',
);
globalThis.adguardHomeParentalControlBlockedSensor = entity(
  'sensor.adguard_home_parental_control_blocked',
  'AdGuard Home Parental control blocked',
);
globalThis.adguardHomeSafeSearchesEnforcedSensor = entity(
  'sensor.adguard_home_safe_searches_enforced',
  'AdGuard Home Safe searches enforced',
);
globalThis.adguardHomeAverageProcessingSpeedSensor = entity(
  'sensor.adguard_home_average_processing_speed',
  'AdGuard Home Average processing speed',
);
globalThis.systemMonitorDiskFreeRunAudioSensor = entity(
  'sensor.system_monitor_disk_free_run_audio',
  'System Monitor Disk free /run/audio',
);
globalThis.systemMonitorDiskFreeSslSensor = entity(
  'sensor.system_monitor_disk_free_ssl',
  'System Monitor Disk free /ssl',
);
globalThis.systemMonitorDiskFreeConfigSensor = entity(
  'sensor.system_monitor_disk_free_config',
  'System Monitor Disk free /config',
);
globalThis.systemMonitorDiskFreeShareSensor = entity(
  'sensor.system_monitor_disk_free_share',
  'System Monitor Disk free /share',
);
globalThis.systemMonitorDiskFreeMediaSensor = entity(
  'sensor.system_monitor_disk_free_media',
  'System Monitor Disk free /media',
);
globalThis.systemMonitorDiskFreeSensor = entity(
  'sensor.system_monitor_disk_free',
  'Free',
);
globalThis.systemMonitorDiskUseSensor = entity(
  'sensor.system_monitor_disk_use',
  'System Monitor Disk use /',
);
globalThis.systemMonitorDiskUsageSensor = entity(
  'sensor.system_monitor_disk_usage',
  'System Monitor Disk usage /',
);
globalThis.systemMonitorIpv4AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv4_address_enp1s0',
  'System Monitor IPv4 address enp1s0',
);
globalThis.systemMonitorIpv6AddressEnp1s0Sensor = entity(
  'sensor.system_monitor_ipv6_address_enp1s0',
  'System Monitor IPv6 address enp1s0',
);
globalThis.systemMonitorLastBootSensor = entity(
  'sensor.system_monitor_last_boot',
  'System Monitor Last boot',
);
globalThis.systemMonitorLoad_15mSensor = entity(
  'sensor.system_monitor_load_15m',
  'System Monitor Load (15 min)',
);
globalThis.systemMonitorLoad_1mSensor = entity(
  'sensor.system_monitor_load_1m',
  'System Monitor Load (1 min)',
);
globalThis.systemMonitorLoad_5mSensor = entity(
  'sensor.system_monitor_load_5m',
  'System Monitor Load (5 min)',
);
globalThis.systemMonitorMemoryFreeSensor = entity(
  'sensor.system_monitor_memory_free',
  'System Monitor Memory free',
);
globalThis.systemMonitorMemoryUseSensor = entity(
  'sensor.system_monitor_memory_use',
  'Total used',
);
globalThis.systemMonitorMemoryUsageSensor = entity(
  'sensor.system_monitor_memory_usage',
  'Usage percentage',
);
globalThis.systemMonitorNetworkInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_in_enp1s0',
  'System Monitor Network in enp1s0',
);
globalThis.systemMonitorNetworkOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_out_enp1s0',
  'System Monitor Network out enp1s0',
);
globalThis.systemMonitorPacketsInEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_in_enp1s0',
  'System Monitor Packets in enp1s0',
);
globalThis.systemMonitorPacketsOutEnp1s0Sensor = entity(
  'sensor.system_monitor_packets_out_enp1s0',
  'System Monitor Packets out enp1s0',
);
globalThis.systemMonitorNetworkThroughputInEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_in_enp1s0',
  'System Monitor Network throughput in enp1s0',
);
globalThis.systemMonitorNetworkThroughputOutEnp1s0Sensor = entity(
  'sensor.system_monitor_network_throughput_out_enp1s0',
  'System Monitor Network throughput out enp1s0',
);
globalThis.systemMonitorProcessorUseSensor = entity(
  'sensor.system_monitor_processor_use',
  'Use',
);
globalThis.systemMonitorProcessorTemperatureSensor = entity(
  'sensor.system_monitor_processor_temperature',
  'Temperature',
);
globalThis.systemMonitorSwapFreeSensor = entity(
  'sensor.system_monitor_swap_free',
  'System Monitor Swap free',
);
globalThis.systemMonitorSwapUseSensor = entity(
  'sensor.system_monitor_swap_use',
  'System Monitor Swap use',
);
globalThis.systemMonitorSwapUsageSensor = entity(
  'sensor.system_monitor_swap_usage',
  'System Monitor Swap usage',
);
globalThis.qbittorrentStatusSensor = entity(
  'sensor.qbittorrent_status',
  'qBittorrent Status',
);
globalThis.qbittorrentConnectionStatusSensor = entity(
  'sensor.qbittorrent_connection_status',
  'qBittorrent Connection status',
);
globalThis.qbittorrentDownloadSpeedSensor = entity(
  'sensor.qbittorrent_download_speed',
  'qBittorrent Download speed',
);
globalThis.qbittorrentUploadSpeedSensor = entity(
  'sensor.qbittorrent_upload_speed',
  'qBittorrent Upload speed',
);
globalThis.qbittorrentAllTimeDownloadSensor = entity(
  'sensor.qbittorrent_all_time_download',
  'qBittorrent All-time download',
);
globalThis.qbittorrentAllTimeUploadSensor = entity(
  'sensor.qbittorrent_all_time_upload',
  'qBittorrent All-time upload',
);
globalThis.qbittorrentAllTorrentsSensor = entity(
  'sensor.qbittorrent_all_torrents',
  'qBittorrent All torrents',
);
globalThis.qbittorrentActiveTorrentsSensor = entity(
  'sensor.qbittorrent_active_torrents',
  'qBittorrent Active torrents',
);
globalThis.qbittorrentInactiveTorrentsSensor = entity(
  'sensor.qbittorrent_inactive_torrents',
  'qBittorrent Inactive torrents',
);
globalThis.qbittorrentPausedTorrentsSensor = entity(
  'sensor.qbittorrent_paused_torrents',
  'qBittorrent Paused torrents',
);
globalThis.zteRouterDataReceivedSensor = entity(
  'sensor.zte_router_data_received',
  'ZTE Router Data received',
);
globalThis.zteRouterDataSentSensor = entity(
  'sensor.zte_router_data_sent',
  'ZTE Router Data sent',
);
globalThis.zteRouterExternalIpSensor = entity(
  'sensor.zte_router_external_ip',
  'ZTE Router External IP',
);
globalThis.zteRouterUptimeSensor = entity(
  'sensor.zte_router_uptime',
  'ZTE Router Uptime',
);
globalThis.zteRouterDownloadSpeedSensor = entity(
  'sensor.zte_router_download_speed',
  'ZTE Router Download speed',
);
globalThis.zteRouterUploadSpeedSensor = entity(
  'sensor.zte_router_upload_speed',
  'ZTE Router Upload speed',
);
globalThis.octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor = entity(
  'sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_electricity',
  'Wheel Of Fortune Spins Electricity (A-11077925)',
);
globalThis.octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor = entity(
  'sensor.octopus_energy_a_11077925_wheel_of_fortune_spins_gas',
  'Wheel Of Fortune Spins Gas (A-11077925)',
);
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_rate',
    'Current Rate Electricity (19L3210845 1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_rate',
    'Previous Rate Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_next_rate',
    'Next Rate Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_current_standing_charge',
    'Current Standing Charge Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_consumption',
    'Previous Accumulative Consumption Electricity (19L3210845/1630000030495)',
  );
globalThis.octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor =
  entity(
    'sensor.octopus_energy_electricity_19l3210845_1630000030495_previous_accumulative_cost',
    'Previous Accumulative Cost Electricity (19L3210845/1630000030495)',
  );
globalThis.homeNearestDeviceSensor = entity(
  'sensor.home_nearest_device',
  'Home Nearest device',
);
globalThis.homeNearestDistanceSensor = entity(
  'sensor.home_nearest_distance',
  'Home Nearest distance',
);
globalThis.homeNearestDirectionOfTravelSensor = entity(
  'sensor.home_nearest_direction_of_travel',
  'Home Nearest direction of travel',
);
globalThis.homeMeDistanceSensor = entity(
  'sensor.home_me_distance',
  'Home Me Distance',
);
globalThis.homeMeDirectionOfTravelSensor = entity(
  'sensor.home_me_direction_of_travel',
  'Home Me Direction of travel',
);
globalThis.home_2NearestDeviceSensor = entity(
  'sensor.home_2_nearest_device',
  'Home 2 Nearest device',
);
globalThis.home_2NearestDistanceSensor = entity(
  'sensor.home_2_nearest_distance',
  'Home 2 Nearest distance',
);
globalThis.home_2NearestDirectionOfTravelSensor = entity(
  'sensor.home_2_nearest_direction_of_travel',
  'Home 2 Nearest direction of travel',
);
globalThis.home_2MeDistanceSensor = entity(
  'sensor.home_2_me_distance',
  'Home 2 Me Distance',
);
globalThis.home_2MeDirectionOfTravelSensor = entity(
  'sensor.home_2_me_direction_of_travel',
  'Home 2 Me Direction of travel',
);
globalThis.tumbleDryerSmartPlugSignalLevelSensor = entity(
  'sensor.tumble_dryer_smart_plug_signal_level',
  'Tumble Dryer Smart Plug Signal level',
);
globalThis.tumbleDryerSmartPlugAutoOffAtSensor = entity(
  'sensor.tumble_dryer_smart_plug_auto_off_at',
  'Tumble Dryer Smart Plug Auto-off at',
);
globalThis.tumbleDryerSmartPlugCurrentConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_current_consumption',
  'Tumble Dryer Smart Plug Current consumption',
);
globalThis.tumbleDryerSmartPlugTodaySConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_today_s_consumption',
  "Tumble Dryer Smart Plug Today's consumption",
);
globalThis.tumbleDryerSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.tumble_dryer_smart_plug_this_month_s_consumption',
  "Tumble Dryer Smart Plug This month's consumption",
);
globalThis.tumbleDryerSmartPlugVoltageSensor = entity(
  'sensor.tumble_dryer_smart_plug_voltage',
  'Tumble Dryer Smart Plug Voltage',
);
globalThis.tumbleDryerSmartPlugCurrentSensor = entity(
  'sensor.tumble_dryer_smart_plug_current',
  'Tumble Dryer Smart Plug Current',
);
globalThis.watchmanLastUpdatedSensor = entity(
  'sensor.watchman_last_updated',
  'watchman_last_updated',
);
globalThis.watchmanMissingEntitiesSensor = entity(
  'sensor.watchman_missing_entities',
  'watchman_missing_entities',
);
globalThis.watchmanMissingActionsSensor = entity(
  'sensor.watchman_missing_actions',
  'watchman_missing_actions',
);
globalThis.wearingClapper2TrophyLevelSensor = entity(
  'sensor.wearing_clapper2_trophy_level',
  'Playstation Trophy Level',
);
globalThis.wearingClapper2StatusSensor = entity(
  'sensor.wearing_clapper2_status',
  'Playstation Status',
);
globalThis.playstationPlaystationPlusSensor = entity(
  'sensor.playstation_playstation_plus',
  'Playstation Playstation Plus',
);
globalThis.playstationAboutMeSensor = entity(
  'sensor.playstation_about_me',
  'Playstation About Me',
);
globalThis.aliceIlluminanceSensor = entity(
  'sensor.alice_illuminance',
  'Alice illuminance',
);
globalThis.aliceConductivitySensor = entity(
  'sensor.alice_conductivity',
  'Alice conductivity',
);
globalThis.aliceSoilMoistureSensor = entity(
  'sensor.alice_soil_moisture',
  'Alice soil moisture',
);
globalThis.aliceTemperatureSensor = entity(
  'sensor.alice_temperature',
  'Alice temperature',
);
globalThis.aliceAirHumiditySensor = entity(
  'sensor.alice_air_humidity',
  'Alice air humidity',
);
globalThis.alicePpfdMolSensor = entity(
  'sensor.alice_ppfd_mol',
  'Alice ppfd (mol)',
);
globalThis.aliceTotalPpfdMolIntegralSensor = entity(
  'sensor.alice_total_ppfd_mol_integral',
  'Alice Total ppfd (mol) Integral',
);
globalThis.aliceDliSensor = entity('sensor.alice_dli', 'Alice dli');
globalThis.frontDoorBatterySensor = entity(
  'sensor.front_door_battery',
  'Front Door',
);
globalThis.frontDoorFirmwareVersionSensor = entity(
  'sensor.front_door_firmware_version',
  'Front Door Firmware version',
);
globalThis.bathroomMotionSensorTemperatureSensor = entity(
  'sensor.bathroom_motion_sensor_temperature',
  'Bathroom Motion Sensor Temperature',
);
globalThis.bathroomMotionSensorBatterySensor = entity(
  'sensor.bathroom_motion_sensor_battery',
  'Bathroom Motion Sensor',
);
globalThis.hallwayMotionSensorTemperatureSensor = entity(
  'sensor.hallway_motion_sensor_temperature',
  'Hallway Motion Sensor Temperature',
);
globalThis.hallwayMotionSensorBatterySensor = entity(
  'sensor.hallway_motion_sensor_battery',
  'Hallway Motion Sensor',
);
globalThis.zigbee2mqttBridgeVersionSensor = entity(
  'sensor.zigbee2mqtt_bridge_version',
  'Zigbee2MQTT Bridge Version',
);
globalThis.sonosArcUltraAudioInputFormatSensor = entity(
  'sensor.sonos_arc_ultra_audio_input_format',
  'Sonos Arc Ultra Audio input format',
);
globalThis.icloud3EventLogSensor = entity(
  'sensor.icloud3_event_log',
  'iCloud3 Event Log',
);
globalThis.icloud3WazehistTrackSensor = entity(
  'sensor.icloud3_wazehist_track',
  'iCloud3 Waze History Track',
);
globalThis.bensIphoneBadgeSensor = entity(
  'sensor.bens_iphone_badge',
  "Ben's iPhone Badge",
);
globalThis.bensIphoneLastUpdateSensor = entity(
  'sensor.bens_iphone_last_update',
  "Ben's iPhone LastUpdate",
);
globalThis.bensIphoneIntervalSensor = entity(
  'sensor.bens_iphone_interval',
  "Ben's iPhone Interval",
);
globalThis.bensIphoneBatterySensor = entity(
  'sensor.bens_iphone_battery',
  "Ben's iPhone Battery",
);
globalThis.bensIphoneMovedDistanceSensor = entity(
  'sensor.bens_iphone_moved_distance',
  "Ben's iPhone MovedDistance",
);
globalThis.bensIphoneDirOfTravelSensor = entity(
  'sensor.bens_iphone_dir_of_travel',
  "Ben's iPhone Direction",
);
globalThis.bensIphoneNameSensor = entity(
  'sensor.bens_iphone_name',
  "Ben's iPhone Name",
);
globalThis.bensIphoneHomeDistanceSensor = entity(
  'sensor.bens_iphone_home_distance',
  "Ben's iPhone HomeDistance",
);
globalThis.bensIphoneLastLocatedSensor = entity(
  'sensor.bens_iphone_last_located',
  "Ben's iPhone LastLocated",
);
globalThis.bensIphoneArrivalTimeSensor = entity(
  'sensor.bens_iphone_arrival_time',
  "Ben's iPhone ArrivalTime",
);
globalThis.bensIphoneNextUpdateSensor = entity(
  'sensor.bens_iphone_next_update',
  "Ben's iPhone NextUpdate",
);
globalThis.bensIphoneTravelTimeMinSensor = entity(
  'sensor.bens_iphone_travel_time_min',
  "Ben's iPhone TravelTime (min)",
);
globalThis.bensIphoneBatteryStatusSensor = entity(
  'sensor.bens_iphone_battery_status',
  "Ben's iPhone BatteryStatus",
);
globalThis.bensIphoneInfoSensor = entity(
  'sensor.bens_iphone_info',
  "Ben's iPhone Info",
);
globalThis.bensIphoneZoneDistanceSensor = entity(
  'sensor.bens_iphone_zone_distance',
  "Ben's iPhone ZoneDistance",
);
globalThis.bensIphoneZoneNameSensor = entity(
  'sensor.bens_iphone_zone_name',
  "Ben's iPhone ZoneName",
);
globalThis.bensIphoneTravelTimeSensor = entity(
  'sensor.bens_iphone_travel_time',
  "Ben's iPhone TravelTime",
);
globalThis.icalBenSCalendarEvent_0Sensor = entity(
  'sensor.ical_ben_s_calendar_event_0',
  'Work',
);
globalThis.icalBenSCalendarEvent_1Sensor = entity(
  'sensor.ical_ben_s_calendar_event_1',
  'Jen Awaze drinks ',
);
globalThis.icalBenSCalendarEvent_2Sensor = entity(
  'sensor.ical_ben_s_calendar_event_2',
  'Work',
);
globalThis.icalBenSCalendarEvent_3Sensor = entity(
  'sensor.ical_ben_s_calendar_event_3',
  'Moustafa',
);
globalThis.icalBenSCalendarEvent_4Sensor = entity(
  'sensor.ical_ben_s_calendar_event_4',
  'Work',
);
globalThis.icalBenSCalendarEvent_5Sensor = entity(
  'sensor.ical_ben_s_calendar_event_5',
  'Work',
);
globalThis.icalBenSCalendarEvent_6Sensor = entity(
  'sensor.ical_ben_s_calendar_event_6',
  'BBQ Mike ',
);
globalThis.icalBenSCalendarEvent_7Sensor = entity(
  'sensor.ical_ben_s_calendar_event_7',
  'Work',
);
globalThis.icalBenSCalendarEvent_8Sensor = entity(
  'sensor.ical_ben_s_calendar_event_8',
  'Work',
);
globalThis.icalBenSCalendarEvent_9Sensor = entity(
  'sensor.ical_ben_s_calendar_event_9',
  'Work',
);
globalThis.benSSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_alarm',
  'Bedroom Sonos One next Alarm',
);
globalThis.benSSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_timer',
  'Bedroom Sonos One next Timer',
);
globalThis.benSSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_sonos_one_second_edition_next_reminder',
  'Bedroom Sonos One next Reminder',
);
globalThis.bedroomSpeakerNextAlarmSensor = entity(
  'sensor.bedroom_speaker_next_alarm',
  'Bedroom Speaker next Alarm',
);
globalThis.bedroomSpeakerNextTimerSensor = entity(
  'sensor.bedroom_speaker_next_timer',
  'Bedroom Speaker next Timer',
);
globalThis.bedroomSpeakerNextReminderSensor = entity(
  'sensor.bedroom_speaker_next_reminder',
  'Bedroom Speaker next Reminder',
);
globalThis.officeNextAlarmSensor = entity(
  'sensor.office_next_alarm',
  'Office next Alarm',
);
globalThis.officeNextTimerSensor = entity(
  'sensor.office_next_timer',
  'Office next Timer',
);
globalThis.officeNextReminderSensor = entity(
  'sensor.office_next_reminder',
  'Office next Reminder',
);
globalThis.benS_2ndSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_alarm',
  'Gym Sonos One next Alarm',
);
globalThis.benS_2ndSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_timer',
  'Gym Sonos One next Timer',
);
globalThis.benS_2ndSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_2nd_sonos_one_second_edition_next_reminder',
  'Gym Sonos One next Reminder',
);
globalThis.benS_3rdSonosOneSecondEditionNextAlarmSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_alarm',
  'Living Room Sonos One next Alarm',
);
globalThis.benS_3rdSonosOneSecondEditionNextTimerSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_timer',
  'Living Room Sonos One next Timer',
);
globalThis.benS_3rdSonosOneSecondEditionNextReminderSensor = entity(
  'sensor.ben_s_3rd_sonos_one_second_edition_next_reminder',
  'Living Room Sonos One next Reminder',
);
globalThis.livingRoomNextAlarmSensor = entity(
  'sensor.living_room_next_alarm',
  'Living Room next Alarm',
);
globalThis.livingRoomNextTimerSensor = entity(
  'sensor.living_room_next_timer',
  'Living Room next Timer',
);
globalThis.livingRoomNextReminderSensor = entity(
  'sensor.living_room_next_reminder',
  'Living Room next Reminder',
);
globalThis.sonosArcUltraNextAlarmSensor = entity(
  'sensor.sonos_arc_ultra_next_alarm',
  'Sonos Arc Ultra next Alarm',
);
globalThis.sonosArcUltraNextTimerSensor = entity(
  'sensor.sonos_arc_ultra_next_timer',
  'Sonos Arc Ultra next Timer',
);
globalThis.sonosArcUltraNextReminderSensor = entity(
  'sensor.sonos_arc_ultra_next_reminder',
  'Sonos Arc Ultra next Reminder',
);
globalThis.livingRoomSonosNextAlarmSensor = entity(
  'sensor.living_room_sonos_next_alarm',
  'Living Room Sonos next Alarm',
);
globalThis.livingRoomSonosNextTimerSensor = entity(
  'sensor.living_room_sonos_next_timer',
  'Living Room Sonos next Timer',
);
globalThis.livingRoomSonosNextReminderSensor = entity(
  'sensor.living_room_sonos_next_reminder',
  'Living Room Sonos next Reminder',
);
globalThis.thisDeviceNextAlarm_2Sensor = entity(
  'sensor.this_device_next_alarm_2',
  'This Device next Alarm',
);
globalThis.thisDeviceNextTimer_2Sensor = entity(
  'sensor.this_device_next_timer_2',
  'This Device next Timer',
);
globalThis.thisDeviceNextReminder_2Sensor = entity(
  'sensor.this_device_next_reminder_2',
  'This Device next Reminder',
);
globalThis.livingRoomSensorCoverStatusSensor = entity(
  'sensor.living_room_sensor_cover_status',
  'Home Security Cover status',
);
globalThis.livingRoomSensorMotionSensorStatusSensor = entity(
  'sensor.living_room_sensor_motion_sensor_status',
  'Home Security Motion sensor status',
);
globalThis.gymSensorCoverStatusSensor = entity(
  'sensor.gym_sensor_cover_status',
  'Home Security Cover status',
);
globalThis.gymSensorMotionSensorStatusSensor = entity(
  'sensor.gym_sensor_motion_sensor_status',
  'Home Security Motion sensor status',
);
globalThis.bedroomSensorCoverStatusSensor = entity(
  'sensor.bedroom_sensor_cover_status',
  'Home Security Cover status',
);
globalThis.bedroomSensorMotionSensorStatusSensor = entity(
  'sensor.bedroom_sensor_motion_sensor_status',
  'Home Security Motion sensor status',
);
globalThis.automationLogEntitySensor = entity(
  'sensor.automation_log_entity',
  'Node Red Logging',
);
globalThis.zStickGen5UsbControllerBasicSensor = entity(
  'sensor.z_stick_gen5_usb_controller_basic',
  'Basic',
);
globalThis.goodMorningMessageSensor = entity(
  'sensor.good_morning_message',
  'Good Morning Message',
);
globalThis.livingRoomOccupiedSensor = entity(
  'sensor.living_room_occupied',
  'Living room occupied',
);
globalThis.systemMonitorIpv4AddressWlan0Sensor = entity(
  'sensor.system_monitor_ipv4_address_wlan0',
  'IPv4 address wlan0',
);
globalThis.homeAssistantServerAutoOffAtSensor = entity(
  'sensor.home_assistant_server_auto_off_at',
  'Auto-off at',
);
globalThis.homeAssistantServerCurrentConsumptionSensor = entity(
  'sensor.home_assistant_server_current_consumption',
  'Current consumption',
);
globalThis.homeAssistantServerSignalLevelSensor = entity(
  'sensor.home_assistant_server_signal_level',
  'Signal level',
);
globalThis.homeAssistantServerThisMonthSConsumptionSensor = entity(
  'sensor.home_assistant_server_this_month_s_consumption',
  "This month's consumption",
);
globalThis.homeAssistantServerTodaySConsumptionSensor = entity(
  'sensor.home_assistant_server_today_s_consumption',
  "Today's consumption",
);
globalThis.imacSmartPlugAutoOffAt_2Sensor = entity(
  'sensor.imac_smart_plug_auto_off_at_2',
  'Auto-off at',
);
globalThis.imacSmartPlugCurrentConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_current_consumption_2',
  'Current consumption',
);
globalThis.imacSmartPlugSignalLevel_2Sensor = entity(
  'sensor.imac_smart_plug_signal_level_2',
  'Signal level',
);
globalThis.imacSmartPlugThisMonthSConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_this_month_s_consumption_2',
  "This month's consumption",
);
globalThis.imacSmartPlugTodaySConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_today_s_consumption_2',
  "Today's consumption",
);
globalThis.livingRoomHeaterSmartPlugAutoOffAtSensor = entity(
  'sensor.living_room_heater_smart_plug_auto_off_at',
  'Auto-off at',
);
globalThis.livingRoomHeaterSmartPlugCurrentConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_current_consumption',
  'Current consumption',
);
globalThis.livingRoomHeaterSmartPlugSignalLevelSensor = entity(
  'sensor.living_room_heater_smart_plug_signal_level',
  'Signal level',
);
globalThis.livingRoomHeaterSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_this_month_s_consumption',
  "This month's consumption",
);
globalThis.livingRoomHeaterSmartPlugTodaySConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_today_s_consumption',
  "Today's consumption",
);
globalThis.lastUnlockerSensor = entity('sensor.last_unlocker', 'Last unlocker');
globalThis.frontDoorDoorbellMqttBattery_3Sensor = entity(
  'sensor.front_door_doorbell_mqtt_battery_3',
  'Front Door Doorbell MQTT Battery',
);
globalThis.frontDoorDoorbellMqttInfoSensor = entity(
  'sensor.front_door_doorbell_mqtt_info',
  'Front Door Doorbell MQTT Info',
);
globalThis.frontDoorDoorbellMqttWirelessSensor = entity(
  'sensor.front_door_doorbell_mqtt_wireless',
  'Front Door Doorbell MQTT Wireless',
);
globalThis.batterySensor = entity('sensor.battery', 'Battery');
globalThis.battery_2Sensor = entity('sensor.battery_2', 'Battery');
globalThis.magicKeyboardWithNumericKeypadBatteryBatterySensor = entity(
  'sensor.magic_keyboard_with_numeric_keypad_battery_battery',
  'Magic Keyboard',
);
globalThis.magicMouseBatteryBatterySensor = entity(
  'sensor.magic_mouse_battery_battery',
  'Magic Mouse',
);
globalThis.undefinedBatteryBatterySensor = entity(
  'sensor.undefined_battery_battery',
  'Battery',
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
  'Signal Strength',
);
globalThis.tp357sD5f7BatterySensor = entity(
  'sensor.tp357s_d5f7_battery',
  'Battery',
);
globalThis.tp357sD5f7TemperatureSensor = entity(
  'sensor.tp357s_d5f7_temperature',
  'Temperature',
);
globalThis.tp357sD5f7HumiditySensor = entity(
  'sensor.tp357s_d5f7_humidity',
  'Humidity',
);
globalThis.spotifyBenWainwrightSongTempoSensor = entity(
  'sensor.spotify_ben_wainwright_song_tempo',
  'Song tempo',
);
globalThis.homeAssistantServerVoltageSensor = entity(
  'sensor.home_assistant_server_voltage',
  'Voltage',
);
globalThis.homeAssistantServerCurrentSensor = entity(
  'sensor.home_assistant_server_current',
  'Current',
);
globalThis.livingRoomHeaterSmartPlugVoltageSensor = entity(
  'sensor.living_room_heater_smart_plug_voltage',
  'Voltage',
);
globalThis.livingRoomHeaterSmartPlugCurrentSensor = entity(
  'sensor.living_room_heater_smart_plug_current',
  'Current',
);
globalThis.imacSmartPlugVoltageSensor = entity(
  'sensor.imac_smart_plug_voltage',
  'Voltage',
);
globalThis.imacSmartPlugCurrentSensor = entity(
  'sensor.imac_smart_plug_current',
  'Current',
);
globalThis.boilerBoostTimeRemainingSensor = entity(
  'sensor.boiler_boost_time_remaining',
  'Boiler boost time remaining',
);
globalThis.gw1100aIndoorHumiditySensor = entity(
  'sensor.gw1100a_indoor_humidity',
  'GW1100A Indoor Humidity',
);
globalThis.gw1100aSoilMoisture_1Sensor = entity(
  'sensor.gw1100a_soil_moisture_1',
  'GW1100A Soil Moisture 1',
);
globalThis.gw1100aSoilMoisture_3Sensor = entity(
  'sensor.gw1100a_soil_moisture_3',
  'GW1100A Soil Moisture 3',
);
globalThis.gw1100aSoilMoisture_4Sensor = entity(
  'sensor.gw1100a_soil_moisture_4',
  'GW1100A Soil Moisture 4',
);
globalThis.gw1100aSoilBattery_1Sensor = entity(
  'sensor.gw1100a_soil_battery_1',
  'GW1100A Soil Battery 1',
);
globalThis.gw1100aSoilBattery_2Sensor = entity(
  'sensor.gw1100a_soil_battery_2',
  'GW1100A Soil Battery 2',
);
globalThis.gw1100aSoilBattery_3Sensor = entity(
  'sensor.gw1100a_soil_battery_3',
  'GW1100A Soil Battery 3',
);
globalThis.gw1100aSoilBattery_4Sensor = entity(
  'sensor.gw1100a_soil_battery_4',
  'GW1100A Soil Battery 4',
);
globalThis.gw1100aIndoorTemperatureSensor = entity(
  'sensor.gw1100a_indoor_temperature',
  'GW1100A Indoor Temperature',
);
globalThis.gw1100aRelativePressureSensor = entity(
  'sensor.gw1100a_relative_pressure',
  'GW1100A Relative Pressure',
);
globalThis.gw1100aAbsolutePressureSensor = entity(
  'sensor.gw1100a_absolute_pressure',
  'GW1100A Absolute Pressure',
);
globalThis.gw1100aIndoorDewpointSensor = entity(
  'sensor.gw1100a_indoor_dewpoint',
  'GW1100A Indoor Dewpoint',
);
globalThis.aliceMoistureSensor = entity(
  'sensor.alice_moisture',
  'Alice - Moisture',
);
