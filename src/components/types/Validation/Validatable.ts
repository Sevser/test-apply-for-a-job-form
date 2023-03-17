import type { RuleValidation } from "./Rule";

export class Validable {
  rules: RuleValidation[];
  constructor() {
    this.rules = [];
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this));
  }
}