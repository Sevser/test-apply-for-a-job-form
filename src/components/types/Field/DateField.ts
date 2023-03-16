import type { Field, FieldType } from "./Field";
import type { RuleValidation } from "../Rules/Rule";

export class DateField implements Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;
  valid: boolean;

  rules: RuleValidation[];
  constructor(prop?: Partial<Omit<Field, 'type'>>) {
    this.label = prop?.label || '';
    this.type = 'date';
    this.placeholder = prop?.placeholder || '';
    this.value = prop?.value || '';

    this.visible = prop?.visible || false;
    this.required = prop?.required || false;
    this.disabled = prop?.disabled || false;
    this.valid = prop?.valid || false;

    this.rules = prop?.rules || [];
  }
}