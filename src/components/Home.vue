<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to MiniSend</h1>

        <p class="subheading font-weight-regular">
          The number 1 platform for all your transactional emails.
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">See Metrics</h2>

        <v-row justify="center">
          <router-link to="/dashboard" class="subheading mx-3">
            Dashboard
          </router-link>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      stuff: "",
    };
  },
};
</script>
