<template lang="html">
  <v-card>
    <v-card-title>New Drink</v-card-title>
    <v-card-text>
      <!-- user input -->
      <v-form>
        <v-container fluid>
          <v-row>
            <v-col cols="7">
              <v-text-field
                v-model="name"
                label="Name"
              />
            </v-col>
            <v-col cols="5">
              <v-select
                v-model="type"
                :items="allTypes"
                label="Type"
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="number"
                min="0"
                v-model="price"
                label="Price"
              />
            </v-col>
            <v-col cols="3">
              <v-text-field
                type="number"
                min="0"
                max="100"
                v-model="pct"
                label="% Alcohol"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="quantity"
                :items="availableQuantities"
                label="Quantity"
              />
            </v-col>
          </v-row>
        </v-container>
        </v-form>
      </v-card-text>
    <v-card-actions>
      <v-btn block color="primary">Add</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: null,
    price: null,
    type: null,
    allTypes: ['Beer', 'Wine', 'Liquor'],
    pct: null,
    quantity: null,
  }),

  computed: {
    availableQuantities() {
      return ['1 Bottle']
    }
  }
}
</script>

<style lang="css" scoped>
</style>
