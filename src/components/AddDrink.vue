<template lang="html">
  <v-card>
    <v-card-title class="pb-0 justify-center">Add Drink</v-card-title>
    <v-card-text>
      <!-- user input -->
      <v-form>
        <v-container class="pt-0">
          <v-row>
            <v-col cols="8">
              <v-text-field
                v-model="name"
                label="Name"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                type="number"
                min="0"
                v-model="price"
                label="Price"
              />
            </v-col>
            <v-col cols="8">
              <v-select
                v-model="type"
                :items="allTypes"
                label="Alcohol Type"
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                type="number"
                min="0"
                max="100"
                v-model="pct"
                label="% Alcohol"
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="quantity"
                :items="availableQuantities"
                label="Quantity"
                no-data-text="Select an alcohol type first"
              />
            </v-col>
          </v-row>
        </v-container>
        </v-form>
        <!-- summary if all required data is there -->
        <div v-if="costOfDrink !== null">
          <h3 >${{ costOfDrink.toFixed(2) }} per drink</h3>
        </div>
      </v-card-text>
    <v-card-actions>
      <v-btn
        block
        color="primary"
        :disabled="costOfDrink === null"
        @click="drinkAdded()"
      >
        Add
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    name: null,
    price: null,
    type: null,
    // types of alcohol
    // FORMAT:
    // text: 'Name',
    // value: {
    //   name: 'name',
    //   pct: defaultPct,
    //   quantities: [
    //     { text: 'quantity name', value: totalOz }
    //   ]
    // }
    allTypes: [
      {
        text: 'Beer',
        value: {
          name: 'beer',
          pct: 5,
          quantities: [6, 12, 18, 24, 30].map(e => {
            return { text: `${e} pack`, value: e * 12 }
          }),
        }
      },
      {
        text: 'Wine',
        name: 'wine',
        value: {
          pct: 12,
          quantities: [
            { text: 'split (375ml)', value: 12.68 },
            { text: 'standard (750ml)', value: 25.36 },
            { text: 'magnum (1.5L)', value: 50.72 },
            { text: 'carlo (4L)', value: 135.26 },
          ]
        }
      },
      {
        text: 'Liquor',
        value: {
          name: 'liquor',
          pct: 40,
          quantities: [
            { text: 'fifth', value: 23.7 },
            { text: 'litre', value: 33.8 },
            { text: 'half gallon', value: 59.2 },
          ]
        }
      }
    ],
    pct: null,
    quantity: null,
    availableQuantities: []
  }),

  computed: {
    // total number of drinks in item
    totalDrinks() {
      if (this.pct === null || this.price === null || this.quantity === null)
        return null
      // convert to ml
      const ml = this.quantity * 28.41306
      // ml of pure alcohol in one standard drink
      const oneDrink = 18
      // how much pure alcohol is in this drink
      const pureAlc = ml * this.pct / 100
      // how many total standard drinks in this item
      return pureAlc / oneDrink
    },
    // cost of one standard drink in item
    costOfDrink() {
      if (this.totalDrinks === null) return null
      // total cost / total drinks = price per drink
      return this.price / this.totalDrinks
    }
  },

  watch: {
    type(val) {
      this.pct = val.pct
      this.availableQuantities = val.quantities
      this.quantity = null
    },
  },

  methods: {
    // user clicked add drink button
    drinkAdded() {
      this.$emit('drink-added', {
        name: this.name,
        price: this.price,
        costOfDrink: this.costOfDrink,
      })
    },
  },
}
</script>
