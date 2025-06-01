import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * living_room_heaters
   */
  var livingRoomHeaters: IEntity<`switch.living_room_heaters`>;
  /**
   * Adaptive Lighting Sleep Mode: Adaptive Lights
   */
  var adaptiveLightingSleepModeLivingRoom: IEntity<`switch.adaptive_lighting_sleep_mode_living_room`>;
  /**
   * Adaptive Lighting Adapt Color: Adaptive Lights
   */
  var adaptiveLightingAdaptColorLivingRoom: IEntity<`switch.adaptive_lighting_adapt_color_living_room`>;
  /**
   * Adaptive Lighting Adapt Brightness: Adaptive Lights
   */
  var adaptiveLightingAdaptBrightnessLivingRoom: IEntity<`switch.adaptive_lighting_adapt_brightness_living_room`>;
  /**
   * Adaptive Lighting
   */
  var adaptiveLightingLivingRoom: IEntity<`switch.adaptive_lighting_living_room`>;
  /**
   * Adaptive Lighting Sleep Mode: Bathroom
   */
  var adaptiveLightingSleepModeBathroom: IEntity<`switch.adaptive_lighting_sleep_mode_bathroom`>;
  /**
   * Adaptive Lighting Adapt Color: Bathroom
   */
  var adaptiveLightingAdaptColorBathroom: IEntity<`switch.adaptive_lighting_adapt_color_bathroom`>;
  /**
   * Adaptive Lighting Adapt Brightness: Bathroom
   */
  var adaptiveLightingAdaptBrightnessBathroom: IEntity<`switch.adaptive_lighting_adapt_brightness_bathroom`>;
  /**
   * Adaptive Lighting
   */
  var adaptiveLightingBathroom: IEntity<`switch.adaptive_lighting_bathroom`>;
  /**
   * Adaptive Lighting Sleep Mode: Hallway
   */
  var adaptiveLightingSleepModeHallway: IEntity<`switch.adaptive_lighting_sleep_mode_hallway`>;
  /**
   * Adaptive Lighting Adapt Color: Hallway
   */
  var adaptiveLightingAdaptColorHallway: IEntity<`switch.adaptive_lighting_adapt_color_hallway`>;
  /**
   * Adaptive Lighting Adapt Brightness: Hallway
   */
  var adaptiveLightingAdaptBrightnessHallway: IEntity<`switch.adaptive_lighting_adapt_brightness_hallway`>;
  /**
   * Adaptive Lighting
   */
  var adaptiveLightingHallway: IEntity<`switch.adaptive_lighting_hallway`>;
  /**
   * Adaptive Lighting Sleep Mode: Bedroom
   */
  var adaptiveLightingSleepModeBedroom: IEntity<`switch.adaptive_lighting_sleep_mode_bedroom`>;
  /**
   * Adaptive Lighting Adapt Color: Bedroom
   */
  var adaptiveLightingAdaptColorBedroom: IEntity<`switch.adaptive_lighting_adapt_color_bedroom`>;
  /**
   * Adaptive Lighting Adapt Brightness: Bedroom
   */
  var adaptiveLightingAdaptBrightnessBedroom: IEntity<`switch.adaptive_lighting_adapt_brightness_bedroom`>;
  /**
   * Adaptive Lighting
   */
  var adaptiveLightingBedroom: IEntity<`switch.adaptive_lighting_bedroom`>;
  /**
   * Living Room Thermostat (Training Days)
   */
  var scheduleLivingRoomThermostatTrainingDays: IEntity<`switch.schedule_living_room_thermostat_training_days`>;
  /**
   * Bedroom Thermostat (Weekend)
   */
  var scheduleBedroomThermostatWeekend: IEntity<`switch.schedule_bedroom_thermostat_weekend`>;
  /**
   * Living Room Thermostat (Weekend)
   */
  var scheduleLivingRoomThermostatWeekend: IEntity<`switch.schedule_living_room_thermostat_weekend`>;
  /**
   * Bedroom Thermostat (Weekdays)
   */
  var scheduleBedroomThermostatWeekdays: IEntity<`switch.schedule_bedroom_thermostat_weekdays`>;
  /**
   * Boiler
   */
  var scheduleBoiler: IEntity<`switch.schedule_boiler`>;
  /**
   * Living Room Thermostat (Friday)
   */
  var scheduleLivingRoomThermostatFriday: IEntity<`switch.schedule_living_room_thermostat_friday`>;
  /**
   * Living Room Thermostat (Non Training Days)
   */
  var scheduleLivingRoomThermostatNonTrainingDays: IEntity<`switch.schedule_living_room_thermostat_non_training_days`>;
  /**
   * Bedroom Heating Switch
   */
  var bedroomHeatingSwitch: IEntity<`switch.bedroom_heating_switch`>;
  /**
   * Gym Heater
   */
  var gymHeatingSwitch: IEntity<`switch.gym_heating_switch`>;
  /**
   * Sonos Alarm Pre-release
   */
  var sonosAlarmPreRelease: IEntity<`switch.sonos_alarm_pre_release`>;
  /**
   * Generic Remote Control Card Pre-release
   */
  var genericRemoteControlCardPreRelease: IEntity<`switch.generic_remote_control_card_pre_release`>;
  /**
   * TV
   */
  var livingRoomTvOn: IEntity<`switch.living_room_tv_on`>;
  /**
   * Turn on iMac
   */
  var imacProOn: IEntity<`switch.imac_pro_on`>;
  /**
   * Boiler (Boost)
   */
  var boilerBoost: IEntity<`switch.boiler_boost`>;
  /**
   * TV Heater
   */
  var tvHeater: IEntity<`switch.tv_heater`>;
  /**
   * Dining Table Heater
   */
  var diningTableHeater: IEntity<`switch.dining_table_heater`>;
  /**
   * Hallway Heater
   */
  var hallwayHeater: IEntity<`switch.hallway_heater`>;
  /**
   * Bookshelf Heater
   */
  var bookshelfHeater: IEntity<`switch.bookshelf_heater`>;
  /**
   * shellyem-A4E57CBA73F5
   */
  var shellyemA4e57cba73f5: IEntity<`switch.shellyem_a4e57cba73f5`>;
  /**
   * Front Door Motion detection
   */
  var frontDoorMotionDetection: IEntity<`switch.front_door_motion_detection`>;
  /**
   * AdGuard Home Protection
   */
  var adguardHomeProtection: IEntity<`switch.adguard_home_protection`>;
  /**
   * AdGuard Home Parental control
   */
  var adguardHomeParentalControl: IEntity<`switch.adguard_home_parental_control`>;
  /**
   * AdGuard Home Safe search
   */
  var adguardHomeSafeSearch: IEntity<`switch.adguard_home_safe_search`>;
  /**
   * AdGuard Home Safe browsing
   */
  var adguardHomeSafeBrowsing: IEntity<`switch.adguard_home_safe_browsing`>;
  /**
   * AdGuard Home Filtering
   */
  var adguardHomeFiltering: IEntity<`switch.adguard_home_filtering`>;
  /**
   * Automation: Wake up
   */
  var automationWakeUp: IEntity<`switch.automation_wake_up`>;
  /**
   * Automation: Leaving home
   */
  var automationLeavingHome: IEntity<`switch.automation_leaving_home`>;
  /**
   * AdGuard Home Query log
   */
  var adguardHomeQueryLog: IEntity<`switch.adguard_home_query_log`>;
  /**
   * qBittorrent Alternative speed
   */
  var qbittorrentAlternativeSpeed: IEntity<`switch.qbittorrent_alternative_speed`>;
  /**
   * assist microphone Mute
   */
  var assistMicrophoneMute: IEntity<`switch.assist_microphone_mute`>;
  /**
   * Tumble Dryer Smart Plug
   */
  var tumbleDryerSmartPlug: IEntity<`switch.tumble_dryer_smart_plug`>;
  /**
   * Tumble Dryer Smart Plug Auto-off enabled
   */
  var tumbleDryerSmartPlugAutoOffEnabled: IEntity<`switch.tumble_dryer_smart_plug_auto_off_enabled`>;
  /**
   * Tumble Dryer Smart Plug Auto-update enabled
   */
  var tumbleDryerSmartPlugAutoUpdateEnabled: IEntity<`switch.tumble_dryer_smart_plug_auto_update_enabled`>;
  /**
   * Tumble Dryer Smart Plug LED
   */
  var tumbleDryerSmartPlugLed: IEntity<`switch.tumble_dryer_smart_plug_led`>;
  /**
   * Bathroom Motion Sensor Led indication
   */
  var bathroomMotionSensorLedIndication: IEntity<`switch.bathroom_motion_sensor_led_indication`>;
  /**
   * Hallway Motion Sensor Led indication
   */
  var hallwayMotionSensorLedIndication: IEntity<`switch.hallway_motion_sensor_led_indication`>;
  /**
   * Zigbee2MQTT Bridge Permit join
   */
  var zigbee2mqttBridgePermitJoin: IEntity<`switch.zigbee2mqtt_bridge_permit_join`>;
  /**
   * Bedroom Speaker Crossfade
   */
  var bedroomSpeakerCrossfade: IEntity<`switch.bedroom_speaker_crossfade`>;
  /**
   * Bedroom Speaker Loudness
   */
  var bedroomSpeakerLoudness: IEntity<`switch.bedroom_speaker_loudness`>;
  /**
   * Sonos Arc Ultra Crossfade
   */
  var sonosArcUltraCrossfade: IEntity<`switch.sonos_arc_ultra_crossfade`>;
  /**
   * Sonos Arc Ultra Loudness
   */
  var sonosArcUltraLoudness: IEntity<`switch.sonos_arc_ultra_loudness`>;
  /**
   * Sonos Arc Ultra Surround music full volume
   */
  var sonosArcUltraSurroundMusicFullVolume: IEntity<`switch.sonos_arc_ultra_surround_music_full_volume`>;
  /**
   * Sonos Arc Ultra Night sound
   */
  var sonosArcUltraNightSound: IEntity<`switch.sonos_arc_ultra_night_sound`>;
  /**
   * Sonos Arc Ultra Speech enhancement
   */
  var sonosArcUltraSpeechEnhancement: IEntity<`switch.sonos_arc_ultra_speech_enhancement`>;
  /**
   * Sonos Arc Ultra Surround enabled
   */
  var sonosArcUltraSurroundEnabled: IEntity<`switch.sonos_arc_ultra_surround_enabled`>;
  /**
   * Bedroom Sonos One do not disturb switch
   */
  var benSSonosOneSecondEditionDoNotDisturbSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_do_not_disturb_switch`>;
  /**
   * Bedroom Sonos One shuffle switch
   */
  var benSSonosOneSecondEditionShuffleSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_shuffle_switch`>;
  /**
   * Bedroom Sonos One repeat switch
   */
  var benSSonosOneSecondEditionRepeatSwitch: IEntity<`switch.ben_s_sonos_one_second_edition_repeat_switch`>;
  /**
   * Bedroom Speaker do not disturb switch
   */
  var bedroomSpeakerDoNotDisturbSwitch: IEntity<`switch.bedroom_speaker_do_not_disturb_switch`>;
  /**
   * Bedroom Speaker shuffle switch
   */
  var bedroomSpeakerShuffleSwitch: IEntity<`switch.bedroom_speaker_shuffle_switch`>;
  /**
   * Bedroom Speaker repeat switch
   */
  var bedroomSpeakerRepeatSwitch: IEntity<`switch.bedroom_speaker_repeat_switch`>;
  /**
   * Office do not disturb switch
   */
  var officeDoNotDisturbSwitch: IEntity<`switch.office_do_not_disturb_switch`>;
  /**
   * Office shuffle switch
   */
  var officeShuffleSwitch: IEntity<`switch.office_shuffle_switch`>;
  /**
   * Office repeat switch
   */
  var officeRepeatSwitch: IEntity<`switch.office_repeat_switch`>;
  /**
   * Gym Sonos One do not disturb switch
   */
  var benS_2ndSonosOneSecondEditionDoNotDisturbSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_do_not_disturb_switch`>;
  /**
   * Gym Sonos One shuffle switch
   */
  var benS_2ndSonosOneSecondEditionShuffleSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_shuffle_switch`>;
  /**
   * Gym Sonos One repeat switch
   */
  var benS_2ndSonosOneSecondEditionRepeatSwitch: IEntity<`switch.ben_s_2nd_sonos_one_second_edition_repeat_switch`>;
  /**
   * Living Room Sonos One do not disturb switch
   */
  var benS_3rdSonosOneSecondEditionDoNotDisturbSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_do_not_disturb_switch`>;
  /**
   * Living Room Sonos One shuffle switch
   */
  var benS_3rdSonosOneSecondEditionShuffleSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_shuffle_switch`>;
  /**
   * Living Room Sonos One repeat switch
   */
  var benS_3rdSonosOneSecondEditionRepeatSwitch: IEntity<`switch.ben_s_3rd_sonos_one_second_edition_repeat_switch`>;
  /**
   * Living Room do not disturb switch
   */
  var livingRoomDoNotDisturbSwitch: IEntity<`switch.living_room_do_not_disturb_switch`>;
  /**
   * Living Room shuffle switch
   */
  var livingRoomShuffleSwitch: IEntity<`switch.living_room_shuffle_switch`>;
  /**
   * Living Room repeat switch
   */
  var livingRoomRepeatSwitch: IEntity<`switch.living_room_repeat_switch`>;
  /**
   * Sonos Arc Ultra do not disturb switch
   */
  var sonosArcUltraDoNotDisturbSwitch: IEntity<`switch.sonos_arc_ultra_do_not_disturb_switch`>;
  /**
   * Sonos Arc Ultra shuffle switch
   */
  var sonosArcUltraShuffleSwitch: IEntity<`switch.sonos_arc_ultra_shuffle_switch`>;
  /**
   * Sonos Arc Ultra repeat switch
   */
  var sonosArcUltraRepeatSwitch: IEntity<`switch.sonos_arc_ultra_repeat_switch`>;
  /**
   * Living Room Sonos do not disturb switch
   */
  var livingRoomSonosDoNotDisturbSwitch: IEntity<`switch.living_room_sonos_do_not_disturb_switch`>;
  /**
   * Living Room Sonos shuffle switch
   */
  var livingRoomSonosShuffleSwitch: IEntity<`switch.living_room_sonos_shuffle_switch`>;
  /**
   * Living Room Sonos repeat switch
   */
  var livingRoomSonosRepeatSwitch: IEntity<`switch.living_room_sonos_repeat_switch`>;
  /**
   * This Device do not disturb switch
   */
  var thisDeviceDoNotDisturbSwitch_2: IEntity<`switch.this_device_do_not_disturb_switch_2`>;
  /**
   * Crossfade
   */
  var officeCrossfade: IEntity<`switch.office_crossfade`>;
  /**
   * Loudness
   */
  var officeLoudness: IEntity<`switch.office_loudness`>;
  /**
   * living_room_main_turnon
   */
  var livingRoomMainTurnon: IEntity<`switch.living_room_main_turnon`>;
  /**
   * Living Room Heating Switch
   */
  var livingRoomHeatingSwitch: IEntity<`switch.living_room_heating_switch`>;
  /**
   * Boiler
   */
  var boiler: IEntity<`switch.boiler`>;
  /**
   * Holiday Mode
   */
  var holidayMode: IEntity<`switch.holiday_mode`>;
  /**
   * Sleep mode
   */
  var sleepMode: IEntity<`switch.sleep_mode`>;
  var homeAssistantServer: IEntity<`switch.home_assistant_server`>;
  /**
   * Auto-off enabled
   */
  var homeAssistantServerAutoOffEnabled: IEntity<`switch.home_assistant_server_auto_off_enabled`>;
  /**
   * Auto-update enabled
   */
  var homeAssistantServerAutoUpdateEnabled: IEntity<`switch.home_assistant_server_auto_update_enabled`>;
  /**
   * LED
   */
  var homeAssistantServerLed: IEntity<`switch.home_assistant_server_led`>;
  var imacSmartPlug_2: IEntity<`switch.imac_smart_plug_2`>;
  /**
   * Auto-off enabled
   */
  var imacSmartPlugAutoOffEnabled_2: IEntity<`switch.imac_smart_plug_auto_off_enabled_2`>;
  /**
   * Auto-update enabled
   */
  var imacSmartPlugAutoUpdateEnabled_2: IEntity<`switch.imac_smart_plug_auto_update_enabled_2`>;
  /**
   * LED
   */
  var imacSmartPlugLed_2: IEntity<`switch.imac_smart_plug_led_2`>;
  var livingRoomHeaterSmartPlug: IEntity<`switch.living_room_heater_smart_plug`>;
  /**
   * Auto-off enabled
   */
  var livingRoomHeaterSmartPlugAutoOffEnabled: IEntity<`switch.living_room_heater_smart_plug_auto_off_enabled`>;
  /**
   * Auto-update enabled
   */
  var livingRoomHeaterSmartPlugAutoUpdateEnabled: IEntity<`switch.living_room_heater_smart_plug_auto_update_enabled`>;
  /**
   * LED
   */
  var livingRoomHeaterSmartPlugLed: IEntity<`switch.living_room_heater_smart_plug_led`>;
  /**
   * Bedroom Motion Sensor
   */
  var bedroomMotionSensor: IEntity<`switch.bedroom_motion_sensor`>;
  /**
   * Living room motion sensor
   */
  var livingRoomMotionSensor: IEntity<`switch.living_room_motion_sensor`>;
  /**
   * Hallway motion sensor
   */
  var hallwayMotionSensor: IEntity<`switch.hallway_motion_sensor`>;
  /**
   * Bathroom motion sensor
   */
  var bathroomMotionSensor: IEntity<`switch.bathroom_motion_sensor`>;
  /**
   * Front Door Doorbell MQTT Event Stream
   */
  var frontDoorDoorbellMqttEventStream: IEntity<`switch.front_door_doorbell_mqtt_event_stream`>;
  /**
   * Front Door Doorbell MQTT Live Stream
   */
  var frontDoorDoorbellMqttLiveStream: IEntity<`switch.front_door_doorbell_mqtt_live_stream`>;
  /**
   * Front Door Doorbell MQTT Motion Detection
   */
  var frontDoorDoorbellMqttMotionDetection: IEntity<`switch.front_door_doorbell_mqtt_motion_detection`>;
  /**
   * State Testing Binary Switch
   */
  var stateTestingBinarySwitch: IEntity<`switch.state_testing_binary_switch`>;
  /**
   * Good morning message played
   */
  var goodMorningMessagePlayed: IEntity<`switch.good_morning_message_played`>;
  /**
   * Living room blinds default to open
   */
  var livingRoomBlindsDefaultToOpen: IEntity<`switch.living_room_blinds_default_to_open`>;
  /**
   * TV Mode
   */
  var tvMode: IEntity<`switch.tv_mode`>;
  /**
   * Ben is home
   */
  var benIsHome: IEntity<`switch.ben_is_home`>;
  /**
   * Home mode
   */
  var homeMode: IEntity<`switch.home_mode`>;
  /**
   * Visitor Mode
   */
  var visitorMode: IEntity<`switch.visitor_mode`>;
  /**
   * Nag mode
   */
  var nagMode: IEntity<`switch.nag_mode`>;
  /**
   * Open Blinds
   */
  var openBlinds: IEntity<`switch.open_blinds`>;
  /**
   * Living Room Blinds (Left Window)
   */
  var livingRoomBlindsLeftWindow: IEntity<`switch.living_room_blinds_left_window`>;
  /**
   * Living Room Blinds (Left Centre Window)
   */
  var livingRoomBlindsLeftCentreWindow: IEntity<`switch.living_room_blinds_left_centre_window`>;
  /**
   * Living Room Blinds (Right Centre Window)
   */
  var livingRoomBlindsRightCentreWindow: IEntity<`switch.living_room_blinds_right_centre_window`>;
  /**
   * Living Room Blinds (Right Window)
   */
  var livingRoomBlindsRightWindow: IEntity<`switch.living_room_blinds_right_window`>;
  /**
   * Quet mode
   */
  var quetMode: IEntity<`switch.quet_mode`>;
  /**
   * Quiet Mode
   */
  var quietMode: IEntity<`switch.quiet_mode`>;
  /**
   * MQTT Switch
   */
  var myTestingSwitchMqttSwitch: IEntity<`switch.my_testing_switch_mqtt_switch`>;
  /**
   * MQTT Switch
   */
  var livingroomMotionSensor: IEntity<`switch.livingroom_motion_sensor`>;
  /**
   * MQTT Switch
   */
  var livingRoomMotionLights: IEntity<`switch.living_room_motion_lights`>;
  /**
   * MQTT Switch
   */
  var bedroomMotionLights: IEntity<`switch.bedroom_motion_lights`>;
  /**
   * MQTT Switch
   */
  var hallwayMotionLights: IEntity<`switch.hallway_motion_lights`>;
  /**
   * MQTT Switch
   */
  var bathroomMotionLights: IEntity<`switch.bathroom_motion_lights`>;
}

