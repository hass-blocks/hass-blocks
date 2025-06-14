export const mockEventData = {
  data: {
    entity_id: 'light.bed_light',
    new_state: {
      entity_id: 'light.bed_light',
      last_changed: '2016-11-26T01:37:24.265390+00:00',
      last_reported: '2016-11-26T01:37:24.265390+00:00',
      state: 'on',
      attributes: {
        rgb_color: [254, 208, 0],
        color_temp: 380,
        supported_features: 147,
        xy_color: [0.5, 0.5],
        brightness: 180,
        white_value: 200,
        friendly_name: 'Bed Light',
      },
      last_updated: '2016-11-26T01:37:24.265390+00:00',
      context: {
        id: '326ef27d19415c60c492fe330945f954',
        parent_id: null,
        user_id: '31ddb597e03147118cf8d2f8fbea5553',
      },
    },
    old_state: {
      entity_id: 'light.bed_light',
      last_changed: '2016-11-26T01:37:10.466994+00:00',
      state: 'off',
      attributes: {
        supported_features: 147,
        friendly_name: 'Bed Light',
      },
      last_updated: '2016-11-26T01:37:10.466994+00:00',
      last_reported: '2016-11-26T01:37:24.265390+00:00',
      context: {
        id: 'e4af5b117137425e97658041a0538441',
        parent_id: null,
        user_id: '31ddb597e03147118cf8d2f8fbea5553',
      },
    },
  },
  event_type: 'state_changed',
  time_fired: '2016-11-26T01:37:24.265429+00:00',
  origin: 'LOCAL',
  context: {
    id: '326ef27d19415c60c492fe330945f954',
    parent_id: null,
    user_id: '31ddb597e03147118cf8d2f8fbea5553',
  },
} as const;
