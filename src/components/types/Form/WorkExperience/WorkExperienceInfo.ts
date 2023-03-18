import type { CheckboxField } from "../../Field/CheckboxField";
import type { RuleValidation } from "../../Validation/Rule";
import { Validable } from "../../Validation/Validatable";
import type { Form } from "../Form";
import HasNoWorkExperience from "./Fields/HasNoWorkExperience";
import type { WorkExperience } from "./WorkExperience";

export class WorkExperienceInfo extends Validable implements Form {
  label: string;
  workExperiences: WorkExperience[];
  hasNoWorkExperience: CheckboxField;
  rules: RuleValidation[];
  constructor() {
    super();
    this.workExperiences = [];
    this.label = 'Work experience info';
    this.hasNoWorkExperience = HasNoWorkExperience();
    this.rules = [
      (v: WorkExperienceInfo) => {
        if (v.hasNoWorkExperience.value === true) {
          return true;
        }
        return v.workExperiences.length !== 0 || 'You have to fill work experience info'
      }
    ]
  }

  get fields(): Validable[] {
    return [
      this.hasNoWorkExperience,
      ...this.workExperiences,
    ]
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}