import type { Field, FieldType } from "./Field";
import { Validable } from "../Validation/Validatable";
import type { RuleValidation } from "../Validation/Rule";

type CheckboxFieldConstructor = Validable & Omit<Field, 'type'>;

export class CheckboxField extends Validable implements Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;
  name: string;

  visible: boolean;
  required: boolean;
  disabled: boolean;

  rules: RuleValidation[];
  constructor(prop?: Partial<CheckboxFieldConstructor>) {
    super();
    this.label = prop?.label || '';
    this.type = 'date';
    this.name = prop?.name || '';
    this.placeholder = prop?.placeholder || '';
    this.value = prop?.value || '';

    this.visible = prop?.visible || false;
    this.required = prop?.required || false;
    this.disabled = prop?.disabled || false;

    this.rules = prop?.rules || [];
  }
}