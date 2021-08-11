<template>
  <div class="calculator">
    <div class="screen">
      <div class="answer">{{ number }}</div>
    </div>
    <div class="controller">コントローラー</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const number = ref(0);
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

  .controller {
    width: 100%;
    height: calc(100% - 110px);
  }
}
</style>
