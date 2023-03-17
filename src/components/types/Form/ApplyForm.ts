import type { Education } from "./Education/Education";
import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import type { WorkExperience } from "./WorkExperience/WorkExperience";
import { Validatable } from "../Validation/Validatable";
import type { RuleValidation } from "../Validation/Rule";

export class ApplyForm implements Validatable {
  name: string;
  generalInfo: GeneralInfo;
  education: Education[];
  workExperience: WorkExperience[];
  valid: boolean;
  rules: RuleValidation[];
  constructor() {
    this.name = 'Apply form';
    this.generalInfo = new GeneralInfo();
    this.education = [];
    this.workExperience = [];
    this.valid = false;
    this.rules = [];
  }
}