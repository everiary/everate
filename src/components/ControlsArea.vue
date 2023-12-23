<template>
    <div class="controlBars absolute flexCenter left-12% w-80% grid-gap-3vw">
        <button @click="settingVisible = !settingVisible" class="settings">
            设置<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="settingVisible" :big="true">
            <div>
                <h2>功能配置</h2>
                <ul class="w-full p-0" v-for="(conf, key) of config">
                    <h3>{{ configTitle[key] }}</h3>
                    <li v-for="item in config[key]" class="listItem list-none v-mid line-height-6vh rd-1vw">
                        <span class="v-mid">{{ item.title + " : " }}</span>
                        <span v-if="item.type == 'switch'" class="relative float-right mt-1.8vh">
                            <input class="checkboxInput" :id="item.title" type="checkbox" v-model="item.value" /><label
                                class="toggleSwitch" :for="item.title" :id="item.title + 'lable'"></label>
                        </span>
                        <span v-else-if="item.type == 'input'" class="relative float-right v-mid">
                            <input :id="item.title" v-model="item.value" type="text" class="textInput" />
                        </span>
                        <span v-else-if="item.type == 'input_number'" class="relative float-right v-mid">
                            <input :id="item.title" v-model.number="item.value" type="number" class="numberInput" />
                        </span>
                        <span v-else-if="item.type == 'select'" class="relative float-right v-mid">
                            <select :id="item.title + 'select'" v-model="item.value"
                                class="appearance-none relative text-pink-400 bg-transparent outline-none placeholder-violet-700 rd-0.6vw focus:border-violet-500 block p-2.5 mt-0.8vh">
                                <option v-for="optionalItem of item.choices" :value="optionalItem">
                                    {{ optionalItem }}
                                </option>
                            </select>
                        </span>
                    </li>
                </ul>
                <br />
                <div class="flex gap-1vw">
                    <button @click="clearStorage">刷新缓存</button>
                    <button @click="exportConfig">导出配置</button>
                    <button @click="importConfig">导入配置</button>
                    <button @click="fixImport">修复导入</button>
                </div><br /><br />
            </div>
        </formBlock>

        <button @click="downcountVisible = !downcountVisible">
            倒数日<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="downcountVisible" :big="false">
            <select id="downcountSelect" v-model="selected"
                class="appearance-none relative text-pink-400 bg-transparent outline-none placeholder-violet-700 rd-0.6vw focus:border-violet-500 block w-40% p-2.5">
                <option v-for="(item, index) of downcount" :value="index">
                    {{ item.title }}
                </option>
            </select><br />

            <div class="flex flex-col w-25vw gap-1vw">
                <span>事件:
                    <input type="text" v-model="downcount[selected].title_draft"
                        :placeholder="'除了' + downcount[selected].title + '还会发生什么?'" id="dateInputTitle"
                        class="w-70%" /></span>
                <span>年:
                    <input type="number" v-model.number="downcount[selected].date.year" placeholder="年" id="dateInputYear"
                        class="w-70%" /></span>
                <div class="flex justify-between w-full">
                    <span>月:
                        <input type="number" v-model.number="downcount[selected].date.month" placeholder="月"
                            id="dateInputMonth" class="w-40%" /></span>
                    <span>日:
                        <input type="number" v-model.number="downcount[selected].date.day" placeholder="日" id="dateInputDay"
                            class="w-40%" /></span>
                </div>
                <br /><button @click="
                    applyDate(),
                    clearDate(),
                    downcountVisible = !downcountVisible,
                    selected = 0
                    ">
                    应用<span class="arrow"> ›</span>
                </button>
            </div>
        </formBlock>

        <button v-if="config.layout.enable_about.value" @click="aboutVisible = !aboutVisible">
            关于<span class="arrow"> ›</span>
        </button>
        <formBlock v-model:visible="aboutVisible" :big="true">
            <h1>{{ "Everate" + version }}</h1>
            <span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次</span>
            <p>👏 Hi! 我是 wemsx，这个网站的开发者。这是我首次开发一个完整的
                spa，显然会有许多不足。如果你发现了什么值得改进的地方，欢迎通过你能使用的任何渠道联系我。如果你觉得这个启动页还不错，也希望你能把它分享给更多人。</p>
            <p>
                本项目也使用了一些来自社区的工具：
            <ul class="list-none p-0">
                <li>星空背景: <a href="https://github.com/sun0225SUN/home">@sun0225SUN</a></li>
                <li>Bing 壁纸 api: <a href="https://api.paugram.com/help/bing">保罗</a></li>
                <li>很多样式: <a href="https://uiverse.io/">uiverse</a></li>
                <li>Vite + Vue + Pinia + UnoCSS</li>
                <li></li>
            </ul>
            </p>
            <p>以下是我的出没的地方。如果你有二次开发的需要，希望你能保留下面的段落。</p>
            <a href="https://github.com/wemsx"> 个人 Github @wemsx </a><br />
            <a href="https://github.com/everiary/everate"> 项目 Github @everiary/everate </a><br />
            <a href="https://space.bilibili.com/628990477"> 我的 B 站空间 </a>
            <p>还在装修中...</p>
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
const { downcount } = storeToRefs(downCountStore);
const { clearDate, applyDate } = downCountStore;

