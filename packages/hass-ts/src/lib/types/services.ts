/**
 * A service that has been registered with Home Assistant
 *
 * @public
 */
export interface Service {
  /**
   * The name of the service
   */
  name: string;
  /**
   * A description of the service
   */
  description: string;
  /**
   * Zero or more fields that can be supplied with the service
   */
  fields: ServiceFields;

  /**
   * The Home Assistant entity or device that this service call targets
   */
  target?: { entity?: EntityTarget[]; device?: DeviceTarget[] };

  /**
   * Whether this service returns a response
   */
  response?: {
    /**
     * Whether the response is optional or not
     */
    optional: boolean;
  };
}

/**
 * @public
 *
 * Field that represents a numeric value
 */
export interface NumberSelector {
  /**
   * Configuration of the number selector
   */
  number: {
    mode?: string;
    /**
     * The minimum value for the numeric value
     */
    min: number;

    /**
     * The maximum value for the numeric value
     */
    max: number;

    /**
     * The minimum increment that the numeric value can be changed by
     */
    step: number;

    /**
     * The minimum increment that the numeric value can be changed by
     */
    unit_of_measurement?: string;
  };
}

/**
 * @public
 *
 * Field that represents selection from a discrete set of values
 */
export interface SelectSelector {
  options: string[];
  translation_key?: string;
}

/**
 * @public
 *
 * Field that represents free text entry
 */
export interface TextSelector {
  text: null;
}

/**
 * @public
 *
 * Field that represents a boolean value
 */
export interface BooleanSelector {
  boolean: null;
}

/**
 * @public
 *
 * A target that identifies a particular device
 */
export interface DeviceTarget {
  /**
   * If supplied, the target only accepts devices from the specified integration
   */
  filter: {
    integration: string;
  };
}

/**
 * @public
 *
 * A field that represents a specific device
 */
export interface DeviceSelector {
  device: DeviceTarget;
}

/**
 * @public
 *
 * A target that represents a specific entity
 */
export interface EntityTarget {
  /**
   * If supplied, the target can only identify entities attached to this integration
   */
  integration: string;
  /**
   * If supplied, the target can only identify entities attached to this domain
   */
  domain: string | string[];

  /**
   * If supplied, the target can only identify entities with these features
   */
  supported_feature: string[];

  /**
   * If supplied, indicates that this field can target multiple entities
   */
  multiple: boolean;
}

/**
 * @public
 *
 * A field that represents a Home Assistant entity
 */
export interface EntitySelector {
  /**
   * The entity that is being targeted
   */
  entity: EntityTarget;
}

/**
 * @public
 *
 * A field that represents a template that will be rendered by home assistant
 */
export interface TemplateSelector {
  template: null;
}

/**
 * @public
 *
 * A field containing an object with an arbitrary shape
 */
export interface ObjectSelector {
  object: null;
}

/**
 * @public
 *
 * A field containing a time value
 */
export interface TimeSelector {
  time: null;
}

/**
 * @public
 *
 * A field that can be supplied for a specific service
 */
export interface ServiceField {
  /**
   * The name of the field
   */
  name: string;

  /**
   * A default value
   */
  default?: string | boolean;

  /**
   * Description of the field
   */
  description?: string;

  /**
   * Whether the field is required or not
   */
  required?: boolean;

  /**
   * I'm unsure what this property does
   */
  advanced?: boolean;

  /**
   * Indicates what kind of selector the field is
   */
  selector?:
    | NumberSelector
    | SelectSelector
    | TextSelector
    | BooleanSelector
    | DeviceSelector
    | TemplateSelector
    | ObjectSelector
    | TimeSelector
    | EntitySelector;
}

export type ServiceFields = Record<string, ServiceField>;
