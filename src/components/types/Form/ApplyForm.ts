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
  workExperience: WorkExperience[];
  rules: RuleValidation[];
  constructor() {
    super();
    this.label = 'Apply form';
    this.generalInfo = new GeneralInfo();
    this.education = [];
    this.workExperience = [];
    this.rules = [];
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