import { version } from '@/../package.json'

let settingVisible: Ref<boolean> = ref(false);
let aboutVisible: Ref<boolean> = ref(false);
let downcountVisible: Ref<boolean> = ref(false);
let selected: Ref<number> = ref(0);

interface ConfigTitle {
    [propName: string]: string
}
const configTitle: ConfigTitle = {
    user: "用户",
    layout: "页面显示",
    functions: "功能",
    safety: "安全性"
}

const clearStorage = () => {
    let confirmation = config.safety.notification_before_operation.value
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
        downcount: downcount.value,
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

const fixImport = () => {
    for (let i = document.body.childNodes.length; i > 0; i++) {
        if (!document.getElementById("uploadJSON")) { break; }
        let form = <HTMLElement>document.getElementById("uploadJSON");
        document.body.removeChild(form);
    }
}

const importConfig = async () => {
    let form = document.createElement("input");
    form.type = "file";
    form.name = "uploadJSON";
    form.id = "uploadJSON";
    form.style.cssText = "display: none";
    document.body.appendChild(form);
    form.click();

    const importJSON = document.getElementById("uploadJSON") || {
        onchange: null,
    };
    importJSON.onchange = await function () {
        const file = (this as any).files[0];
        if (!!file) {
            const reader = new FileReader();
            reader.readAsText(file, "utf-8");
            reader.onload = function () {
                try {
                    let i = JSON.parse(this.result as string);
                    let confirmation = window.confirm("确认导入配置吗？\n会导致当前配置被覆盖。")
                    if (confirmation) {
                        for (let item in i.userConfig) {
                            for (let k in i.userConfig[item]) {
                                config[item][k].value = i.userConfig[item][k].value;
                            }
                        }
                        downcount.value = i.downcount;
                    }
                    document.body.removeChild(form);
                    location.reload();
                } catch (err) {
                    console.log(err);
                    document.body.removeChild(form);
                }
            };
        }
    };
};
</script>

<style scoped>
.listItem {
    background-color: rgba(0, 0, 0, 0.1);
    font-size: medium;
    padding: 0.5vh 0.8vw
}

#dateInputMonth,
#dateInputDay,
#dateInputYear,
#dateInputTitle,
.textInput,
.numberInput {
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
#dateInputDay:focus,
#dateInputYear:focus {
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
    width: 3.5vw;
    height: 1.9vh;
    background-color: rgb(82, 82, 82);
    border-radius: 1.5vw;
    cursor: pointer;
    transition-duration: 0.2s;
}

.toggleSwitch::after {
    content: "";
    position: absolute;
    height: 2.6vh;
    width: 1.5vw;
    left: 0;
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
