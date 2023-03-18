<script setup lang='ts'>
import type { Education } from '../types/Form/Education/Education';

defineProps({
  educations: {
    type: Array<Education>,
    required: true,
    default: () => ([]),
  },
  hasNoEducation: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="flex-shrink-0">
    education info
  </div>
</template>

<style lang="sass" scoped>

</style>