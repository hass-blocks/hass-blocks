import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingCpuPercentSensor: ITarget;
  var ringMqttWithVideoStreamingMemoryPercentSensor: ITarget;
  var backupBackupManagerStateSensor: ITarget;
  var backupNextScheduledAutomaticBackupSensor: ITarget;
  var backupLastSuccessfulAutomaticBackupSensor: ITarget;
  var sunNextDawnSensor: ITarget;
  var sunNextDuskSensor: ITarget;
  var sunNextMidnightSensor: ITarget;
  var sunNextNoonSensor: ITarget;
  var sunNextRisingSensor: ITarget;
  var sunNextSettingSensor: ITarget;
  var dateTimeIsoSensor: ITarget;
  var tahomaSwitchScHomekitSetupCodeSensor: ITarget;
  var systemMonitorDiskFreeSslSensor: ITarget;
  var systemMonitorDiskFreeConfigSensor: ITarget;
  var systemMonitorDiskFreeShareSensor: ITarget;
  var systemMonitorDiskFreeSensor: ITarget;
  var systemMonitorDiskFreeMediaSensor: ITarget;
  var systemMonitorDiskFreeRunAudioSensor: ITarget;
  var systemMonitorDiskUseSensor: ITarget;
  var systemMonitorDiskUsageSensor: ITarget;
  var systemMonitorIpv4AddressEnp1s0Sensor: ITarget;
  var systemMonitorIpv6AddressEnp1s0Sensor: ITarget;
  var systemMonitorLastBootSensor: ITarget;
  var systemMonitorLoad_15mSensor: ITarget;
  var systemMonitorLoad_1mSensor: ITarget;
  var systemMonitorLoad_5mSensor: ITarget;
  var systemMonitorMemoryFreeSensor: ITarget;
  var systemMonitorMemoryUseSensor: ITarget;
  var systemMonitorMemoryUsageSensor: ITarget;
  var systemMonitorNetworkInEnp1s0Sensor: ITarget;
  var systemMonitorNetworkOutEnp1s0Sensor: ITarget;
  var systemMonitorPacketsInEnp1s0Sensor: ITarget;
  var systemMonitorPacketsOutEnp1s0Sensor: ITarget;
  var systemMonitorNetworkThroughputInEnp1s0Sensor: ITarget;
  var systemMonitorNetworkThroughputOutEnp1s0Sensor: ITarget;
  var systemMonitorProcessorUseSensor: ITarget;
  var systemMonitorProcessorTemperatureSensor: ITarget;
  var systemMonitorSwapFreeSensor: ITarget;
  var systemMonitorSwapUseSensor: ITarget;
  var systemMonitorSwapUsageSensor: ITarget;
  var boilerBoostTemperatureSensor: ITarget;
  var livingRoomHeaterDiningTablePowerSensor: ITarget;
  var livingRoomHeaterDiningTableEnergySensor: ITarget;
  var shellyemA4e57cba73f5Channel_1PowerSensor: ITarget;
  var shellyemA4e57cba73f5Channel_1EnergySensor: ITarget;
  var shellyemA4e57cba73f5Channel_1EnergyReturnedSensor: ITarget;
  var shellyemA4e57cba73f5Channel_1VoltageSensor: ITarget;
  var shellyemA4e57cba73f5Channel_1PowerFactorSensor: ITarget;
  var shellyemA4e57cba73f5Channel_2PowerSensor: ITarget;
  var shellyemA4e57cba73f5Channel_2EnergySensor: ITarget;
  var shellyemA4e57cba73f5Channel_2EnergyReturnedSensor: ITarget;
  var shellyemA4e57cba73f5Channel_2VoltageSensor: ITarget;
  var shellyemA4e57cba73f5Channel_2PowerFactorSensor: ITarget;
  var qbittorrentStatusSensor: ITarget;
  var qbittorrentConnectionStatusSensor: ITarget;
  var qbittorrentDownloadSpeedSensor: ITarget;
  var qbittorrentUploadSpeedSensor: ITarget;
  var qbittorrentAllTimeDownloadSensor: ITarget;
  var qbittorrentAllTimeUploadSensor: ITarget;
  var qbittorrentAllTorrentsSensor: ITarget;
  var qbittorrentActiveTorrentsSensor: ITarget;
  var qbittorrentInactiveTorrentsSensor: ITarget;
  var qbittorrentPausedTorrentsSensor: ITarget;
  var zStickGen5UsbControllerStatusSensor: ITarget;
  var livingRoomHeatingSwitchNodeStatusSensor: ITarget;
  var livingRoomHeatingSwitchLastSeenSensor: ITarget;
  var bedroomHeatingSwitchNodeStatusSensor: ITarget;
  var bedroomHeatingSwitchLastSeenSensor: ITarget;
  var gymHeatingSwitchNodeStatusSensor: ITarget;
  var gymHeatingSwitchLastSeenSensor: ITarget;
  var livingRoomSensorNodeStatusSensor: ITarget;
  var livingRoomSensorLastSeenSensor: ITarget;
  var gymSensorNodeStatusSensor: ITarget;
  var gymSensorLastSeenSensor: ITarget;
  var bedroomSensorNodeStatusSensor: ITarget;
  var bedroomSensorLastSeenSensor: ITarget;
  var livingRoomSensorAirTemperatureSensor: ITarget;
  var livingRoomSensorIlluminanceSensor: ITarget;
  var livingRoomSensorAlarmTypeSensor: ITarget;
  var livingRoomSensorAlarmLevelSensor: ITarget;
  var livingRoomSensorBatteryLevelSensor: ITarget;
  var gymSensorAirTemperatureSensor: ITarget;
  var gymSensorIlluminanceSensor: ITarget;
  var gymSensorAlarmTypeSensor: ITarget;
  var gymSensorAlarmLevelSensor: ITarget;
  var gymSensorBatteryLevelSensor: ITarget;
  var bedroomSensorAirTemperatureSensor: ITarget;
  var bedroomSensorIlluminanceSensor: ITarget;
  var bedroomSensorAlarmTypeSensor: ITarget;
  var bedroomSensorAlarmLevelSensor: ITarget;
  var bedroomSensorBatteryLevelSensor: ITarget;
  var shellyemA4e57cba73f5Channel_1EnergyCostSensor: ITarget;
  var octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor: ITarget;
  var octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor: ITarget;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor: ITarget;
  var mumsPhoneBatteryLevelSensor: ITarget;
  var mumsPhoneBatteryStateSensor: ITarget;
  var mumsPhoneChargerTypeSensor: ITarget;
  var bensImacProStorageSensor: ITarget;
  var bensImacProSsidSensor: ITarget;
  var bensImacProActiveAudioInputSensor: ITarget;
  var bensImacProActiveAudioOutputSensor: ITarget;
  var bensImacProBssidSensor: ITarget;
  var bensImacProActiveCameraSensor: ITarget;
  var bensImacProConnectionTypeSensor: ITarget;
  var bensImacProDisplaysSensor: ITarget;
  var bensImacProPrimaryDisplayNameSensor: ITarget;
  var bensImacProPrimaryDisplayIdSensor: ITarget;
  var bensImacProFrontmostAppSensor: ITarget;
  var bensImacProLastUpdateTriggerSensor: ITarget;
  var bensImacProAppVersionSensor: ITarget;
  var bensImacProLocationPermissionSensor: ITarget;
  var bensImacProGeocodedLocationSensor: ITarget;
  var bensIphoneActivitySensor: ITarget;
  var bensIphoneAverageActivePaceSensor: ITarget;
  var bensIphoneFloorsAscendedSensor: ITarget;
  var bensIphoneFloorsDescendedSensor: ITarget;
  var bensIphoneBatteryLevelSensor: ITarget;
  var bensIphoneBatteryStateSensor: ITarget;
  var bensIphoneStorageSensor: ITarget;
  var bensIphoneSsidSensor: ITarget;
  var bensIphoneBssidSensor: ITarget;
  var bensIphoneConnectionTypeSensor: ITarget;
  var bensIphoneSim_1Sensor: ITarget;
  var bensIphoneGeocodedLocationSensor: ITarget;
  var bensIphoneSim_2Sensor: ITarget;
  var bensIphoneDistanceSensor: ITarget;
  var bensIphoneStepsSensor: ITarget;
  var bensIphoneLastUpdateTriggerSensor: ITarget;
  var bensIphoneWatchBatteryLevelSensor: ITarget;
  var bensIphoneWatchBatteryStateSensor: ITarget;
  var bensIphoneAppVersionSensor: ITarget;
  var bensIphoneLocationPermissionSensor: ITarget;
  var bensIphoneAudioOutputSensor: ITarget;
  var bensImacStorageSensor: ITarget;
  var bensImacBssidSensor: ITarget;
  var bensImacConnectionTypeSensor: ITarget;
  var bensImacSsidSensor: ITarget;
  var bensImacActiveCameraSensor: ITarget;
  var bensImacGeocodedLocationSensor: ITarget;
  var bensImacActiveAudioInputSensor: ITarget;
  var bensImacActiveAudioOutputSensor: ITarget;
  var bensImacDisplaysSensor: ITarget;
  var bensImacPrimaryDisplayNameSensor: ITarget;
  var bensImacPrimaryDisplayIdSensor: ITarget;
  var bensImacFrontmostAppSensor: ITarget;
  var bensImacLastUpdateTriggerSensor: ITarget;
  var bensImacAppVersionSensor: ITarget;
  var bensImacLocationPermissionSensor: ITarget;
  var ryansIphoneSsidSensor: ITarget;
  var ryansIphoneBatteryStateSensor: ITarget;
  var ryansIphoneStorageSensor: ITarget;
  var ryansIphoneBatteryLevelSensor: ITarget;
  var ryansIphoneBssidSensor: ITarget;
  var ryansIphoneConnectionTypeSensor: ITarget;
  var ryansIphoneLastUpdateTriggerSensor: ITarget;
  var ryansIphoneGeocodedLocationSensor: ITarget;
  var ryansIphoneLocationPermissionSensor: ITarget;
  var ryansIphoneAppVersionSensor: ITarget;
  var ryansIphoneSim_1Sensor: ITarget;
  var ryansIphoneSim_2Sensor: ITarget;
  var ryansIphoneAudioOutputSensor: ITarget;
  var ryansIphoneActivitySensor: ITarget;
  var ryansIphoneDistanceSensor: ITarget;
  var ryansIphoneFloorsDescendedSensor: ITarget;
  var ryansIphoneFloorsAscendedSensor: ITarget;
  var ryansIphoneStepsSensor: ITarget;
  var ryansIphoneAverageActivePaceSensor: ITarget;
  var ryansIphoneWatchBatteryLevelSensor: ITarget;
  var ryansIphoneWatchBatteryStateSensor: ITarget;
  var pixel_6ProBatteryLevelSensor: ITarget;
  var pixel_6ProBatteryStateSensor: ITarget;
  var pixel_6ProChargerTypeSensor: ITarget;
  var tomSPixel_7BatteryLevelSensor: ITarget;
  var tomSPixel_7BatteryStateSensor: ITarget;
  var tomSPixel_7ChargerTypeSensor: ITarget;
  var availableUpdatesCountSensor: ITarget;
  var aliceSoilMistureFixedSensor: ITarget;
  var lowBatteryCountSensor: ITarget;
  var availableUpdatesSensor: ITarget;
  var imacScreenOffSensor: ITarget;
  var todaysEventsSensor: ITarget;
  var weatherForecastSensor: ITarget;
  var currentTvSourceSensor: ITarget;
  var livingRoomTemperatureSensor: ITarget;
  var livingRoomTargetTemperatureSensor: ITarget;
  var boilerTargetTemperatureSensor: ITarget;
  var livingRoomHeatingModeSensor: ITarget;
  var bedroomTemperatureSensor: ITarget;
  var bedroomTargetTemperatureSensor: ITarget;
  var bedroomHeatingModeSensor: ITarget;
  var gymTemperatureSensor: ITarget;
  var gymTargetTemperatureSensor: ITarget;
  var gymHeatingModeSensor: ITarget;
  var lastTimeLivingRoomMotionSensorWasTriggeredSensor: ITarget;
  var electricMeterSensor: ITarget;
  var adguardHomeDnsQueriesSensor: ITarget;
  var adguardHomeDnsQueriesBlockedSensor: ITarget;
  var adguardHomeDnsQueriesBlockedRatioSensor: ITarget;
  var adguardHomeParentalControlBlockedSensor: ITarget;
  var adguardHomeSafeBrowsingBlockedSensor: ITarget;
  var adguardHomeSafeSearchesEnforcedSensor: ITarget;
  var adguardHomeAverageProcessingSpeedSensor: ITarget;
  var homeNearestDeviceSensor: ITarget;
  var homeNearestDistanceSensor: ITarget;
  var homeNearestDirectionOfTravelSensor: ITarget;
  var homeMeDistanceSensor: ITarget;
  var homeMeDirectionOfTravelSensor: ITarget;
  var home_2NearestDeviceSensor: ITarget;
  var home_2NearestDistanceSensor: ITarget;
  var home_2NearestDirectionOfTravelSensor: ITarget;
  var home_2MeDistanceSensor: ITarget;
  var home_2MeDirectionOfTravelSensor: ITarget;
  var zteRouterDataReceivedSensor: ITarget;
  var zteRouterDataSentSensor: ITarget;
  var zteRouterExternalIpSensor: ITarget;
  var zteRouterUptimeSensor: ITarget;
  var zteRouterDownloadSpeedSensor: ITarget;
  var zteRouterUploadSpeedSensor: ITarget;
  var watchmanLastUpdatedSensor: ITarget;
  var watchmanMissingEntitiesSensor: ITarget;
  var watchmanMissingActionsSensor: ITarget;
  var tumbleDryerSmartPlugSignalLevelSensor: ITarget;
  var tumbleDryerSmartPlugAutoOffAtSensor: ITarget;
  var tumbleDryerSmartPlugCurrentConsumptionSensor: ITarget;
  var tumbleDryerSmartPlugTodaySConsumptionSensor: ITarget;
  var tumbleDryerSmartPlugThisMonthSConsumptionSensor: ITarget;
  var tumbleDryerSmartPlugVoltageSensor: ITarget;
  var tumbleDryerSmartPlugCurrentSensor: ITarget;
  var homeAssistantServerSignalLevelSensor: ITarget;
  var homeAssistantServerAutoOffAtSensor: ITarget;
  var homeAssistantServerCurrentConsumptionSensor: ITarget;
  var homeAssistantServerTodaySConsumptionSensor: ITarget;
  var homeAssistantServerThisMonthSConsumptionSensor: ITarget;
  var homeAssistantServerVoltageSensor: ITarget;
  var homeAssistantServerCurrentSensor: ITarget;
  var imacSmartPlugSignalLevel_2Sensor: ITarget;
  var imacSmartPlugAutoOffAt_2Sensor: ITarget;
  var imacSmartPlugCurrentConsumption_2Sensor: ITarget;
  var imacSmartPlugTodaySConsumption_2Sensor: ITarget;
  var imacSmartPlugThisMonthSConsumption_2Sensor: ITarget;
  var imacSmartPlugVoltageSensor: ITarget;
  var imacSmartPlugCurrentSensor: ITarget;
  var livingRoomHeaterSmartPlugSignalLevelSensor: ITarget;
  var livingRoomHeaterSmartPlugAutoOffAtSensor: ITarget;
  var livingRoomHeaterSmartPlugCurrentConsumptionSensor: ITarget;
  var livingRoomHeaterSmartPlugTodaySConsumptionSensor: ITarget;
  var livingRoomHeaterSmartPlugThisMonthSConsumptionSensor: ITarget;
  var livingRoomHeaterSmartPlugVoltageSensor: ITarget;
  var livingRoomHeaterSmartPlugCurrentSensor: ITarget;
  var frontDoorBattery_2Sensor: ITarget;
  var frontDoorLastActivitySensor: ITarget;
  var wearingClapper2TrophyLevelSensor: ITarget;
  var wearingClapper2StatusSensor: ITarget;
  var playstationPlaystationPlusSensor: ITarget;
  var playstationAboutMeSensor: ITarget;
  var aliceIlluminanceSensor: ITarget;
  var aliceConductivitySensor: ITarget;
  var aliceSoilMoistureSensor: ITarget;
  var aliceTemperatureSensor: ITarget;
  var aliceAirHumiditySensor: ITarget;
  var alicePpfdMolSensor: ITarget;
  var aliceTotalPpfdMolIntegralSensor: ITarget;
  var aliceDliSensor: ITarget;
  var frontDoorBatterySensor: ITarget;
  var frontDoorFirmwareVersionSensor: ITarget;
  var bathroomMotionSensorTemperatureSensor: ITarget;
  var bathroomMotionSensorBatterySensor: ITarget;
  var hallwayMotionSensorTemperatureSensor: ITarget;
  var hallwayMotionSensorBatterySensor: ITarget;
  var zigbee2mqttBridgeVersionSensor: ITarget;
  var sonosArcUltraAudioInputFormatSensor: ITarget;
  var gw1100aIndoorHumiditySensor: ITarget;
  var gw1100aSoilMoisture_1Sensor: ITarget;
  var aliceMoistureSensor: ITarget;
  var gw1100aSoilMoisture_3Sensor: ITarget;
  var gw1100aSoilMoisture_4Sensor: ITarget;
  var gw1100aSoilBattery_1Sensor: ITarget;
  var gw1100aSoilBattery_2Sensor: ITarget;
  var gw1100aSoilBattery_3Sensor: ITarget;
  var gw1100aSoilBattery_4Sensor: ITarget;
  var gw1100aIndoorTemperatureSensor: ITarget;
  var gw1100aRelativePressureSensor: ITarget;
  var gw1100aAbsolutePressureSensor: ITarget;
  var gw1100aIndoorDewpointSensor: ITarget;
  var icloud3EventLogSensor: ITarget;
  var icloud3WazehistTrackSensor: ITarget;
  var bensIphoneNextUpdateSensor: ITarget;
  var bensIphoneMovedDistanceSensor: ITarget;
  var bensIphoneLastUpdateSensor: ITarget;
  var bensIphoneIntervalSensor: ITarget;
  var bensIphoneInfoSensor: ITarget;
  var bensIphoneTravelTimeMinSensor: ITarget;
  var bensIphoneZoneNameSensor: ITarget;
  var bensIphoneHomeDistanceSensor: ITarget;
  var bensIphoneBatterySensor: ITarget;
  var bensIphoneBadgeSensor: ITarget;
  var bensIphoneArrivalTimeSensor: ITarget;
  var bensIphoneTravelTimeSensor: ITarget;
  var bensIphoneZoneDistanceSensor: ITarget;
  var bensIphoneNameSensor: ITarget;
  var bensIphoneDirOfTravelSensor: ITarget;
  var bensIphoneLastLocatedSensor: ITarget;
  var bensIphoneBatteryStatusSensor: ITarget;
  var icalBenSCalendarEvent_0Sensor: ITarget;
  var icalBenSCalendarEvent_1Sensor: ITarget;
  var icalBenSCalendarEvent_2Sensor: ITarget;
  var icalBenSCalendarEvent_3Sensor: ITarget;
  var icalBenSCalendarEvent_4Sensor: ITarget;
  var icalBenSCalendarEvent_5Sensor: ITarget;
  var icalBenSCalendarEvent_6Sensor: ITarget;
  var icalBenSCalendarEvent_7Sensor: ITarget;
  var icalBenSCalendarEvent_8Sensor: ITarget;
  var icalBenSCalendarEvent_9Sensor: ITarget;
  var benSSonosOneSecondEditionNextAlarmSensor: ITarget;
  var benSSonosOneSecondEditionNextTimerSensor: ITarget;
  var benSSonosOneSecondEditionNextReminderSensor: ITarget;
  var bedroomSpeakerNextAlarmSensor: ITarget;
  var bedroomSpeakerNextTimerSensor: ITarget;
  var bedroomSpeakerNextReminderSensor: ITarget;
  var officeNextAlarmSensor: ITarget;
  var officeNextTimerSensor: ITarget;
  var officeNextReminderSensor: ITarget;
  var benS_2ndSonosOneSecondEditionNextAlarmSensor: ITarget;
  var benS_2ndSonosOneSecondEditionNextTimerSensor: ITarget;
  var benS_2ndSonosOneSecondEditionNextReminderSensor: ITarget;
  var benS_3rdSonosOneSecondEditionNextAlarmSensor: ITarget;
  var benS_3rdSonosOneSecondEditionNextTimerSensor: ITarget;
  var benS_3rdSonosOneSecondEditionNextReminderSensor: ITarget;
  var livingRoomNextAlarmSensor: ITarget;
  var livingRoomNextTimerSensor: ITarget;
  var livingRoomNextReminderSensor: ITarget;
  var sonosArcUltraNextAlarmSensor: ITarget;
  var sonosArcUltraNextTimerSensor: ITarget;
  var sonosArcUltraNextReminderSensor: ITarget;
  var livingRoomSonosNextAlarmSensor: ITarget;
  var livingRoomSonosNextTimerSensor: ITarget;
  var livingRoomSonosNextReminderSensor: ITarget;
  var thisDeviceNextAlarm_2Sensor: ITarget;
  var thisDeviceNextTimer_2Sensor: ITarget;
  var thisDeviceNextReminder_2Sensor: ITarget;
  var livingRoomSensorCoverStatusSensor: ITarget;
  var livingRoomSensorMotionSensorStatusSensor: ITarget;
  var gymSensorCoverStatusSensor: ITarget;
  var gymSensorMotionSensorStatusSensor: ITarget;
  var bedroomSensorCoverStatusSensor: ITarget;
  var bedroomSensorMotionSensorStatusSensor: ITarget;
  var automationLogEntitySensor: ITarget;
  var zStickGen5UsbControllerBasicSensor: ITarget;
  var goodMorningMessageSensor: ITarget;
  var livingRoomOccupiedSensor: ITarget;
  var systemMonitorIpv4AddressWlan0Sensor: ITarget;
  var lastUnlockerSensor: ITarget;
  var frontDoorDoorbellMqttBattery_3Sensor: ITarget;
  var frontDoorDoorbellMqttInfoSensor: ITarget;
  var frontDoorDoorbellMqttWirelessSensor: ITarget;
  var batterySensor: ITarget;
  var battery_2Sensor: ITarget;
  var magicKeyboardWithNumericKeypadBatteryBatterySensor: ITarget;
  var magicMouseBatteryBatterySensor: ITarget;
  var undefinedBatteryBatterySensor: ITarget;
  var icalIcalBenSCalendarEvent_0Sensor: ITarget;
  var icalIcalBenSCalendarEvent_1Sensor: ITarget;
  var icalIcalBenSCalendarEvent_2Sensor: ITarget;
  var icalIcalBenSCalendarEvent_3Sensor: ITarget;
  var icalIcalBenSCalendarEvent_4Sensor: ITarget;
  var icalIcalBenSCalendarEvent_5Sensor: ITarget;
  var icalIcalBenSCalendarEvent_6Sensor: ITarget;
  var icalIcalBenSCalendarEvent_7Sensor: ITarget;
  var icalIcalBenSCalendarEvent_8Sensor: ITarget;
  var icalIcalBenSCalendarEvent_9Sensor: ITarget;
  var tp357sD5f7SignalStrengthSensor: ITarget;
  var tp357sD5f7BatterySensor: ITarget;
  var tp357sD5f7TemperatureSensor: ITarget;
  var tp357sD5f7HumiditySensor: ITarget;
  var spotifyBenWainwrightSongTempoSensor: ITarget;
  var boilerBoostTimeRemainingSensor: ITarget;
  var lmsPlayersSensor: ITarget;
  var lmsAlbumsSensor: ITarget;
  var lmsSongsSensor: ITarget;
  var lmsGenresSensor: ITarget;
  var lmsArtistsSensor: ITarget;
  var lmsDurationSensor: ITarget;
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
globalThis.sunNextDawnSensor = entity('sensor.sun_next_dawn');
globalThis.sunNextDuskSensor = entity('sensor.sun_next_dusk');
globalThis.sunNextMidnightSensor = entity('sensor.sun_next_midnight');
globalThis.sunNextNoonSensor = entity('sensor.sun_next_noon');
globalThis.sunNextRisingSensor = entity('sensor.sun_next_rising');
globalThis.sunNextSettingSensor = entity('sensor.sun_next_setting');
globalThis.dateTimeIsoSensor = entity('sensor.date_time_iso');
globalThis.tahomaSwitchScHomekitSetupCodeSensor = entity(
  'sensor.tahoma_switch_sc_homekit_setup_code',
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
globalThis.systemMonitorDiskFreeSensor = entity(
  'sensor.system_monitor_disk_free',
);
globalThis.systemMonitorDiskFreeMediaSensor = entity(
  'sensor.system_monitor_disk_free_media',
);
globalThis.systemMonitorDiskFreeRunAudioSensor = entity(
  'sensor.system_monitor_disk_free_run_audio',
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
globalThis.boilerBoostTemperatureSensor = entity(
  'sensor.boiler_boost_temperature',
);
globalThis.livingRoomHeaterDiningTablePowerSensor = entity(
  'sensor.living_room_heater_dining_table_power',
);
globalThis.livingRoomHeaterDiningTableEnergySensor = entity(
  'sensor.living_room_heater_dining_table_energy',
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
globalThis.shellyemA4e57cba73f5Channel_1EnergyCostSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_cost',
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
globalThis.electricMeterSensor = entity('sensor.electric_meter');
globalThis.adguardHomeDnsQueriesSensor = entity(
  'sensor.adguard_home_dns_queries',
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
globalThis.adguardHomeSafeBrowsingBlockedSensor = entity(
  'sensor.adguard_home_safe_browsing_blocked',
);
globalThis.adguardHomeSafeSearchesEnforcedSensor = entity(
  'sensor.adguard_home_safe_searches_enforced',
);
globalThis.adguardHomeAverageProcessingSpeedSensor = entity(
  'sensor.adguard_home_average_processing_speed',
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
globalThis.watchmanLastUpdatedSensor = entity('sensor.watchman_last_updated');
globalThis.watchmanMissingEntitiesSensor = entity(
  'sensor.watchman_missing_entities',
);
globalThis.watchmanMissingActionsSensor = entity(
  'sensor.watchman_missing_actions',
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
globalThis.homeAssistantServerSignalLevelSensor = entity(
  'sensor.home_assistant_server_signal_level',
);
globalThis.homeAssistantServerAutoOffAtSensor = entity(
  'sensor.home_assistant_server_auto_off_at',
);
globalThis.homeAssistantServerCurrentConsumptionSensor = entity(
  'sensor.home_assistant_server_current_consumption',
);
globalThis.homeAssistantServerTodaySConsumptionSensor = entity(
  'sensor.home_assistant_server_today_s_consumption',
);
globalThis.homeAssistantServerThisMonthSConsumptionSensor = entity(
  'sensor.home_assistant_server_this_month_s_consumption',
);
globalThis.homeAssistantServerVoltageSensor = entity(
  'sensor.home_assistant_server_voltage',
);
globalThis.homeAssistantServerCurrentSensor = entity(
  'sensor.home_assistant_server_current',
);
globalThis.imacSmartPlugSignalLevel_2Sensor = entity(
  'sensor.imac_smart_plug_signal_level_2',
);
globalThis.imacSmartPlugAutoOffAt_2Sensor = entity(
  'sensor.imac_smart_plug_auto_off_at_2',
);
globalThis.imacSmartPlugCurrentConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_current_consumption_2',
);
globalThis.imacSmartPlugTodaySConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_today_s_consumption_2',
);
globalThis.imacSmartPlugThisMonthSConsumption_2Sensor = entity(
  'sensor.imac_smart_plug_this_month_s_consumption_2',
);
globalThis.imacSmartPlugVoltageSensor = entity(
  'sensor.imac_smart_plug_voltage',
);
globalThis.imacSmartPlugCurrentSensor = entity(
  'sensor.imac_smart_plug_current',
);
globalThis.livingRoomHeaterSmartPlugSignalLevelSensor = entity(
  'sensor.living_room_heater_smart_plug_signal_level',
);
globalThis.livingRoomHeaterSmartPlugAutoOffAtSensor = entity(
  'sensor.living_room_heater_smart_plug_auto_off_at',
);
globalThis.livingRoomHeaterSmartPlugCurrentConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_current_consumption',
);
globalThis.livingRoomHeaterSmartPlugTodaySConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_today_s_consumption',
);
globalThis.livingRoomHeaterSmartPlugThisMonthSConsumptionSensor = entity(
  'sensor.living_room_heater_smart_plug_this_month_s_consumption',
);
globalThis.livingRoomHeaterSmartPlugVoltageSensor = entity(
  'sensor.living_room_heater_smart_plug_voltage',
);
globalThis.livingRoomHeaterSmartPlugCurrentSensor = entity(
  'sensor.living_room_heater_smart_plug_current',
);
globalThis.frontDoorBattery_2Sensor = entity('sensor.front_door_battery_2');
globalThis.frontDoorLastActivitySensor = entity(
  'sensor.front_door_last_activity',
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
globalThis.gw1100aIndoorHumiditySensor = entity(
  'sensor.gw1100a_indoor_humidity',
);
globalThis.gw1100aSoilMoisture_1Sensor = entity(
  'sensor.gw1100a_soil_moisture_1',
);
globalThis.aliceMoistureSensor = entity('sensor.alice_moisture');
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
globalThis.icloud3EventLogSensor = entity('sensor.icloud3_event_log');
globalThis.icloud3WazehistTrackSensor = entity('sensor.icloud3_wazehist_track');
globalThis.bensIphoneNextUpdateSensor = entity(
  'sensor.bens_iphone_next_update',
);
globalThis.bensIphoneMovedDistanceSensor = entity(
  'sensor.bens_iphone_moved_distance',
);
globalThis.bensIphoneLastUpdateSensor = entity(
  'sensor.bens_iphone_last_update',
);
globalThis.bensIphoneIntervalSensor = entity('sensor.bens_iphone_interval');
globalThis.bensIphoneInfoSensor = entity('sensor.bens_iphone_info');
globalThis.bensIphoneTravelTimeMinSensor = entity(
  'sensor.bens_iphone_travel_time_min',
);
globalThis.bensIphoneZoneNameSensor = entity('sensor.bens_iphone_zone_name');
globalThis.bensIphoneHomeDistanceSensor = entity(
  'sensor.bens_iphone_home_distance',
);
globalThis.bensIphoneBatterySensor = entity('sensor.bens_iphone_battery');
globalThis.bensIphoneBadgeSensor = entity('sensor.bens_iphone_badge');
globalThis.bensIphoneArrivalTimeSensor = entity(
  'sensor.bens_iphone_arrival_time',
);
globalThis.bensIphoneTravelTimeSensor = entity(
  'sensor.bens_iphone_travel_time',
);
globalThis.bensIphoneZoneDistanceSensor = entity(
  'sensor.bens_iphone_zone_distance',
);
globalThis.bensIphoneNameSensor = entity('sensor.bens_iphone_name');
globalThis.bensIphoneDirOfTravelSensor = entity(
  'sensor.bens_iphone_dir_of_travel',
);
globalThis.bensIphoneLastLocatedSensor = entity(
  'sensor.bens_iphone_last_located',
);
globalThis.bensIphoneBatteryStatusSensor = entity(
  'sensor.bens_iphone_battery_status',
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
globalThis.boilerBoostTimeRemainingSensor = entity(
  'sensor.boiler_boost_time_remaining',
);
globalThis.lmsPlayersSensor = entity('sensor.lms_players');
globalThis.lmsAlbumsSensor = entity('sensor.lms_albums');
globalThis.lmsSongsSensor = entity('sensor.lms_songs');
globalThis.lmsGenresSensor = entity('sensor.lms_genres');
globalThis.lmsArtistsSensor = entity('sensor.lms_artists');
globalThis.lmsDurationSensor = entity('sensor.lms_duration');
