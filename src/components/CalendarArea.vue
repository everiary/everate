<template>
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
const date = new Date()
</script>

<style scoped>
.date,
.month {
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
  animation: fadeInRight 1.2s both;
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