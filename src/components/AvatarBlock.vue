<template>
    <img src="/icon.svg" class="w-12vw mt-12vh" />
    <h1 class="text-center color-#e6e6e6">Hi! {{ config[config.findIndex(item => item.id == 'username')].value }}</h1>
</template>

<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useConfigStore } from '../stores/config'
const { config } = storeToRefs(useConfigStore())

</script>