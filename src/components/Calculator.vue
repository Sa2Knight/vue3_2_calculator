<template>
  <div class="calculator">
    <div class="screen">
      <div class="answer">{{ displayValue }}</div>
    </div>
    <div class="buttons">
      <CalcButton
        :key="label"
        v-for="label in buttonLabels.slice(0, -1)"
        class="button"
        :label="label"
        @onClick="sendCommand(label)"
      />
      <CalcButton
        class="button equal"
        label="="
        color="#f33d1d"
        hoveredColor="#e4270f"
        @onClick="sendCommand('=')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCalculator from "../compositions/useCalculator";
import CalcButton from "./CalcButton.vue";

export default defineComponent({
  components: { CalcButton },
  setup() {
    const calculator = useCalculator(0);
    const { displayValue, sendCommand, buttonLabels } = calculator;

    // prettier-ignore
    const calcButtonLabels = [
        "C", "+=", "%", "/",
        "7", "8", "9", "X",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".",
    ]
    return { displayValue, sendCommand, buttonLabels };
  },
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
