<template>
    <Teleport to="#app">
        <div class="formMain fixed left-0 top-0 w-100vw h-100vh flexCenter " v-show="visible">
            <div class="formClass fixed left-0 top-0 w-100vw h-100vh flexCenter mask -z-1"
                @click="$emit('update:visible', false)"></div>
            <div class="formFramework">
                <!--<div class="formHeader items-end h-10vh">
                    <span id="formTitle" class="absolute p-1vw left-0 font-size-3vw Yahei">{{ title }}</span>
                    <span id="crossBtn" class="absolute p-1vw right-0"><button @click="$emit('update:visible', false)" style="padding: 0.5vw;font-size: 1vw;">x</button></span>
                </div>-->
                <div class="formBody">
                    <slot />
                </div>
                <div class="formFooter flex items-center justify-end h-10vh">
                    <button style="margin-right: 2vw;" @click="$emit('update:visible', false)">cancel</button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
import { ref } from 'vue'

defineProps(['visible'])
defineEmits(['update:visible'])

const title = ref('wemsx')

</script>

<style scoped>
.formFramework {
    width: 400px;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>