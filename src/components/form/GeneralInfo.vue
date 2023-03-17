<script setup lang='ts'>
import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { GeneralInfo } from '../types/Form/GeneralInfo/GeneralInfo';

const props = defineProps({
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
  <v-row>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.name.label" :placeholder="generalInfo.name.placeholder"
        :rules="generalInfo.name.rules" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.lastName.label" :placeholder="generalInfo.lastName.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.email.label" :placeholder="generalInfo.email.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.phone.label" :placeholder="generalInfo.phone.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.appliedPosition.label" :placeholder="generalInfo.appliedPosition.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.earlyPossibleDate.label"
        :placeholder="generalInfo.earlyPossibleDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.preferredInterViewDate.label"
        :placeholder="generalInfo.preferredInterViewDate.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.coverLetter.label" :placeholder="generalInfo.coverLetter.placeholder" />
    </v-col>
    <v-col :cols="cols">
      <v-text-field :label="generalInfo.cv.label" :placeholder="generalInfo.cv.placeholder" />
    </v-col>
  </v-row>
</template>

<style lang="sass" scoped>

</style>