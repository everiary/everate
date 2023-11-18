<template>
    <div class="controlBars absolute left-10% w-80% flex grid-gap-3vw">
        <button @click="settingVisible = !settingVisible" class="settings">Settings<span class="arrow"> ›</span></button>
        <formDev v-model:visible="settingVisible">
            <p>1433223</p>
        </formDev>
        <button @click="aboutVisible = !aboutVisible">About<span class="arrow"> ›</span></button>
        <formDev v-model:visible="aboutVisible">
            <p>1</p>
        </formDev>

    </div>
</template>

<script setup lang="ts">
import formDev from './form/index.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

let settingVisible: Ref<boolean> = ref(false)
let aboutVisible: Ref<boolean> = ref(false)
</script>

<style scoped>
/* idea from https://github.com/TimTrayler */
button {
    --hover-shadows: 1.3vw 1.3vw 2.8vw #121212,
        -1.3vw -1.3vw 2.8vw #303030;
    --accent: fuchsia;
    font-weight: bold;
    letter-spacing: 0.0875vw;
    border: none;
    border-radius: 0.9625vw;
    background-color: #212121;
    color: white;
    padding: 1vw 1.3vw;
    transition: box-shadow ease-in-out 0.3s,
        background-color ease-in-out 0.1s,
        letter-spacing ease-in-out 0.1s,
        transform ease-in-out 0.1s;
    box-shadow: 1vw 1vw 0.7vw #1c1c1c,
        -1vw -1vw 0.7vw #262626;
}

button:hover {
    box-shadow: var(--hover-shadows);
}

button:active {
    box-shadow: var(--hover-shadows),
        var(--accent) 0px 0px 30px 5px;
    background-color: var(--accent);
    transform: scale(0.95);
}</style>