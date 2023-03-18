<script setup lang='ts'>
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { GeneralInfo } from '../types/Form/GeneralInfo/GeneralInfo';

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
        :name="generalInfo.name.name" :type="generalInfo.name.type" :rules="generalInfo.name.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.lastName.label" :placeholder="generalInfo.lastName.placeholder"
        :name="generalInfo.lastName.name" :type="generalInfo.lastName.type" :rules="generalInfo.lastName.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.email.label" :placeholder="generalInfo.email.placeholder"
        :name="generalInfo.email.name" :type="generalInfo.email.type" :rules="generalInfo.email.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.phone.label" :placeholder="generalInfo.phone.placeholder"
        :name="generalInfo.phone.name" :type="generalInfo.phone.type" :rules="generalInfo.phone.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.appliedPosition.label" :placeholder="generalInfo.appliedPosition.placeholder"
        :name="generalInfo.appliedPosition.name" :rules="generalInfo.appliedPosition.rules" />
    </v-col>
    <v-col :cols="cols">
      <DatepickerField :label="generalInfo.earlyPossibleDate.label" :rules="generalInfo.earlyPossibleDate.rules"
        :name="generalInfo.earlyPossibleDate.name" :placeholder="generalInfo.earlyPossibleDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <DatepickerField :label="generalInfo.preferredInterViewDate.label" :rules="generalInfo.preferredInterViewDate.rules"
        :name="generalInfo.preferredInterViewDate.name" :placeholder="generalInfo.preferredInterViewDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-textarea :label="generalInfo.coverLetter.label" :placeholder="generalInfo.coverLetter.placeholder"
        :name="generalInfo.coverLetter.name" :rules="generalInfo.coverLetter.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-file-input :label="generalInfo.cv.label" :placeholder="generalInfo.cv.placeholder" :name="generalInfo.cv.name"
        :rules="generalInfo.cv.rules" />
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>