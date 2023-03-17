import type { Field, FieldType } from "./Field";
import type { RuleValidation } from "../Validation/Rule";
import { Validable } from "../Validation/Validatable";

type TextAreaFieldConstructor = Validable & Omit<Field, 'type'>;

export class TextAreaField extends Validable implements Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;

  rules: RuleValidation[];
  constructor(prop?: Partial<TextAreaFieldConstructor>) {
    super();
    this.label = prop?.label || '';
    this.type = 'textarea';
    this.placeholder = prop?.placeholder || '';
    this.value = prop?.value || '';

    this.visible = prop?.visible || false;
    this.required = prop?.required || false;
    this.disabled = prop?.disabled || false;

    this.rules = prop?.rules || [];
  }
}