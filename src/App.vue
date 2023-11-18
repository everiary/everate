<script setup lang="ts">
import CalendarArea from './components/CalendarArea.vue';
import OperateArea from './components/OperateArea.vue';
const imageUrl = 'https://source.unsplash.com/collection/94734566/1920x1080';
const imageUrlDev = '/d.jpg';
</script>

<template>
    <div id="wallpaper"
        :style="{ backgroundImage: `url(${imageUrlDev})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }"
        class="absolute left-0 top-0 h-100vh w-100vw flex of">
        <CalendarArea />
        <OperateArea />
    </div>
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
}

body {
    overflow: hidden;
}
</style>
