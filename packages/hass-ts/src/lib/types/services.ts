/**
 * @public
 */
export interface Service {
  name: string;
  description: string;
  fields: ServiceFields;
  target?: { entity?: EntityTarget[]; device?: DeviceTarget[] };
  response: unknown;
}

export interface NumberSelector {
  number: {
    mode?: string;
    min: number;
    max: number;
    step: number;
    unit_of_measurement?: string;
  };
}

export interface SelectSelector {
  options: string[];
  translation_key?: string;
}

export interface TextSelector {
  text: null;
}

export interface BooleanSelector {
  boolean: null;
}

export interface DeviceTarget {
  filter: {
    integration: string;
  };
}

export interface DeviceSelector {
  device: DeviceTarget;
}

export interface EntityTarget {
  integration: string;
  domain: string | string[];
  supported_feature: string[];
  multiple: boolean;
}

export interface EntitySelector {
  entity: EntityTarget;
}

export interface TemplateSelector {
  template: null;
}

export interface ObjectSelector {
  object: null;
}

export interface TimeSelector {
  time: null;
}

export interface ServiceField {
  name: string;
  default?: string | boolean;
  description?: string;
  required?: boolean;
  advanced?: boolean;
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
