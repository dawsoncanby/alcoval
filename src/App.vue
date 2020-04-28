<template>
  <div id="app">
    <AlcoVal/>
  </div>
</template>

<script>
import AlcoVal from './components/AlcoVal.vue'

export default {
  name: 'App',
  components: {
    AlcoVal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
