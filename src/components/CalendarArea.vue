<template>
    <div class="dateBlock font-900 mt-60vh ml-5vw ">
        <div class="topLineNumber flex items-end justify-start">
            <div id="monthNum" class="color-#fff font-size-12vh Yahei -mb-8vh -ml-2vh">{{ date.getDate() }}</div>
            <div class="topLine w-10.8vh h-0.8vh white"></div>
        </div>
        <div class="lines flex items-end justify-start ml-5vh">
            <span class="leftLine w-0.8vh h-13vh white"></span>
            <span class="bottomLine w-17vh h-0.8vh white">
                <div id="slash" class="Yahei font-80 color-#fff font-size-10vh ml-5vh -mt-18vh">/</div>
                <div id="monthBlock" class="color-#b7b5b5 font-size-5vh ml-6.5vh -mt-2.5vh">{{ date.toDateString().split(' ')[1] }}</div>
            </span>
            <span class="rightLine w-0.8vh h-20vh white"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
//import { computed } from 'vue'

const date = new Date()
</script>

<style scoped>
.dateBlock {
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-name: fadeInRight;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}
</style>