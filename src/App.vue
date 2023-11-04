<script setup lang="ts">
import CalendarArea from './components/CalendarArea.vue';
import OperateArea from './components/OperateArea.vue';
const imageUrl = 'https://source.unsplash.com/collection/94734566/1920x1080'
</script>

<template>
    <div id="wallpaper" :style="{backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
        <CalendarArea />
        <OperateArea />
    </div>
</template>

<style scoped>
#wallpaper {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
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
}

body {
    overflow: hidden;
}
</style>
