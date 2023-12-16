<template>
    <div class="of absolute font-size-2vw text-center color-#f9f4dc w-80% left-12% top-50% Yahei" @click="getHito">
        {{ hito }}
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useConfigStore } from '@/stores/config';
const { config } = useConfigStore()

const hito = ref('')

const getHito = () => {
    fetch(`https://v1.hitokoto.cn?c=${config.hitokoto_type.value}`)
        .then(response => response.json())
        .then(data => {
            hito.value = data.hitokoto
        })
        .catch(console.error)
}

getHito()
</script>
<style scoped>
#hitokoto,
.jirishici-sentence {
    font-family: "Microsoft Yahei";
}
</style>