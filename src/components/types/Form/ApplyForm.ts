import type { Education } from "./Education/Education";
import { GeneralInfo } from "./GeneralInfo/GeneralInfo";
import type { WorkExperience } from "./WorkExperience/WorkExperience";

export class ApplyForm {
  name: string;
  generalInfo: GeneralInfo;
  education: Education[];
  workExperience: WorkExperience[];
  constructor() {
    this.name = 'Apply form';
    this.generalInfo = new GeneralInfo();
    this.education = [];
    this.workExperience = [];
  }
}