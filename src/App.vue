<script setup lang="ts">
import CalendarArea from './components/CalendarArea.vue';
import OperateArea from './components/OperateArea.vue';
</script>

<template>
    <CalendarArea />
    <OperateArea />
</template>

<style scoped>
</style>

<style>
#app {
    background-image: url("/e.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
}

body {
    overflow: hidden;
}
</style>