globalThis.livingRoomHeaters = entity(
  'switch.living_room_heaters',
  'living_room_heaters',
);
globalThis.adaptiveLightingSleepModeLivingRoom = entity(
  'switch.adaptive_lighting_sleep_mode_living_room',
  'Adaptive Lighting Sleep Mode: Adaptive Lights',
);
globalThis.adaptiveLightingAdaptColorLivingRoom = entity(
  'switch.adaptive_lighting_adapt_color_living_room',
  'Adaptive Lighting Adapt Color: Adaptive Lights',
);
globalThis.adaptiveLightingAdaptBrightnessLivingRoom = entity(
  'switch.adaptive_lighting_adapt_brightness_living_room',
  'Adaptive Lighting Adapt Brightness: Adaptive Lights',
);
globalThis.adaptiveLightingLivingRoom = entity(
  'switch.adaptive_lighting_living_room',
  'Adaptive Lighting',
);
globalThis.adaptiveLightingSleepModeBathroom = entity(
  'switch.adaptive_lighting_sleep_mode_bathroom',
  'Adaptive Lighting Sleep Mode: Bathroom',
);
globalThis.adaptiveLightingAdaptColorBathroom = entity(
  'switch.adaptive_lighting_adapt_color_bathroom',
  'Adaptive Lighting Adapt Color: Bathroom',
);
globalThis.adaptiveLightingAdaptBrightnessBathroom = entity(
  'switch.adaptive_lighting_adapt_brightness_bathroom',
  'Adaptive Lighting Adapt Brightness: Bathroom',
);
globalThis.adaptiveLightingBathroom = entity(
  'switch.adaptive_lighting_bathroom',
  'Adaptive Lighting',
);
globalThis.adaptiveLightingSleepModeHallway = entity(
  'switch.adaptive_lighting_sleep_mode_hallway',
  'Adaptive Lighting Sleep Mode: Hallway',
);
globalThis.adaptiveLightingAdaptColorHallway = entity(
  'switch.adaptive_lighting_adapt_color_hallway',
  'Adaptive Lighting Adapt Color: Hallway',
);
globalThis.adaptiveLightingAdaptBrightnessHallway = entity(
  'switch.adaptive_lighting_adapt_brightness_hallway',
  'Adaptive Lighting Adapt Brightness: Hallway',
);
globalThis.adaptiveLightingHallway = entity(
  'switch.adaptive_lighting_hallway',
  'Adaptive Lighting',
);
globalThis.adaptiveLightingSleepModeBedroom = entity(
  'switch.adaptive_lighting_sleep_mode_bedroom',
  'Adaptive Lighting Sleep Mode: Bedroom',
);
globalThis.adaptiveLightingAdaptColorBedroom = entity(
  'switch.adaptive_lighting_adapt_color_bedroom',
  'Adaptive Lighting Adapt Color: Bedroom',
);
globalThis.adaptiveLightingAdaptBrightnessBedroom = entity(
  'switch.adaptive_lighting_adapt_brightness_bedroom',
  'Adaptive Lighting Adapt Brightness: Bedroom',
);
globalThis.adaptiveLightingBedroom = entity(
  'switch.adaptive_lighting_bedroom',
  'Adaptive Lighting',
);
globalThis.scheduleLivingRoomThermostatTrainingDays = entity(
  'switch.schedule_living_room_thermostat_training_days',
  'Living Room Thermostat (Training Days)',
);
globalThis.scheduleBedroomThermostatWeekend = entity(
  'switch.schedule_bedroom_thermostat_weekend',
  'Bedroom Thermostat (Weekend)',
);
globalThis.scheduleLivingRoomThermostatWeekend = entity(
  'switch.schedule_living_room_thermostat_weekend',
  'Living Room Thermostat (Weekend)',
);
globalThis.scheduleBedroomThermostatWeekdays = entity(
  'switch.schedule_bedroom_thermostat_weekdays',
  'Bedroom Thermostat (Weekdays)',
);
globalThis.scheduleBoiler = entity('switch.schedule_boiler', 'Boiler');
globalThis.scheduleLivingRoomThermostatFriday = entity(
  'switch.schedule_living_room_thermostat_friday',
  'Living Room Thermostat (Friday)',
);
globalThis.scheduleLivingRoomThermostatNonTrainingDays = entity(
  'switch.schedule_living_room_thermostat_non_training_days',
  'Living Room Thermostat (Non Training Days)',
);
globalThis.bedroomHeatingSwitch = entity(
  'switch.bedroom_heating_switch',
  'Bedroom Heating Switch',
);
globalThis.gymHeatingSwitch = entity('switch.gym_heating_switch', 'Gym Heater');
globalThis.sonosAlarmPreRelease = entity(
  'switch.sonos_alarm_pre_release',
  'Sonos Alarm Pre-release',
);
globalThis.genericRemoteControlCardPreRelease = entity(
  'switch.generic_remote_control_card_pre_release',
  'Generic Remote Control Card Pre-release',
);
globalThis.livingRoomTvOn = entity('switch.living_room_tv_on', 'TV');
globalThis.imacProOn = entity('switch.imac_pro_on', 'Turn on iMac');
globalThis.boilerBoost = entity('switch.boiler_boost', 'Boiler (Boost)');
globalThis.tvHeater = entity('switch.tv_heater', 'TV Heater');
globalThis.diningTableHeater = entity(
  'switch.dining_table_heater',
  'Dining Table Heater',
);
globalThis.hallwayHeater = entity('switch.hallway_heater', 'Hallway Heater');
globalThis.bookshelfHeater = entity(
  'switch.bookshelf_heater',
  'Bookshelf Heater',
);
globalThis.shellyemA4e57cba73f5 = entity(
  'switch.shellyem_a4e57cba73f5',
  'shellyem-A4E57CBA73F5',
);
globalThis.frontDoorMotionDetection = entity(
  'switch.front_door_motion_detection',
  'Front Door Motion detection',
);
globalThis.adguardHomeProtection = entity(
  'switch.adguard_home_protection',
  'AdGuard Home Protection',
);
globalThis.adguardHomeParentalControl = entity(
  'switch.adguard_home_parental_control',
  'AdGuard Home Parental control',
);
globalThis.adguardHomeSafeSearch = entity(
  'switch.adguard_home_safe_search',
  'AdGuard Home Safe search',
);
globalThis.adguardHomeSafeBrowsing = entity(
  'switch.adguard_home_safe_browsing',
  'AdGuard Home Safe browsing',
);
globalThis.adguardHomeFiltering = entity(
  'switch.adguard_home_filtering',
  'AdGuard Home Filtering',
);
globalThis.automationWakeUp = entity(
  'switch.automation_wake_up',
  'Automation: Wake up',
);
globalThis.automationLeavingHome = entity(
  'switch.automation_leaving_home',
  'Automation: Leaving home',
);
globalThis.adguardHomeQueryLog = entity(
  'switch.adguard_home_query_log',
  'AdGuard Home Query log',
);
globalThis.qbittorrentAlternativeSpeed = entity(
  'switch.qbittorrent_alternative_speed',
  'qBittorrent Alternative speed',
);
globalThis.assistMicrophoneMute = entity(
  'switch.assist_microphone_mute',
  'assist microphone Mute',
);
globalThis.tumbleDryerSmartPlug = entity(
  'switch.tumble_dryer_smart_plug',
  'Tumble Dryer Smart Plug',
);
globalThis.tumbleDryerSmartPlugAutoOffEnabled = entity(
  'switch.tumble_dryer_smart_plug_auto_off_enabled',
  'Tumble Dryer Smart Plug Auto-off enabled',
);
globalThis.tumbleDryerSmartPlugAutoUpdateEnabled = entity(
  'switch.tumble_dryer_smart_plug_auto_update_enabled',
  'Tumble Dryer Smart Plug Auto-update enabled',
);
globalThis.tumbleDryerSmartPlugLed = entity(
  'switch.tumble_dryer_smart_plug_led',
  'Tumble Dryer Smart Plug LED',
);
globalThis.bathroomMotionSensorLedIndication = entity(
  'switch.bathroom_motion_sensor_led_indication',
  'Bathroom Motion Sensor Led indication',
);
globalThis.hallwayMotionSensorLedIndication = entity(
  'switch.hallway_motion_sensor_led_indication',
  'Hallway Motion Sensor Led indication',
);
globalThis.zigbee2mqttBridgePermitJoin = entity(
  'switch.zigbee2mqtt_bridge_permit_join',
  'Zigbee2MQTT Bridge Permit join',
);
globalThis.bedroomSpeakerCrossfade = entity(
  'switch.bedroom_speaker_crossfade',
  'Bedroom Speaker Crossfade',
);
globalThis.bedroomSpeakerLoudness = entity(
  'switch.bedroom_speaker_loudness',
  'Bedroom Speaker Loudness',
);
globalThis.sonosArcUltraCrossfade = entity(
  'switch.sonos_arc_ultra_crossfade',
  'Sonos Arc Ultra Crossfade',
);
globalThis.sonosArcUltraLoudness = entity(
  'switch.sonos_arc_ultra_loudness',
  'Sonos Arc Ultra Loudness',
);
globalThis.sonosArcUltraSurroundMusicFullVolume = entity(
  'switch.sonos_arc_ultra_surround_music_full_volume',
  'Sonos Arc Ultra Surround music full volume',
);
globalThis.sonosArcUltraNightSound = entity(
  'switch.sonos_arc_ultra_night_sound',
  'Sonos Arc Ultra Night sound',
);
globalThis.sonosArcUltraSpeechEnhancement = entity(
  'switch.sonos_arc_ultra_speech_enhancement',
  'Sonos Arc Ultra Speech enhancement',
);
globalThis.sonosArcUltraSurroundEnabled = entity(
  'switch.sonos_arc_ultra_surround_enabled',
  'Sonos Arc Ultra Surround enabled',
);
globalThis.benSSonosOneSecondEditionDoNotDisturbSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_do_not_disturb_switch',
  'Bedroom Sonos One do not disturb switch',
);
globalThis.benSSonosOneSecondEditionShuffleSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_shuffle_switch',
  'Bedroom Sonos One shuffle switch',
);
globalThis.benSSonosOneSecondEditionRepeatSwitch = entity(
  'switch.ben_s_sonos_one_second_edition_repeat_switch',
  'Bedroom Sonos One repeat switch',
);
globalThis.bedroomSpeakerDoNotDisturbSwitch = entity(
  'switch.bedroom_speaker_do_not_disturb_switch',
  'Bedroom Speaker do not disturb switch',
);
globalThis.bedroomSpeakerShuffleSwitch = entity(
  'switch.bedroom_speaker_shuffle_switch',
  'Bedroom Speaker shuffle switch',
);
globalThis.bedroomSpeakerRepeatSwitch = entity(
  'switch.bedroom_speaker_repeat_switch',
  'Bedroom Speaker repeat switch',
);
globalThis.officeDoNotDisturbSwitch = entity(
  'switch.office_do_not_disturb_switch',
  'Office do not disturb switch',
);
globalThis.officeShuffleSwitch = entity(
  'switch.office_shuffle_switch',
  'Office shuffle switch',
);
globalThis.officeRepeatSwitch = entity(
  'switch.office_repeat_switch',
  'Office repeat switch',
);
globalThis.benS_2ndSonosOneSecondEditionDoNotDisturbSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_do_not_disturb_switch',
  'Gym Sonos One do not disturb switch',
);
globalThis.benS_2ndSonosOneSecondEditionShuffleSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_shuffle_switch',
  'Gym Sonos One shuffle switch',
);
globalThis.benS_2ndSonosOneSecondEditionRepeatSwitch = entity(
  'switch.ben_s_2nd_sonos_one_second_edition_repeat_switch',
  'Gym Sonos One repeat switch',
);
globalThis.benS_3rdSonosOneSecondEditionDoNotDisturbSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_do_not_disturb_switch',
  'Living Room Sonos One do not disturb switch',
);
globalThis.benS_3rdSonosOneSecondEditionShuffleSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_shuffle_switch',
  'Living Room Sonos One shuffle switch',
);
globalThis.benS_3rdSonosOneSecondEditionRepeatSwitch = entity(
  'switch.ben_s_3rd_sonos_one_second_edition_repeat_switch',
  'Living Room Sonos One repeat switch',
);
globalThis.livingRoomDoNotDisturbSwitch = entity(
  'switch.living_room_do_not_disturb_switch',
  'Living Room do not disturb switch',
);
globalThis.livingRoomShuffleSwitch = entity(
  'switch.living_room_shuffle_switch',
  'Living Room shuffle switch',
);
globalThis.livingRoomRepeatSwitch = entity(
  'switch.living_room_repeat_switch',
  'Living Room repeat switch',
);
globalThis.sonosArcUltraDoNotDisturbSwitch = entity(
  'switch.sonos_arc_ultra_do_not_disturb_switch',
  'Sonos Arc Ultra do not disturb switch',
);
globalThis.sonosArcUltraShuffleSwitch = entity(
  'switch.sonos_arc_ultra_shuffle_switch',
  'Sonos Arc Ultra shuffle switch',
);
globalThis.sonosArcUltraRepeatSwitch = entity(
  'switch.sonos_arc_ultra_repeat_switch',
  'Sonos Arc Ultra repeat switch',
);
globalThis.livingRoomSonosDoNotDisturbSwitch = entity(
  'switch.living_room_sonos_do_not_disturb_switch',
  'Living Room Sonos do not disturb switch',
);
globalThis.livingRoomSonosShuffleSwitch = entity(
  'switch.living_room_sonos_shuffle_switch',
  'Living Room Sonos shuffle switch',
);
globalThis.livingRoomSonosRepeatSwitch = entity(
  'switch.living_room_sonos_repeat_switch',
  'Living Room Sonos repeat switch',
);
globalThis.thisDeviceDoNotDisturbSwitch_2 = entity(
  'switch.this_device_do_not_disturb_switch_2',
  'This Device do not disturb switch',
);
globalThis.officeCrossfade = entity('switch.office_crossfade', 'Crossfade');
globalThis.officeLoudness = entity('switch.office_loudness', 'Loudness');
globalThis.livingRoomMainTurnon = entity(
  'switch.living_room_main_turnon',
  'living_room_main_turnon',
);
globalThis.livingRoomHeatingSwitch = entity(
  'switch.living_room_heating_switch',
  'Living Room Heating Switch',
);
globalThis.boiler = entity('switch.boiler', 'Boiler');
globalThis.holidayMode = entity('switch.holiday_mode', 'Holiday Mode');
globalThis.sleepMode = entity('switch.sleep_mode', 'Sleep mode');
globalThis.homeAssistantServer = entity('switch.home_assistant_server');
globalThis.homeAssistantServerAutoOffEnabled = entity(
  'switch.home_assistant_server_auto_off_enabled',
  'Auto-off enabled',
);
globalThis.homeAssistantServerAutoUpdateEnabled = entity(
  'switch.home_assistant_server_auto_update_enabled',
  'Auto-update enabled',
);
globalThis.homeAssistantServerLed = entity(
  'switch.home_assistant_server_led',
  'LED',
);
globalThis.imacSmartPlug_2 = entity('switch.imac_smart_plug_2');
globalThis.imacSmartPlugAutoOffEnabled_2 = entity(
  'switch.imac_smart_plug_auto_off_enabled_2',
  'Auto-off enabled',
);
globalThis.imacSmartPlugAutoUpdateEnabled_2 = entity(
  'switch.imac_smart_plug_auto_update_enabled_2',
  'Auto-update enabled',
);
globalThis.imacSmartPlugLed_2 = entity('switch.imac_smart_plug_led_2', 'LED');
globalThis.livingRoomHeaterSmartPlug = entity(
  'switch.living_room_heater_smart_plug',
);
globalThis.livingRoomHeaterSmartPlugAutoOffEnabled = entity(
  'switch.living_room_heater_smart_plug_auto_off_enabled',
  'Auto-off enabled',
);
globalThis.livingRoomHeaterSmartPlugAutoUpdateEnabled = entity(
  'switch.living_room_heater_smart_plug_auto_update_enabled',
  'Auto-update enabled',
);
globalThis.livingRoomHeaterSmartPlugLed = entity(
  'switch.living_room_heater_smart_plug_led',
  'LED',
);
globalThis.bedroomMotionSensor = entity(
  'switch.bedroom_motion_sensor',
  'Bedroom Motion Sensor',
);
globalThis.livingRoomMotionSensor = entity(
  'switch.living_room_motion_sensor',
  'Living room motion sensor',
);
globalThis.hallwayMotionSensor = entity(
  'switch.hallway_motion_sensor',
  'Hallway motion sensor',
);
globalThis.bathroomMotionSensor = entity(
  'switch.bathroom_motion_sensor',
  'Bathroom motion sensor',
);
globalThis.frontDoorDoorbellMqttEventStream = entity(
  'switch.front_door_doorbell_mqtt_event_stream',
  'Front Door Doorbell MQTT Event Stream',
);
globalThis.frontDoorDoorbellMqttLiveStream = entity(
  'switch.front_door_doorbell_mqtt_live_stream',
  'Front Door Doorbell MQTT Live Stream',
);
globalThis.frontDoorDoorbellMqttMotionDetection = entity(
  'switch.front_door_doorbell_mqtt_motion_detection',
  'Front Door Doorbell MQTT Motion Detection',
);
globalThis.stateTestingBinarySwitch = entity(
  'switch.state_testing_binary_switch',
  'State Testing Binary Switch',
);
globalThis.goodMorningMessagePlayed = entity(
  'switch.good_morning_message_played',
  'Good morning message played',
);
globalThis.livingRoomBlindsDefaultToOpen = entity(
  'switch.living_room_blinds_default_to_open',
  'Living room blinds default to open',
);
globalThis.tvMode = entity('switch.tv_mode', 'TV Mode');
globalThis.benIsHome = entity('switch.ben_is_home', 'Ben is home');
globalThis.homeMode = entity('switch.home_mode', 'Home mode');
globalThis.visitorMode = entity('switch.visitor_mode', 'Visitor Mode');
globalThis.nagMode = entity('switch.nag_mode', 'Nag mode');
globalThis.openBlinds = entity('switch.open_blinds', 'Open Blinds');
globalThis.livingRoomBlindsLeftWindow = entity(
  'switch.living_room_blinds_left_window',
  'Living Room Blinds (Left Window)',
);
globalThis.livingRoomBlindsLeftCentreWindow = entity(
  'switch.living_room_blinds_left_centre_window',
  'Living Room Blinds (Left Centre Window)',
);
globalThis.livingRoomBlindsRightCentreWindow = entity(
  'switch.living_room_blinds_right_centre_window',
  'Living Room Blinds (Right Centre Window)',
);
globalThis.livingRoomBlindsRightWindow = entity(
  'switch.living_room_blinds_right_window',
  'Living Room Blinds (Right Window)',
);
globalThis.quetMode = entity('switch.quet_mode', 'Quet mode');
globalThis.quietMode = entity('switch.quiet_mode', 'Quiet Mode');
globalThis.myTestingSwitchMqttSwitch = entity(
  'switch.my_testing_switch_mqtt_switch',
  'MQTT Switch',
);
globalThis.livingroomMotionSensor = entity(
  'switch.livingroom_motion_sensor',
  'MQTT Switch',
);
globalThis.livingRoomMotionLights = entity(
  'switch.living_room_motion_lights',
  'MQTT Switch',
);
globalThis.bedroomMotionLights = entity(
  'switch.bedroom_motion_lights',
  'MQTT Switch',
);
globalThis.hallwayMotionLights = entity(
  'switch.hallway_motion_lights',
  'MQTT Switch',
);
globalThis.bathroomMotionLights = entity(
  'switch.bathroom_motion_lights',
  'MQTT Switch',
);
