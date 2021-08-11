<template>
  <div class="calculator">
    <div class="screen">スクリーン</div>
    <div class="controller">コントローラー</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
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
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: rgba(67, 87, 105, 0.18);
  }

  .controller {
    width: 100%;
    height: calc(100% - 110px);
  }
}
</style>
