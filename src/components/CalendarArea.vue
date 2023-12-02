<template>
  <!--<div class="dateBlock font-900 mt-60vh ml-5vw ">
        <div class="topLineNumber flex items-end justify-start">
            <div id="monthNum" class="color-#fff font-size-12vh Yahei -mb-8vh ml-2.75vw">{{ date.getDate() }}</div>
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
    </div>-->
  <div class="dateBlock flex align-center mt-70vh ml-5vw h-20vh">
    <div class="leftBracket bracket"></div>
    <div class="flex flex-col justify-items-center w-8vw">
      <div class="date color-#ffffff font-size-8vh text-center">{{ date.getDate() }}</div>
      <div class="month color-#b7b5b5 font-size-5vh text-center">{{ date.toDateString().split(' ')[1] }}</div>
    </div>
    <div class="rightBracket bracket"></div>
  </div>
</template>

<script setup lang="ts">
//import { computed } from 'vue'
const date = new Date()
</script>

<style scoped>
.date, .month {
  height: 10vh;
  border-color: #e6e6e6;
  border-style: solid;
  border-left-width: 0;
  border-right-width: 0;
}
.date {
  border-bottom-width: 0.5vh;
  border-top-width: 0;
}

.month {
  border-bottom-width: 0;
  border-top-width: 0.5vh;
}

.bracket {
  width: 3vw;
  border-style: solid;
  border-width: 0.5vw;
  border-color: #e6e6e6;
}

.leftBracket {
  border-right-width: 0;
  border-radius: 0.2vw;
}
.rightBracket {
  border-left-width: 0;
  border-radius: 0.2vw;
}

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