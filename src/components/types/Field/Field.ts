import type { Validatable } from "../Validation/Validatable";

export type FieldType = 'unknown' | 'string' | 'file' | 'email' | 'date' | 'phone' | 'textarea';

export interface Field extends Validatable {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;
}