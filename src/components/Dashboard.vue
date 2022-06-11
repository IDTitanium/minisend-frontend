<template>
  <v-container>
      <v-card outlined class="mb-5 p-5">
      <h1>Email Stats</h1>
      <v-row class="mt-5">
          <v-col>
             <v-card outlined max-width="20rem" style="background: green; color: white">
            <v-card-text class="text-center card-text" style="color:white">Total Email Sent: </v-card-text> 
            <h2 class="p-5 text-center">20000</h2>
            </v-card> 
          </v-col>
          <v-col>
             <v-card outlined max-width="20rem" style="background: blueviolet; color: white">
            <v-card-text class="text-center card-text" style="color:white">Total Email Posted: </v-card-text> 
            <h2 class="p-5 text-center">20000</h2>
            </v-card> 
          </v-col>
        <v-col>
            <v-card outlined max-width="20rem" style="background: orange; color: white">
            <v-card-text class="text-center card-text" style="color:white">Total Email Failed: </v-card-text> 
            <h2 class="p-5 text-center">20000</h2>
            </v-card> 
        </v-col>
      </v-row>
      </v-card>
      <v-card outlined class="mt-5 p-5">
          <h1>App Usage</h1>
      <v-card outlined class="mt-5" height="45rem" style="background: lightgrey"></v-card>
      </v-card>
  </v-container>
</template>

<style scoped>
.card-text {
    color: white; font-size: large; font-weight: 500;
}
</style>

<script>
export default {
    data() {
        return {
            
        }
    },
    created() {
        this.fetchStats()
    },
    methods: {
        fetchStats() {
            this.$store.dispatch('fetchCountSummary')
        }
    },
    computed: {
        stats() {
            return this.$store.getters['getCountSummary']
        }
    }
}
</script>
