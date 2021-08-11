<template>
  <div class="calculator">
    <div class="screen">
      <div class="answer">{{ number }}</div>
    </div>
    <div class="buttons">
      <CalcButton class="button" label="C" />
      <CalcButton class="button" label="+=" />
      <CalcButton class="button" label="%" />
      <CalcButton class="button" label="/" />
      <CalcButton class="button" label="7" />
      <CalcButton class="button" label="8" />
      <CalcButton class="button" label="9" />
      <CalcButton class="button" label="X" />
      <CalcButton class="button" label="4" />
      <CalcButton class="button" label="5" />
      <CalcButton class="button" label="6" />
      <CalcButton class="button" label="-" />
      <CalcButton class="button" label="1" />
      <CalcButton class="button" label="2" />
      <CalcButton class="button" label="3" />
      <CalcButton class="button" label="+" />
      <CalcButton class="button" label="0" />
      <CalcButton class="button" label="." />
      <CalcButton
        class="button equal"
        label="="
        color="#f33d1d"
        hoveredColor="#e4270f"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CalcButton from "./CalcButton.vue";

export default defineComponent({
  components: { CalcButton },
  data: () => ({
    number: 0,
  }),
});
</script>

<style lang="scss" scoped>
.calculator {
  width: 340px;
  height: 540px;
  padding: 10px;
  border-radius: 10px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461, #28313b 74%);

  .screen {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(67, 87, 105, 0.18);
    color: #fff;
    font-size: 70px;
    .answer {
      padding: 0 10px;
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: repeat(5, 1fr);
    grid-gap: 10px;
    width: 100%;
    height: calc(100% - 110px);
    .button {
      color: #fff;
      font-size: 24px;
      &.equal {
        grid-column: 3/5;
      }
    }
  }
}
</style>
