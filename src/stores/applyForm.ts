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
  }
})
