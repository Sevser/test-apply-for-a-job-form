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
    <v-input :model-value="workExperience" :rules="workExperience.rules" :name="workExperience.uuid" class="w-100">
      <template #default>
        <div class="d-flex flex-column w-100">
          <v-checkbox :label="workExperience.hasNoWorkExperience.label" @update:modelValue="store.setHasNoWorkExperience"
            :model-value="workExperience.hasNoWorkExperience.value" />
          <template v-if="!workExperience.hasNoWorkExperience.value">
            <v-card v-for="(we, index) of workExperience.workExperiences" :key="index" class="mb-2"
              style="overflow: unset; z-index: unset;">
              <template #text>
                <v-row class="flex-shrink-0">
                  <v-col :cols="cols">
                    <v-text-field :label="we.name.label" :placeholder="we.name.placeholder" :name="we.name.name + we.uuid"
                      @update:modelValue="$e => store.updateWorkExperienceInfoField(we.uuid, we.name.uuid, $e)"
                      :model-value="we.name.value" :type="we.name.type" :rules="we.name.rules" />
                  </v-col>
                  <v-col :cols="cols">
                    <v-textarea :label="we.responsibilities.label" :placeholder="we.responsibilities.placeholder"
                      @update:modelValue="$e => store.updateWorkExperienceInfoField(we.uuid, we.responsibilities.uuid, $e)"
                      :model-value="we.responsibilities.value" :name="we.responsibilities.name + we.uuid"
                      :type="we.responsibilities.type" :rules="we.responsibilities.rules" />
                  </v-col>
                  <v-col :cols="cols">
                    <v-input :model-value="we.startDate.value" :rules="we.startDate.rules"
                      :name="we.startDate.name + we.uuid">
                      <DatepickerField :label="we.startDate.label" :rules="we.startDate.rules"
                        :name="we.startDate.name + we.uuid" month-picker
                        @update:modelValue="($e: any) => store.updateWorkExperienceInfoField(we.uuid, we.startDate.uuid, $e)"
                        :model-value="we.startDate.value" :placeholder="we.startDate.placeholder" />
                    </v-input>
                  </v-col>
                  <v-col :cols="cols">
                    <v-input :model-value="we.endDate.value" :rules="we.endDate.rules" :name="we.endDate.name + we.uuid">
                      <DatepickerField :label="we.endDate.label" :rules="we.endDate.rules"
                        :name="we.endDate.name + we.uuid" month-picker
                        @update:modelValue="($e: any) => store.updateWorkExperienceInfoField(we.uuid, we.endDate.uuid, $e)"
                        :model-value="we.endDate.value" :placeholder="we.endDate.placeholder" />
                    </v-input>
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
    </v-input>
  </div>
</template>

<style lang="sass" scoped>

</style>