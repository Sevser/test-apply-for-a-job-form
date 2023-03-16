import type { Field } from "../Field/Field";

export interface Form {
  label: string;
  fields: Field[];
}