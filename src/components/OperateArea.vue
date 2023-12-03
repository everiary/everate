<template>
    <div class="operate">
        <div class="visible w-40vw h-100vh flex flex-col">
            <div class="avatar flexCenter w-full h-30vh"><AvatarBlock /></div>
            <div class="whito w-full h-25vh"><HitokotoBlock /></div>
            <div class="downcount relative w-full h-35vh"><DowncountArea /></div>
            <div class="controls relative w-full h-10vh"><ControlsArea /></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import DowncountArea from "./DowncountArea.vue";
import AvatarBlock from "./AvatarBlock.vue"
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
    border-radius: 4vw 0px 0px 4vw;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
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