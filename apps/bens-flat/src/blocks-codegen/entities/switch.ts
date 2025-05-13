import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var adaptiveLightingSleepModeLivingRoomSwitch: IEntity<`switch.adaptive_lighting_sleep_mode_living_room`>;
  var adaptiveLightingAdaptColorLivingRoomSwitch: IEntity<`switch.adaptive_lighting_adapt_color_living_room`>;
  var adaptiveLightingAdaptBrightnessLivingRoomSwitch: IEntity<`switch.adaptive_lighting_adapt_brightness_living_room`>;
  var adaptiveLightingLivingRoomSwitch: IEntity<`switch.adaptive_lighting_living_room`>;
  var adaptiveLightingSleepModeBathroomSwitch: IEntity<`switch.adaptive_lighting_sleep_mode_bathroom`>;
  var adaptiveLightingAdaptColorBathroomSwitch: IEntity<`switch.adaptive_lighting_adapt_color_bathroom`>;
  var adaptiveLightingAdaptBrightnessBathroomSwitch: IEntity<`switch.adaptive_lighting_adapt_brightness_bathroom`>;
  var adaptiveLightingBathroomSwitch: IEntity<`switch.adaptive_lighting_bathroom`>;
  var adaptiveLightingSleepModeHallwaySwitch: IEntity<`switch.adaptive_lighting_sleep_mode_hallway`>;
  var adaptiveLightingAdaptColorHallwaySwitch: IEntity<`switch.adaptive_lighting_adapt_color_hallway`>;
  var adaptiveLightingAdaptBrightnessHallwaySwitch: IEntity<`switch.adaptive_lighting_adapt_brightness_hallway`>;
  var adaptiveLightingHallwaySwitch: IEntity<`switch.adaptive_lighting_hallway`>;
  var adaptiveLightingSleepModeBedroomSwitch: IEntity<`switch.adaptive_lighting_sleep_mode_bedroom`>;
  var adaptiveLightingAdaptColorBedroomSwitch: IEntity<`switch.adaptive_lighting_adapt_color_bedroom`>;
  var adaptiveLightingAdaptBrightnessBedroomSwitch: IEntity<`switch.adaptive_lighting_adapt_brightness_bedroom`>;
  var adaptiveLightingBedroomSwitch: IEntity<`switch.adaptive_lighting_bedroom`>;
  var boilerBoostSwitch: IEntity<`switch.boiler_boost`>;
  var shellyemA4e57cba73f5Switch: IEntity<`switch.shellyem_a4e57cba73f5`>;
  var boilerSwitch: IEntity<`switch.boiler`>;
  var livingRoomTvOnSwitch: IEntity<`switch.living_room_tv_on`>;
  var imacProOnSwitch: IEntity<`switch.imac_pro_on`>;
  var scheduleLivingRoomThermostatTrainingDaysSwitch: IEntity<`switch.schedule_living_room_thermostat_training_days`>;
  var scheduleBedroomThermostatWeekendSwitch: IEntity<`switch.schedule_bedroom_thermostat_weekend`>;
  var scheduleLivingRoomThermostatWeekendSwitch: IEntity<`switch.schedule_living_room_thermostat_weekend`>;
  var scheduleBedroomThermostatWeekdaysSwitch: IEntity<`switch.schedule_bedroom_thermostat_weekdays`>;
  var scheduleBoilerSwitch: IEntity<`switch.schedule_boiler`>;
  var scheduleLivingRoomThermostatFridaySwitch: IEntity<`switch.schedule_living_room_thermostat_friday`>;
  var scheduleLivingRoomThermostatNonTrainingDaysSwitch: IEntity<`switch.schedule_living_room_thermostat_non_training_days`>;
  var frontDoorMotionDetectionSwitch: IEntity<`switch.front_door_motion_detection`>;
  var genericRemoteControlCardPreReleaseSwitch: IEntity<`switch.generic_remote_control_card_pre_release`>;
  var sonosAlarmPreReleaseSwitch: IEntity<`switch.sonos_alarm_pre_release`>;
  var adguardHomeProtectionSwitch: IEntity<`switch.adguard_home_protection`>;
  var adguardHomeParentalControlSwitch: IEntity<`switch.adguard_home_parental_control`>;
  var adguardHomeSafeSearchSwitch: IEntity<`switch.adguard_home_safe_search`>;
  var adguardHomeSafeBrowsingSwitch: IEntity<`switch.adguard_home_safe_browsing`>;
  var adguardHomeFilteringSwitch: IEntity<`switch.adguard_home_filtering`>;
  var adguardHomeQueryLogSwitch: IEntity<`switch.adguard_home_query_log`>;
  var automationWakeUpSwitch: IEntity<`switch.automation_wake_up`>;
  var automationLeavingHomeSwitch: IEntity<`switch.automation_leaving_home`>;
  var tumbleDryerSmartPlugSwitch: IEntity<`switch.tumble_dryer_smart_plug`>;
  var tumbleDryerSmartPlugAutoOffEnabledSwitch: IEntity<`switch.tumble_dryer_smart_plug_auto_off_enabled`>;
  var tumbleDryerSmartPlugAutoUpdateEnabledSwitch: IEntity<`switch.tumble_dryer_smart_plug_auto_update_enabled`>;
  var tumbleDryerSmartPlugLedSwitch: IEntity<`switch.tumble_dryer_smart_plug_led`>;
  var sonosArcUltraCrossfadeSwitch: IEntity<`switch.sonos_arc_ultra_crossfade`>;
  var sonosArcUltraLoudnessSwitch: IEntity<`switch.sonos_arc_ultra_loudness`>;
  var sonosArcUltraSurroundMusicFullVolumeSwitch: IEntity<`switch.sonos_arc_ultra_surround_music_full_volume`>;
  var sonosArcUltraNightSoundSwitch: IEntity<`switch.sonos_arc_ultra_night_sound`>;
  var sonosArcUltraSpeechEnhancementSwitch: IEntity<`switch.sonos_arc_ultra_speech_enhancement`>;
  var sonosArcUltraSurroundEnabledSwitch: IEntity<`switch.sonos_arc_ultra_surround_enabled`>;
  var bedroomSpeakerCrossfadeSwitch: IEntity<`switch.bedroom_speaker_crossfade`>;
  var bedroomSpeakerLoudnessSwitch: IEntity<`switch.bedroom_speaker_loudness`>;
  var bathroomMotionSensorLedIndicationSwitch: IEntity<`switch.bathroom_motion_sensor_led_indication`>;
  var hallwayMotionSensorLedIndicationSwitch: IEntity<`switch.hallway_motion_sensor_led_indication`>;
  var zigbee2mqttBridgePermitJoinSwitch: IEntity<`switch.zigbee2mqtt_bridge_permit_join`>;
  var benSSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_do_not_disturb_switch`>;
  var benSSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_shuffle_switch`>;
  var benSSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_repeat_switch`>;
  var bedroomSpeakerDoNotDisturbSwitchSwitch: IEntity<`switch.bedroom_speaker_do_not_disturb_switch`>;
  var bedroomSpeakerShuffleSwitchSwitch: IEntity<`switch.bedroom_speaker_shuffle_switch`>;
  var bedroomSpeakerRepeatSwitchSwitch: IEntity<`switch.bedroom_speaker_repeat_switch`>;
  var officeDoNotDisturbSwitchSwitch: IEntity<`switch.office_do_not_disturb_switch`>;
  var officeShuffleSwitchSwitch: IEntity<`switch.office_shuffle_switch`>;
  var officeRepeatSwitchSwitch: IEntity<`switch.office_repeat_switch`>;
  var benS_2ndSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_do_not_disturb_switch`>;
  var benS_2ndSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_shuffle_switch`>;
  var benS_2ndSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_repeat_switch`>;
  var benS_3rdSonosOneSecondEditionDoNotDisturbSwitchSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_do_not_disturb_switch`>;
  var benS_3rdSonosOneSecondEditionShuffleSwitchSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_shuffle_switch`>;
  var benS_3rdSonosOneSecondEditionRepeatSwitchSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_repeat_switch`>;
  var livingRoomDoNotDisturbSwitchSwitch: IEntity<`switch.living_room_do_not_disturb_switch`>;
  var livingRoomShuffleSwitchSwitch: IEntity<`switch.living_room_shuffle_switch`>;
  var livingRoomRepeatSwitchSwitch: IEntity<`switch.living_room_repeat_switch`>;
  var sonosArcUltraDoNotDisturbSwitchSwitch: IEntity<`switch.sonos_arc_ultra_do_not_disturb_switch`>;
  var sonosArcUltraShuffleSwitchSwitch: IEntity<`switch.sonos_arc_ultra_shuffle_switch`>;
  var sonosArcUltraRepeatSwitchSwitch: IEntity<`switch.sonos_arc_ultra_repeat_switch`>;
  var livingRoomSonosDoNotDisturbSwitchSwitch: IEntity<`switch.living_room_sonos_do_not_disturb_switch`>;
  var livingRoomSonosShuffleSwitchSwitch: IEntity<`switch.living_room_sonos_shuffle_switch`>;
  var livingRoomSonosRepeatSwitchSwitch: IEntity<`switch.living_room_sonos_repeat_switch`>;
  var thisDeviceDoNotDisturbSwitch_2Switch: IEntity<`switch.this_device_do_not_disturb_switch_2`>;
  var officeCrossfadeSwitch: IEntity<`switch.office_crossfade`>;
  var officeLoudnessSwitch: IEntity<`switch.office_loudness`>;
  var livingRoomMainTurnonSwitch: IEntity<`switch.living_room_main_turnon`>;
  var livingRoomHeatingSwitchSwitch: IEntity<`switch.living_room_heating_switch`>;
  var bedroomHeatingSwitchSwitch: IEntity<`switch.bedroom_heating_switch`>;
  var gymHeatingSwitchSwitch: IEntity<`switch.gym_heating_switch`>;
  var holidayModeSwitch: IEntity<`switch.holiday_mode`>;
  var sleepModeSwitch: IEntity<`switch.sleep_mode`>;
  var homeAssistantServerSwitch: IEntity<`switch.home_assistant_server`>;
  var homeAssistantServerAutoOffEnabledSwitch: IEntity<`switch.home_assistant_server_auto_off_enabled`>;
  var homeAssistantServerAutoUpdateEnabledSwitch: IEntity<`switch.home_assistant_server_auto_update_enabled`>;
  var homeAssistantServerLedSwitch: IEntity<`switch.home_assistant_server_led`>;
  var imacSmartPlug_2Switch: IEntity<`switch.imac_smart_plug_2`>;
  var imacSmartPlugAutoOffEnabled_2Switch: IEntity<`switch.imac_smart_plug_auto_off_enabled_2`>;
  var imacSmartPlugAutoUpdateEnabled_2Switch: IEntity<`switch.imac_smart_plug_auto_update_enabled_2`>;
  var imacSmartPlugLed_2Switch: IEntity<`switch.imac_smart_plug_led_2`>;
  var livingRoomHeaterSmartPlugSwitch: IEntity<`switch.living_room_heater_smart_plug`>;
  var livingRoomHeaterSmartPlugAutoOffEnabledSwitch: IEntity<`switch.living_room_heater_smart_plug_auto_off_enabled`>;
  var livingRoomHeaterSmartPlugAutoUpdateEnabledSwitch: IEntity<`switch.living_room_heater_smart_plug_auto_update_enabled`>;
  var livingRoomHeaterSmartPlugLedSwitch: IEntity<`switch.living_room_heater_smart_plug_led`>;
  var bedroomMotionSensorSwitch: IEntity<`switch.bedroom_motion_sensor`>;
  var livingRoomMotionSensorSwitch: IEntity<`switch.living_room_motion_sensor`>;
  var hallwayMotionSensorSwitch: IEntity<`switch.hallway_motion_sensor`>;
  var bathroomMotionSensorSwitch: IEntity<`switch.bathroom_motion_sensor`>;
  var frontDoorDoorbellMqttEventStreamSwitch: IEntity<`switch.front_door_doorbell_mqtt_event_stream`>;
  var frontDoorDoorbellMqttLiveStreamSwitch: IEntity<`switch.front_door_doorbell_mqtt_live_stream`>;
  var frontDoorDoorbellMqttMotionDetectionSwitch: IEntity<`switch.front_door_doorbell_mqtt_motion_detection`>;
  var stateTestingBinarySwitchSwitch: IEntity<`switch.state_testing_binary_switch`>;
  var goodMorningMessagePlayedSwitch: IEntity<`switch.good_morning_message_played`>;
  var livingRoomBlindsDefaultToOpenSwitch: IEntity<`switch.living_room_blinds_default_to_open`>;
  var tvModeSwitch: IEntity<`switch.tv_mode`>;
  var benIsHomeSwitch: IEntity<`switch.ben_is_home`>;
  var homeModeSwitch: IEntity<`switch.home_mode`>;
  var visitorModeSwitch: IEntity<`switch.visitor_mode`>;
  var nagModeSwitch: IEntity<`switch.nag_mode`>;
  var openBlindsSwitch: IEntity<`switch.open_blinds`>;
  var livingRoomBlindsLeftWindowSwitch: IEntity<`switch.living_room_blinds_left_window`>;
  var livingRoomBlindsLeftCentreWindowSwitch: IEntity<`switch.living_room_blinds_left_centre_window`>;
  var livingRoomBlindsRightCentreWindowSwitch: IEntity<`switch.living_room_blinds_right_centre_window`>;
  var livingRoomBlindsRightWindowSwitch: IEntity<`switch.living_room_blinds_right_window`>;
  var qbittorrentAlternativeSpeedSwitch: IEntity<`switch.qbittorrent_alternative_speed`>;
  var assistMicrophoneMuteSwitch: IEntity<`switch.assist_microphone_mute`>;
  var quetModeSwitch: IEntity<`switch.quet_mode`>;
  var quietModeSwitch: IEntity<`switch.quiet_mode`>;
  var livingRoomHeaterDiningTableSwitch: IEntity<`switch.living_room_heater_dining_table`>;
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
