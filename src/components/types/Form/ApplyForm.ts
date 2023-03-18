import type { Education } from "./Education/Education";
import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import type { WorkExperience } from "./WorkExperience/WorkExperience";
import type { RuleValidation } from "../Validation/Rule";
import { Validable } from "../Validation/Validatable";
import type { Form } from "./Form";

export class ApplyForm extends Validable implements Form {
  label: string;
  generalInfo: GeneralInfo;
  education: Education[];
  hasNoEducation: boolean;
  workExperience: WorkExperience[];
  hasNoWorkExperience: boolean;
  rules: RuleValidation[];
  constructor() {
    super();
    this.label = 'Apply form';
    this.generalInfo = new GeneralInfo();
    this.education = [];
    this.hasNoEducation = false;
    this.workExperience = [];
    this.hasNoWorkExperience = false;
    this.rules = [
      (v: ApplyForm) => {
        if (v.hasNoEducation) {
          return true;
        }
        return v.education.length !== 0 || 'You have to fill at least one education field'
      },
      (v: ApplyForm) => {
        if (v.hasNoWorkExperience) {
          return true;
        }
        return v.workExperience.length !== 0 || 'You have to fill at least one work experience field'
      }
    ];
  }

  get fields(): Validable[] {
    return [
      this.generalInfo,
      ...this.education,
      ...this.workExperience,
    ]
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}