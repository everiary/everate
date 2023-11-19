<template>
    <div id="hitokoto" class="of absolute font-size-2vw text-center color-#f9f4dc w-80% left-12% top-48%" @click="getHito">{{ hito }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

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
    font-family: "Microsoft Yahei";
}
</style>