<script setup lang="ts">
import CalendarArea from "./components/CalendarArea.vue";
import OperateArea from "./components/OperateArea.vue";
import drawStars from "./scripts/star.esm";
import { useConfigStore } from "@/stores/config";
const { config } = useConfigStore();
drawStars(config.star_speed.value, config.star_amount.value);


</script>

<template>
    <img v-if="config.enable_bing_background.value" src="https://bing.icodeq.com/" />
    <CalendarArea />
    <OperateArea />
</template>

<style>
#app {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
    user-select: none;
}

body {
    overflow: hidden;
}
</style>
