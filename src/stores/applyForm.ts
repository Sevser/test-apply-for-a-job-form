import { ApplyForm } from '@/components/types/Form/ApplyForm'
import { defineStore } from 'pinia'

export const useApplyForm = defineStore('applyForm', {
  state: () => ({
    applyForm: new ApplyForm(),
  }),
  getters: {

  },
  actions: {

  }
})
