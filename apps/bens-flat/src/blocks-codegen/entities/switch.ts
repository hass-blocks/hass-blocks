import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var adaptiveLightingSleepModeLivingRoomSwitch: ITarget;
  var adaptiveLightingAdaptColorLivingRoomSwitch: ITarget;
  var adaptiveLightingAdaptBrightnessLivingRoomSwitch: ITarget;
  var adaptiveLightingLivingRoomSwitch: ITarget;
  var adaptiveLightingSleepModeBathroomSwitch: ITarget;
  var adaptiveLightingAdaptColorBathroomSwitch: ITarget;
  var adaptiveLightingAdaptBrightnessBathroomSwitch: ITarget;
  var adaptiveLightingBathroomSwitch: ITarget;
  var adaptiveLightingSleepModeHallwaySwitch: ITarget;
  var adaptiveLightingAdaptColorHallwaySwitch: ITarget;
  var adaptiveLightingAdaptBrightnessHallwaySwitch: ITarget;
  var adaptiveLightingHallwaySwitch: ITarget;
  var adaptiveLightingSleepModeBedroomSwitch: ITarget;
  var adaptiveLightingAdaptColorBedroomSwitch: ITarget;
  var adaptiveLightingAdaptBrightnessBedroomSwitch: ITarget;
  var adaptiveLightingBedroomSwitch: ITarget;
  var automationWakeUpSwitch: ITarget;
  var automationLeavingHomeSwitch: ITarget;
  var boilerBoostSwitch: ITarget;
  var livingRoomHeaterDiningTableSwitch: ITarget;
  var boilerSwitch: ITarget;
  var shellyemA4e57cba73f5Switch: ITarget;
  var qbittorrentAlternativeSpeedSwitch: ITarget;
  var livingRoomHeatingSwitchSwitch: ITarget;
  var bedroomHeatingSwitchSwitch: ITarget;
  var gymHeatingSwitchSwitch: ITarget;
  var genericRemoteControlCardPreReleaseSwitch: ITarget;
  var sonosAlarmPreReleaseSwitch: ITarget;
  var livingRoomTvOnSwitch: ITarget;
  var imacProOnSwitch: ITarget;
  var scheduleLivingRoomThermostatTrainingDaysSwitch: ITarget;
  var scheduleBedroomThermostatWeekendSwitch: ITarget;
  var scheduleLivingRoomThermostatWeekendSwitch: ITarget;
  var scheduleBedroomThermostatWeekdaysSwitch: ITarget;
  var scheduleBoilerSwitch: ITarget;
  var scheduleLivingRoomThermostatFridaySwitch: ITarget;
  var scheduleLivingRoomThermostatNonTrainingDaysSwitch: ITarget;
  var adguardHomeProtectionSwitch: ITarget;
  var adguardHomeParentalControlSwitch: ITarget;
  var adguardHomeSafeSearchSwitch: ITarget;
  var adguardHomeSafeBrowsingSwitch: ITarget;
  var adguardHomeFilteringSwitch: ITarget;
  var adguardHomeQueryLogSwitch: ITarget;
  var assistMicrophoneMuteSwitch: ITarget;
  var tumbleDryerSmartPlugSwitch: ITarget;
  var tumbleDryerSmartPlugAutoOffEnabledSwitch: ITarget;
  var tumbleDryerSmartPlugAutoUpdateEnabledSwitch: ITarget;
  var tumbleDryerSmartPlugLedSwitch: ITarget;
  var homeAssistantServerSwitch: ITarget;
  var homeAssistantServerAutoOffEnabledSwitch: ITarget;
  var homeAssistantServerAutoUpdateEnabledSwitch: ITarget;
  var homeAssistantServerLedSwitch: ITarget;
  var imacSmartPlug_2Switch: ITarget;
  var imacSmartPlugAutoOffEnabled_2Switch: ITarget;
  var imacSmartPlugAutoUpdateEnabled_2Switch: ITarget;
  var imacSmartPlugLed_2Switch: ITarget;
  var livingRoomHeaterSmartPlugSwitch: ITarget;
  var livingRoomHeaterSmartPlugAutoOffEnabledSwitch: ITarget;
  var livingRoomHeaterSmartPlugAutoUpdateEnabledSwitch: ITarget;
  var livingRoomHeaterSmartPlugLedSwitch: ITarget;
  var frontDoorMotionDetectionSwitch: ITarget;
  var bedroomSpeakerCrossfadeSwitch: ITarget;
  var bedroomSpeakerLoudnessSwitch: ITarget;
  var bathroomMotionSensorLedIndicationSwitch: ITarget;
  var hallwayMotionSensorLedIndicationSwitch: ITarget;
  var zigbee2mqttBridgePermitJoinSwitch: ITarget;
  var sonosArcUltraCrossfadeSwitch: ITarget;
  var sonosArcUltraLoudnessSwitch: ITarget;
  var sonosArcUltraSurroundMusicFullVolumeSwitch: ITarget;
  var sonosArcUltraNightSoundSwitch: ITarget;
  var sonosArcUltraSpeechEnhancementSwitch: ITarget;
  var sonosArcUltraSurroundEnabledSwitch: ITarget;
  var benSSonosOneSecondEditionDoNotDisturbSwitchSwitch: ITarget;
  var benSSonosOneSecondEditionShuffleSwitchSwitch: ITarget;
  var benSSonosOneSecondEditionRepeatSwitchSwitch: ITarget;
  var bedroomSpeakerDoNotDisturbSwitchSwitch: ITarget;
  var bedroomSpeakerShuffleSwitchSwitch: ITarget;
  var bedroomSpeakerRepeatSwitchSwitch: ITarget;
  var officeDoNotDisturbSwitchSwitch: ITarget;
  var officeShuffleSwitchSwitch: ITarget;
  var officeRepeatSwitchSwitch: ITarget;
  var benS_2ndSonosOneSecondEditionDoNotDisturbSwitchSwitch: ITarget;
  var benS_2ndSonosOneSecondEditionShuffleSwitchSwitch: ITarget;
  var benS_2ndSonosOneSecondEditionRepeatSwitchSwitch: ITarget;
  var benS_3rdSonosOneSecondEditionDoNotDisturbSwitchSwitch: ITarget;
  var benS_3rdSonosOneSecondEditionShuffleSwitchSwitch: ITarget;
  var benS_3rdSonosOneSecondEditionRepeatSwitchSwitch: ITarget;
  var livingRoomDoNotDisturbSwitchSwitch: ITarget;
  var livingRoomShuffleSwitchSwitch: ITarget;
  var livingRoomRepeatSwitchSwitch: ITarget;
  var sonosArcUltraDoNotDisturbSwitchSwitch: ITarget;
  var sonosArcUltraShuffleSwitchSwitch: ITarget;
  var sonosArcUltraRepeatSwitchSwitch: ITarget;
  var livingRoomSonosDoNotDisturbSwitchSwitch: ITarget;
  var livingRoomSonosShuffleSwitchSwitch: ITarget;
  var livingRoomSonosRepeatSwitchSwitch: ITarget;
  var thisDeviceDoNotDisturbSwitch_2Switch: ITarget;
  var officeCrossfadeSwitch: ITarget;
  var officeLoudnessSwitch: ITarget;
  var livingRoomMainTurnonSwitch: ITarget;
  var holidayModeSwitch: ITarget;
  var sleepModeSwitch: ITarget;
  var bedroomMotionSensorSwitch: ITarget;
  var livingRoomMotionSensorSwitch: ITarget;
  var hallwayMotionSensorSwitch: ITarget;
  var bathroomMotionSensorSwitch: ITarget;
  var frontDoorDoorbellMqttEventStreamSwitch: ITarget;
  var frontDoorDoorbellMqttLiveStreamSwitch: ITarget;
  var frontDoorDoorbellMqttMotionDetectionSwitch: ITarget;
  var stateTestingBinarySwitchSwitch: ITarget;
  var goodMorningMessagePlayedSwitch: ITarget;
  var livingRoomBlindsDefaultToOpenSwitch: ITarget;
  var tvModeSwitch: ITarget;
  var benIsHomeSwitch: ITarget;
  var homeModeSwitch: ITarget;
  var visitorModeSwitch: ITarget;
  var nagModeSwitch: ITarget;
  var openBlindsSwitch: ITarget;
  var livingRoomBlindsLeftWindowSwitch: ITarget;
  var livingRoomBlindsLeftCentreWindowSwitch: ITarget;
  var livingRoomBlindsRightCentreWindowSwitch: ITarget;
  var livingRoomBlindsRightWindowSwitch: ITarget;
  var quetModeSwitch: ITarget;
  var quietModeSwitch: ITarget;
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
globalThis.automationWakeUpSwitch = entity('switch.automation_wake_up');
globalThis.automationLeavingHomeSwitch = entity(
  'switch.automation_leaving_home',
);
globalThis.boilerBoostSwitch = entity('switch.boiler_boost');
globalThis.livingRoomHeaterDiningTableSwitch = entity(
  'switch.living_room_heater_dining_table',
);
globalThis.boilerSwitch = entity('switch.boiler');
globalThis.shellyemA4e57cba73f5Switch = entity('switch.shellyem_a4e57cba73f5');
globalThis.qbittorrentAlternativeSpeedSwitch = entity(
  'switch.qbittorrent_alternative_speed',
);
globalThis.livingRoomHeatingSwitchSwitch = entity(
  'switch.living_room_heating_switch',
);
globalThis.bedroomHeatingSwitchSwitch = entity('switch.bedroom_heating_switch');
globalThis.gymHeatingSwitchSwitch = entity('switch.gym_heating_switch');
globalThis.genericRemoteControlCardPreReleaseSwitch = entity(
  'switch.generic_remote_control_card_pre_release',
);
globalThis.sonosAlarmPreReleaseSwitch = entity(
  'switch.sonos_alarm_pre_release',
);
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
globalThis.assistMicrophoneMuteSwitch = entity('switch.assist_microphone_mute');
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
globalThis.frontDoorMotionDetectionSwitch = entity(
  'switch.front_door_motion_detection',
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
globalThis.holidayModeSwitch = entity('switch.holiday_mode');
globalThis.sleepModeSwitch = entity('switch.sleep_mode');
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
globalThis.quetModeSwitch = entity('switch.quet_mode');
globalThis.quietModeSwitch = entity('switch.quiet_mode');
