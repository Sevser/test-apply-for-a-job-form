<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useApplyForm } from '@/stores/applyForm';
import EducationForm from './EducationForm.vue';
import GeneralInfo from './GeneralInfo.vue';
import WorkExperience from './WorkExperience.vue';
import type { VuetifyValidation } from '../../plugins/vuetify/validation';

const form = ref(null)

const store = useApplyForm();

const apply = async () => {
  if (form.value === null) {
    return;
  }
  const formValue = form?.value as VuetifyValidation;
  console.log(await formValue.validate())
  console.log(store.applyForm);
}

onMounted(() => {
  console.log(form)
})
</script>

<template>
  <v-form ref="form">
    <GeneralInfo :general-info="store.applyForm.generalInfo" />
    <v-divider></v-divider>
    <EducationForm :education-info="store.applyForm.educationInfo" />
    <v-divider></v-divider>
    <WorkExperience :work-experience="store.applyForm.workExperience" />
    <v-row class="justify-end mt-4">
      <v-btn @click="apply" color="primary" class="mr-2">
        apply
      </v-btn>
      <v-btn @click="store.clearApplyForm">
        reset
      </v-btn>
    </v-row>
  </v-form>
</template>

<style lang="sass" scoped>

</style>