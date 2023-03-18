<script setup lang='ts'>
import { useApplyForm } from '@/stores/applyForm';
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { WorkExperienceInfo } from '../types/Form/WorkExperience/WorkExperienceInfo';

const store = useApplyForm();

defineProps({
  workExperience: {
    type: WorkExperienceInfo,
    required: true,
    default: () => (new WorkExperienceInfo()),
  },
});

const display = useDisplay();

const cols = computed(() => {
  if (display.xs) {
    return 12;
  }
  if (display.sm || display.md) {
    return 6;
  }
  if (display.xl || display.xxl) {
    return 3;
  }
  return 4;
});
</script>

<template>
  <div class="d-flex flex-column mt-2 mb-2">
    <div class="text-h5 mb-3">
      {{ workExperience.label }}
    </div>
    <v-checkbox :label="workExperience.hasNoWorkExperience.label" :value="workExperience.hasNoWorkExperience.value" />
    <template v-if="!workExperience.hasNoWorkExperience.value">
      <v-card v-for="(we, index) of workExperience.workExperiences" :key="index" class="mb-2">
        <template #text>
          <v-row class="flex-shrink-0">
            <v-col :cols="cols">
              <v-text-field :label="we.name.label" :placeholder="we.name.placeholder" :name="we.name.name"
                :type="we.name.type" :rules="we.name.rules" />
            </v-col>
            <v-col :cols="cols">
              <v-textarea :label="we.responsibilities.label" :placeholder="we.responsibilities.placeholder"
                :name="we.responsibilities.name" :type="we.responsibilities.type" :rules="we.responsibilities.rules" />
            </v-col>
            <v-col :cols="cols">
              <DatepickerField :label="we.startDate.label" :rules="we.startDate.rules" :name="we.startDate.name"
                :placeholder="we.startDate.placeholder" />
            </v-col>
            <v-col :cols="cols">
              <DatepickerField :label="we.endDate.label" :rules="we.endDate.rules" :name="we.endDate.name"
                :placeholder="we.endDate.placeholder" />
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-btn color="error" variant="flat" @click="store.removeWorkExperience(we.uuid)">
            remove education
          </v-btn>
        </template>
      </v-card>
      <v-btn @click="store.addNewWorkExperience">
        Add new work experience
      </v-btn>
    </template>
  </div>
</template>

<style lang="sass" scoped>

</style>