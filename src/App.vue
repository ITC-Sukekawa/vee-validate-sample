<template>
  <v-app>
    <v-app-bar app color="light-green darken-1" dark>
      <div class="d-flex align-center">
        <v-avatar size="40" class="mr-3">
          <img
            src="https://s.gravatar.com/avatar/12d9caffc9015454460f0f3a662df4e0?s=80"
            alt="ITC-Sukekawa"
          />
        </v-avatar>

        <h1>ITC-Sukekawa/vee-validate-sample</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ITC-Sukekawa/vee-validate-sample"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
})
</script>
