import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var ringMqttWithVideoStreamingCpuPercentSensor: IEntity<`sensor.${string}`>;
  var ringMqttWithVideoStreamingMemoryPercentSensor: IEntity<`sensor.${string}`>;
  var backupBackupManagerStateSensor: IEntity<`sensor.${string}`>;
  var backupNextScheduledAutomaticBackupSensor: IEntity<`sensor.${string}`>;
  var backupLastSuccessfulAutomaticBackupSensor: IEntity<`sensor.${string}`>;
  var sunNextDawnSensor: IEntity<`sensor.${string}`>;
  var sunNextDuskSensor: IEntity<`sensor.${string}`>;
  var sunNextMidnightSensor: IEntity<`sensor.${string}`>;
  var sunNextNoonSensor: IEntity<`sensor.${string}`>;
  var sunNextRisingSensor: IEntity<`sensor.${string}`>;
  var sunNextSettingSensor: IEntity<`sensor.${string}`>;
  var dateTimeIsoSensor: IEntity<`sensor.${string}`>;
  var boilerBoostTemperatureSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1PowerSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1EnergySensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1EnergyReturnedSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1VoltageSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1PowerFactorSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_2PowerSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_2EnergySensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_2EnergyReturnedSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_2VoltageSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_2PowerFactorSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyA_11077925WheelOfFortuneSpinsElectricitySensor: IEntity<`sensor.${string}`>;
  var octopusEnergyA_11077925WheelOfFortuneSpinsGasSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentRateSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousRateSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495NextRateSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495CurrentStandingChargeSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeConsumptionSensor: IEntity<`sensor.${string}`>;
  var octopusEnergyElectricity_19l3210845_1630000030495PreviousAccumulativeCostSensor: IEntity<`sensor.${string}`>;
  var availableUpdatesCountSensor: IEntity<`sensor.${string}`>;
  var aliceSoilMistureFixedSensor: IEntity<`sensor.${string}`>;
  var lowBatteryCountSensor: IEntity<`sensor.${string}`>;
  var availableUpdatesSensor: IEntity<`sensor.${string}`>;
  var imacScreenOffSensor: IEntity<`sensor.${string}`>;
  var todaysEventsSensor: IEntity<`sensor.${string}`>;
  var weatherForecastSensor: IEntity<`sensor.${string}`>;
  var currentTvSourceSensor: IEntity<`sensor.${string}`>;
  var livingRoomTemperatureSensor: IEntity<`sensor.${string}`>;
  var livingRoomTargetTemperatureSensor: IEntity<`sensor.${string}`>;
  var boilerTargetTemperatureSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeatingModeSensor: IEntity<`sensor.${string}`>;
  var bedroomTemperatureSensor: IEntity<`sensor.${string}`>;
  var bedroomTargetTemperatureSensor: IEntity<`sensor.${string}`>;
  var bedroomHeatingModeSensor: IEntity<`sensor.${string}`>;
  var gymTemperatureSensor: IEntity<`sensor.${string}`>;
  var gymTargetTemperatureSensor: IEntity<`sensor.${string}`>;
  var gymHeatingModeSensor: IEntity<`sensor.${string}`>;
  var lastTimeLivingRoomMotionSensorWasTriggeredSensor: IEntity<`sensor.${string}`>;
  var electricMeterSensor: IEntity<`sensor.${string}`>;
  var mumsPhoneBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var mumsPhoneBatteryStateSensor: IEntity<`sensor.${string}`>;
  var mumsPhoneChargerTypeSensor: IEntity<`sensor.${string}`>;
  var bensImacProStorageSensor: IEntity<`sensor.${string}`>;
  var bensImacProSsidSensor: IEntity<`sensor.${string}`>;
  var bensImacProActiveAudioInputSensor: IEntity<`sensor.${string}`>;
  var bensImacProActiveAudioOutputSensor: IEntity<`sensor.${string}`>;
  var bensImacProBssidSensor: IEntity<`sensor.${string}`>;
  var bensImacProActiveCameraSensor: IEntity<`sensor.${string}`>;
  var bensImacProConnectionTypeSensor: IEntity<`sensor.${string}`>;
  var bensImacProDisplaysSensor: IEntity<`sensor.${string}`>;
  var bensImacProPrimaryDisplayNameSensor: IEntity<`sensor.${string}`>;
  var bensImacProPrimaryDisplayIdSensor: IEntity<`sensor.${string}`>;
  var bensImacProFrontmostAppSensor: IEntity<`sensor.${string}`>;
  var bensImacProLastUpdateTriggerSensor: IEntity<`sensor.${string}`>;
  var bensImacProAppVersionSensor: IEntity<`sensor.${string}`>;
  var bensImacProLocationPermissionSensor: IEntity<`sensor.${string}`>;
  var bensImacProGeocodedLocationSensor: IEntity<`sensor.${string}`>;
  var bensIphoneActivitySensor: IEntity<`sensor.${string}`>;
  var bensIphoneAverageActivePaceSensor: IEntity<`sensor.${string}`>;
  var bensIphoneFloorsAscendedSensor: IEntity<`sensor.${string}`>;
  var bensIphoneFloorsDescendedSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBatteryStateSensor: IEntity<`sensor.${string}`>;
  var bensIphoneStorageSensor: IEntity<`sensor.${string}`>;
  var bensIphoneSsidSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBssidSensor: IEntity<`sensor.${string}`>;
  var bensIphoneConnectionTypeSensor: IEntity<`sensor.${string}`>;
  var bensIphoneSim_1Sensor: IEntity<`sensor.${string}`>;
  var bensIphoneGeocodedLocationSensor: IEntity<`sensor.${string}`>;
  var bensIphoneSim_2Sensor: IEntity<`sensor.${string}`>;
  var bensIphoneDistanceSensor: IEntity<`sensor.${string}`>;
  var bensIphoneStepsSensor: IEntity<`sensor.${string}`>;
  var bensIphoneLastUpdateTriggerSensor: IEntity<`sensor.${string}`>;
  var bensIphoneWatchBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var bensIphoneWatchBatteryStateSensor: IEntity<`sensor.${string}`>;
  var bensIphoneAppVersionSensor: IEntity<`sensor.${string}`>;
  var bensIphoneLocationPermissionSensor: IEntity<`sensor.${string}`>;
  var bensIphoneAudioOutputSensor: IEntity<`sensor.${string}`>;
  var bensImacStorageSensor: IEntity<`sensor.${string}`>;
  var bensImacBssidSensor: IEntity<`sensor.${string}`>;
  var bensImacConnectionTypeSensor: IEntity<`sensor.${string}`>;
  var bensImacSsidSensor: IEntity<`sensor.${string}`>;
  var bensImacActiveCameraSensor: IEntity<`sensor.${string}`>;
  var bensImacGeocodedLocationSensor: IEntity<`sensor.${string}`>;
  var bensImacActiveAudioInputSensor: IEntity<`sensor.${string}`>;
  var bensImacActiveAudioOutputSensor: IEntity<`sensor.${string}`>;
  var bensImacDisplaysSensor: IEntity<`sensor.${string}`>;
  var bensImacPrimaryDisplayNameSensor: IEntity<`sensor.${string}`>;
  var bensImacPrimaryDisplayIdSensor: IEntity<`sensor.${string}`>;
  var bensImacFrontmostAppSensor: IEntity<`sensor.${string}`>;
  var bensImacLastUpdateTriggerSensor: IEntity<`sensor.${string}`>;
  var bensImacAppVersionSensor: IEntity<`sensor.${string}`>;
  var bensImacLocationPermissionSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneSsidSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneBatteryStateSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneStorageSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneBssidSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneConnectionTypeSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneLastUpdateTriggerSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneGeocodedLocationSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneLocationPermissionSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneAppVersionSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneSim_1Sensor: IEntity<`sensor.${string}`>;
  var ryansIphoneSim_2Sensor: IEntity<`sensor.${string}`>;
  var ryansIphoneAudioOutputSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneActivitySensor: IEntity<`sensor.${string}`>;
  var ryansIphoneDistanceSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneFloorsDescendedSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneFloorsAscendedSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneStepsSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneAverageActivePaceSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneWatchBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var ryansIphoneWatchBatteryStateSensor: IEntity<`sensor.${string}`>;
  var pixel_6ProBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var pixel_6ProBatteryStateSensor: IEntity<`sensor.${string}`>;
  var pixel_6ProChargerTypeSensor: IEntity<`sensor.${string}`>;
  var tomSPixel_7BatteryLevelSensor: IEntity<`sensor.${string}`>;
  var tomSPixel_7BatteryStateSensor: IEntity<`sensor.${string}`>;
  var tomSPixel_7ChargerTypeSensor: IEntity<`sensor.${string}`>;
  var frontDoorBattery_2Sensor: IEntity<`sensor.${string}`>;
  var frontDoorLastActivitySensor: IEntity<`sensor.${string}`>;
  var watchmanLastUpdatedSensor: IEntity<`sensor.${string}`>;
  var watchmanMissingEntitiesSensor: IEntity<`sensor.${string}`>;
  var watchmanMissingActionsSensor: IEntity<`sensor.${string}`>;
  var shellyemA4e57cba73f5Channel_1EnergyCostSensor: IEntity<`sensor.${string}`>;
  var adguardHomeDnsQueriesSensor: IEntity<`sensor.${string}`>;
  var adguardHomeSafeBrowsingBlockedSensor: IEntity<`sensor.${string}`>;
  var adguardHomeDnsQueriesBlockedSensor: IEntity<`sensor.${string}`>;
  var adguardHomeDnsQueriesBlockedRatioSensor: IEntity<`sensor.${string}`>;
  var adguardHomeParentalControlBlockedSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeSslSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeMediaSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeShareSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeRunAudioSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeConfigSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskFreeSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskUseSensor: IEntity<`sensor.${string}`>;
  var systemMonitorDiskUsageSensor: IEntity<`sensor.${string}`>;
  var systemMonitorIpv4AddressEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorIpv6AddressEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorLastBootSensor: IEntity<`sensor.${string}`>;
  var systemMonitorLoad_15mSensor: IEntity<`sensor.${string}`>;
  var systemMonitorLoad_1mSensor: IEntity<`sensor.${string}`>;
  var systemMonitorLoad_5mSensor: IEntity<`sensor.${string}`>;
  var systemMonitorMemoryFreeSensor: IEntity<`sensor.${string}`>;
  var systemMonitorMemoryUseSensor: IEntity<`sensor.${string}`>;
  var systemMonitorMemoryUsageSensor: IEntity<`sensor.${string}`>;
  var systemMonitorNetworkInEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorNetworkOutEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorPacketsInEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorPacketsOutEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorNetworkThroughputInEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorNetworkThroughputOutEnp1s0Sensor: IEntity<`sensor.${string}`>;
  var systemMonitorProcessorUseSensor: IEntity<`sensor.${string}`>;
  var systemMonitorProcessorTemperatureSensor: IEntity<`sensor.${string}`>;
  var systemMonitorSwapFreeSensor: IEntity<`sensor.${string}`>;
  var systemMonitorSwapUseSensor: IEntity<`sensor.${string}`>;
  var systemMonitorSwapUsageSensor: IEntity<`sensor.${string}`>;
  var adguardHomeSafeSearchesEnforcedSensor: IEntity<`sensor.${string}`>;
  var adguardHomeAverageProcessingSpeedSensor: IEntity<`sensor.${string}`>;
  var homeNearestDeviceSensor: IEntity<`sensor.${string}`>;
  var homeNearestDistanceSensor: IEntity<`sensor.${string}`>;
  var homeNearestDirectionOfTravelSensor: IEntity<`sensor.${string}`>;
  var homeMeDistanceSensor: IEntity<`sensor.${string}`>;
  var homeMeDirectionOfTravelSensor: IEntity<`sensor.${string}`>;
  var home_2NearestDeviceSensor: IEntity<`sensor.${string}`>;
  var home_2NearestDistanceSensor: IEntity<`sensor.${string}`>;
  var home_2NearestDirectionOfTravelSensor: IEntity<`sensor.${string}`>;
  var home_2MeDistanceSensor: IEntity<`sensor.${string}`>;
  var home_2MeDirectionOfTravelSensor: IEntity<`sensor.${string}`>;
  var tahomaSwitchScHomekitSetupCodeSensor: IEntity<`sensor.${string}`>;
  var zteRouterDataReceivedSensor: IEntity<`sensor.${string}`>;
  var zteRouterDataSentSensor: IEntity<`sensor.${string}`>;
  var zteRouterExternalIpSensor: IEntity<`sensor.${string}`>;
  var zteRouterUptimeSensor: IEntity<`sensor.${string}`>;
  var zteRouterDownloadSpeedSensor: IEntity<`sensor.${string}`>;
  var zteRouterUploadSpeedSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugSignalLevelSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugAutoOffAtSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugCurrentConsumptionSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugTodaySConsumptionSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugVoltageSensor: IEntity<`sensor.${string}`>;
  var tumbleDryerSmartPlugCurrentSensor: IEntity<`sensor.${string}`>;
  var wearingClapper2TrophyLevelSensor: IEntity<`sensor.${string}`>;
  var wearingClapper2StatusSensor: IEntity<`sensor.${string}`>;
  var playstationPlaystationPlusSensor: IEntity<`sensor.${string}`>;
  var playstationAboutMeSensor: IEntity<`sensor.${string}`>;
  var aliceIlluminanceSensor: IEntity<`sensor.${string}`>;
  var aliceConductivitySensor: IEntity<`sensor.${string}`>;
  var aliceSoilMoistureSensor: IEntity<`sensor.${string}`>;
  var aliceTemperatureSensor: IEntity<`sensor.${string}`>;
  var aliceAirHumiditySensor: IEntity<`sensor.${string}`>;
  var alicePpfdMolSensor: IEntity<`sensor.${string}`>;
  var aliceTotalPpfdMolIntegralSensor: IEntity<`sensor.${string}`>;
  var aliceDliSensor: IEntity<`sensor.${string}`>;
  var frontDoorBatterySensor: IEntity<`sensor.${string}`>;
  var frontDoorFirmwareVersionSensor: IEntity<`sensor.${string}`>;
  var sonosArcUltraAudioInputFormatSensor: IEntity<`sensor.${string}`>;
  var bathroomMotionSensorTemperatureSensor: IEntity<`sensor.${string}`>;
  var bathroomMotionSensorBatterySensor: IEntity<`sensor.${string}`>;
  var hallwayMotionSensorTemperatureSensor: IEntity<`sensor.${string}`>;
  var hallwayMotionSensorBatterySensor: IEntity<`sensor.${string}`>;
  var zigbee2mqttBridgeVersionSensor: IEntity<`sensor.${string}`>;
  var gw1100aIndoorHumiditySensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilMoisture_1Sensor: IEntity<`sensor.${string}`>;
  var aliceMoistureSensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilMoisture_3Sensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilMoisture_4Sensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilBattery_1Sensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilBattery_2Sensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilBattery_3Sensor: IEntity<`sensor.${string}`>;
  var gw1100aSoilBattery_4Sensor: IEntity<`sensor.${string}`>;
  var gw1100aIndoorTemperatureSensor: IEntity<`sensor.${string}`>;
  var gw1100aRelativePressureSensor: IEntity<`sensor.${string}`>;
  var gw1100aAbsolutePressureSensor: IEntity<`sensor.${string}`>;
  var gw1100aIndoorDewpointSensor: IEntity<`sensor.${string}`>;
  var icloud3EventLogSensor: IEntity<`sensor.${string}`>;
  var icloud3WazehistTrackSensor: IEntity<`sensor.${string}`>;
  var bensIphoneNameSensor: IEntity<`sensor.${string}`>;
  var bensIphoneNextUpdateSensor: IEntity<`sensor.${string}`>;
  var bensIphoneLastLocatedSensor: IEntity<`sensor.${string}`>;
  var bensIphoneDirOfTravelSensor: IEntity<`sensor.${string}`>;
  var bensIphoneTravelTimeSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBatterySensor: IEntity<`sensor.${string}`>;
  var bensIphoneIntervalSensor: IEntity<`sensor.${string}`>;
  var bensIphoneZoneDistanceSensor: IEntity<`sensor.${string}`>;
  var bensIphoneInfoSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBadgeSensor: IEntity<`sensor.${string}`>;
  var bensIphoneZoneNameSensor: IEntity<`sensor.${string}`>;
  var bensIphoneLastUpdateSensor: IEntity<`sensor.${string}`>;
  var bensIphoneTravelTimeMinSensor: IEntity<`sensor.${string}`>;
  var bensIphoneHomeDistanceSensor: IEntity<`sensor.${string}`>;
  var bensIphoneArrivalTimeSensor: IEntity<`sensor.${string}`>;
  var bensIphoneBatteryStatusSensor: IEntity<`sensor.${string}`>;
  var bensIphoneMovedDistanceSensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_0Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_1Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_2Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_3Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_4Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_5Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_6Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_7Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_8Sensor: IEntity<`sensor.${string}`>;
  var icalBenSCalendarEvent_9Sensor: IEntity<`sensor.${string}`>;
  var benSSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.${string}`>;
  var benSSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.${string}`>;
  var benSSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.${string}`>;
  var bedroomSpeakerNextAlarmSensor: IEntity<`sensor.${string}`>;
  var bedroomSpeakerNextTimerSensor: IEntity<`sensor.${string}`>;
  var bedroomSpeakerNextReminderSensor: IEntity<`sensor.${string}`>;
  var officeNextAlarmSensor: IEntity<`sensor.${string}`>;
  var officeNextTimerSensor: IEntity<`sensor.${string}`>;
  var officeNextReminderSensor: IEntity<`sensor.${string}`>;
  var benS_2ndSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.${string}`>;
  var benS_2ndSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.${string}`>;
  var benS_2ndSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.${string}`>;
  var benS_3rdSonosOneSecondEditionNextAlarmSensor: IEntity<`sensor.${string}`>;
  var benS_3rdSonosOneSecondEditionNextTimerSensor: IEntity<`sensor.${string}`>;
  var benS_3rdSonosOneSecondEditionNextReminderSensor: IEntity<`sensor.${string}`>;
  var livingRoomNextAlarmSensor: IEntity<`sensor.${string}`>;
  var livingRoomNextTimerSensor: IEntity<`sensor.${string}`>;
  var livingRoomNextReminderSensor: IEntity<`sensor.${string}`>;
  var sonosArcUltraNextAlarmSensor: IEntity<`sensor.${string}`>;
  var sonosArcUltraNextTimerSensor: IEntity<`sensor.${string}`>;
  var sonosArcUltraNextReminderSensor: IEntity<`sensor.${string}`>;
  var livingRoomSonosNextAlarmSensor: IEntity<`sensor.${string}`>;
  var livingRoomSonosNextTimerSensor: IEntity<`sensor.${string}`>;
  var livingRoomSonosNextReminderSensor: IEntity<`sensor.${string}`>;
  var thisDeviceNextAlarm_2Sensor: IEntity<`sensor.${string}`>;
  var thisDeviceNextTimer_2Sensor: IEntity<`sensor.${string}`>;
  var thisDeviceNextReminder_2Sensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorAirTemperatureSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorIlluminanceSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorAlarmLevelSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorAlarmTypeSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorCoverStatusSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorMotionSensorStatusSensor: IEntity<`sensor.${string}`>;
  var gymSensorAirTemperatureSensor: IEntity<`sensor.${string}`>;
  var gymSensorBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var gymSensorIlluminanceSensor: IEntity<`sensor.${string}`>;
  var gymSensorAlarmLevelSensor: IEntity<`sensor.${string}`>;
  var gymSensorAlarmTypeSensor: IEntity<`sensor.${string}`>;
  var gymSensorCoverStatusSensor: IEntity<`sensor.${string}`>;
  var gymSensorMotionSensorStatusSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorAirTemperatureSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorBatteryLevelSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorIlluminanceSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorAlarmLevelSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorAlarmTypeSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorCoverStatusSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorMotionSensorStatusSensor: IEntity<`sensor.${string}`>;
  var bedroomHeatingSwitchNodeStatusSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorNodeStatusSensor: IEntity<`sensor.${string}`>;
  var gymHeatingSwitchNodeStatusSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorNodeStatusSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeatingSwitchNodeStatusSensor: IEntity<`sensor.${string}`>;
  var gymSensorNodeStatusSensor: IEntity<`sensor.${string}`>;
  var zStickGen5UsbControllerStatusSensor: IEntity<`sensor.${string}`>;
  var automationLogEntitySensor: IEntity<`sensor.${string}`>;
  var livingRoomHeatingSwitchLastSeenSensor: IEntity<`sensor.${string}`>;
  var bedroomHeatingSwitchLastSeenSensor: IEntity<`sensor.${string}`>;
  var gymHeatingSwitchLastSeenSensor: IEntity<`sensor.${string}`>;
  var livingRoomSensorLastSeenSensor: IEntity<`sensor.${string}`>;
  var gymSensorLastSeenSensor: IEntity<`sensor.${string}`>;
  var bedroomSensorLastSeenSensor: IEntity<`sensor.${string}`>;
  var zStickGen5UsbControllerBasicSensor: IEntity<`sensor.${string}`>;
  var goodMorningMessageSensor: IEntity<`sensor.${string}`>;
  var livingRoomOccupiedSensor: IEntity<`sensor.${string}`>;
  var systemMonitorIpv4AddressWlan0Sensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerAutoOffAtSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerCurrentConsumptionSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerSignalLevelSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerThisMonthSConsumptionSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerTodaySConsumptionSensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugAutoOffAt_2Sensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugCurrentConsumption_2Sensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugSignalLevel_2Sensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugThisMonthSConsumption_2Sensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugTodaySConsumption_2Sensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugAutoOffAtSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugCurrentConsumptionSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugSignalLevelSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugThisMonthSConsumptionSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugTodaySConsumptionSensor: IEntity<`sensor.${string}`>;
  var lastUnlockerSensor: IEntity<`sensor.${string}`>;
  var frontDoorDoorbellMqttBattery_3Sensor: IEntity<`sensor.${string}`>;
  var frontDoorDoorbellMqttInfoSensor: IEntity<`sensor.${string}`>;
  var frontDoorDoorbellMqttWirelessSensor: IEntity<`sensor.${string}`>;
  var qbittorrentStatusSensor: IEntity<`sensor.${string}`>;
  var qbittorrentDownloadSpeedSensor: IEntity<`sensor.${string}`>;
  var qbittorrentUploadSpeedSensor: IEntity<`sensor.${string}`>;
  var qbittorrentAllTorrentsSensor: IEntity<`sensor.${string}`>;
  var qbittorrentActiveTorrentsSensor: IEntity<`sensor.${string}`>;
  var qbittorrentInactiveTorrentsSensor: IEntity<`sensor.${string}`>;
  var qbittorrentPausedTorrentsSensor: IEntity<`sensor.${string}`>;
  var batterySensor: IEntity<`sensor.${string}`>;
  var battery_2Sensor: IEntity<`sensor.${string}`>;
  var magicKeyboardWithNumericKeypadBatteryBatterySensor: IEntity<`sensor.${string}`>;
  var magicMouseBatteryBatterySensor: IEntity<`sensor.${string}`>;
  var undefinedBatteryBatterySensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_0Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_1Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_2Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_3Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_4Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_5Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_6Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_7Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_8Sensor: IEntity<`sensor.${string}`>;
  var icalIcalBenSCalendarEvent_9Sensor: IEntity<`sensor.${string}`>;
  var tp357sD5f7SignalStrengthSensor: IEntity<`sensor.${string}`>;
  var tp357sD5f7BatterySensor: IEntity<`sensor.${string}`>;
  var tp357sD5f7TemperatureSensor: IEntity<`sensor.${string}`>;
  var tp357sD5f7HumiditySensor: IEntity<`sensor.${string}`>;
  var spotifyBenWainwrightSongTempoSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerVoltageSensor: IEntity<`sensor.${string}`>;
  var homeAssistantServerCurrentSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugVoltageSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterSmartPlugCurrentSensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugVoltageSensor: IEntity<`sensor.${string}`>;
  var imacSmartPlugCurrentSensor: IEntity<`sensor.${string}`>;
  var boilerBoostTimeRemainingSensor: IEntity<`sensor.${string}`>;
  var qbittorrentConnectionStatusSensor: IEntity<`sensor.${string}`>;
  var qbittorrentAllTimeDownloadSensor: IEntity<`sensor.${string}`>;
  var qbittorrentAllTimeUploadSensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterDiningTableEnergySensor: IEntity<`sensor.${string}`>;
  var livingRoomHeaterDiningTablePowerSensor: IEntity<`sensor.${string}`>;
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
globalThis.boilerBoostTemperatureSensor = entity(
  'sensor.boiler_boost_temperature',
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
globalThis.frontDoorBattery_2Sensor = entity('sensor.front_door_battery_2');
globalThis.frontDoorLastActivitySensor = entity(
  'sensor.front_door_last_activity',
);
globalThis.watchmanLastUpdatedSensor = entity('sensor.watchman_last_updated');
globalThis.watchmanMissingEntitiesSensor = entity(
  'sensor.watchman_missing_entities',
);
globalThis.watchmanMissingActionsSensor = entity(
  'sensor.watchman_missing_actions',
);
globalThis.shellyemA4e57cba73f5Channel_1EnergyCostSensor = entity(
  'sensor.shellyem_a4e57cba73f5_channel_1_energy_cost',
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
globalThis.systemMonitorDiskFreeSslSensor = entity(
  'sensor.system_monitor_disk_free_ssl',
);
globalThis.systemMonitorDiskFreeMediaSensor = entity(
  'sensor.system_monitor_disk_free_media',
);
globalThis.systemMonitorDiskFreeShareSensor = entity(
  'sensor.system_monitor_disk_free_share',
);
globalThis.systemMonitorDiskFreeRunAudioSensor = entity(
  'sensor.system_monitor_disk_free_run_audio',
);
globalThis.systemMonitorDiskFreeConfigSensor = entity(
  'sensor.system_monitor_disk_free_config',
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
globalThis.tahomaSwitchScHomekitSetupCodeSensor = entity(
  'sensor.tahoma_switch_sc_homekit_setup_code',
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
globalThis.sonosArcUltraAudioInputFormatSensor = entity(
  'sensor.sonos_arc_ultra_audio_input_format',
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
globalThis.bensIphoneNameSensor = entity('sensor.bens_iphone_name');
globalThis.bensIphoneNextUpdateSensor = entity(
  'sensor.bens_iphone_next_update',
);
globalThis.bensIphoneLastLocatedSensor = entity(
  'sensor.bens_iphone_last_located',
);
globalThis.bensIphoneDirOfTravelSensor = entity(
  'sensor.bens_iphone_dir_of_travel',
);
globalThis.bensIphoneTravelTimeSensor = entity(
  'sensor.bens_iphone_travel_time',
);
globalThis.bensIphoneBatterySensor = entity('sensor.bens_iphone_battery');
globalThis.bensIphoneIntervalSensor = entity('sensor.bens_iphone_interval');
globalThis.bensIphoneZoneDistanceSensor = entity(
  'sensor.bens_iphone_zone_distance',
);
globalThis.bensIphoneInfoSensor = entity('sensor.bens_iphone_info');
globalThis.bensIphoneBadgeSensor = entity('sensor.bens_iphone_badge');
globalThis.bensIphoneZoneNameSensor = entity('sensor.bens_iphone_zone_name');
globalThis.bensIphoneLastUpdateSensor = entity(
  'sensor.bens_iphone_last_update',
);
globalThis.bensIphoneTravelTimeMinSensor = entity(
  'sensor.bens_iphone_travel_time_min',
);
globalThis.bensIphoneHomeDistanceSensor = entity(
  'sensor.bens_iphone_home_distance',
);
globalThis.bensIphoneArrivalTimeSensor = entity(
  'sensor.bens_iphone_arrival_time',
);
globalThis.bensIphoneBatteryStatusSensor = entity(
  'sensor.bens_iphone_battery_status',
);
globalThis.bensIphoneMovedDistanceSensor = entity(
  'sensor.bens_iphone_moved_distance',
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
globalThis.livingRoomSensorAirTemperatureSensor = entity(
  'sensor.living_room_sensor_air_temperature',
);
globalThis.livingRoomSensorBatteryLevelSensor = entity(
  'sensor.living_room_sensor_battery_level',
);
globalThis.livingRoomSensorIlluminanceSensor = entity(
  'sensor.living_room_sensor_illuminance',
);
globalThis.livingRoomSensorAlarmLevelSensor = entity(
  'sensor.living_room_sensor_alarm_level',
);
globalThis.livingRoomSensorAlarmTypeSensor = entity(
  'sensor.living_room_sensor_alarm_type',
);
globalThis.livingRoomSensorCoverStatusSensor = entity(
  'sensor.living_room_sensor_cover_status',
);
globalThis.livingRoomSensorMotionSensorStatusSensor = entity(
  'sensor.living_room_sensor_motion_sensor_status',
);
globalThis.gymSensorAirTemperatureSensor = entity(
  'sensor.gym_sensor_air_temperature',
);
globalThis.gymSensorBatteryLevelSensor = entity(
  'sensor.gym_sensor_battery_level',
);
globalThis.gymSensorIlluminanceSensor = entity('sensor.gym_sensor_illuminance');
globalThis.gymSensorAlarmLevelSensor = entity('sensor.gym_sensor_alarm_level');
globalThis.gymSensorAlarmTypeSensor = entity('sensor.gym_sensor_alarm_type');
globalThis.gymSensorCoverStatusSensor = entity(
  'sensor.gym_sensor_cover_status',
);
globalThis.gymSensorMotionSensorStatusSensor = entity(
  'sensor.gym_sensor_motion_sensor_status',
);
globalThis.bedroomSensorAirTemperatureSensor = entity(
  'sensor.bedroom_sensor_air_temperature',
);
globalThis.bedroomSensorBatteryLevelSensor = entity(
  'sensor.bedroom_sensor_battery_level',
);
globalThis.bedroomSensorIlluminanceSensor = entity(
  'sensor.bedroom_sensor_illuminance',
);
globalThis.bedroomSensorAlarmLevelSensor = entity(
  'sensor.bedroom_sensor_alarm_level',
);
globalThis.bedroomSensorAlarmTypeSensor = entity(
  'sensor.bedroom_sensor_alarm_type',
);
globalThis.bedroomSensorCoverStatusSensor = entity(
  'sensor.bedroom_sensor_cover_status',
);
globalThis.bedroomSensorMotionSensorStatusSensor = entity(
  'sensor.bedroom_sensor_motion_sensor_status',
);
globalThis.bedroomHeatingSwitchNodeStatusSensor = entity(
  'sensor.bedroom_heating_switch_node_status',
);
globalThis.bedroomSensorNodeStatusSensor = entity(
  'sensor.bedroom_sensor_node_status',
);
globalThis.gymHeatingSwitchNodeStatusSensor = entity(
  'sensor.gym_heating_switch_node_status',
);
globalThis.livingRoomSensorNodeStatusSensor = entity(
  'sensor.living_room_sensor_node_status',
);
globalThis.livingRoomHeatingSwitchNodeStatusSensor = entity(
  'sensor.living_room_heating_switch_node_status',
);
globalThis.gymSensorNodeStatusSensor = entity('sensor.gym_sensor_node_status');
globalThis.zStickGen5UsbControllerStatusSensor = entity(
  'sensor.z_stick_gen5_usb_controller_status',
);
globalThis.automationLogEntitySensor = entity('sensor.automation_log_entity');
globalThis.livingRoomHeatingSwitchLastSeenSensor = entity(
  'sensor.living_room_heating_switch_last_seen',
);
globalThis.bedroomHeatingSwitchLastSeenSensor = entity(
  'sensor.bedroom_heating_switch_last_seen',
);
globalThis.gymHeatingSwitchLastSeenSensor = entity(
  'sensor.gym_heating_switch_last_seen',
);
globalThis.livingRoomSensorLastSeenSensor = entity(
  'sensor.living_room_sensor_last_seen',
);
globalThis.gymSensorLastSeenSensor = entity('sensor.gym_sensor_last_seen');
globalThis.bedroomSensorLastSeenSensor = entity(
  'sensor.bedroom_sensor_last_seen',
);
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
globalThis.qbittorrentStatusSensor = entity('sensor.qbittorrent_status');
globalThis.qbittorrentDownloadSpeedSensor = entity(
  'sensor.qbittorrent_download_speed',
);
globalThis.qbittorrentUploadSpeedSensor = entity(
  'sensor.qbittorrent_upload_speed',
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
globalThis.qbittorrentConnectionStatusSensor = entity(
  'sensor.qbittorrent_connection_status',
);
globalThis.qbittorrentAllTimeDownloadSensor = entity(
  'sensor.qbittorrent_all_time_download',
);
globalThis.qbittorrentAllTimeUploadSensor = entity(
  'sensor.qbittorrent_all_time_upload',
);
globalThis.livingRoomHeaterDiningTableEnergySensor = entity(
  'sensor.living_room_heater_dining_table_energy',
);
globalThis.livingRoomHeaterDiningTablePowerSensor = entity(
  'sensor.living_room_heater_dining_table_power',
);
