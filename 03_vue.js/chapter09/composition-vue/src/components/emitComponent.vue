<template>
    <div>
        <div>
            <input type="text" v-model.trim="inputMsg">
            <button @click="sendMsg">부모님께 전송</button>
        </div>
    </div>
</template>

<script setup>

import {defineEmits,  ref } from 'vue'
const inputMsg = ref('');

const emit = defineEmits(['send-msg']);
function sendMsg(){
    emit('send-msg',inputMsg.value);
}


</script>

<style lang="scss" scoped>

</style>