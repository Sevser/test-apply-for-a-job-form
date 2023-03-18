import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import type { RuleValidation } from "../Validation/Rule";
import { Validable } from "../Validation/Validatable";
import type { Form } from "./Form";
import { EducationInfo } from "./Education/EducationInfo";
import { WorkExperienceInfo } from "./WorkExperience/WorkExperienceInfo";

export class ApplyForm extends Validable implements Form {
  label: string;
  generalInfo: GeneralInfo;
  educationInfo: EducationInfo;
  workExperience: WorkExperienceInfo;
  rules: RuleValidation[];
  constructor() {
    super();
    this.label = 'Apply form';
    this.generalInfo = new GeneralInfo();
    this.educationInfo = new EducationInfo();
    this.workExperience = new WorkExperienceInfo();
    this.rules = [];
  }

  get fields(): Validable[] {
    return [
      this.generalInfo,
      this.educationInfo,
      this.workExperience,
    ]
  }

  get valid(): boolean {
    return this.rules.every((rule) => rule(this)) && this.fields.every((field: Validable) => field.valid);
  }
}