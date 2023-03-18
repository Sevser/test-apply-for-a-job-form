import type { CheckboxField } from "../../Field/CheckboxField";
import type { RuleValidation } from "../../Validation/Rule";
import { Validable } from "../../Validation/Validatable";
import type { Form } from "../Form";
import type { Education } from "./Education";
import HasNoEducation from "./Fields/HasNoEducation";

export class EducationInfo extends Validable implements Form {
  label: string;
  educations: Education[];
  hasNoEducation: CheckboxField;
  rules: RuleValidation[];
  constructor() {
    super();
    this.educations = [];
    this.label = 'Education info';
    this.hasNoEducation = HasNoEducation();
    this.rules = [
      (v: EducationInfo) => {
        if (v.hasNoEducation.value === false) {
          return true;
        }
        return v.educations.length !== 0 || 'You have to fill education info'
      },
    ]
  }

  get fields(): Validable[] {
    return [
      this.hasNoEducation,
      ...this.educations,
    ]
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}