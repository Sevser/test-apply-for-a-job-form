<script setup lang='ts'>
import { useApplyForm } from '@/stores/applyForm';
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { EducationInfo } from '../types/Form/Education/EducationInfo';

const store = useApplyForm();

defineProps({
  educationInfo: {
    type: EducationInfo,
    required: true,
    default: () => (new EducationInfo()),
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
      {{ educationInfo.label }}
    </div>
    <v-checkbox :label="educationInfo.hasNoEducation.label" :value="educationInfo.hasNoEducation.value" />
    <template v-if="!educationInfo.hasNoEducation.value">
      <v-card v-for="(ed, index) of educationInfo.educations" :key="index" class="mb-2">
        <template #text>
          <v-row class="flex-shrink-0">
            <v-col :cols="cols">
              <v-text-field :label="ed.name.label" :placeholder="ed.name.placeholder" :name="ed.name.name"
                :type="ed.name.type" :rules="ed.name.rules" />
            </v-col>
            <v-col :cols="cols">
              <v-text-field :label="ed.degree.label" :placeholder="ed.degree.placeholder" :name="ed.degree.name"
                :type="ed.degree.type" :rules="ed.degree.rules" />
            </v-col>
            <v-col :cols="cols">
              <DatepickerField :label="ed.startDate.label" :rules="ed.startDate.rules" :name="ed.startDate.name"
                :placeholder="ed.startDate.placeholder" />
            </v-col>
            <v-col :cols="cols">
              <DatepickerField :label="ed.endDate.label" :rules="ed.endDate.rules" :name="ed.endDate.name"
                :placeholder="ed.endDate.placeholder" />
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-btn color="error" variant="flat" @click="store.removeEducation(ed.uuid)">
            remove education
          </v-btn>
        </template>
      </v-card>
      <v-btn @click="store.addNewEducation">
        Add new education
      </v-btn>
    </template>
  </div>
</template>

<style lang="sass" scoped>

</style>