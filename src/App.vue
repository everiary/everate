<script setup lang="ts">
import CalendarArea from './components/CalendarArea.vue';
import OperateArea from './components/OperateArea.vue';
</script>

<template>
    <CalendarArea />

    <transition name="changeShow" appear>
        <OperateArea />
    </transition>
</template>

<style scoped>
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>

<style>
#app {
    background-image: url("/d.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100vh;
    width: 100vw;
    display: flex;
}

body {
    overflow: hidden;
}
</style>
