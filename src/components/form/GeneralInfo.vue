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
  <v-row class="flex-shrink-0">
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.name.label" :placeholder="generalInfo.name.placeholder"
        :type="generalInfo.name.type" :rules="generalInfo.name.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.lastName.label" :placeholder="generalInfo.lastName.placeholder"
        :type="generalInfo.lastName.type" :rules="generalInfo.lastName.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.email.label" :placeholder="generalInfo.email.placeholder"
        :type="generalInfo.email.type" :rules="generalInfo.email.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.phone.label" :placeholder="generalInfo.phone.placeholder"
        :type="generalInfo.phone.type" :rules="generalInfo.phone.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.appliedPosition.label" :placeholder="generalInfo.appliedPosition.placeholder"
        :rules="generalInfo.appliedPosition.rules" />
    </v-col>
    <v-col :cols="cols">
      <DatepickerField :label="generalInfo.earlyPossibleDate.label" :rules="generalInfo.earlyPossibleDate.rules"
        :placeholder="generalInfo.earlyPossibleDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <DatepickerField :label="generalInfo.preferredInterViewDate.label" :rules="generalInfo.preferredInterViewDate.rules"
        :placeholder="generalInfo.preferredInterViewDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-textarea :label="generalInfo.coverLetter.label" :placeholder="generalInfo.coverLetter.placeholder"
        :rules="generalInfo.coverLetter.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-file-input :label="generalInfo.cv.label" :placeholder="generalInfo.cv.placeholder"
        :rules="generalInfo.cv.rules" />
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>