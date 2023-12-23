<script setup lang="ts">
import CalendarArea from "./components/CalendarArea.vue";
import OperateArea from "./components/OperateArea.vue";
import drawStars from "./scripts/star.esm";
import { useConfigStore } from "@/stores/config";
const { config } = useConfigStore();
drawStars(config.layout.star_speed.value, config.layout.star_amount.value);
</script>

<template>
    <img v-if="config.layout.enable_bing_background.value" src="https://api.paugram.com/bing" />
    <div id="blackBlock" v-if="config.layout.enable_bing_background.value"></div>
    <CalendarArea v-if="!config.layout.enable_bing_background.value" />
    <OperateArea />
</template>

<style scoped>
#blackBlock{
    height: 100%;
    width: 20vw;
    background-color: black;
    position: absolute;
    right: 0;
    z-index: 0;
}
</style>

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
