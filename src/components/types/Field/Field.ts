import type { RuleValidation } from "../Rules/Rule";

export type FieldType = 'unknown' | 'string' | 'file' | 'email' | 'date' | 'phone' | 'textarea';

export interface Field {
  label: string;
  placeholder: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;
  valid: boolean;

  rules: RuleValidation[];
}