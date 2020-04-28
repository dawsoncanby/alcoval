<template>
  <v-container>
    <v-row>
      <v-col>
        <add-drink/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AddDrink from './AddDrink.vue'

export default {
  components: {
    AddDrink
  },
  
  props: {
  }
}
</script>

<style scoped>

</style>
