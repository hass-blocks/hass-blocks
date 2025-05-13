import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var adaptiveLightingSleepModeLivingRoomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptColorLivingRoomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptBrightnessLivingRoomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingLivingRoomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingSleepModeBathroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptColorBathroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptBrightnessBathroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingBathroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingSleepModeHallwaySwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptColorHallwaySwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptBrightnessHallwaySwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingHallwaySwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingSleepModeBedroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptColorBedroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingAdaptBrightnessBedroomSwitch: IEntity<`switch.${string}`>;
  var adaptiveLightingBedroomSwitch: IEntity<`switch.${string}`>;
  var boilerBoostSwitch: IEntity<`switch.${string}`>;
  var shellyemA4e57cba73f5Switch: IEntity<`switch.${string}`>;
  var boilerSwitch: IEntity<`switch.${string}`>;
  var livingRoomTvOnSwitch: IEntity<`switch.${string}`>;
  var imacProOnSwitch: IEntity<`switch.${string}`>;
  var scheduleLivingRoomThermostatTrainingDaysSwitch: IEntity<`switch.${string}`>;
  var scheduleBedroomThermostatWeekendSwitch: IEntity<`switch.${string}`>;
  var scheduleLivingRoomThermostatWeekendSwitch: IEntity<`switch.${string}`>;
  var scheduleBedroomThermostatWeekdaysSwitch: IEntity<`switch.${string}`>;
  var scheduleBoilerSwitch: IEntity<`switch.${string}`>;
  var scheduleLivingRoomThermostatFridaySwitch: IEntity<`switch.${string}`>;
  var scheduleLivingRoomThermostatNonTrainingDaysSwitch: IEntity<`switch.${string}`>;
  var frontDoorMotionDetectionSwitch: IEntity<`switch.${string}`>;
  var genericRemoteControlCardPreReleaseSwitch: IEntity<`switch.${string}`>;
  var sonosAlarmPreReleaseSwitch: IEntity<`switch.${string}`>;
  var adguardHomeProtectionSwitch: IEntity<`switch.${string}`>;
  var adguardHomeParentalControlSwitch: IEntity<`switch.${string}`>;
  var adguardHomeSafeSearchSwitch: IEntity<`switch.${string}`>;
  var adguardHomeSafeBrowsingSwitch: IEntity<`switch.${string}`>;
  var adguardHomeFilteringSwitch: IEntity<`switch.${string}`>;
  var adguardHomeQueryLogSwitch: IEntity<`switch.${string}`>;
  var automationWakeUpSwitch: IEntity<`switch.${string}`>;
  var automationLeavingHomeSwitch: IEntity<`switch.${string}`>;
  var tumbleDryerSmartPlugSwitch: IEntity<`switch.${string}`>;
  var tumbleDryerSmartPlugAutoOffEnabledSwitch: IEntity<`switch.${string}`>;
  var tumbleDryerSmartPlugAutoUpdateEnabledSwitch: IEntity<`switch.${string}`>;
  var tumbleDryerSmartPlugLedSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraCrossfadeSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraLoudnessSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraSurroundMusicFullVolumeSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraNightSoundSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraSpeechEnhancementSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraSurroundEnabledSwitch: IEntity<`switch.${string}`>;
  var bedroomSpeakerCrossfadeSwitch: IEntity<`switch.${string}`>;
  var bedroomSpeakerLoudnessSwitch: IEntity<`switch.${string}`>;
  var bathroomMotionSensorLedIndicationSwitch: IEntity<`switch.${string}`>;
  var hallwayMotionSensorLedIndicationSwitch: IEntity<`switch.${string}`>;
  var zigbee2mqttBridgePermitJoinSwitch: IEntity<`switch.${string}`>;
  var benSSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var benSSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var benSSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var bedroomSpeakerDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var bedroomSpeakerShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var bedroomSpeakerRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var officeDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var officeShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var officeRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_2ndSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_2ndSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_2ndSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_3rdSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_3rdSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var benS_3rdSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var sonosArcUltraRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomSonosDoNotDisturbSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomSonosShuffleSwitchSwitch: IEntity<`switch.${string}`>;
  var livingRoomSonosRepeatSwitchSwitch: IEntity<`switch.${string}`>;
  var thisDeviceDoNotDisturbSwitch_2Switch: IEntity<`switch.${string}`>;
  var officeCrossfadeSwitch: IEntity<`switch.${string}`>;
  var officeLoudnessSwitch: IEntity<`switch.${string}`>;
  var livingRoomMainTurnonSwitch: IEntity<`switch.${string}`>;
  var livingRoomHeatingSwitchSwitch: IEntity<`switch.${string}`>;
  var bedroomHeatingSwitchSwitch: IEntity<`switch.${string}`>;
  var gymHeatingSwitchSwitch: IEntity<`switch.${string}`>;
  var holidayModeSwitch: IEntity<`switch.${string}`>;
  var sleepModeSwitch: IEntity<`switch.${string}`>;
  var homeAssistantServerSwitch: IEntity<`switch.${string}`>;
  var homeAssistantServerAutoOffEnabledSwitch: IEntity<`switch.${string}`>;
  var homeAssistantServerAutoUpdateEnabledSwitch: IEntity<`switch.${string}`>;
  var homeAssistantServerLedSwitch: IEntity<`switch.${string}`>;
  var imacSmartPlug_2Switch: IEntity<`switch.${string}`>;
  var imacSmartPlugAutoOffEnabled_2Switch: IEntity<`switch.${string}`>;
  var imacSmartPlugAutoUpdateEnabled_2Switch: IEntity<`switch.${string}`>;
  var imacSmartPlugLed_2Switch: IEntity<`switch.${string}`>;
  var livingRoomHeaterSmartPlugSwitch: IEntity<`switch.${string}`>;
  var livingRoomHeaterSmartPlugAutoOffEnabledSwitch: IEntity<`switch.${string}`>;
  var livingRoomHeaterSmartPlugAutoUpdateEnabledSwitch: IEntity<`switch.${string}`>;
  var livingRoomHeaterSmartPlugLedSwitch: IEntity<`switch.${string}`>;
  var bedroomMotionSensorSwitch: IEntity<`switch.${string}`>;
  var livingRoomMotionSensorSwitch: IEntity<`switch.${string}`>;
  var hallwayMotionSensorSwitch: IEntity<`switch.${string}`>;
  var bathroomMotionSensorSwitch: IEntity<`switch.${string}`>;
  var frontDoorDoorbellMqttEventStreamSwitch: IEntity<`switch.${string}`>;
  var frontDoorDoorbellMqttLiveStreamSwitch: IEntity<`switch.${string}`>;
  var frontDoorDoorbellMqttMotionDetectionSwitch: IEntity<`switch.${string}`>;
  var stateTestingBinarySwitchSwitch: IEntity<`switch.${string}`>;
  var goodMorningMessagePlayedSwitch: IEntity<`switch.${string}`>;
  var livingRoomBlindsDefaultToOpenSwitch: IEntity<`switch.${string}`>;
  var tvModeSwitch: IEntity<`switch.${string}`>;
  var benIsHomeSwitch: IEntity<`switch.${string}`>;
  var homeModeSwitch: IEntity<`switch.${string}`>;
  var visitorModeSwitch: IEntity<`switch.${string}`>;
  var nagModeSwitch: IEntity<`switch.${string}`>;
  var openBlindsSwitch: IEntity<`switch.${string}`>;
  var livingRoomBlindsLeftWindowSwitch: IEntity<`switch.${string}`>;
  var livingRoomBlindsLeftCentreWindowSwitch: IEntity<`switch.${string}`>;
  var livingRoomBlindsRightCentreWindowSwitch: IEntity<`switch.${string}`>;
  var livingRoomBlindsRightWindowSwitch: IEntity<`switch.${string}`>;
  var qbittorrentAlternativeSpeedSwitch: IEntity<`switch.${string}`>;
  var assistMicrophoneMuteSwitch: IEntity<`switch.${string}`>;
  var quetModeSwitch: IEntity<`switch.${string}`>;
  var quietModeSwitch: IEntity<`switch.${string}`>;
  var livingRoomHeaterDiningTableSwitch: IEntity<`switch.${string}`>;
}

