<template>
    <Teleport to="#app">
        <div class="formClass fixed left-0 top-0 w-100vw h-100vh flexCenter mask" v-show="visible" >
            <div class="formFramework fixed w-40vw h-60vh rd-0.8vw flex flex-col justify-center">
                <div class="formHeader items-end h-10vh">
                    <span id="formTitle" class="absolute p-1vw left-0 font-size-3vw Yahei">{{ title }}</span>
                    <span id="crossBtn" class="absolute p-1vw right-0"><button @click="$emit('update:visible', false)" style="padding: 0.5vw;font-size: 1vw;">x</button></span>
                </div>
                <div class="formBody h-40vh">
                    <slot></slot>
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
    background: rgba(250,250,250,0.8);
}
</style>