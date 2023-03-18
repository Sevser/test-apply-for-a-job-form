export type FieldType = 'unknown' | 'string' | 'file' | 'email' | 'date' | 'phone' | 'textarea' | 'checkbox';

export interface Field {
  label: string;
  placeholder: string;
  name: string;

  type: FieldType;
  value: any;

  visible: boolean;
  required: boolean;
  disabled: boolean;
}