globalThis.adaptiveLightingSleepModeLivingRoomSwitch = entity(
  'switch.adaptive_lighting_sleep_mode_living_room',
);
globalThis.adaptiveLightingAdaptColorLivingRoomSwitch = entity(
  'switch.adaptive_lighting_adapt_color_living_room',
);
globalThis.adaptiveLightingAdaptBrightnessLivingRoomSwitch = entity(
  'switch.adaptive_lighting_adapt_brightness_living_room',
);
globalThis.adaptiveLightingLivingRoomSwitch = entity(
  'switch.adaptive_lighting_living_room',
);
globalThis.adaptiveLightingSleepModeBathroomSwitch = entity(
  'switch.adaptive_lighting_sleep_mode_bathroom',
);
globalThis.adaptiveLightingAdaptColorBathroomSwitch = entity(
  'switch.adaptive_lighting_adapt_color_bathroom',
);
globalThis.adaptiveLightingAdaptBrightnessBathroomSwitch = entity(
  'switch.adaptive_lighting_adapt_brightness_bathroom',
);
globalThis.adaptiveLightingBathroomSwitch = entity(
  'switch.adaptive_lighting_bathroom',
);
globalThis.adaptiveLightingSleepModeHallwaySwitch = entity(
  'switch.adaptive_lighting_sleep_mode_hallway',
);
globalThis.adaptiveLightingAdaptColorHallwaySwitch = entity(
  'switch.adaptive_lighting_adapt_color_hallway',
);
globalThis.adaptiveLightingAdaptBrightnessHallwaySwitch = entity(
  'switch.adaptive_lighting_adapt_brightness_hallway',
);
globalThis.adaptiveLightingHallwaySwitch = entity(
  'switch.adaptive_lighting_hallway',
);
globalThis.adaptiveLightingSleepModeBedroomSwitch = entity(
  'switch.adaptive_lighting_sleep_mode_bedroom',
);
globalThis.adaptiveLightingAdaptColorBedroomSwitch = entity(
  'switch.adaptive_lighting_adapt_color_bedroom',
);
globalThis.adaptiveLightingAdaptBrightnessBedroomSwitch = entity(
  'switch.adaptive_lighting_adapt_brightness_bedroom',
);
globalThis.adaptiveLightingBedroomSwitch = entity(
  'switch.adaptive_lighting_bedroom',
);
globalThis.boilerBoostSwitch = entity('switch.boiler_boost');
globalThis.shellyemA4e57cba73f5Switch = entity('switch.shellyem_a4e57cba73f5');
globalThis.boilerSwitch = entity('switch.boiler');
globalThis.livingRoomTvOnSwitch = entity('switch.living_room_tv_on');
globalThis.imacProOnSwitch = entity('switch.imac_pro_on');
globalThis.scheduleLivingRoomThermostatTrainingDaysSwitch = entity(
  'switch.schedule_living_room_thermostat_training_days',
);
globalThis.scheduleBedroomThermostatWeekendSwitch = entity(
  'switch.schedule_bedroom_thermostat_weekend',
);
globalThis.scheduleLivingRoomThermostatWeekendSwitch = entity(
  'switch.schedule_living_room_thermostat_weekend',
);
globalThis.scheduleBedroomThermostatWeekdaysSwitch = entity(
  'switch.schedule_bedroom_thermostat_weekdays',
);
globalThis.scheduleBoilerSwitch = entity('switch.schedule_boiler');
globalThis.scheduleLivingRoomThermostatFridaySwitch = entity(
  'switch.schedule_living_room_thermostat_friday',
);
globalThis.scheduleLivingRoomThermostatNonTrainingDaysSwitch = entity(
  'switch.schedule_living_room_thermostat_non_training_days',
);
globalThis.frontDoorMotionDetectionSwitch = entity(
  'switch.front_door_motion_detection',
);
globalThis.genericRemoteControlCardPreReleaseSwitch = entity(
  'switch.generic_remote_control_card_pre_release',
);
globalThis.sonosAlarmPreReleaseSwitch = entity(
  'switch.sonos_alarm_pre_release',
);
globalThis.adguardHomeProtectionSwitch = entity(
  'switch.adguard_home_protection',
);
globalThis.adguardHomeParentalControlSwitch = entity(
  'switch.adguard_home_parental_control',
);
globalThis.adguardHomeSafeSearchSwitch = entity(
  'switch.adguard_home_safe_search',
);
globalThis.adguardHomeSafeBrowsingSwitch = entity(
  'switch.adguard_home_safe_browsing',
);
globalThis.adguardHomeFilteringSwitch = entity('switch.adguard_home_filtering');
globalThis.adguardHomeQueryLogSwitch = entity('switch.adguard_home_query_log');
globalThis.automationWakeUpSwitch = entity('switch.automation_wake_up');
globalThis.automationLeavingHomeSwitch = entity(
  'switch.automation_leaving_home',
);
globalThis.tumbleDryerSmartPlugSwitch = entity(
  'switch.tumble_dryer_smart_plug',
);
globalThis.tumbleDryerSmartPlugAutoOffEnabledSwitch = entity(
  'switch.tumble_dryer_smart_plug_auto_off_enabled',
);
globalThis.tumbleDryerSmartPlugAutoUpdateEnabledSwitch = entity(
  'switch.tumble_dryer_smart_plug_auto_update_enabled',
);
globalThis.tumbleDryerSmartPlugLedSwitch = entity(
  'switch.tumble_dryer_smart_plug_led',
);
globalThis.sonosArcUltraCrossfadeSwitch = entity(
  'switch.sonos_arc_ultra_crossfade',
);
globalThis.sonosArcUltraLoudnessSwitch = entity(
  'switch.sonos_arc_ultra_loudness',
);
globalThis.sonosArcUltraSurroundMusicFullVolumeSwitch = entity(
  'switch.sonos_arc_ultra_surround_music_full_volume',
);
globalThis.sonosArcUltraNightSoundSwitch = entity(
  'switch.sonos_arc_ultra_night_sound',
);
globalThis.sonosArcUltraSpeechEnhancementSwitch = entity(
  'switch.sonos_arc_ultra_speech_enhancement',
);
globalThis.sonosArcUltraSurroundEnabledSwitch = entity(
  'switch.sonos_arc_ultra_surround_enabled',
);
globalThis.bedroomSpeakerCrossfadeSwitch = entity(
  'switch.bedroom_speaker_crossfade',
);
globalThis.bedroomSpeakerLoudnessSwitch = entity(
  'switch.bedroom_speaker_loudness',
);
globalThis.bathroomMotionSensorLedIndicationSwitch = entity(
  'switch.bathroom_motion_sensor_led_indication',
);
globalThis.hallwayMotionSensorLedIndicationSwitch = entity(
  'switch.hallway_motion_sensor_led_indication',
);
globalThis.zigbee2mqttBridgePermitJoinSwitch = entity(
  'switch.zigbee2mqtt_bridge_permit_join',
);
globalThis.benSSonosOneSecondEditionDoNotDisturbSwitchSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_do_not_disturb_switch',
);
globalThis.benSSonosOneSecondEditionShuffleSwitchSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_shuffle_switch',
);
globalThis.benSSonosOneSecondEditionRepeatSwitchSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_repeat_switch',
);
globalThis.bedroomSpeakerDoNotDisturbSwitchSwitch = entity(
  'switch.bedroom_speaker_do_not_disturb_switch',
);
globalThis.bedroomSpeakerShuffleSwitchSwitch = entity(
  'switch.bedroom_speaker_shuffle_switch',
);
globalThis.bedroomSpeakerRepeatSwitchSwitch = entity(
  'switch.bedroom_speaker_repeat_switch',
);
globalThis.officeDoNotDisturbSwitchSwitch = entity(
  'switch.office_do_not_disturb_switch',
);
globalThis.officeShuffleSwitchSwitch = entity('switch.office_shuffle_switch');
globalThis.officeRepeatSwitchSwitch = entity('switch.office_repeat_switch');
globalThis.benS_2ndSonosOneSecondEditionDoNotDisturbSwitchSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_do_not_disturb_switch',
);
globalThis.benS_2ndSonosOneSecondEditionShuffleSwitchSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_shuffle_switch',
);
globalThis.benS_2ndSonosOneSecondEditionRepeatSwitchSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_repeat_switch',
);
globalThis.benS_3rdSonosOneSecondEditionDoNotDisturbSwitchSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_do_not_disturb_switch',
);
globalThis.benS_3rdSonosOneSecondEditionShuffleSwitchSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_shuffle_switch',
);
globalThis.benS_3rdSonosOneSecondEditionRepeatSwitchSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_repeat_switch',
);
globalThis.livingRoomDoNotDisturbSwitchSwitch = entity(
  'switch.living_room_do_not_disturb_switch',
);
globalThis.livingRoomShuffleSwitchSwitch = entity(
  'switch.living_room_shuffle_switch',
);
globalThis.livingRoomRepeatSwitchSwitch = entity(
  'switch.living_room_repeat_switch',
);
globalThis.sonosArcUltraDoNotDisturbSwitchSwitch = entity(
  'switch.sonos_arc_ultra_do_not_disturb_switch',
);
globalThis.sonosArcUltraShuffleSwitchSwitch = entity(
  'switch.sonos_arc_ultra_shuffle_switch',
);
globalThis.sonosArcUltraRepeatSwitchSwitch = entity(
  'switch.sonos_arc_ultra_repeat_switch',
);
globalThis.livingRoomSonosDoNotDisturbSwitchSwitch = entity(
  'switch.living_room_sonos_do_not_disturb_switch',
);
globalThis.livingRoomSonosShuffleSwitchSwitch = entity(
  'switch.living_room_sonos_shuffle_switch',
);
globalThis.livingRoomSonosRepeatSwitchSwitch = entity(
  'switch.living_room_sonos_repeat_switch',
);
globalThis.thisDeviceDoNotDisturbSwitch_2Switch = entity(
  'switch.this_device_do_not_disturb_switch_2',
);
globalThis.officeCrossfadeSwitch = entity('switch.office_crossfade');
globalThis.officeLoudnessSwitch = entity('switch.office_loudness');
globalThis.livingRoomMainTurnonSwitch = entity(
  'switch.living_room_main_turnon',
);
globalThis.livingRoomHeatingSwitchSwitch = entity(
  'switch.living_room_heating_switch',
);
globalThis.bedroomHeatingSwitchSwitch = entity('switch.bedroom_heating_switch');
globalThis.gymHeatingSwitchSwitch = entity('switch.gym_heating_switch');
globalThis.holidayModeSwitch = entity('switch.holiday_mode');
globalThis.sleepModeSwitch = entity('switch.sleep_mode');
globalThis.homeAssistantServerSwitch = entity('switch.home_assistant_server');
globalThis.homeAssistantServerAutoOffEnabledSwitch = entity(
  'switch.home_assistant_server_auto_off_enabled',
);
globalThis.homeAssistantServerAutoUpdateEnabledSwitch = entity(
  'switch.home_assistant_server_auto_update_enabled',
);
globalThis.homeAssistantServerLedSwitch = entity(
  'switch.home_assistant_server_led',
);
globalThis.imacSmartPlug_2Switch = entity('switch.imac_smart_plug_2');
globalThis.imacSmartPlugAutoOffEnabled_2Switch = entity(
  'switch.imac_smart_plug_auto_off_enabled_2',
);
globalThis.imacSmartPlugAutoUpdateEnabled_2Switch = entity(
  'switch.imac_smart_plug_auto_update_enabled_2',
);
globalThis.imacSmartPlugLed_2Switch = entity('switch.imac_smart_plug_led_2');
globalThis.livingRoomHeaterSmartPlugSwitch = entity(
  'switch.living_room_heater_smart_plug',
);
globalThis.livingRoomHeaterSmartPlugAutoOffEnabledSwitch = entity(
  'switch.living_room_heater_smart_plug_auto_off_enabled',
);
globalThis.livingRoomHeaterSmartPlugAutoUpdateEnabledSwitch = entity(
  'switch.living_room_heater_smart_plug_auto_update_enabled',
);
globalThis.livingRoomHeaterSmartPlugLedSwitch = entity(
  'switch.living_room_heater_smart_plug_led',
);
globalThis.bedroomMotionSensorSwitch = entity('switch.bedroom_motion_sensor');
globalThis.livingRoomMotionSensorSwitch = entity(
  'switch.living_room_motion_sensor',
);
globalThis.hallwayMotionSensorSwitch = entity('switch.hallway_motion_sensor');
globalThis.bathroomMotionSensorSwitch = entity('switch.bathroom_motion_sensor');
globalThis.frontDoorDoorbellMqttEventStreamSwitch = entity(
  'switch.front_door_doorbell_mqtt_event_stream',
);
globalThis.frontDoorDoorbellMqttLiveStreamSwitch = entity(
  'switch.front_door_doorbell_mqtt_live_stream',
);
globalThis.frontDoorDoorbellMqttMotionDetectionSwitch = entity(
  'switch.front_door_doorbell_mqtt_motion_detection',
);
globalThis.stateTestingBinarySwitchSwitch = entity(
  'switch.state_testing_binary_switch',
);
globalThis.goodMorningMessagePlayedSwitch = entity(
  'switch.good_morning_message_played',
);
globalThis.livingRoomBlindsDefaultToOpenSwitch = entity(
  'switch.living_room_blinds_default_to_open',
);
globalThis.tvModeSwitch = entity('switch.tv_mode');
globalThis.benIsHomeSwitch = entity('switch.ben_is_home');
globalThis.homeModeSwitch = entity('switch.home_mode');
globalThis.visitorModeSwitch = entity('switch.visitor_mode');
globalThis.nagModeSwitch = entity('switch.nag_mode');
globalThis.openBlindsSwitch = entity('switch.open_blinds');
globalThis.livingRoomBlindsLeftWindowSwitch = entity(
  'switch.living_room_blinds_left_window',
);
globalThis.livingRoomBlindsLeftCentreWindowSwitch = entity(
  'switch.living_room_blinds_left_centre_window',
);
globalThis.livingRoomBlindsRightCentreWindowSwitch = entity(
  'switch.living_room_blinds_right_centre_window',
);
globalThis.livingRoomBlindsRightWindowSwitch = entity(
  'switch.living_room_blinds_right_window',
);
globalThis.qbittorrentAlternativeSpeedSwitch = entity(
  'switch.qbittorrent_alternative_speed',
);
globalThis.assistMicrophoneMuteSwitch = entity('switch.assist_microphone_mute');
globalThis.quetModeSwitch = entity('switch.quet_mode');
globalThis.quietModeSwitch = entity('switch.quiet_mode');
globalThis.livingRoomHeaterDiningTableSwitch = entity(
  'switch.living_room_heater_dining_table',
);
