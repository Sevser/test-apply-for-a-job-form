<script lang="ts">
import RegistrationForm from './components/form/RegistrationForm.vue';


export default {
  setup() {
  },
  components: {
    RegistrationForm,
  }
}
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <RegistrationForm />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
