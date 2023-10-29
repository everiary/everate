<template>
    <div class="operate">
        <div class="visible">
            <div class="avatar">111</div>
            <div class="whito"><HitokotoBlock /></div>
            <div class="downcount"><DowncountArea /></div>
            <div class="controls"><ControlsArea /></div>
        </div>
    </div>
</template>

<script setup>
import DowncountArea from "./DowncountArea.vue";
import HitokotoBlock from "./HitokotoBlock.vue";
import ControlsArea from "./ControlsArea.vue";
</script>

<style scoped>
.operate {
    position: absolute;
    left: 60vw;
    background: #171717;
    background: rgba(23, 23, 23, 0.9);
    width: 40vw;
    height: 100vh;
    border-radius: 75px 0px 0px 75px;
    -moz-border-radius: 75px 0px 0px 75px;
    -webkit-border-radius: 75px 0px 0px 75px;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
}
.visible{
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.avatar {
    width: 100%;
    height: 30vh;
}

.whito {
    position: relative;
    width: 100%;
    height: 30vh;
}

.downcount {
    position: relative;
    width: 100%;
    height: 30vh;
}
.controls {
    position: relative;
    width: 100%;
    height: 10vh;
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