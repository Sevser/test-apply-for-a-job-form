import { isField, type Field } from '@/components/types/Field/Field';
import { ApplyForm } from '@/components/types/Form/ApplyForm'
import { Education } from '@/components/types/Form/Education/Education'
import { WorkExperience } from '@/components/types/Form/WorkExperience/WorkExperience';
import { defineStore } from 'pinia'

export const useApplyForm = defineStore('applyForm', {
  state: () => ({
    applyForm: new ApplyForm(),
  }),
  getters: {

  },
  actions: {
    clearApplyForm() {
      this.applyForm.educationInfo.educations = [];
      this.applyForm.educationInfo.hasNoEducation.value = null;
      this.applyForm.workExperience.workExperiences = [];
      this.applyForm.workExperience.hasNoWorkExperience.value = null;
      this.applyForm.generalInfo.fields.forEach((field) => {
        field.value = '';
      });
    },
    addNewEducation() {
      this.applyForm.educationInfo.educations.push(new Education());
    },
    addNewWorkExperience() {
      this.applyForm.workExperience.workExperiences.push(new WorkExperience());
    },
    removeEducation(id: string) {
      this.applyForm.educationInfo.educations = this.applyForm.educationInfo.educations.filter(({ uuid }) => uuid !== id);
    },
    removeWorkExperience(id: string) {
      this.applyForm.workExperience.workExperiences = this.applyForm.workExperience.workExperiences.filter(({ uuid }) => uuid !== id);
    },
    setHasNoEducation(value: boolean) {
      this.applyForm.educationInfo.hasNoEducation.value = value;
      if (value) {
        this.applyForm.educationInfo.educations = [];
      }
    },
    setHasNoWorkExperience(value: boolean) {
      this.applyForm.workExperience.hasNoWorkExperience.value = value;
      if (value) {
        this.applyForm.workExperience.workExperiences = [];
      }
    },
    updateGeneralInfoField(uuid: string, value: any) {
      const field = this.applyForm.generalInfo.fields.find((field) => field.uuid === uuid) as Field;
      field.value = value;
    },
    updateEdiucationInfoField(educationUuid: string, uuid: string, value: any) {
      const educationInfo = this.applyForm.educationInfo.educations.find((educationInfo) => educationInfo.uuid === educationUuid) as Education;
      const field = educationInfo.fields.find((field) => field.uuid === uuid);
      if (isField(field)) {
        field.value = value;
      }
    },
    updateWorkExperienceInfoField(workExperienceUUUID: string, uuid: string, value: any) {
      const workExperience = this.applyForm.workExperience.workExperiences.find((workExperience) => workExperience.uuid === workExperienceUUUID) as WorkExperience;
      const field = workExperience.fields.find((field) => field.uuid === uuid);
      if (isField(field)) {
        field.value = value;
      }
    }
  }
})
