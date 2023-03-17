import type { Field, FieldType } from "./Field";
import { Validable } from "../Validation/Validatable";
import type { RuleValidation } from "../Validation/Rule";

type DateFieldConstructor = Validable & Omit<Field, 'type'>;

export class DateField extends Validable implements Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;

  rules: RuleValidation[];
  constructor(prop?: Partial<DateFieldConstructor>) {
    super();
    this.label = prop?.label || '';
    this.type = 'date';
    this.placeholder = prop?.placeholder || '';
    this.value = prop?.value || '';

    this.visible = prop?.visible || false;
    this.required = prop?.required || false;
    this.disabled = prop?.disabled || false;

    this.rules = prop?.rules || [];
  }
}