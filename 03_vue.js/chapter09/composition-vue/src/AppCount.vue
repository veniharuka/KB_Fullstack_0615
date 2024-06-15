

<template>
  <div>
    <h1>Vue3 문법을 사용</h1>
    <p>count : {{ count }}</p>
    <p>double : {{ double }}</p>
    <h2>클릭 횟수: {{ totalClicked }}</h2>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>
<script setup>
import { ref,computed } from 'vue';

const count = ref(0);
const double =   computed(()=>count.value*2);
const totalClicked = ref(0);
function increment(){
  count.value++;
  totalClicked.value++;
}

function decrement(){
  count.value--;
  totalClicked.value++;
}
</script>
<style scoped>

</style>
