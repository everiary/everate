<template>
    <div class="controlBars">
        <button @click="formVisibilityDev = !formVisibilityDev" class="settings">Settings<span class="arrow"> ›</span></button>
        <formDev></formDev>
        <button @click="b">About<span class="arrow"> ›</span></button>
    </div>
</template>

<script setup lang="ts">
import formDev from './form/index.vue'
import { ref, provide } from 'vue'
import type { Ref } from 'vue'

let formVisibilityDev: Ref<boolean> = ref(false)
provide('isOpen',formVisibilityDev)


const b = () => { alert('2') }
</script>
<style scoped>
.controlBars {
    position: absolute;
    left: 10%;
    width: 80%;
    display: flex;
    grid-column-gap: 3vw;
}

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
}
</style>