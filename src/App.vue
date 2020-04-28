<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <alco-val/>
    </v-content>
  </v-app>
</template>

<script>
import AlcoVal from './components/AlcoVal.vue';

export default {
  name: 'App',

  components: {
    AlcoVal,
  },

  data: () => ({
  }),
};
</script>
