<script setup lang="ts">
import CalendarArea from './components/CalendarArea.vue';
import OperateArea from './components/OperateArea.vue';
</script>

<template>
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
