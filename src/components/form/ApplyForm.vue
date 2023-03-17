<script setup lang='ts'>
import { useApplyForm } from '@/stores/applyForm';
import EducationForm from './EducationForm.vue';
import GeneralInfo from './GeneralInfo.vue';
import WorkExperience from './WorkExperience.vue';

const store = useApplyForm();

</script>

<template>
  <GeneralInfo :general-info="store.applyForm.generalInfo" />
  <EducationForm />
  <WorkExperience />
</template>

<style lang="sass" scoped>

</style>