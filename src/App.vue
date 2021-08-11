<template>
  <calculator />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Calculator from "./components/Calculator.vue";

export default defineComponent({
  name: 'App',
  components: {
    Calculator
  }
})
</script>

<style lang="scss">
body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fbb034;
  background-image: linear-gradient( 315deg ,#fbb034,#fd0 74%);
}
</style>
