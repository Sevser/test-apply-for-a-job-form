import type { Field, FieldType } from "./Field";
import type { RuleValidation } from "../Validation/Rule";
import { Validable } from "../Validation/Validatable";

type FileFieldConstructor = Validable & Omit<Field, 'type'>;

export class FileField extends Validable implements Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;

  rules: RuleValidation[];
  constructor(prop?: Partial<FileFieldConstructor>) {
    super();
    this.label = prop?.label || '';
    this.type = 'file';
    this.placeholder = prop?.placeholder || '';
    this.value = prop?.value || '';

    this.visible = prop?.visible || false;
    this.required = prop?.required || false;
    this.disabled = prop?.disabled || false;

    this.rules = prop?.rules || [];
  }
}