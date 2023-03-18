<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { useApplyForm } from '@/stores/applyForm';
import EducationForm from './EducationForm.vue';
import GeneralInfo from './GeneralInfo.vue';
import WorkExperience from './WorkExperience.vue';

// declare a ref to hold the element reference
// the name must match template ref value
const form = ref(null)

const store = useApplyForm();

const apply = () => {
  console.log(store.applyForm);
}

onMounted(() => {
  console.log(form)
})
</script>

<template>
  <v-form ref="form">
    <GeneralInfo :general-info="store.applyForm.generalInfo" />
    <EducationForm :has-no-education="store.applyForm.hasNoEducation" :educations="store.applyForm.education" />
    <WorkExperience />
    <v-row>
      <v-btn @click="apply" color="primary">
        apply
      </v-btn>
      <v-btn>
        reset
      </v-btn>
    </v-row>
  </v-form>
</template>

<style lang="sass" scoped>

</style>