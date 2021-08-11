<template>
  <div class="calcButton">
    <div class="label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#503cd1",
    },
    hoveredColor: {
      type: String,
      default: "#3d2bb8",
    },
  },
});
</script>

<style lang="scss" scoped>
.calcButton {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 10px;
  background-color: v-bind(color);
  &:hover {
    background-color: v-bind(hoveredColor);
  }
}
</style>
