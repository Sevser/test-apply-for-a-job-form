<script setup lang='ts'>
import { useApplyForm } from '@/stores/applyForm';
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { GeneralInfo } from '../types/Form/GeneralInfo/GeneralInfo';

const store = useApplyForm();

defineProps({
  generalInfo: {
    type: GeneralInfo,
    required: true,
    default: () => new GeneralInfo(),
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
  <v-row class="flex-shrink-0 mt-2 mb-2">
    <div class="text-h5 mb-3">
      {{ generalInfo.label }}
    </div>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.name.label" :placeholder="generalInfo.name.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.name.uuid, $e)"
        :model-value="generalInfo.name.value" :name="generalInfo.name.name" :type="generalInfo.name.type"
        :rules="generalInfo.name.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.lastName.label" :placeholder="generalInfo.lastName.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.lastName.uuid, $e)"
        :model-value="generalInfo.lastName.value" :name="generalInfo.lastName.name" :type="generalInfo.lastName.type"
        :rules="generalInfo.lastName.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.email.label" :placeholder="generalInfo.email.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.email.uuid, $e)"
        :model-value="generalInfo.email.value" :name="generalInfo.email.name" :type="generalInfo.email.type"
        :rules="generalInfo.email.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.phone.label" :placeholder="generalInfo.phone.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.phone.uuid, $e)"
        :model-value="generalInfo.phone.value" :name="generalInfo.phone.name" :type="generalInfo.phone.type"
        :rules="generalInfo.phone.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.appliedPosition.label" :placeholder="generalInfo.appliedPosition.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.appliedPosition.uuid, $e)"
        :model-value="generalInfo.appliedPosition.value" :name="generalInfo.appliedPosition.name"
        :rules="generalInfo.appliedPosition.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-input :model-value="generalInfo.earlyPossibleDate.value" :rules="generalInfo.earlyPossibleDate.rules"
        :name="generalInfo.earlyPossibleDate.name">
        <DatepickerField :label="generalInfo.earlyPossibleDate.label" :name="generalInfo.earlyPossibleDate.name"
          @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.earlyPossibleDate.uuid, $e)"
          :model-value="generalInfo.earlyPossibleDate.value" :placeholder="generalInfo.earlyPossibleDate.placeholder" />
      </v-input>
    </v-col>
    <v-col :cols="cols">
      <v-input :model-value="generalInfo.preferredInterViewDate.value" :rules="generalInfo.preferredInterViewDate.rules"
        :name="generalInfo.preferredInterViewDate.name">
        <DatepickerField :label="generalInfo.preferredInterViewDate.label"
          @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.preferredInterViewDate.uuid, $e)"
          :model-value="generalInfo.preferredInterViewDate.value" :rules="generalInfo.preferredInterViewDate.rules"
          :name="generalInfo.preferredInterViewDate.name" :placeholder="generalInfo.preferredInterViewDate.placeholder" />
      </v-input>
    </v-col>
    <v-col :cols="cols">
      <v-textarea :label="generalInfo.coverLetter.label" :placeholder="generalInfo.coverLetter.placeholder"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.coverLetter.uuid, $e)"
        :model-value="generalInfo.coverLetter.value" :name="generalInfo.coverLetter.name"
        :rules="generalInfo.coverLetter.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-file-input :label="generalInfo.cv.label" :placeholder="generalInfo.cv.placeholder" :name="generalInfo.cv.name"
        @update:modelValue="($e: any) => store.updateGeneralInfoField(generalInfo.cv.uuid, $e)"
        :model-value="generalInfo.cv.value" variant="solo" :rules="generalInfo.cv.rules" />
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>