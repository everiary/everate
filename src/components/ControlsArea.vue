<template>
    <div class="controlBars absolute flexCenter left-12% w-80% grid-gap-3vw">
        <button @click="settingVisible = !settingVisible" class="settings">
            设置<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="settingVisible">
            <div>
                <ul class="w-full p-0 line-height-5vh">
                    <li v-for="item of config" class="list-none v-mid">
                        <span class="v-mid">{{ item.title + " : " }}</span>
                        <span v-if="item.type == 'switch'" class="relative float-right mt-1vh">
                            <input class="checkboxInput" :id="item.title" type="checkbox" v-model="item.value" /><label
                                class="toggleSwitch" :for="item.title"></label>
                        </span>
                        <span v-else-if="item.type == 'input'" class="relative float-right v-mid">
                            <input :id="item.title" v-model="item.value" type="text" />
                        </span>
                        <span v-else-if="item.type == 'input_number'" class="relative float-right v-mid">
                            <input :id="item.title" v-model.number="item.value" type="number" />
                        </span>
                        <span v-else-if="item.type == 'select'" class="relative float-right v-mid">
                            <select v-model="item.value"
                                class="appearance-none relative text-pink-400 bg-transparent outline-none placeholder-violet-700 rd-0.6vw focus:border-violet-500 block p-2.5">
                                <option v-for="optionalItem of item.choices" :value="optionalItem">
                                    {{ optionalItem }}
                                </option>
                            </select>
                        </span>
                    </li>
                </ul>
                <div class="flex gap-1vw">
                    <button @click="clearStorage">刷新缓存</button>
                    <button @click="exportConfig">导出配置</button>
                    <button @click="importConfig">导入配置</button>
                </div>
            </div>
        </formBlock>

        <button @click="downcountVisible = !downcountVisible">
            倒数日<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="downcountVisible">
            <select v-model="selected"
                class="appearance-none relative text-pink-400 bg-transparent outline-none placeholder-violet-700 rd-0.6vw focus:border-violet-500 block w-40% p-2.5">
                <option v-for="(item, index) of data" :value="index">
                    {{ item.title }}
                </option>
            </select><br />

            <div class="flex flex-col w-25vw gap-1vw">
                <span>事件:
                    <input type="text" v-model="data[selected].title_draft" placeholder="会发生什么?" id="dateInputYear"
                        class="w-70%" /></span>
                <span>年:
                    <input type="number" v-model.number="data[selected].date.year" placeholder="年" id="dateInputYear"
                        class="w-70%" /></span>
                <div class="flex justify-between w-full">
                    <span>月:
                        <input type="number" v-model.number="data[selected].date.month" placeholder="月" id="dateInputMonth"
                            class="w-40%" /></span>
                    <span>日:
                        <input type="number" v-model.number="data[selected].date.day" placeholder="日" id="dateInputDay"
                            class="w-40%" /></span>
                </div>
                <br /><button @click="
                    applyDate(),
                    clearDate(),
                    (downcountVisible = !downcountVisible),
                    (selected = 0)
                    ">
                    应用<span class="arrow"> ›</span>
                </button>
            </div>
        </formBlock>

        <button v-if="config.enable_about.value" @click="aboutVisible = !aboutVisible">
            关于<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="aboutVisible">
            <h1>{{ "Everate" + version }}</h1>
            <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
            <p>还在施工中....</p>
        </formBlock>
    </div>
</template>

<script setup lang="ts">
import formBlock from "@/components/form/index.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import { storeToRefs } from "pinia";

import { useConfigStore } from "@/stores/config";
const { config } = useConfigStore();

import { useDownCountStore } from "@/stores/downcount";
const downCountStore = useDownCountStore();
const { data } = storeToRefs(downCountStore);
const { clearDate, applyDate } = downCountStore;

import { version } from '@/../package.json'

let settingVisible: Ref<boolean> = ref(false);
let aboutVisible: Ref<boolean> = ref(false);
let downcountVisible: Ref<boolean> = ref(false);
let selected: Ref<number> = ref(0);

const clearStorage = () => {
    let confirmation = config.notification_before_operation.value
        ? window.confirm("确认清除缓存吗？\n在非开发情况下慎用。")
        : true;
    if (confirmation) {
        localStorage.clear();
        location.reload();
        return;
    } else return;
};

const exportConfig = () => {
    let object = {
        userConfig: config,
        downcount: data.value,
        time: Date.now(),
    };
    let export_data = JSON.stringify(object, null, 2);
    let uri = "data:text/plain," + encodeURIComponent(export_data);
    let link = document.createElement("a");
    link.href = uri;
    link.download = "Everate.export.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const importConfig = async () => {
    let form = document.createElement("input");
    form.type = "file";
    form.name = "uploadJSON"
    form.id = "uploadJSON";
    form.style.cssText = "display: none"
    document.body.appendChild(form);
    form.click();

    const importJSON = document.getElementById("uploadJSON") || { onchange: null }
    importJSON.onchange = await function () {
        const file = (this as any).files[0]
        if (!!file) {
            const reader = new FileReader()
            reader.readAsText(file, 'utf-8')
            reader.onload = function () {
                try {
                    let i = JSON.parse(this.result as string)
                    console.log(i)
                    document.body.removeChild(form);
                } catch (err) {
                    console.log(err)
                    document.body.removeChild(form);
                }
            }
        }
    }
}
</script>

<style scoped>
#dateInputMonth,
#dateInputDay,
#dateInputYear {
    height: 4vh;
    background-color: #292929;
    border-radius: 2vw;
    border: 0.2vw solid #292929;
    padding: 0 1.2vh;
    outline: none;
    caret-color: rgb(152, 88, 255);
    color: rgb(212, 212, 212);
    transition-duration: 0.2s;
}

#dateInputYear:focus,
#dateInputMonth:focus,
#dateInputDay:focus {
    border: 2px solid rgb(152, 88, 255);
    transition-duration: 0.2s;
}

/* idea from https://github.com/TimTrayler */
button {
    --hover-shadows: 1.3vw 1.3vw 2.8vw #121212, -1.3vw -1.3vw 2.8vw #303030;
    --accent: fuchsia;
    font-weight: bold;
    letter-spacing: 0.0875vw;
    border: none;
    border-radius: 0.9625vw;
    background-color: #212121;
    color: white;
    padding: 1vw 1.3vw;
    transition: box-shadow ease-in-out 0.3s, background-color ease-in-out 0.1s,
        letter-spacing ease-in-out 0.1s, transform ease-in-out 0.1s;
    box-shadow: 1vw 1vw 0.7vw #1c1c1c, -1vw -1vw 0.7vw #262626;
}

button:hover {
    box-shadow: var(--hover-shadows);
}

button:active {
    box-shadow: var(--hover-shadows), var(--accent) 0px 0px 30px 5px;
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
    transition-duration: 0.2s;
}

.toggleSwitch::after {
    content: "";
    position: absolute;
    height: 22px;
    width: 22px;
    left: 0px;
    background-color: rgb(41, 41, 41);
    border-radius: 50%;
    transition-duration: 0.2s;
    border: 2px solid rgb(82, 82, 82);
}

.checkboxInput:checked+.toggleSwitch::after {
    transform: translateX(100%);
    transition-duration: 0.2s;
    border: 2px solid rgb(165, 255, 105);
}

/* Switch background change */
.checkboxInput:checked+.toggleSwitch {
    background-color: rgb(165, 255, 105);
    transition-duration: 0.2s;
}
</style>
