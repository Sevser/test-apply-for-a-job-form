<script setup lang="ts">
import ApplyForm from './components/form/ApplyForm.vue';

</script>

<template>
  <v-app full-height>
    <v-app-bar>
      <v-app-bar-title>
        Apply for a Job form
      </v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container class="overflow-y-auto app-container">
      <ApplyForm />
    </v-container>
  </v-app>
</template>

<style scoped>
.app-container {
  width: 100%;
}
</style>
