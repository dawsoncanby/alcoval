<template>
  <v-container>
    <v-row>
      <v-col>
        <add-drink @drink-added="addedDrinks.push($event)"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="justify-center">Compare Drinks</v-card-title>
          <v-data-table
            :headers="tableFields"
            :items="addedDrinks"
          />
        </v-card>
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

  data: () => ({
    tableFields: [
      { text: 'Name', value: 'name'},
      { text: 'Price', value: 'price'},
      { text: 'Cost of Drink', value: 'costOfDrink'},
    ],
    addedDrinks: []
  })
}
</script>

<style scoped>

</style>
