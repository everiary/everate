<template>
    <div class="controlBars absolute flexCenter left-12% w-80% grid-gap-3vw">
        <button @click="settingVisible = !settingVisible" class="settings">Settings<span class="arrow"> ›</span></button>
        <formBlock v-model:visible="settingVisible">
            <div class="overflow-hidden">
            <ul class="w-full p-0">
                <li v-for="item of data" class="list-none">{{ item.title + ' : ' + item.is }}
                    <span class="relative float-right">
                        <input class="checkboxInput" :id="item.title" type="checkbox" v-model="item.is" /><label class="toggleSwitch" :for="item.title"></label>
                    </span>
                </li>
            </ul>
            </div>
        </formBlock>
        <button @click="aboutVisible = !aboutVisible">About<span class="arrow"> ›</span></button>
        <formBlock v-model:visible="aboutVisible">
            <p>1</p>
        </formBlock>

    </div>
</template>

<script setup lang="ts">
import formBlock from './form/index.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

let settingVisible: Ref<boolean> = ref(false)
let aboutVisible: Ref<boolean> = ref(false)
let data = ref([
    { title: '用户名', value: 'wemsx', is: false },
    { title: '头像地址', value: 'https://cravatar.cn/avatar/95d35c34b1302443c6b94a2aa74a2065', is: false }
])
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
}

/* To hide the checkbox */
.checkboxInput {
    display: none;
}

.toggleSwitch {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 17px;
    background-color: rgb(82, 82, 82);
    border-radius: 20px;
    cursor: pointer;
    transition-duration: .2s;
}

.toggleSwitch::after {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 0px;
    background-color: rgb(41, 41, 41);
    border-radius: 50%;
    transition-duration: .2s;
    border: 2px solid rgb(82, 82, 82);
}

.checkboxInput:checked+.toggleSwitch::after {
    transform: translateX(100%);
    transition-duration: .2s;
    border: 2px solid rgb(165, 255, 105);
}

/* Switch background change */
.checkboxInput:checked+.toggleSwitch {
    background-color: rgb(165, 255, 105);
    transition-duration: .2s;
}
</style>