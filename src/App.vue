<script setup lang="ts">
import { computed } from 'vue'
const d = 21
const date = computed(() => {
    return d >= 10 ? d.toString() : '0' + d.toString()
})

const month = 'Oct';
</script>

<template>
    <div class="bgi">
        <div class="dateBlock">
            <div class="topLineNumber">
                <div id="monthNum">{{ date }}</div>
                <div class="topLine"></div>
            </div>
            <div class="lines">
                <span class="leftLine"></span>
                <span class="bottomLine">
                    <div id="slash">/</div>
                    <div id="monthBlock">{{ month }}</div>
                </span>
                <span class="rightLine"></span>
            </div>
        </div>
    </div>
    <transition name="changeShow" appear>
        <div class="operate"></div>
    </transition>
</template>

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
    color: #989696;
    font-size: 5vh;
    margin-left: 6.5vh;
    margin-top: -2.5vh;
}

.operate {
    background: #171717;
    background: rgba(23, 23, 23, 0.9);
    width: 100vw;
    margin-left: 50vw;
    height: 100vh;
    border-radius: 75px 0px 0px 75px;
    -moz-border-radius: 75px 0px 0px 75px;
    -webkit-border-radius: 75px 0px 0px 75px;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
}

h1 {
    color: #fff;
    mix-blend-mode: difference;
}

.bgi {
    width: 60vw;
    height: 100vh;
}

.dateBlock {
    font-weight: 900;
    margin-top: 60vh;
    margin-left: 5vw;
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
    background: url("/d.jpg") no-repeat cover;
    /*background-image: url("/d.jpg");
    background-repeat: no-repeat;
    background-size: cover;*/
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
}
</style>
