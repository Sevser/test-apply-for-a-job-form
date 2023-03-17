import type { Validable } from "../Validation/Validatable";

export interface Form {
  label: string;
  fields: Validable[];
}