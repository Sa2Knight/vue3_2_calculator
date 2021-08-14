<template>
  <div class="calc-screen">
    <div class="answer">{{ displayValue }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    displayValue() {
      const originValue = this.$props.value;
      if (originValue.length > 15) {
        return `${Number(originValue).toExponential()}`;
      } else if (originValue.indexOf(".") === -1) {
        return Number(originValue).toLocaleString().replace(/,/g, " ");
      } else {
        return originValue;
      }
    },
    fontSize() {
      const length = this.$props.value.length;
      if (length < 7) return "70px";
      if (length < 9) return "50px";
      if (length < 11) return "40px";
      if (length < 13) return "30px";
      return "20px";
    },
  },
});
</script>

<style lang="scss" scoped>
.calc-screen {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: rgba(67, 87, 105, 0.18);
  color: #fff;
  font-size: v-bind(fontSize);
  .answer {
    padding: 0 10px;
  }
}
</style>
