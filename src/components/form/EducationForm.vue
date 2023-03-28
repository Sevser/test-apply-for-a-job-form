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
    <v-input :model-value="educationInfo" :rules="educationInfo.rules" :name="educationInfo.uuid" class="w-100">
      <template #default>
        <div class="d-flex flex-column w-100">
          <v-checkbox :label="educationInfo.hasNoEducation.label" :model-value="educationInfo.hasNoEducation.value"
            @update:modelValue="store.setHasNoEducation" />
          <template v-if="!educationInfo.hasNoEducation.value">
            <v-card v-for="(ed, index) of educationInfo.educations" :key="index" class="mb-2"
              style="overflow: unset; z-index: unset">
              <template #text>
                <v-row class="flex-shrink-0">
                  <v-col :cols="cols">
                    <v-text-field :label="ed.name.label" :placeholder="ed.name.placeholder" :name="ed.name.name + ed.uuid"
                      color="primary" variant="underlined"
                      @update:modelValue="$e => store.updateEdiucationInfoField(ed.uuid, ed.name.uuid, $e)"
                      :model-value="ed.name.value" :type="ed.name.type" :rules="ed.name.rules" />
                  </v-col>
                  <v-col :cols="cols">
                    <v-text-field :label="ed.degree.label" :placeholder="ed.degree.placeholder" color="primary"
                      variant="underlined" :name="ed.degree.name + ed.uuid"
                      @update:modelValue="$e => store.updateEdiucationInfoField(ed.uuid, ed.degree.uuid, $e)"
                      :model-value="ed.degree.value" :type="ed.degree.type" :rules="ed.degree.rules" />
                  </v-col>
                  <v-col :cols="cols">
                    <v-input :model-value="ed.startDate.value" :rules="ed.startDate.rules"
                      :name="ed.startDate.name + ed.uuid">
                      <DatepickerField :label="ed.startDate.label" :rules="ed.startDate.rules"
                        :name="ed.startDate.name + ed.uuid" month-picker
                        @update:modelValue="($e: any) => store.updateEdiucationInfoField(ed.uuid, ed.startDate.uuid, $e)"
                        :model-value="ed.startDate.value" :placeholder="ed.startDate.placeholder" />
                    </v-input>
                  </v-col>
                  <v-col :cols="cols">
                    <v-input :model-value="ed.endDate.value" :rules="ed.endDate.rules" :name="ed.endDate.name + ed.uuid">
                      <DatepickerField :label="ed.endDate.label" :rules="ed.endDate.rules"
                        :name="ed.endDate.name + ed.uuid" month-picker
                        @update:modelValue="($e: any) => store.updateEdiucationInfoField(ed.uuid, ed.endDate.uuid, $e)"
                        :model-value="ed.endDate.value" :placeholder="ed.endDate.placeholder" />
                    </v-input>
                  </v-col>
                </v-row>
              </template>
              <template #actions>
                <v-btn color="error" variant="outlined" @click="store.removeEducation(ed.uuid)" :rounded="0">
                  remove education
                </v-btn>
              </template>
            </v-card>
            <v-btn variant="outlined" @click="store.addNewEducation" :rounded="0">
              Add new education
            </v-btn>
          </template>
        </div>
      </template>
    </v-input>
  </div>
</template>

<style lang="sass" scoped>

</style>