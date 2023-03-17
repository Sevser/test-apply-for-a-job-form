import type { RuleValidation } from "./Rule";

export interface Validatable {
  valid: boolean;
  rules: RuleValidation[];
}