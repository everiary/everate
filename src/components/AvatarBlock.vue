<template>
    <img src="/icon.svg" class="w-12vw mt-12vh" alt="icon" />
    <h1 class="text-center color-#e6e6e6">Hi! {{ config.user.username.value }}</h1>
</template>

<script setup lang="ts">

import { useConfigStore } from '@/stores/config'
const { config } = useConfigStore()

</script>