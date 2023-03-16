import type { FieldType } from "../Field/Field";

export type RuleValidation = (any: FieldType) => (boolean | string);
export type RuleRequired = (any: FieldType) => (boolean);
export type RuleDisabled = (any: FieldType) => (boolean);