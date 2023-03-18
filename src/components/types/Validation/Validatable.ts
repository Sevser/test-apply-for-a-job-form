import type { RuleValidation } from "./Rule";
import { v4 as uuid } from 'uuid';

export class Validable {
  uuid: string;
  rules: RuleValidation[];
  constructor() {
    this.uuid = uuid();
    this.rules = [];
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this));
  }
}