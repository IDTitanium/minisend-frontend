<template>
  <v-app>
    <v-app-bar app color="primary" dark>
     
      <v-spacer></v-spacer>

      <v-btn href="https://github.com/IDTitanium" target="_blank" text>
        <span class="mr-2">Github Repo</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <UserSidebar class="app-sidebar" />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import UserSidebar from "./components/UserSidebar.vue";

export default {
  name: "App",
  components: {
    UserSidebar,
  },

  data: () => ({
    //
  }),
};
</script>
