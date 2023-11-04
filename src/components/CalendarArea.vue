<template>
    <div class="dateBlock">
        <div class="topLineNumber">
            <div id="monthNum">{{ date.getDate() }}</div>
            <div class="topLine"></div>
        </div>
        <div class="lines">
            <span class="leftLine"></span>
            <span class="bottomLine">
                <div id="slash">/</div>
                <div id="monthBlock">{{ date.toDateString().split(' ')[1] }}</div>
            </span>
            <span class="rightLine"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
//import { computed } from 'vue'

const date = new Date()
</script>

<style scoped>
.topLine {
    width: 10.8vh;
    height: 0.8vh;
    background: #fff no-repeat;
}

.bottomLine {
    width: 17vh;
    height: 0.8vh;
    background: #fff no-repeat;
}

.leftLine {
    width: 0.8vh;
    height: 13vh;
    background: #fff no-repeat;
}

.rightLine {
    width: 0.8vh;
    height: 20vh;
    background: #fff no-repeat;
}

#monthNum {
    color: #fff;
    font-size: 12vh;
    font-family: "Microsoft Yahei";
    margin-bottom: -8vh;
    margin-left: -2vh;
}

#slash {
    font-family: "Microsoft Yahei";
    font-weight: 80;
    color: #fff;
    font-size: 10vh;
    margin-left: 5vh;
    margin-top: -18vh;
}

#monthBlock {
    color: #b7b5b5;
    font-size: 5vh;
    margin-left: 6.5vh;
    margin-top: -2.5vh;
}

.dateBlock {
    font-weight: 900;
    margin-top: 60vh;
    margin-left: 5vw;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-name: fadeInRight;
}

.topLineNumber {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.lines {
    margin-left: 5vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
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