<template>
    <div class="operate">
        <div class="visible">
            <div class="avatar">111</div>
            <div class="whito">111</div>
            <div class="downcount"><DowncountArea /></div>
        </div>
    </div>
</template>

<script setup>
import DowncountArea from "./DowncountArea.vue";
</script>

<style scoped>
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
.visible{
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.avatar {
    width: 100%;
    height: 30vh;
}

.whito {
    width: 100%;
    height: 30vh;
}

.downcount {
    width: 100%;
    height: 40vh;
}
</style>