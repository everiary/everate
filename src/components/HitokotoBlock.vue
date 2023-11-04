<template>
    <div id="hitokoto" @click="getHito">{{ hito }}</div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const hito = ref('')

const getHito = () => {
    fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
            hito.value = data.hitokoto
        })
        .catch(console.error)
}
getHito()

</script>
<style scoped>
#hitokoto {
    position: absolute;
    left: 10%;
    top: 50%;
    width: 80%;
    text-align: center;
    font-size: 2vw;
    color: #f9f4dc;
    font-family: "Microsoft Yahei";
    overflow: hidden;
}
</style>